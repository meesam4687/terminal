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
    let folderArray = storage.find(x => x.dirpath === currentDir).subDir
    let lsDiv = document.createElement('div')
    lsDiv.className = 'lsDiv'
    for (i of fileArray) {
        let fileDiv = document.createElement('div')
        fileDiv.style.marginRight = '25px'
        fileDiv.innerHTML = i
        lsDiv.appendChild(fileDiv)
    }
    let folderLSDiv = document.createElement('div')
    folderLSDiv.className = 'folderLSDiv'
    for (i of folderArray) {
        let folderDiv = document.createElement('div')
        folderDiv.style.marginRight = '25px'
        folderDiv.style.color = '#aae5ff'
        folderDiv.innerHTML = i
        folderLSDiv.appendChild(folderDiv)
    }
    lsDiv.appendChild(folderLSDiv)
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
        fileContent = storage.find(x => x.dirpath === currentDir).files.find(x => x.filename === file).fileContent.replace(/\n/g, '<br>')
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
    let folderIndex;
    if (fileIndex === -1) {
        folderIndex = storage.find(x => x.dirpath === currentDir).subDir.findIndex(x => x === filename)
        if (folderIndex === -1) {
            terminalWrite('No such File or Folder Found')
            return;
        }
    }
    if(fileIndex === -1){
        storage.find(x => x.dirpath === currentDir).subDir.splice(folderIndex, 1)
        storage.splice(storage.findIndex(x => x.dirpath === currentDir + '/' + filename), 1)
        localStorage.setItem('dirs', JSON.stringify(storage))
        return;
    }
    storage.find(x => x.dirpath === currentDir).files.splice(fileIndex, 1)
    localStorage.setItem('dirs', JSON.stringify(storage))
}

function arch(){
    terminalWrite(navigator.userAgent)
}

function mkdir(raw){
    let dirname = raw.split(' ')[1]
    if (!dirname) {
        terminalWrite('Usage: mkdir [dirname]')
        return;
    }
    createDir(dirname)
}

function cd(raw){
    let dir = raw.split(' ')[1]
    if (!dir) {
        terminalWrite('Usage: cd [dirname]')
        return;
    }
    if(dir === '..'){
        if(currentDir === '/'){
            return;
        }
        let dirArray = currentDir.split('/')
        dirArray.pop()
        currentDir = dirArray.join('/')
        return;
    }
    let oldDir = currentDir
    currentDir = currentDir + '/' + dir
    let newDir = storage.find(x => x.dirpath === currentDir)
    if (!newDir) {
        terminalWrite('No such directory found')
        currentDir = oldDir
        return;
    }
}
function reset(){
    terminalWrite('Resetting terminal...')
    clearData()
}

function source(){
    terminalWrite('Made by meesam4687<br>Opening Source Code...')
    window.open('https://github.com/meesam4687/terminal')
}