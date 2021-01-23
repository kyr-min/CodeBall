function Death_pad(x, y, width, height, angle) {
    var options = {
        isStatic: true,
        isSensor: true,
        angle: angle 
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width= width;
    this.height = height;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        noStroke();
        rotate(angle);
        rectMode(CENTER);
        fill(255,0,0,50);
        rect(0, 0, this.width, this.height);

        pop();
    }      
}