const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 12;

function addAnswer(answerText, qIdx){
    var a = document.querySelector('.answerBox'); //변수a에 .answerBox를 담음.
    var answer = document.createElement('button'); //button을 만드는 변수 answer
    answer.classList.add('answerList'); //answer에 'answerList'클래스를 부여함.
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer); //변수a 즉, .answerBox라는 div태그내에 자식으로 answer(button을 만드는 변수)를 넣는다.
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll(".answerList");
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = 'fadeOut 0.5s';
            children[i].style.animation = 'fadeOut 0.5s';
        }
        setTimeout(()=>{
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext(qIdx) {
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){ //i라는 변수를 만든후 qnaList[qIdx].a의 수만큼 반복하는 반복문을 뜻함.
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx + 1) + '%';
}

function  begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    //위의 태그는 chrome에서 Webkit을 사용하기에 WebkitAnimation을 추가한것임.
    main.style.animation = "fadeOut 1s";
    //@keyframe와 같은 css사용을 위해선 style.animation을 사용함 뒤는 해당 애니메이션이 동작하는 시간을 뜻함.
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        //위의 태그는 chrome에서 Webkit을 사용하기에 WebkitAnimation을 추가한것임.
        qna.style.animation = "fadeIn 1s";
        //@keyframe와 같은 css사용을 위해선 style.animation을 사용함 뒤는 해당 애니메이션이 동작하는 시간을 뜻함.
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}
// => main.style.animation에 fadeOut을 1초동안 애니메이션을 진행하며,
// Timeout함수로 450ms(0.45초)후에 fadeIn을 1초동안 애니메이션을 진행하며,
// 위의 Timeout함수를 실행하는 0.45초가 지나고 0.45초후 main.style.display를 "none"으로 바꾸고, qna.style.display를 "block"으로 변경하라.
