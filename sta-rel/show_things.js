function show_things() {
    roof.show();
    ground.show();
    leftWall.show();
    rightWall.show();

    player.show();
    goal.show()
    
    if (obstacle.length !== undefined) {
        for (let i = 0; i < obstacle.length; i++) {
            obstacle[i].show();
        }
    }
    if (jump_pad.length !== undefined) {
        for (let i = 0; i < jump_pad.length; i++) {
            jump_pad[i].show();
        }
    }
    if (grav_pad.length !== undefined) {
        for (let i = 0; i < grav_pad.length; i++) {
            grav_pad[i].show();
        }
    }
    if (death_pad.length !== undefined){
        for (let i = 0; i < death_pad.length; i++) {
            death_pad[i].show();
        }
    }
    
    if (us_add_ob.length !== undefined) {
        for (let i = 0; i < us_add_ob.length; i++) {
            us_add_ob[i].show();
        }
    }
    if (us_add_jump.length !== undefined) {
        for (let i = 0; i < us_add_jump.length; i++) {
            us_add_jump[i].show();
        }
    }
    if (us_add_grav.length !== undefined) {
        for (let i = 0; i < us_add_grav.length; i++) {
            us_add_grav[i].show();
        }
    }
}