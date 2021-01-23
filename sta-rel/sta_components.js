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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],

    

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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],
}

var s2_ob1_op = {
    obstacle_op: {
        x: 700,
        y: 900,
        w: 25,
        h: 275,
        a: Math.PI * 0.3,
        s: true
    }
}
var s2_ob2_op = {
    obstacle_op: {
        x: 1200,
        y: 900,
        w: 25,
        h: 275,
        a: Math.PI * 0.3,
        s: true
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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],
}

var s3_jump_pad_op = {
    jump_pad_op: {
        x: 350,
        y: 900,
        w: 70,
        h: 100
    }
}
var s3_ob1_op = {
    obstacle_op: {
        x: 700,
        y: 800,
        w: 40,
        h: 500,
        a: 0,
        s: false
    }
}
var s3_ob2_op = {
    obstacle_op: {
        x: 750,
        y: 900,
        w: 60,
        h: 100,
        a: 0,
        s: true
    }
}




var s4_op = {
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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],
}

var s4_grav_pad1_op = {
    grav_pad_op : {
        x: 350,
        y: 900,
        w: 70,
        h: 100
    }
}
var s4_grav_pad2_op = {
    grav_pad_op : {
        x: 600,
        y: 50,
        w: 70,
        h: 100
    }
}
var s4_grav_pad3_op = {
    grav_pad_op : {
        x: 850,
        y: 900,
        w: 70,
        h: 100
    }
}
var s4_grav_pad4_op = {
    grav_pad_op : {
        x: 1100,
        y: 50,
        w: 70,
        h: 100
    }
}
var s4_ob1_op = {
    obstacle_op : {
        x: 450,
        y: 800,
        w: 40, 
        h: 1200,
        a: 0,
        s: true
    }
}
var s4_ob2_op = {
    obstacle_op : {
        x: 700,
        y: 200,
        w: 40, 
        h: 900,
        a: 0,
        s: true
    }
}
var s4_ob3_op = {
    obstacle_op : {
        x: 950,
        y: 800,
        w: 40, 
        h: 1200,
        a: 0,
        s: true
    }
}




var s5_op = {
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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],

}

var s5_ob1_op = {
    obstacle_op: {
        x: 700,
        y: 800,
        w: 40,
        h: 500,
        a: 0,
        s: false
    }
}

var s5_ob2_op = {
    obstacle_op: {
        x: 750,
        y: 900,
        w: 60,
        h: 100,
        a: 0,
        s: true
    }
}





var s6_op = {
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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],
}

var s6_dea1_op = {
    death_pad_op: {
        x: 900,
        y: 900,
        w: 600,
        h: 100
    }
}




var s7_op = {
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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],
}

var s7_dea1_op = {
    death_pad_op: {
        x: 770,
        y: 10,
        w: 1820,
        h: 50
    }
}
var s7_dea2_op = {
    death_pad_op: {
        x: 800,
        y: 900,
        w: 900,
        h: 100
    }
}
var s7_ob1_op = {
    obstacle_op: {
        x: 700,
        y: 500,
        w: 1300,
        h: 50,
        a: 0,
        s: true
    }
}




var s8_op = {
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
        y: 800,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: 875, 
        w: 100, 
        h: 85
    },

    obstacle_arr: [],
    
    jump_pad_arr: [],

    grav_pad_arr: [],

    death_pad_arr: [],
}

var s8_dea1_op = {
    death_pad_op: {
        x: 770,
        y: 10,
        w: 1820,
        h: 50
    }
}
var s8_dea2_op = {
    death_pad_op: {
        x: 800,
        y: 900,
        w: 900,
        h: 100
    }
}
var s8_dea3_op = {
    death_pad_op: {
        x: 940,
        y: 650,
        w: 300,
        h: 50,
        a: 2
    }
}
var s8_ob1_op = {
    obstacle_op: {
        x: 300,
        y: 500,
        w: 500,
        h: 50,
        a: 0,
        s: true
    }
}
var s8_ob2_op = {
    obstacle_op: {
        x: 600,
        y: 800,
        w: 500,
        h: 50,
        a: 0,
        s: true
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
            s3_op.obstacle_arr.push(s3_ob1_op);
            s3_op.obstacle_arr.push(s3_ob2_op);
            return s3_op;
        case 4:
            s4_op.grav_pad_arr.push(s4_grav_pad1_op);
            s4_op.grav_pad_arr.push(s4_grav_pad2_op);
            s4_op.grav_pad_arr.push(s4_grav_pad3_op);
            s4_op.grav_pad_arr.push(s4_grav_pad4_op);
            s4_op.obstacle_arr.push(s4_ob1_op);
            s4_op.obstacle_arr.push(s4_ob2_op);
            s4_op.obstacle_arr.push(s4_ob3_op);
            return s4_op;
        case 5:
            s5_op.obstacle_arr.push(s5_ob1_op);
            s5_op.obstacle_arr.push(s5_ob2_op);
            return s5_op;
        case 6:
            s6_op.death_pad_arr.push(s6_dea1_op);
            return s6_op;
        case 7:
            s7_op.death_pad_arr.push(s7_dea1_op);
            s7_op.death_pad_arr.push(s7_dea2_op);
            s7_op.obstacle_arr.push(s7_ob1_op);
            return s7_op;
        case 8:
            s8_op.death_pad_arr.push(s8_dea1_op);
            s8_op.death_pad_arr.push(s8_dea2_op);
            s8_op.death_pad_arr.push(s8_dea3_op);
            s8_op.obstacle_arr.push(s8_ob1_op);
            s8_op.obstacle_arr.push(s8_ob2_op);
            return s8_op;
    }
}