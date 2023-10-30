const poll = document.querySelector('.poll')
const buttons = poll.querySelectorAll('button')

buttons[0].addEventListener('click', Vote);
buttons[1].addEventListener('click', Vote);
buttons[2].addEventListener('click', Vote);
buttons[3].addEventListener('click', Vote);


function Vote(e) {
    console.log(e.target.innerHTML);
}
