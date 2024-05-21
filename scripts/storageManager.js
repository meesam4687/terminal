let storageVer = '1.0.0'
if(localStorage.getItem('storageUpdate') !== storageVer){
    localStorage.clear()
    let dirs = [
        {
            'dirname': '~',
            'dirpath': '/',
            'files': [
                {
                    'filename': 'README.txt',
                    'fileContent': `Welcome to the browser terminal!\nThis is a simple terminal emulator that runs in your browser.\nIt is not a real terminal, so it doesn't have access to your system's files or commands.\nIt is just a fun project that I made.\nYou can type commands in the terminal and see the output.\nType \'help\' to get a list of commands` 
                }
            ],
            "subDir": []
        }
    ];
    localStorage.setItem('dirs', JSON.stringify(dirs));
    localStorage.setItem('storageUpdate', storageVer)
}

function clearData(){
    localStorage.clear()
    location.reload()
}

if (localStorage.getItem('dirs') === null ) {
    let dirs = [
        {
            'dirname': '~',
            'dirpath': '/',
            'files': [
                {
                    'filename': 'README.txt',
                    'fileContent': `Welcome to the browser terminal!\nThis is a simple terminal emulator that runs in your browser.\nIt is not a real terminal, so it doesn't have access to your system's files or commands.\nIt is just a fun project that I made.\nYou can type commands in the terminal and see the output.\nType \'help\' to get a list of commands` 
                }
            ],
            "subDir": []
        }
    ];
    localStorage.setItem('dirs', JSON.stringify(dirs));
}
let storage = JSON.parse(localStorage.getItem('dirs'));

function deleteDir(dir){
    let dirIndex = storage.findIndex(x => x.dirpath === dir)
    if (dirIndex === -1) {
        return;
    }
    storage.splice(dirIndex, 1)
    localStorage.setItem('dirs', JSON.stringify(storage))
}
function deleteFile(){
    let fileIndex = storage.find(x => x.dirpath === currentDir).files.findIndex(x => x.filename === currentFile)
    if (fileIndex === -1) {
        return;
    }
    storage.find(x => x.dirpath === currentDir).files.splice(fileIndex, 1)
    localStorage.setItem('dirs', JSON.stringify(storage))
}
function createDir(dir){
    if (!dir) {
        return;
    }
    let newDir = {
        'dirname': dir,
        'dirpath': currentDir + '/' + dir,
        'files': [],
        "subDir": []
    }
    storage.find(x => x.dirpath === currentDir).subDir.push(newDir.dirname)
    storage.push(newDir)
    localStorage.setItem('dirs', JSON.stringify(storage))
}