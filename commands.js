function force(direction, power) {
    target = world.bodies[4];

    power /= 100;
    switch (direction) {
        case "left":
            Body.applyForce(target, {
                x: target.position.x,
                y: target.position.y
            }, {
                x: -power,
                y: 0
            });
            break;

        case "right":
            Body.applyForce(target, {
                x: target.position.x,
                y: target.position.y
            }, {
                x: +power,
                y: 0
            });
            break;
        default:
            return;
    }
    param = [];
    return;
}

function add(what, x, y, w, h, a, static) {
    y = -y + 920;
    if (isNaN(w)) {
        w = 50;
    }
    if (isNaN(h)) {
        h = 50;
    }
    if (isNaN(a)) {
        a = 0;
    }
    if (static === undefined) {
        static = true;
    }
    if (typeof (static) === "string") {
        if (static === "false") {
            static = false;
        } else {
            static = true;
        }
    }

    a *= PI / 180;

    if (what === "jump_pad") {
        jump_pad.push(new Jump_pad(x, y, w, h));
    } else if (what === "grav_pad") {
        grav_pad.push(new Grav_pad(x, y, w, h));
    } else if (what === "obstacle") {
        obstacle.push(new Obstacle(x, y, w, h, a, static))
    }
    param = [];
    return;
}

function jump(direction, power) {
    var target = world.bodies[4];
    switch (direction) {
        case "up":
            Body.applyForce(target, {
                x: target.position.x,
                y: target.position.y
            }, {
                x: 0,
                y: -power
            });
            break;

        case "down":
            Body.applyForce(target, {
                x: target.position.x,
                y: target.position.y
            }, {
                x: 0,
                y: power
            });
            break;
        default:
            return;
    }
}