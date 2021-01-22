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

var opt= [];

opt.push(return_op(1));
opt.push(return_op(2));
opt.push(return_op(3));
opt.push(return_op(4));

var bg_img;

var command_list = ["force"];

var param = [];

var ground;
var leftWall;
var rightWall;
var roof;

var obstacle = [];
var jump_pad = [];

var history_list = [];

if (stage !== undefined) {
    function setup() {
        bg_img = loadImage('https://i.ibb.co/gyxrWjS/test.jpg');
        createCanvas(1800, 920);
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);

        sta_setup(stage);

    }

    function draw() {
        var player_pos = player.body.position;
        var goal_pos = goal.body.position;
        var jump0;

        background(bg_img);
        Engine.update(engine);

        show_things();

        

        if(isClear(player_pos.x, player_pos.y, goal_pos.x, goal_pos.y, goal.width, goal.height)){
            stage++;
            document.getElementsByTagName("main")[0].innerHTML="";
            setup();
        } else if(isOut(player_pos.x, player_pos.y)){
            document.getElementsByTagName("main")[0].innerHTML="";
            setup();
        }
        if(jump_pad.length !== 0){
            jump0 = jump_pad[0];
            if(isOn_jump(player_pos.x, player_pos.y, jump_pad[0].body.position.x, jump_pad[0].body.position.y, jump_pad[0].width, jump_pad[0].height)){
                force("player", "up", 0.2);
            }
        }
    }
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