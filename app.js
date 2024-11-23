const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const winningScoreSelect = document.querySelector('#winningScore')
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

const updateScore = (pScore, pDisplay, counterpartDisplay) => {
    pScore += 1;
    pDisplay.textContent = pScore;
    if (pScore >= winningScore) {
        p1Button.disabled = true;
        p2Button.disabled = true;
        pDisplay.classList.add('has-text-success');
        counterpartDisplay.classList.add('has-text-danger');
    }
    return pScore;
}

winningScoreSelect.addEventListener('change', () => {
    //this.valueでもいい
    winningScore = parseInt(winningScoreSelect.value)
    resetOperation();
})

p1Button.addEventListener('click', function () {
    p1Score = updateScore(p1Score, p1Display, p2Display);
})
p2Button.addEventListener('click', function () {
    p2Score = updateScore(p2Score, p2Display, p1Display);
})

const reset = document.querySelector('#reset')

reset.addEventListener('click', function () {
    resetOperation();
})

const resetOperation = () => {
    p1Score = 0;
    p1Display.textContent = 0;
    p2Score = 0;
    p2Display.textContent = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
}