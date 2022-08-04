const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById("finalScore");
const highScore = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
e.preventDefault();

const score = {
    score : Math.floor(Math.random() * 100),
    name : username.value
};
highScore.push(score);

highScore.sort( (a,b) =>b.score - a.score)

highScore.splice(5);
localStorage.setItem('highScores', JSON.stringify(highScore));
window.location.assign("/");

}