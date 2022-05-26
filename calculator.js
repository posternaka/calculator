const items = document.querySelectorAll('.item');
const big = document.querySelector('.big');
let res = '';

items.forEach(item => {
    item.addEventListener('click', function(event) {
        let constanta = event.target.textContent;
        if(event.target.className === 'item num') {
            res += constanta;
            big.textContent = res;
        }

        if(event.target.className === 'item op') {
            res += constanta;
            big.textContent = res;
        }

        if(event.target.className === 'item ravno') {
            big.textContent = eval(big.textContent);
            res = '';
        }

        if(event.target.className === 'item sbros') {
            res = '';
            big.textContent = res;
        }
    });
});