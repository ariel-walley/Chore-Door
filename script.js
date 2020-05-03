let botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let defaultDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let counter = 0;

function doorPaths (param) {

    let door1 = document.getElementById('door1');
    let door2 = document.getElementById('door2');
    let door3 = document.getElementById('door3');

    let randomFirstClick = Math.floor(Math.random() * 3); //prints 0, 1, or 2
    let randomSecondClick = Math.floor(Math.random() *2); //prints 0 or 1

    if (door1.src === botDoor || door2.src === botDoor || door3.src === botDoor) { //Checking if any robots to end game
        console.log('Oops, there\'s a robot. Game over!');
        return;
    } else if (param.src !== defaultDoor) { //Checking for clicking the same door twice
        console.log('Silly goose! You can\'t click on the same door twice!')
        return;
    } else if (counter === 0) {  //For deciding what's behind door number one!
        if (randomFirstClick === 0) {
            counter++;
            return param.src = botDoor;
        } else if (randomFirstClick === 1) {
            counter++;
            return param.src = beachDoor;
        } else if (randomFirstClick === 2) {
            counter++;
            return param.src = spaceDoor;
        } 
    } else if (counter === 1) { // For deciding what's behind door number two!
        if (door1.src === spaceDoor || door2.src === spaceDoor || door3.src === spaceDoor) {
            if (randomSecondClick === 0) {
                counter++;
                return param.src = beachDoor;
            } else {
                counter++;
                return param.src = botDoor;
            }
        } else if (door1.src === beachDoor || door2.src === beachDoor || door3.src === beachDoor) {
            if (randomSecondClick === 0) {
                counter++;
                return param.src = spaceDoor;
            } else {
                counter++;
                return param.src = botDoor;
            }
        }        
    } else { // For deciding what's behind door number three - end of game
        param.src = botDoor;
        counter++
        console.log('Counter is: ' + counter);
        return;
    };
};

/* brainstorming:

Option 1: you could assign each door an image and reveal on click
    you could have the 6 different combinations and it cycle through them
    you could have a hidden image state and then a revealed state

Option 2: you could have the first click decide which of the 3 to pick and then the second click decide each of the remaining two
    add random number generator to decide which door to pick?

    also - have to track whether or not the robot is clicked!
*/