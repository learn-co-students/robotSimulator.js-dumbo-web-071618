class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  //Instance Methods:

  directions(){
    return ["north", "east", "south", "west"];
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {

    if (this.directions().includes(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place({x, y, direction}) {
    this.setCoordinates(x, y);
    this.setBearing(direction);
  }

  turnRight() {
    let index = this.directions().indexOf(this.bearing)
    this.bearing = this.directions()[(index + 1) % 4];
  }

  turnLeft() {
    let index = this.directions().indexOf(this.bearing)
    this.bearing = this.directions()[(index + 3) % 4];
  }

  advance() {
    switch(this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "west":
        this.coordinates[0]--;
        break;
    }
  }

  translateInstructions(string) {
    for (var i = 0; i < string.length; i++) {
      let char = string[i];
      switch (char) {
        case "A":
          this.advance();
          break;
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
      }
    }
  }
}
