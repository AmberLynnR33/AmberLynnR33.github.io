function handleResize() {
    const container = document.getElementsByClassName('stackable_container');
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
    } else {
        for (var i=0; i<container.length; i++){
            container[i].classList.remove('stacked_layout');
        }
        if(navi_2){
            navi_2.className = 'navbar_style';
        }
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);