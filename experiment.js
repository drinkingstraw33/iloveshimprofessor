document.onkeydown = function (e) {
    key = (e) ? e.keyCode : event.keyCode;
    ctrl = (e) ? e.ctrlKey : event.ctrlKey;

    if ((ctrl == true && (key == 78 || key == 82)) || key == 8 || key == 116) {
        if (e) {
            e.preventDefault();
        } else {
            event.keyCode = 0;
            event.returnValue = false;
        }
    }
}