import React, { Component } from 'react'

import AppHeader from '../app-header/'
import SearchPanel from '../search-panel/'
import ItemStatusFilter from '../item-status-filter/';
import TodoList from '../todo-list/'
import ItemAddForm from '../item-add-form/'


import './app.css'


export default class app extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffe'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch'),
      ],
      term: '',
      filter: ''  // active all done
    }
  }

  maxId = 100

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idTodo = todoData.findIndex((el) => el.id === id)

      const newArray = [
        ...todoData.slice(0, idTodo),
        ...todoData.slice(idTodo + 1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  AddItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idTodo = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idTodo]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [
      ...arr.slice(0, idTodo),
      newItem,
      ...arr.slice(idTodo + 1)
    ]

  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }
  onSearch = (term) => {
    this.setState({ term })
  }
  search = (items, term) => {
    return items.filter((item) => {
      if (term.length === 0) {
        return items
      }
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }
  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render() {

    const { todoData, term, filter } = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter filter={filter}
          onFilterChange={this.onFilterChange}/>
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm
          onItemAdded={this.AddItem} />
      </div>
    )
  }
}


// { isLoggedIn ? welcomBox : loginBox } Первое - если да, Второе - если нет 





