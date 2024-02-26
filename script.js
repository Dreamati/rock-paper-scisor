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

function game(humanChoice) {
    
    for(let y = 0; y< 5; y++)
    {
        
        let lowerChoice = humanChoice.toLowerCase();
        let i = 0
        let j = 0;
        while (i < 3)
            {
                if(lowerChoice != choices[i])
                {
                    j++;
                }
                i++;
            }
        if (j==3)
        {
            alert("please enter one of the following: 'rock', 'paper', 'scissor'");
            j = 0;
            y--;
            
        }
        else {
            comp_choice = computer_choice()
            checkWinner(comp_choice, humanChoice);
            console.log("Compute choose :" + comp_choice);
            console.log("You Choose: " + humanChoice);
            console.log(`Won: ${win}, Lost: ${lost}, Draw: ${draw}`)
        }
        

    }
    if (win>lost)
        {
            alert("You Won!")
        }
    else if (lost>win)
        {
            alert("You Lost")
        }
    else if (lost==win)
        {
            alert("It's a draw")
        }
    win = 0;
    lost = 0;
    draw = 0;
}

buttonRock = document.querySelector('.Rock')
buttonPaper = document.querySelector('.Paper')
buttonScissors = document.querySelector('.Scissors')

buttonPaper.addEventListener('click', game('Paper'))
buttonRock.addEventListener('click', game('Rock'))
buttonScissors.addEventListener('click', game('Scissors'))

