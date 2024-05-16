function terminalWrite(txt) {
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

function help() {
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

function ls() {
    let fileArray = storage.find(x => x.dirpath === currentDir).files.map(x => x.filename)
    console.log(fileArray)
    let lsDiv = document.createElement('div')
    lsDiv.className = 'lsDiv'
    for (i of fileArray) {
        let fileDiv = document.createElement('div')
        fileDiv.style.marginRight = '25px'
        fileDiv.innerHTML = i
        lsDiv.appendChild(fileDiv)
    }
    terminalBody.appendChild(lsDiv)
}

function cat(raw) {
    let file = raw.split(' ')[1]
    if (!file) {
        terminalWrite('Usage: cat [filename]')
        return;
    }
    let fileContent;
    try {
        fileContent = storage.find(x => x.dirpath === currentDir).files.find(x => x.filename === file).fileContent
    }
    catch {
        terminalWrite('File not found')
        return;
    }
    terminalWrite(fileContent)
}

function touch(raw){
    let filename = raw.split(' ')[1]
    if (!filename) {
        terminalWrite('Usage: touch [filename]')
        return;
    }
    let file = {
        filename: filename,
        fileContent: ''
    }
    storage.find(x => x.dirpath === currentDir).files.push(file)
    localStorage.setItem('dirs', JSON.stringify(storage))
}

function rm(raw){
    let filename = raw.split(' ')[1]
    if (!filename) {
        terminalWrite('Usage: rm [filename]')
        return;
    }
    let fileIndex = storage.find(x => x.dirpath === currentDir).files.findIndex(x => x.filename === filename)
    if (fileIndex === -1) {
        terminalWrite('File not found')
        return;
    }
    storage.find(x => x.dirpath === currentDir).files.splice(fileIndex, 1)
    localStorage.setItem('dirs', JSON.stringify(storage))
}