/* 

    Build a grid 7 x 6
        rid of positions: 7 col, 6 rows

        We have a grid object, and each slot
            Slot has info: 
                Either: 0, Red, Black
            CLASS OF SLOT -
                Player: null
                Coordinates/ [0,0] = bottom left (OR top left)
            
    Test for win condition:
        Has to check all around itself
        
        Each current play/token play
            Has 8 directions to check

            //check all the way in one direction

            //don't forget to also check in the other direction too

    Build players
        Name:
        Color:
        WinCounter:

*/

// set up the players


// let currentPlayer = playerOne

// const playerOne = {
//     name : '',
//     color: '',
//     wins: 0

// }

// const playerTwo = {
//     name: '',
//     color: '',
//     wins: 0

// }

// set up the board with a function 
let board = document.getElementById('board');

let startButton = document.getElementById('start-game')

let resetButton = document.getElementById('restart-button')

resetButton.addEventListener('click', () => {
    window.location.reload()
})



let winnerDiv = document.getElementById('winner')




let winConditions = [
    //row 6
    ['1:6', '2:6', '3:6', '4:6'],
    ['2:6', '3:6', '4:6', '5:6'],
    ['3:6', '4:6', '5:6', '6:6'],
    ['4:6', '5:6', '6:6', '7:6'],
// row 5
    ['1:5', '2:5', '3:5', '4:5'],
    ['2:5', '3:5', '4:5', '5:5'],
    ['3:5', '4:5', '5:5', '6:5'],
    ['4:5', '5:5', '6:5', '7:5'],

//row 4
    ['1:4', '2:4', '3:4', '4:4'],
    ['2:4', '3:4', '4:4', '5:4'],
    ['3:4', '4:4', '5:4', '6:4'],
    ['4:4', '5:4', '6:4', '7:4'],
    
    //row 3
    ['1:3', '2:3', '3:3', '4:3'],
    ['2:3', '3:3', '4:3', '5:3'],
    ['3:3', '4:3', '5:3', '6:3'],
    ['4:3', '5:3', '6:3', '7:3'],
    //row 2
    ['1:2', '2:2', '3:2', '4:2'],
    ['2:2', '3:2', '4:2', '5:2'],
    ['3:2', '4:2', '5:2', '6:2'],
    ['4:2', '5:2', '6:2', '7:2'],
    //row 1
    ['1:1', '2:1', '3:1', '4:1'],
    ['2:1', '3:1', '4:1', '5:1'],
    ['3:1', '4:1', '5:1', '6:1'],
    ['4:1', '5:1', '6:1', '7:1'],

    //column 1
    ['1:6', '1:5', '1:4', '1:3'],
    ['1:5', '1:4', '1:3', '1:2'],
    ['1:4', '1:3', '1:2', '1:1'],
    //column 2
    ['2:6', '2:5', '2:4', '2:3'],
    ['2:5', '2:4', '2:3', '2:2'],
    ['2:4', '2:3', '2:2', '2:1'],
    //column 3
    ['3:6', '3:5', '3:4', '3:3'],
    ['3:5', '3:4', '3:3', '3:2'],
    ['3:4', '3:3', '3:2', '3:1'],
    //column 4
    ['4:6', '4:5', '4:4', '4:3'],
    ['4:5', '4:4', '4:3', '4:2'],
    ['4:4', '4:3', '4:2', '4:1'],
    //column 5
    ['5:6', '5:5', '5:4', '5:3'],
    ['5:5', '5:4', '5:3', '5:2'],
    ['5:4', '5:3', '5:2', '5:1'],
    //column 6
    ['6:6', '6:5', '6:4', '6:3'],
    ['6:5', '6:4', '6:3', '6:2'],
    ['6:4', '6:3', '6:2', '6:1'],
    //column 7
    ['7:6', '7:5', '7:4', '7:3'],
    ['7:5', '7:4', '7:3', '7:2'],
    ['7:4', '7:3', '7:2', '7:1'],
    
    //diagonals bottom right to left
    ['4:6', '5:5', '6:4', '7:3'],
    ['3:6', '4:5', '5:4', '6:3'],
    ['4:5', '5:4', '6:3', '7:2'],
    ['2:6', '3:5', '4:4', '5:3'],
    ['3:5', '4:4', '5:3', '6:2'],
    ['4:4', '5:3', '6:2', '7:1'],
    ['1:6', '2:5', '3:4', '4:3'],
    ['2:5', '3:4', '4:3', '5:2'],
    ['3:4', '4:3', '5:2', '6:1'],
    ['1:5', '2:4', '3:3', '4:2'],
    ['2:4', '3:3', '4:2', '5:1'],
    ['1:4', '2:3', '3:2', '2:1'],


    //diagonals from left to right 
    ['4:6', '3:5', '2:4', '1:3'],
    ['5:6', '4:5', '3:4', '2:3'],
    ['4:5', '3:4', '2:3', '1:2'],
    ['6:6', '5:5', '4:4', '3:3'],
    ['5:5', '4:4', '3:3', '2:2'],
    ['4:4', '3:3', '2:2', '1:1'],
    ['7:6', '6:5', '5:4', '4:3'],
    ['6:5', '5:4', '4:3', '3:2'],
    ['5:4', '4:3', '3:2', '2:1'],
    ['7:5', '6:4', '5:3', '4:2'],
    ['6:4', '5:3', '4:2', '3:1'],
    ['7:4', '6:3', '5:2', '4:1'],
    
    
    

    

    


    



    




];



class Slot {
    constructor(coord) {
        //initial values of player and coordinates 
        this.player = null;
        this.coord = coord;
    }
}



class Game {
    constructor() {
        //array of arrays 
        this.board = [[],[],[],[],[],[],[]];
        //makeboard is a method of the game class 
        this.makeBoard();
        this.playerTurn = null;
        this.changeTurn();
        this.checkWinner();
        this.gameStatus = null; 
    }
    




    makeBoard() {
        let rows = 6;
        let columns = 7;

        

        for (let r = 1; r <= rows; r++) {
            let row = document.createElement('div');
            row.setAttribute('class','row')
            // same as row.className('row')

            //for each div row make a div column 
            for (let c = 1; c <= columns; c++) {
                // make a variable s that makes a new instance of  slot (player, and coordinates)
                let s = new Slot([c,r]);
                //checking for win conditions 
                // let position = "r" + r + "c" + c;
                
                let slot = document.createElement('div');
                slot.addEventListener('click', (event) => {                    
                    // console.log(position);
                    
                    // console.log(s)
                    // let thisSlot = document.getElementById(`${s.coord[0]}:${s.coord[1]}`)
                    // console.log(thisSlot);
                    this.placeToken(s);
                    this.checkWinner()
                    //call a function to 
                        //find lowest available slot in selected column
                        //change lowest slot color/player
                        //check for win conditions
                        //
                })
                slot.setAttribute('id',`${c}:${r}`);
                slot.setAttribute('class','slot');
                row.append(slot);
                 // console.log(this.board[c-1]);
                this.board[c-1].push(s);
            }
            // this.board.push(subRow);
            board.append(row);
        }
    }
    // giving an object to placeToken that is made up of a player and coord properties 
    placeToken(slot) {

        if (this.gameStatus == 'ended') {
            return
        }

        let columnArray = this.board[slot.coord[0] - 1]; // use this to grab the column array

        // check through the column array for an open slot, starting from bottom. set the first available slot's player to red and change div background color.
        
        for(let i = 5; i >= 0; i--) {
            if (columnArray[0].player != null){
                console.log("This column is full.");
                break;
            }
            if (columnArray[i].player === null) {
                columnArray[i].player = 'red';
                let filledSlot = document.getElementById(`${columnArray[i].coord[0]}:${columnArray[i].coord[1]}`);
                let position = filledSlot.id;
                // console.log(position)
                // filledSlot.style.backgroundColor = 'red';
                if (this.playerTurn === 'red'){
                    filledSlot.style.background = 'radial-gradient(circle at 90% 5%, rgb(232, 140, 140) 0%, rgba(230,65,65,1) 26%, rgba(186,41,41,1) 52%)'
                } else {
                    filledSlot.style.background = 'radial-gradient(circle at 90% 5%, rgba(123,123,123,1) 0%, rgba(50,50,50,1) 26%, rgba(0,0,0,1) 52%)'
                }
                
                for (let i = 0; i < winConditions.length; i++) {
                    
                        winConditions[i].map((condition, index) => {
                            // console.log(condition)
                            if (condition == position) {

                                winConditions[i][index] = this.playerTurn
                                
                                console.log(winConditions[i][index])
                            }
                        }

                        ) 
                        
                    }







                this.changeTurn()
                // console.log(this.board);
                
            

                break;
            }
            
            
        }
        
    }

    changeTurn() {
        if (this.playerTurn === null || this.playerTurn === 'black') {
            this.playerTurn = 'red'
            console.log(this.playerTurn)
            
        }
        else {
            this.playerTurn = 'black'
            console.log(this.playerTurn)
        }
    }

    //looping through the winning conditions 
    checkWinner(){
        //for every array inside winconditions 
        for (let i = 0; i < winConditions.length; i++) {
            // every is going to check each item in the array, and if each item is the same then it will resolve as true otherwise false 
            //checking every string, and if each item inside the array is == 'red' 
            if (winConditions[i].every(value => value == 'red')){
                console.log('red winner!');
                //then we change the winner message to appear on top of the whole board 
                winnerDiv.style.display = 'flex'
                winnerDiv.textContent = 'Player Red Wins!'
                this.gameStatus = 'ended'
            } else if (winConditions[i].every(value => value == 'black')) {
                winnerDiv.style.display = 'flex'
                winnerDiv.textContent = 'Player Black Wins!'
                this.gameStatus = 'ended'
                console.log('black wins!')

            }

            
        }
    }

}

let game = new Game();

startButton.addEventListener('click', () => {
    board.style.display = 'block'
    startButton.style.display = 'none'
    game.gameStatus = 'going'
    console.log(game.gameStatus);
    
    
})


// fill()
//


//What we know what we want to do
//Play connect four
//Have two players
//Win counter
//Have Slot classes that provide the player color and coordinates in the grid
//What are the challenges we will face?
//Getting our heads in the same place (having everyone understand the logic). Different perspectives.
//Sufficiently communicating when we need help
//add a dropping sound
//yeet button

// const grid = {
//     slots: [],
//     xValue: '',
//     yValue: '',
// }


// function checkCoordinate() {
    
// }

// class Slot {
//     constructor(coords) {
//         coords: [];
//     }
    