let addBlock = document.createElement('div')
addBlock.className = 'card'
addBlock.innerHTML = '<img src="https://itproger.com/img/news/1534765244.jpg" class="card-img-top"><div class="card-body"><h5 class="card-title">Сравнение движков: Unreal Engine 4 против Unity 5</h5><p class="card-text">Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!</p><a href="#" class="btn btn-warning">Читать далее</a>'

let addBlockTwo = document.createElement('div')
addBlockTwo.className = 'card'
addBlockTwo.innerHTML = '<img src="https://itproger.com/img/news/1534137690.jpg" class="card-img-top"><div class="card-body"><h5 class="card-title">7 девушек айтишниц из фильмов и сериалов</h5><p class="card-text">Много ли вы знаете фильмов и сериалов, где главные персонажы это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.</p><a href="#" class="btn btn-warning">Читать далее</a></div>  '
let addBlockThree = document.createElement('div')
addBlockThree.className = 'card'
addBlockThree.innerHTML = '<img src="https://itproger.com/img/news/1532948245.jpg" class="card-img-top"><div class="card-body"><h5 class="card-title">11 полезных инструментов для веб-разработчика</h5><p class="card-text">Разработчики постоянно пытаются сделать свою жизнь проще или расширить собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.</p><a href="#" class="btn btn-warning">Читать далее</a></div>'

let addBlockfour = document.createElement('div')
addBlockfour.className = 'card'
addBlockfour.innerHTML = '<img src="https://itproger.com/img/news/1534139040.jpg" class="card-img-top"><div class="card-body"><h5 class="card-title">Что такое Deep Learning? Как работает глубокое обучение?</h5><p class="card-text">Как работает глубокое обучение и что оно из себя представляет? В ходе статьи мы расскажем про Deep Learning и разберемся с его ключевыми понятиями.</p><a href="#" class="btn btn-warning">Читать далее</a></div>'

let addStyle = document.createElement('style')
addStyle.innerHTML = '* div:not(.addSearch) {opacity: .4;}'



const list = []
list.push(addBlock)
list.push(addBlockTwo)
list.push(addBlockThree)
list.push(addBlockfour)



const elem = document.querySelector(".elem")
const btn = document.querySelector(".btnOpen")

btn.addEventListener("click", function(){  
    for (let i = 0; i < list.length/2; i++) {
        elem.append(list[i])
        list.shift()
        elem.append(list[i])
        list.shift()
    }
    if (list.length == 0) {
        btn.style = 'display: none'
    }
})

const footer = document.querySelector("footer")
const all = document.querySelector("body") 
const search = document.querySelector(".form-control")
const closeSearch = document.querySelector('.closeSearch')
const none = document.querySelector('.addSearch')


search.addEventListener("click",function(){
    all.appendChild(addStyle)
    none.setAttribute('style', 'display:block;')
    footer.style = 'opacity:.4;'    
})
closeSearch.addEventListener("click", function(){
    all.removeChild(addStyle)
    none.setAttribute('style', 'display:none;')
    footer.style = 'opacity:1;'
})



var user = []
const con = confirm("Согласны ли вы на проверку?")
if (con == true) {
    alert("Удачного визита!")
    const agent = navigator.userAgent
    const platform = navigator.platform
    user.push('Информация: ' + agent)
    user.push('Платформа: ' + platform)
    console.log(user)
} 

