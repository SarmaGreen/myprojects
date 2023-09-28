window.onscroll = function showHeader(){
        let header = document.querySelector('.header');
        if(window.scrollY > 200){
                header.classList.add('header_fixed');
        }else{
                header.classList.remove('header_fixed');
        }
}