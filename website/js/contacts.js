const oneInput= document.querySelector('#inputOne')
const error = document.querySelector("#errorOne")
oneInput.addEventListener("focus", function(){
    error.style = 'display:block;'
})
oneInput.addEventListener("blur", function(){
    error.style = 'display:none;'
})
/////////////////////////////////////////////////////////
const TwoInput= document.querySelector('#inputTwo')    //
const errorTwo = document.querySelector("#errorTwo")   //
TwoInput.addEventListener("focus", function(){         //
    errorTwo.style = 'display:block;'                  //
})                                                     //
                                                       //
TwoInput.addEventListener("blur", function(){          //
    errorTwo.style = 'display:none;'                   //
})                                                     //
/////////////////////////////////////////////////////////
const inputFour= document.querySelector('#inputFour')
const errorThree = document.querySelector("#errorThree")
inputFour.addEventListener("focus", function(){
    errorThree.style = 'display:block;'
})
inputFour.addEventListener("blur", function(){
    errorThree.style = 'display:none;'
})

var user = []
let buttonSend = document.querySelector(".btn-send")
buttonSend.addEventListener("click", function(){
    const valOne = document.querySelector('#inputOne').value
    const valTwo = document.querySelector('#inputTwo').value
    const valThree = document.querySelector('#inputFour').value
    user.push('Имя: ' + valOne)
    user.push('Почта: ' + valTwo)
    user.push('Сообщение: ' + valThree)
    console.log(user)
    
    oneInput.value = ''
    TwoInput.value = ''
    inputFour.value = ''
})

// const con = confirm("Согласны ли вы на проверку?")
// if (con == true) {
//     alert("Удачного визита!")
//     const agent = navigator.userAgent
//     const platform = navigator.platform
//     user.push('Информация: ' + agent)
//     user.push('Платформа: ' + platform)
//     console.log(user)
// } 





let addStyle = document.createElement('style')
addStyle.innerHTML = '* div:not(.addSearch) {opacity: .4;}'
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