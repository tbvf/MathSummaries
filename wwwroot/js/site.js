var checkbox = document.querySelector('#theme-toggle');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('theme', 'darkmode');
        window.localStorage.setItem('Dark Mode', 'On');
    } else {
        document.documentElement.setAttribute('theme', 'lightmode');
        window.localStorage.setItem('Dark Mode', 'Off');
    }
});

window.onload = function exampleFunction() {
    const theme = localStorage.getItem('Dark Mode');
    if (theme == 'On') {
        checkbox.checked = true;
        document.documentElement.setAttribute('theme', 'darkmode');
    } else {
        checkbox.checked = false;
        document.documentElement.setAttribute('theme', 'lightmode');
    }
}






//document.onkeypress = function (e) {
//    e = e || window.event;
//    if (e.keyCode === 13) {
//        document.documentElement.classList.toggle('dark-mode');
//        document.querySelectorAll('.un-inverted').forEach((result) => {
//            result.classList.toggle('uninvert');
//        });
//    }
//}