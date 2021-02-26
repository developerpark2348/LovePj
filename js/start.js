const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

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
    }, 450);
}
// => main.style.animation에 fadeOut을 1초동안 애니메이션을 진행하며,
// Timeout함수로 450ms(0.45초)후에 fadeIn을 1초동안 애니메이션을 진행하며,
// 위의 Timeout함수를 실행하는 0.45초가 지나고 0.45초후 main.style.display를 "none"으로 바꾸고, qna.style.display를 "block"으로 변경하라.