function Obstacle(x, y, width, height, angle) {
    var static_options = {
        isStatic: true,
        angle: angle
    }

    this.body = Bodies.rectangle(x, y, width, height, static_options);
    this.width= width;
    this.height = height;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, this.width, this.height);

        pop();
    }      
}