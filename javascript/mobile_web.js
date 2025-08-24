function handleResize() {
    const container = document.getElementsByClassName('stackable_container');
    var dividers = document.getElementsByClassName('subtitle_text')
    var navi = document.querySelector('.navbar_style');
    var navi_2 = document.querySelector('.unstacked_navbar')
    const breakpoint = 768;

    if (window.innerWidth <= breakpoint) {
        for (var i=0; i<container.length; i++){
            container[i].classList.add('stacked_layout');
        }
        if (navi) {
            navi.className = 'unstacked_navbar';
        }
        for (var i=0; i<dividers.length; i++){
            dividers[i].classList.remove('right_divider');
            dividers[i].classList.add('underline_text');
        }
    } else {
        for (var i=0; i<container.length; i++){
            container[i].classList.remove('stacked_layout');
        }
        if(navi_2){
            navi_2.className = 'navbar_style';
        }
        for (var i=0; i<dividers.length; i++){
            dividers[i].classList.add('right_divider');
            dividers[i].classList.remove('underline_text');
        }
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);