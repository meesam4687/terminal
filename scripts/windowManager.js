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

function closeWindow(){
    window.close();
}

function maximizeWindow(){
    let window = windowNavBar.parentElement;
    window.style.width = "100vw";
    window.style.height = "100vh";
    window.style.maxWidth = "99vw";
    window.style.maxHeight = "97.5vh";
    window.style.top = "0";
    window.style.left = "0";

}

function minimizeWindow(){
    let window = windowNavBar.parentElement;
    window.style.width = "84%";
    window.style.height = "70%";
    window.style.maxWidth = "900px";
    window.style.maxHeight = "501px";
    window.style.top = "inherit";
    window.style.left = "inherit";
}