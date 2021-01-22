function Jump_pad(x, y, width, height) {
    var options = {
        isStatic: true,
        isSensor: true 
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
        rectMode(CENTER);
        fill(255,255,0,50);
        rect(0, 0, this.width, this.height);

        pop();
    }      
}