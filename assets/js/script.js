let display = document.querySelector('#display');
        let buttons = Array.from(document.querySelectorAll('button'));
        buttons.map( button => {
            button.addEventListener('click', function(e) {
                if (e.target.innerText === '=') {
                    try {
                        display.textContent = eval(display.textContent);
                    } catch {
                        display.textContent = 'Error';
                    }
                } else if (e.target.innerText === 'C') {
                    display.textContent = display.textContent.slice(0, -1);
                } else if (e.target.innerText === 'CE') {
                    display.textContent = '';
                } else {
                    display.textContent += e.target.innerText;
                }
            })
        })