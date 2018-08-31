class Robot {
    constructor(coordinates = [0,0], bearing = "north")    {
        this.coordinates = coordinates
        this.setBearing(bearing.toLowerCase())
        this.directions = ["north", "east", "south", "west"]
    }

    setCoordinates(x, y) {
        this.coordinates = [x, y]
    }

    setBearing(bearing)    {
        if(bearing.toLowerCase() == "north" | bearing.toLowerCase() == "south" | bearing.toLowerCase() == "east" | bearing.toLowerCase() == "west") {
            this.bearing = bearing.toLowerCase()
        } else {
            throw "Invalid Robot Bearing"
        }
    }

    place({x, y, direction}) {
        this.coordinates = [x,y]
        this.bearing = direction.toLowerCase()
    }

    turnRight() {
        if(this.directions.indexOf(this.bearing) == this.directions.length - 1) {
            this.bearing = this.directions[0]
        } else {
            this.bearing = this.directions[this.directions.indexOf(this.bearing) + 1]
        }
    }

    turnLeft() {
        if(this.directions.indexOf(this.bearing) == 0) {
            this.bearing = this.directions[this.directions.length - 1]
        } else {
            this.bearing = this.directions[this.directions.indexOf(this.bearing) - 1]
        }
    }

    advance()   {
        switch(this.bearing)    {
            case "north":
                this.coordinates[1]++
                break
            case "south":
                this.coordinates[1]--
                break
            case "east":
                this.coordinates[0]++
                break
            case "west":
                this.coordinates[0]--
                break
        }
    }

    translateInstructions(instructions) {
        for (var i = 0; i < instructions.length; i++) {
            switch(instructions.charAt(i))   {
                case "R":
                    this.turnRight()
                    break
                case "L":
                    this.turnLeft()
                    break
                case "A":
                    this.advance()
                    break
            }
        }
    }
}