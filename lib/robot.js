class Robot {
	constructor(coordinates, bearing) {
		this.coordinates = [0, 0]
		this.bearing = "north"
	}
	
	setCoordinates(x, y) {
		this.coordinates = [x, y]
	}
	setBearing(bearing) {
		if (["north", "south", "east", "west"].includes(bearing)) {
			this.bearing = bearing
		} else {
			throw "Invalid Robot Bearing"
		}
	}
	place(obj) {
		this.setCoordinates(obj.x, obj.y)
		this.setBearing(obj.direction)
	}
	turnRight() {
		switch(this.bearing) {
			case "north":
				this.bearing = "east"
				break
			case "east":
				this.bearing = "south"
				break
			case "south":
				this.bearing = "west"
				break
			case "west":
				this.bearing = "north"
		}
	}
	turnLeft() {
		switch(this.bearing) {
			case "north":
				this.bearing = "west"
				break
			case "west":
				this.bearing = "south"
				break
			case "south":
				this.bearing = "east"
				break
			case "east":
				this.bearing = "north"
		}
	}
	advance() {
		switch(this.bearing) {
			case "north":
				this.coordinates[1]++
				break
			case "east":
				this.coordinates[0]++
				break
			case "south":
				this.coordinates[1]--
				break
			case "west":
				this.coordinates[0]--
		}
	}
	translateInstructions(instructionsStr) {
		instructionsStr.split("").forEach((char) => {
			switch(char) {
				case "L":
					this.turnLeft()
					break
				case "R":
					this.turnRight()
					break
				case "A":
					this.advance()
			}
		})
	}
}
