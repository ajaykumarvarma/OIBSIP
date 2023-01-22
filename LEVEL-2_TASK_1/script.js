var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.calc-btn');

    for (item of btn) {
        //trigger
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }
    function squareroot() {
        screen.value = Math.sqrt(screen.value);
    }
    function squared() {
        screen.value = Math.pow(screen.value, 2);
    }
    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
    function plus_minus() {
        screen.value = 0 - screen.value;
    }
    function percent(){
        screen.value /= 100; 
    }