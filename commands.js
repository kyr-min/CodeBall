function force(direction, power) {
    var error = 0;
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
            error = 1;
            return error;
    }
    param = [];
    return ;
}

function add(what, x, y, w, h, a, static) {
    var error = 0;
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
        us_add_jump.push(new Jump_pad(x, y, w, h));
        us_recent.push(new Jump_pad(x, y, w, h));
    } else if (what === "grav_pad") {
        us_add_grav.push(new Grav_pad(x, y, w, h));
        us_recent.push(new Grav_pad(x, y, w, h));
    } else if (what === "obstacle") {
        us_add_ob.push(new Obstacle(x, y, w, h, a, static));
        us_recent.push(new Obstacle(x, y, w, h, a, static));
    } else{
        return error;
    }
    param = [];
    return ;
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