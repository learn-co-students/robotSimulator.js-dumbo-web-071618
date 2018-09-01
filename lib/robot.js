class Robot {
	//your solution here
  constructor(coordinates = [0,0], bearing = "north"){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(coord1, coord2){
    this.coordinates = [coord1, coord2]
  }

  setBearing(direction){
    let directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)){
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place({x, y, direction}){
    this.setCoordinates(x,y)
    this.setBearing(direction)
  }

  turnRight(){
    switch(this.bearing) {
    case "north":
        this.bearing = "east"
        break;
    case "south":
        this.bearing = "west"
        break;
    case "east":
        this.bearing = "south"
        break;
    case "west":
        this.bearing = "north"
        break;
      }
    }

    turnLeft(){
      switch(this.bearing) {
      case "north":
          this.bearing = "west"
          break;
      case "south":
          this.bearing = "east"
          break;
      case "east":
          this.bearing = "north"
          break;
      case "west":
          this.bearing = "south"
          break;
        }
      }

    advance(){
      if (this.bearing === "north"){
        this.coordinates[1] += 1
      }
      else if (this.bearing === "south") {
        this.coordinates[1] -=1
      }
      else if (this.bearing === "east") {
        this.coordinates[0] +=1
      }
      else {
        this.coordinates[0] -=1
      }
    }

    translateInstructions(instructions){
      for (let char in instructions){
        if (instructions.charAt(char) === 'L'){
          this.turnLeft()
        }else if (instructions[char] === 'R') {
          this.turnRight()
        }else if (instructions[char] === 'A') {
          this.advance()
        }
      }
    }
}
