const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');


navBtn.addEventListener('click', function(){
    open_func();
});

function open_func() {
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtnImg.src = "img/close.png";
        } else {
            navBtnImg.src = 'img/burger.png';
        }
    }
}

AOS.init();