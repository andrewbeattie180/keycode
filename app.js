const textDisplay = document.getElementById('text-display');

onkeydown = function keycode(event){
    const boxes = document.querySelector('.boxes');
    boxes.style.display = 'flex';
    let key = event.keyCode;
    document.getElementById('text-display').innerHTML = key;
    textDisplay.style.fontSize = "2500%";
    let key2 =event.key;
    document.querySelector('.keydes').innerHTML = key2;
    let which = event.which;
    document.querySelector('.keywhich').innerHTML = which;
    let code = event.code;
    document.querySelector('.codedes').innerHTML = code;
}
