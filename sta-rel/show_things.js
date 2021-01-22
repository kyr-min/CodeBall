function show_things() {
    roof.show();
    ground.show();
    leftWall.show();
    rightWall.show();

    player.show();

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
    goal.show()
}