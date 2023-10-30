

const poll = document.querySelector('.poll')
const buttons = poll.querySelectorAll('button')

buttons[0].addEventListener('click', vote);
function vote(e) {
    console.log(e.target.innerHTML);

}

buttons[1].addEventListener('click', vote);
buttons[2].addEventListener('click', vote);
buttons[3].addEventListener('click', vote);
buttons[4].addEventListener('click', vote);
buttons[5].addEventListener('click', vote);
