let terminalBody = document.getElementById('terminalBody')
let currentDir = '/'
let commands = {
    "clear": {command: clearTerminal, description: "clear - Clears the terminal"},
    "neofetch": {command: neofetch, description: "neofetch - Shows system information"},
    "help": {command: help, description: "help - Shows this screen"},
    "ligma": {command: ligma, description: "ligma - Try it and see (disable browser shields etc for it to work properly)"},
    "ls": {command: ls, description: "ls - List files in current directory"},
    "cat": {command: cat, description: "cat - Show contents of a file"},
    "touch": {command: touch, description: "touch - Create a new file"},
    "rm": {command: rm, description: "rm - Remove a file"},
    "arch": {command: arch, description: "arch - Show the architecture of the system"},
    "mkdir": {command: mkdir, description: "mkdir - Create a new directory"},
    "cd": {command: cd, description: "cd - Change directory"},
    "reset" : {command: reset, description: "reset - Reset the terminal"},
    "source": {command: source, description: "source - Show the source code of the terminal"},
}

function exec(command, rw) {
    cmd = command.split(' ')[0];
    if(cmd === '') {
        return;
    }
    if (!commands[cmd]) {
        terminalBody.innerHTML += `Command not found: ${cmd}<br>`
    }
    else {
        commands[cmd].command(rw);
    }
}

let input = '';
let rawInput = ''
let terminalHistory = []
let arrowUpped = false;
document.addEventListener('keydown', function (event) {
    terminalBody.innerHTML = terminalBody.innerHTML.replace(/<span class="caret"><\/span>/g, '');
    if (event.key === 'Backspace') {
        if(input.length === 0) {
            terminalBody.innerHTML += '<span class="caret"></span>';
            return;
        }
        input = input.slice(0, -1);
        terminalBody.innerHTML = terminalBody.innerHTML.slice(0, -1);
    }
    if (event.key === 'Enter') {
        terminalBody.innerHTML += '<br>';
        rawInput = input;
        exec(input, rawInput);
        terminalBody.innerHTML += "root@browser:"+ currentDir +"$ ";
        input = '';
        terminalBody.scrollTop = terminalBody.scrollHeight - terminalBody.clientHeight;
        terminalHistory.push(rawInput);
        localStorage.setItem('terminalHistory', JSON.stringify(terminalHistory));
        arrowUpped = false;
    }
    
    if (event.key === 'ArrowUp') {
        if(arrowUpped){
            terminalBody.innerHTML += '<span class="caret"></span>';
            return;
        }
        if (terminalHistory.length === 0) {
            terminalBody.innerHTML += '<span class="caret"></span>';
            return;
        }
        input = terminalHistory[terminalHistory.length - 1];
        terminalBody.innerHTML += input;
        arrowUpped = true;
    }
    keys = ['shift', 'control', 'alt', 'meta', 'backspace', 'capslock', 'tab', 'enter', 'escape', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'delete', 'insert', 'home', 'end', 'pageup', 'pagedown', 'numlock', 'scrolllock', 'pause', 'printscreen', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'unidentified'];

    if (!keys.includes(event.key.toLowerCase())) {
        input += event.key;
        terminalBody.innerHTML += event.key;
        terminalBody.innerHTML += '<span class="caret"></span>';
    }
    else {
        terminalBody.innerHTML += '<span class="caret"></span>';
    }
});

