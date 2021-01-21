var stage = 1;

var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Events = Matter.Events,
    Bodies = Matter.Bodies;


var engine;
var world;
var player;
var goal;

var s1_op = {
    gr_op: {
        x: (window.innerWidth - 25) / 2,
        y: window.innerHeight - 25,
        w: window.innerWidth + 100,
        h: 10
    },

    left_op: {
        x: -5,
        y: 0,
        w: 10,
        h: (window.innerHeight - 25) * 2
    },

    right_op: {
        x: window.innerWidth - 20,
        y: 0,
        w: 10,
        h: (window.innerHeight - 25) * 2
    },

    roof_op: {
        x: (window.innerWidth - 25) / 2,
        y: 0,
        w: window.innerWidth + 100,
        h: 10
    },

    player_op: {
        x: 200,
        y: 100,
        w: 50
    },

    goal_op: {
        x: 1500, 
        y: window.innerHeight - 75, 
        w: 100, 
        h: 85
    }

}

var s2_op = {
    gr_op: {
        x: (window.innerWidth - 25) / 2,
        y: window.innerHeight - 25,
        w: window.innerWidth + 100,
        h: 10
    },

    left_op: {
        x: -5,
        y: 0,
        w: 10,
        h: (window.innerHeight - 25) * 2
    },

    right_op: {
        x: window.innerWidth - 20,
        y: 0,
        w: 10,
        h: (window.innerHeight - 25) * 2
    },

    roof_op: {
        x: (window.innerWidth - 25) / 2,
        y: 0,
        w: window.innerWidth + 100,
        h: 10
    },

    player_op: {
        x: 200,
        y: 100,
        w: 50
    },

    goal_op: {
        x: 1000, 
        y: window.innerHeight - 75, 
        w: 100, 
        h: 85
    }

}

var command_list = ["force"];

var param = [];

var ground;
var leftWall;
var rightWall;
var roof;

var obstacle = [];

var history_list = [];

if (stage !== undefined) {
    function setup() {
        createCanvas(window.innerWidth - 25, window.innerHeight - 25);
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);

        switch (stage) {
            case 1:
                ground = new Boundary(s1_op.gr_op.x, s1_op.gr_op.y, s1_op.gr_op.w, s1_op.gr_op.h);

                leftWall = new Boundary(s1_op.left_op.x, s1_op.left_op.y, s1_op.left_op.w, s1_op.left_op.h);

                rightWall = new Boundary(s1_op.right_op.x, s1_op.right_op.y, s1_op.right_op.w, s1_op.right_op.h);

                roof = new Boundary(s1_op.roof_op.x, s1_op.roof_op.y, s1_op.roof_op.w, s1_op.roof_op.h);

                player= new Circle(s1_op.player_op.x, s1_op.player_op.y, s1_op.player_op.w);

                goal= new Goal(s1_op.goal_op.x, s1_op.goal_op.y, s1_op.goal_op.w, s1_op.goal_op.h);
                break;

            case 2:
                ground = new Boundary(s2_op.gr_op.x, s2_op.gr_op.y, s2_op.gr_op.w, s2_op.gr_op.h);

                leftWall = new Boundary(s2_op.left_op.x, s2_op.left_op.y, s2_op.left_op.w, s2_op.left_op.h);

                rightWall = new Boundary(s2_op.right_op.x, s2_op.right_op.y, s2_op.right_op.w, s2_op.right_op.h);

                roof = new Boundary(s2_op.roof_op.x, s2_op.roof_op.y, s2_op.roof_op.w, s2_op.roof_op.h);

                player= new Circle(s2_op.player_op.x, s2_op.player_op.y, s2_op.player_op.w);

                goal= new Goal(s2_op.goal_op.x, s2_op.goal_op.y, s2_op.goal_op.w, s2_op.goal_op.h);
                break;
        }


    }
    function draw() {
        background(51);
        Engine.update(engine);

        switch (stage) {
            case 1:
                roof.show();
                ground.show();
                leftWall.show();
                rightWall.show();
    
                player.show();

                goal.show();
                break;
            case 2:
                roof.show();
                ground.show();
                leftWall.show();
                rightWall.show();
    
                player.show();

                goal.show()
                break;
        }
        if(isClear(player.body.position.x, player.body.position.y, goal.body.position.x, goal.body.position.y, goal.width, goal.height)){
            stage++;
            document.getElementsByTagName("main")[0].innerHTML="";
            setup();
        }
        
    }
}
function force(target, direction, power){

    if(target === "player"){
        console.log(target);
        console.log(direction);
        target = world.bodies[4];
        switch(direction){
            case "up" : 
                
                Body.applyForce(target, {x: target.position.x, y: target.position.y }, { x: 0, y: -power});
                break;

            case "down" : 
                Body.applyForce(target, {x: target.position.x, y: target.position.y }, { x: 0, y: +power});
                break;

            case "left" :
                Body.applyForce(target, {x: target.position.x, y: target.position.y }, { x: -power, y: 0});
                break;

            case "right" :
                console.log("called");
                Body.applyForce(target, {x: target.position.x, y: target.position.y }, { x: +power, y: 0});
                break;
            default:
                return;
        }
    }
    param = [];
    return ;
}



// function mousePressed() {
//     boxes.push(new Box(mouseX, mouseY, 50));
// }



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function update() {
    var input = document.getElementById("code").value;
    var hist_div = document.getElementById("history");
    var now = document.createElement("p");
    var check_icon_src = "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png";
    var alert_icon_src= "https://www.freeiconspng.com/thumbs/alert-icon/alert-icon-red-11.png";
    
    var open_brack_loc = input.indexOf("(", 0);
    var close_brack_loc = input.indexOf(")", 0);
    var comm = input.slice(0, open_brack_loc);
    var temp = "";


    if(command_list.find(element => element === comm) !== undefined){
        for(var i = open_brack_loc +1; i <= close_brack_loc; i++){
            
            if(input[i] == ","){
                temp = temp.trim();
                param.push(temp);
                temp="";
            } else if(i == close_brack_loc){
                temp = temp.trim();
                param.push(temp);
                temp="";
            } else if(input[i] === '"'){
                continue ;
            } else {
                temp = temp.concat(input[i]);
            }
            
        }

        switch(comm){
            case "force": 
                force(param[0], param[1], parseFloat(param[2]));
                break;
        }
        
        now.innerHTML = `<img src=${check_icon_src} alt="check" id="check_icon">${input}`;
        history_list.push(input);

        

    } else {
        now.innerHTML = `<img src=${alert_icon_src} alt="alert" id="alert_icon">${comm}은 명령어가 아닙니다.`;
    }
    hist_div.appendChild(now);
}

function clear_his() {
    var hist_div = document.getElementById("history");
    var input = document.getElementById("code");

    input.value = null;
    hist_div.innerHTML = "";
    

    history_list.splice(0, history_list.length);
}