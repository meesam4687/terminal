let windowNavBar = document.getElementById('navBar');

windowNavBar.addEventListener('mousedown', function(e) {
    console.log("click")
    let window = windowNavBar.parentElement;
    let windowOffset = {
        x: window.offsetLeft - e.clientX,
        y: window.offsetTop - e.clientY
    };

    function onMouseMove(e) {
        window.style.left = `${e.clientX + windowOffset.x}px`;
        window.style.top = `${e.clientY + windowOffset.y}px`;
    }

    function onMouseUp() {
        windowNavBar.classList.remove('draggable');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
})