setInterval(function() {
	ball.moveBall();
}, 10);


var ball = {
	xDistance: 1,
	yDistance: 1,
	radius: 10,
	width: 700,
	height: 500,

	moveBall: function() {
		var x = this.getNewX();
		var y = this.getNewY();
		ball.updateXDistance();
		ball.updateYDistance();

		this.draw(x, y);
	},

	draw: function(x, y) {
		document.getElementById('ball').setAttribute('cy', y);
		document.getElementById('ball').setAttribute('cx', x);
	},

	getX: function() {
		return Number(document.getElementById('ball').getAttribute('cx'));
	},

	getY: function() {
		return Number(document.getElementById('ball').getAttribute('cy'));
	},

	getNewX: function() {
		var x = this.getX();
		x = this.getNewPosition(x, this.width, this.xDistance);

		return x;
	},

	getNewY: function() {
		var y = this.getY();
		y = this.getNewPosition(y, this.height, this.yDistance);

		return y;
	},

	getNewPosition: function(position, maxDistance, increment) {
		var maxY = maxDistance - this.radius;
		var minY = this.radius;

		position = position + increment;
		position = position >= maxY ? maxY : position;
		position = position <= minY ? minY : position;

		return position;
	},

	updateYDistance: function() {
		if (this.yDistance > 0) {
			if (this.height - this.radius <= this.getY()) {
				this.yDistance = -this.yDistance;
			}
		} else  {
			if (this.getY() + this.yDistance - this.radius <= 0) {
				this.yDistance = -this.yDistance;
			}
		}
	},

	updateXDistance: function() {
		if (this.xDistance > 0) {
			if (this.width - this.radius <= this.getX()) {
				this.xDistance = -this.xDistance;
			}
		} else  {
			if (this.getX() + this.xDistance - this.radius <= 0) {
				this.xDistance = -this.xDistance;
			}
		}
	}
};
