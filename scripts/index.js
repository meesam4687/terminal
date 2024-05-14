let terminalBody = document.getElementById('terminalBody')

let commands = {
    "clear": clearTerminal,
    "neofetch": neofetch
}

function exec(command){
    if(!commands[command]){
        terminalBody.innerHTML += `Command not found: ${command}<br>`
    }
    else{
        commands[command]();
    }
}

let input = '';
document.addEventListener('keydown', function (event) {
    terminalBody.innerHTML = terminalBody.innerHTML.replace(/<span class="caret"><\/span>/g, '');
    if(event.key === 'Backspace'){
        input = input.slice(0, -1);
        terminalBody.innerHTML = terminalBody.innerHTML.slice(0, -1);
        terminalBody.innerHTML += '<span class="caret"></span>';
    }
    if (event.key === 'Enter') {
        terminalBody.innerHTML += '<br>';
        exec(input);
        terminalBody.innerHTML += "root > <span class='caret'></span>";
        input = '';
    }
    keys = ['shift', 'control', 'alt', 'meta', 'backspace', 'capslock', 'tab', 'enter', 'escape', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'delete', 'insert', 'home', 'end', 'pageup', 'pagedown', 'numlock', 'scrolllock', 'pause', 'printscreen', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop', 'mediaprevioustrack', 'medianexttrack', 'audiovolumeup', 'audiovolumedown', 'audiovolumemute', 'mediaplaypause', 'mediastop'];

    if (!keys.includes(event.key.toLowerCase())) {
        input += event.key;
        terminalBody.innerHTML += event.key;
        terminalBody.innerHTML += '<span class="caret"></span>';
    }
});