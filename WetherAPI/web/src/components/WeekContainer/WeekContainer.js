import React from 'react';
import Card from '../Card/Card';

  const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

class WeekContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      days: []
    }
  }


  componentDidMount = () => {
    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const day = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
        this.setState({ days: day })
      })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index} />)
  }

  render() {
    return (
      <div>
        <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
        <h5 className="display-4 text-muted">Киев</h5>
        <div className="row justify-content-center">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer
