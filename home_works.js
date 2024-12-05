//GMAIL BLOCK
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{1,1000}\S@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML="OK"
        gmailResult.style.color="green"
    }else{
        gmailResult.innerHTML="Invalid email address";
        gmailResult.style.color="red"
    }
}

//MOVE BLOCK
const count = () => {
    const move = document.querySelector('.child_block');
    let goleft = parseInt(move.style.left || '0', 10);
    goleft++;
    if (goleft > 448) {
        return;
    }
    move.style.left = `${goleft}px`;
    requestAnimationFrame(count);
}
count();





