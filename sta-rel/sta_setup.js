function sta_setup(cur_stage){
    cur_stage = cur_stage-1;

    var gr_op = opt[cur_stage].gr_op;
    var left_op = opt[cur_stage].left_op;
    var right_op = opt[cur_stage].right_op;
    var roof_op = opt[cur_stage].roof_op;
    var player_op = opt[cur_stage].player_op;
    var goal_op = opt[cur_stage].goal_op;

    var obs_arr = opt[cur_stage].obstacle_arr;
    var jump_pad_arr = opt[cur_stage].jump_pad_arr;
    var grav_pad_arr = opt[cur_stage].grav_pad_arr;
    var death_pad_arr = opt[cur_stage].death_pad_arr;

    obstacle = [];
    jump_pad = [];
    grav_pad = [];
    death_pad = [];

    ground = new Boundary(gr_op.x, gr_op.y, gr_op.w, gr_op.h);

    leftWall = new Boundary(left_op.x, left_op.y, left_op.w, left_op.h);

    rightWall = new Boundary(right_op.x, right_op.y, right_op.w, right_op.h);

    roof = new Boundary(roof_op.x, roof_op.y, roof_op.w, roof_op.h);

    player= new Player(player_op.x, player_op.y, player_op.w);

    goal= new Goal(goal_op.x, goal_op.y, goal_op.w, goal_op.h);

    if(obs_arr !== undefined){
        for(var i = 0; i<obs_arr.length; i++){
            var obstacle_op = obs_arr[i].obstacle_op;

            obstacle.push(new Obstacle(obstacle_op.x, obstacle_op.y, obstacle_op.w, obstacle_op.h, obstacle_op.a, obstacle_op.s));
        }
    }
    if(jump_pad_arr !== undefined){
        for(var i = 0; i<jump_pad_arr.length; i++){
            var jump_pad_op = jump_pad_arr[i].jump_pad_op;
            
            jump_pad.push(new Jump_pad(jump_pad_op.x, jump_pad_op.y, jump_pad_op.w, jump_pad_op.h));
        }
    }
    if(grav_pad_arr !== undefined){
        for(var i = 0; i<grav_pad_arr.length; i++){
            var grav_pad_op = grav_pad_arr[i].grav_pad_op;
            
            grav_pad.push(new Grav_pad(grav_pad_op.x, grav_pad_op.y, grav_pad_op.w, grav_pad_op.h));
        }
    }
    if(death_pad_arr !== undefined){
        for(var i = 0; i<death_pad_arr.length; i++){
            var death_pad_op = death_pad_arr[i].death_pad_op;
            
            death_pad.push(new Death_pad(death_pad_op.x, death_pad_op.y, death_pad_op.w, death_pad_op.h, death_pad_op.a));
        }
    }
}