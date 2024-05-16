if(localStorage.getItem('dirs') === null){
    let dirs = [{'dirname': '~', 'dirpath': '/', 'files': [{'filename': 'README.txt', 'fileContent': `Test File`}, {'filename': 'TXT2.txt', 'fileContent': `Test File 2`}]}];
    localStorage.setItem('dirs', JSON.stringify(dirs));
}
let storage = JSON.parse(localStorage.getItem('dirs'));