//ARRAY of length 3
//RANDOMLY choose an elemnt of the array
//RETURN the element
let draw = 0;
let win = 0;
let lost = 0;
let choices = ['rock','paper','scissor']

function computer_choice ()
{
    
    let x = Math.floor(Math.random()*3);
    return choices[x]
}

//check winninr function
//TWO arguments
//computer choice and human choice
// IF both equal, then return a draw
// IF human wins, win++, IF  lost then lost ++

function checkWinner(comp_choice, hum_choice)
{
    if (comp_choice == hum_choice)
    {
        draw++;
    }
    else{
        if (comp_choice == choices[0])
        {
            if (hum_choice == choices[1])
            {
                ++win;
            }
            else
            {
                ++lost;
            }
        }
        if (comp_choice == choices[1])
        {
            if (hum_choice == choices[2])
            {
                ++win;
            }
            else
            {
                ++lost;
            }
        }
        if (comp_choice == choices[2])
        {
            if (hum_choice == choices[0])
            {
                ++win;
            }
            else
            {
                ++lost;
            }
        }
    }
}

//PROMP an input from user
//lowercase it
//PASS it as argument along with random function
//IF win>lose alert user won
//ELSE alert user lost

function game(e) {
    
    // for(let y = 0; y< 5; y++)
    // {
        let lowerChoice = "No";

        if(e.target.classList == "Paper")
        {
             lowerChoice = "paper";
        }  

        else if(e.target.classList == "Rock")
        {
             lowerChoice = "rock";
        }  
        else {
            lowerChoice = "scissor";
        }  

        
        
        
        comp_choice = computer_choice()
        compScore.textContent = comp_choice;
        checkWinner(comp_choice, lowerChoice);
        console.log("Compute choose :" + comp_choice);
        console.log("You Choose: " + lowerChoice);
        console.log(`Won: ${win}, Lost: ${lost}, Draw: ${draw}`)
    
        

    scoreUpdate.textContent = `Won:${win} Lost:${lost} Draw:${draw}`;
    

    if (win + lost + draw == 5)
    {
        if (win>lost)
            {
                scoreUpdate.textContent = `You Won! ${win} - ${lost}`
            }

        else if (lost>win)
            {
                scoreUpdate.textContent = `You Lost. ${lost} - ${win} `
            }
        else if (lost==win)
            {
                scoreUpdate.textContent = `You Drew. ${win} - ${lost} `
            }

        
    }
    if (win + lost + draw>5)
    {
        alert("Please Press Re-Start To Proced!")
        scoreUpdate.textContent = '';
        compScore.textContent = '';
    }
}
function reset()
{
    win = 0;
    lost = 0;
    draw = 0;
}

scoreUpdate = document.querySelector('.score_update')
Reset = document.querySelector('.reset');

buttonRock = document.querySelector('button.Rock')
buttonPaper = document.querySelector('button.Paper')
buttonScissors = document.querySelector('button.Scissors')

buttonPaper.addEventListener("click", game)
buttonRock.addEventListener("click", game)
buttonScissors.addEventListener("click", game)

Reset.addEventListener('click', reset)
compScore = document.querySelector('.comp_score')

