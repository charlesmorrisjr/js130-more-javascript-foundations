Math.seedrandom = require('seedrandom');

class Robot {
  static nameList = [];  
  
  constructor() {
    this.robotName = '';
  }
  
  name() {
    if (this.robotName === '') {
      let robotName;

      do {
        const A_CHAR_CODE = 'A'.charCodeAt(0);
        const ALPHABET_LENGTH = 25;

        robotName = '';

        for (let i = 0; i < 2; i++) {
          robotName += String.fromCharCode(this.getRandNum(ALPHABET_LENGTH) + A_CHAR_CODE);
        }

        for (let i = 0; i < 3; i++) {
          robotName += String(this.getRandNum(9));
        }
      
      } while (Robot.nameList.includes(robotName))

      this.robotName = robotName;
      Robot.nameList.push(robotName);
  }
    
    return this.robotName;
  }

  reset() {
    Robot.nameList.splice(Robot.nameList.findIndex(name => name === this.robotName), 1);
    this.robotName = '';
  }

  getRandNum(max) {
    return Math.floor(Math.random() * max + 1);
  }
}

const SAME_INITIAL_ROBOT_NAME_SEED = 1000;
Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
let robot1 = new Robot();
Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
let robot2 = new Robot();

console.log(robot1.name(), robot2.name());

console.log(Robot.nameList)
robot2.reset();
console.log(Robot.nameList)

module.exports = Robot;