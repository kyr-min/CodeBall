var s1_op = {
    gr_op: {
        x: 1800  / 2,
        y: 920,
        w: 1800 + 125,
        h: 10
    },

    left_op: {
        x: -5,
        y: 0,
        w: 10,
        h: 920 * 2
    },

    right_op: {
        x: 1805,
        y: 0,
        w: 10,
        h: 920 * 2
    },

    roof_op: {
        x: 1800 / 2,
        y: 0,
        w: 1925,
        h: 10
    },

    player_op: {
        x: 200,
        y: 100,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    }

}

var s2_op = {
    gr_op: {
        x: 1800 / 2,
        y: 920,
        w: 1925,
        h: 10
    },

    left_op: {
        x: -5,
        y: 0,
        w: 10,
        h: 920 * 2
    },

    right_op: {
        x: 1805,
        y: 0,
        w: 10,
        h: 920 * 2
    },

    roof_op: {
        x: 1800 / 2,
        y: 0,
        w: 1925,
        h: 10
    },

    player_op: {
        x: 200,
        y: 100,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: []
}

var s2_ob1_op = {
    obstacle_op: {
        x: 700,
        y: 900,
        w: 25,
        h: 275,
        a: Math.PI * 0.3
    }
}

var s2_ob2_op = {
    obstacle_op: {
        x: 1200,
        y: 900,
        w: 25,
        h: 275,
        a: Math.PI * 0.3
    }
}

var s3_op = {
    gr_op: {
        x: 1800  / 2,
        y: 920,
        w: 1800 + 125,
        h: 10
    },

    left_op: {
        x: -5,
        y: 0,
        w: 10,
        h: 920 * 2
    },

    right_op: {
        x: 1805,
        y: 0,
        w: 10,
        h: 920 * 2
    },

    roof_op: {
        x: 1800 / 2,
        y: 0,
        w: 1925,
        h: 10
    },

    player_op: {
        x: 200,
        y: 100,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: []
}

var s3_jump_pad_op = {
    jump_pad_op: {
        x: 700,
        y: 875,
        w: 50,
        h: 20
    }
}

function return_op (stage){
    switch(stage){
        case 1:
            return s1_op;
        case 2: 
            s2_op.obstacle_arr.push(s2_ob1_op);
            s2_op.obstacle_arr.push(s2_ob2_op);
            return s2_op;
        case 3:
            s3_op.jump_pad_arr.push(s3_jump_pad_op);
            return s3_op
    }
}