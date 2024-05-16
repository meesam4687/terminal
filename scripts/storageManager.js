if (localStorage.getItem('dirs') === null) {
    let dirs = [{ 'dirname': '~', 'dirpath': '/', 'files': [{ 'filename': 'README.txt', 'fileContent': `Welcome to the browser terminal!\nThis is a simple terminal emulator that runs in your browser.\nIt is not a real terminal, so it doesn't have access to your system's files or commands.\nIt is just a fun project that I made.\nYou can type commands in the terminal and see the output.\nType \'help\' to get a list of commands` }] }];
    localStorage.setItem('dirs', JSON.stringify(dirs));
}
let storage = JSON.parse(localStorage.getItem('dirs'));