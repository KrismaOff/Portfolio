class Chat extends HTMLElement {
    connectedCallback() {
        //alert("ВНИМАНИЕ - Ранняя версия, бот может отвечать тольк на один вопрос, потом ломается, я знаю почему, но не знаю как решать, ждите...")
        this.innerHTML = `
        <div class="mainBlockChat container-fluid">

        <div class="messageBlock">
            <div class="img "><img class = "imgPic" src="https://icon-library.com/images/robot-icon-free/robot-icon-free-0.jpg" width="45px"
                height="45px" alt="pic"></div>
                <div class="text">
                    <p>Привет! На что я тебе отвечу? <br> 
                    <br>   
                    - Привет<br>
                    - Как дела? <br> 
                    - Что делаешь? <br>
                    - Кто твой создатель? <br>
                    - Пока <br>
                    <br>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Жду сообщений :)
                    </p>
                </div>
            </div> 
        <input id="in" placeholder="Type your message... " type="text">
    </div>
        `
        // let mess = document.getElementById('in')
        // mess.addEventListener("keydown", this.change)
        // mess.removeEventListener("keydown", this.change)
        let body = document.querySelector('body')
        body.addEventListener("keydown", this.change)
    }

    change(e) {
        let block = document.querySelector('.mainBlockChat')
        let messV = document.getElementById('in').value

        if (e.keyCode == 13) {
            let ans = "Произшла ошибка, я не знаю что ответить...";

            switch (messV.toLowerCase()) {
                case "привет": ans = "Привет!"; break;
                case "как дела?": ans = "все хорошо!"; break;
                case "что делаешь?": ans = "существую и общаюсь с вами (Ха-Ха)!"; break;
                case "кто твой создатель?": ans = "Я не верю в бога, я считаю что я произошел от калькулятора. Как можно верить в то, что нас всех создало какое-то существо?!"; break;
                case "пока": ans = "до скорой встречи, как бы вас не звали!"; break;
                default : ans = "Что-то не понятное для меня, не знаю что делать..."
            }

            block.innerHTML += `
                <div class="messageBlock UserMess">
                    <div class="img UserImg"><img class="imgPic" src="https://w7.pngwing.com/pngs/714/248/png-transparent-computer-icons-user-share-icon-symbol-miscellaneous-face-monochrome.png" width="45px"
                        height="45px" alt="pic"></div>
                        <div class="text UserText">
                            <p>${messV}</p>
                        </div>
                    </div>
                </div>

                <div class="messageBlock botMess">
                    <div class="img "><img class="imgPic" src="https://icon-library.com/images/robot-icon-free/robot-icon-free-0.jpg" width="45px"
                        height="45px" alt="pic"></div>
                        <div class="text">
                            <p>${ans}</p>
                        </div>
                    </div>
                </div>
                `
        }
    }
}
customElements.define("chat-el", Chat);







