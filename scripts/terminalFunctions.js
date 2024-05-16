function terminalWrite(txt){
    terminalBody.innerHTML += txt + '<br>';
}

function clearTerminal() {
    terminalBody.innerHTML = '';
}

function neofetch() {
    terminalBody.innerHTML += `
    <pre>
    ⠀⠀⠀⠀⠀⠀⠀⢠⣤⣀⠀⠀⠀⠀⢀⣀⣤⣤⠀⠀⠀⠀⠀⠀⠀       root@browser      
    ⠀⠀⢀⢀⠀⠀⠀⢸⡿⠛⠛⠛⠛⠛⠉⠛⢿⣿⠀⠀⠀⠀⠀⠀⠀      -----------
    ⠀⠠⣿⣿⣿⣄⠀⣼⠀⠀⠀⢂⣀⣀⡀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀      OS: Haziq OS      
    ⠀⢸⣿⣿⣿⣿⡷⠋⠈⠀⠀⠀⠀⠀⠀⠀⠈⠘⠣⡀⠀⠀⠀⠀⠀      Host: Mir Mohammad Haziq Bin Junaid      
    ⠀⠈⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⣦.⡀⠀⠀              
    ⠀⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣦⠀                
    ⠀⠀⣸⣿⣿⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇
    ⠀⣤⡟⠛⠋⠉⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠈⠋⠈⢿⣿⡿
    ⢀⡉⠀⠀⣀⣤⣄⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣤⣤⣄⠀⠀⣴⡄
    ⠘⢇⠀⠰⣿⣿⢟⢼⣿⣿⣿⣿⣿⣿⣿⣿⡿⢜⠿⠿⠿⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    </pre><br>
    `
}

function ligma() {
    terminalBody.innerHTML += `You will now be ligma'd<br>`
    for (let i = 0; i < 10; i++) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }
}

function help(){
    let l = []
    Object.keys(commands).forEach((command) => {
        l.push(commands[command].description)
    });
    terminalBody.innerHTML += `
    List of Commands:<br>
    ${l.join('<br>')}
    <br>
    `
}

function ls(){
    let fileArray = storage.find(x => x.dirpath === currentDir).files.map(x => x.filename)
    console.log(fileArray)
    let lsDiv = document.createElement('div')
    lsDiv.className = 'lsDiv'
    for(i of fileArray){
        let fileDiv = document.createElement('div')
        fileDiv.style.marginRight = '25px'
        fileDiv.innerHTML = i
        lsDiv.appendChild(fileDiv)
    }
    terminalBody.appendChild(lsDiv)
}