for (let i = 0; i < 9; i++) {
    let bucketss = document.createElement('div');
    bucketss.innerHTML = '<div class= "images"><img class= "mole" src= "mole.png" width= "95vw" height= "80vh"><img class ="bucket" src= "bucket.png" width= "70vw" height= "75vh"></div>'
    let gameBoard = document.querySelector('.gameBoard');
    gameBoard.appendChild(bucketss);
}
let score = 0;

let starterButton = document.querySelector('.starter');
starterButton.onclick = function () {
    startGame()
}
try {
    function startGame() {
        document.querySelector('h3').innerHTML = `score : 0`;
        let moles = document.querySelectorAll('.mole');
        let bucket = document.querySelectorAll('.bucket');
        function reiterate() {
            moles.forEach((mole) => {
                mole.classList.add('hidden');
            })
            let hidddenmoles = document.querySelectorAll('.hidden');
            let randomMole = Math.floor(Math.random() * hidddenmoles.length);
            hidddenmoles[randomMole].classList.remove('hidden');

        }
        var game = setInterval(() => {
            reiterate();
        }, 1500)

        bucket.forEach((value) => {
            value.addEventListener('click', () => {
                gameOver();
            })
        })

        document.querySelectorAll('.mole').forEach((value) => {
            value.addEventListener('click', (value) => {
                console.log(value.target)
                if (!value.target.classList.contains('hidden')) {
                    console.log(value)
                    score++
                    document.querySelector('h3').innerHTML = `score : ${score}`;
                    value.target.classList.add('hidden');
                }
            })
        })
        function gameOver() {
            clearInterval(game);
            document.querySelector('h3').innerHTML = `GAME OVER!! Score: ${score}`;
            moles.forEach((mole) => {
                mole.classList.add('hidden');
            })
            score = 0;
        }
    }
} catch (error) {
    console.log('oops! an error occurred')
}

let resetButton= document.querySelector('.reset');
resetButton.onclick= ()=>{
    location.reload();
}