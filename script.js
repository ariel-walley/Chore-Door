
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

let door1 = document.getElementById('door1');

door1.onclick = () => {
    door1.src = botDoorPath;
};


