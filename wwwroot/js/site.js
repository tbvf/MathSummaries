var checkbox = document.querySelector('#theme-toggle');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.classList.add('dark-mode');
        document.querySelectorAll('.un-inverted').forEach((result) => {
            result.classList.add('uninvert');
        });
        window.localStorage.setItem('Dark Mode', 'On');
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.querySelectorAll('.un-inverted').forEach((result) => {
            result.classList.remove('uninvert');
        });
        window.localStorage.setItem('Dark Mode', 'Off');
    }
});

window.onload = function exampleFunction() {
    const theme = localStorage.getItem('Dark Mode');
    if (theme == 'On') {
        checkbox.checked = true;
        document.documentElement.classList.add('dark-mode');
        document.querySelectorAll('.un-inverted').forEach((result) => {
            result.classList.add('uninvert');
        });
    } else {
        checkbox.checked = false;
        document.documentElement.classList.remove('dark-mode');
        document.querySelectorAll('.un-inverted').forEach((result) => {
            result.classList.remove('uninvert');
        });
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