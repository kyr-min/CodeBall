var stage = 1;

var grav_called;
var grav_last_called= 0;

var jump_called;
var jump_last_called= 0;

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
opt.push(return_op(5));
opt.push(return_op(6));
opt.push(return_op(7));
opt.push(return_op(8));

var bg_img;

var command_list = ["force", "add"];

var param = [];

var ground;
var leftWall;
var rightWall;
var roof;

var obstacle = [];
var jump_pad = [];
var grav_pad = [];
var death_pad = [];

var us_add_ob = [];
var us_add_jump = [];
var us_add_grav = [];
var us_recent = [];

if (stage !== undefined) {
    function setup() {
        bgImg(stage);
        createCanvas(1800, 920);
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);

        sta_setup(stage);

    }

    function draw() {
        var player_pos = player.body.position;
        var goal_pos = goal.body.position;

        background(bg_img);
        Engine.update(engine);

        show_things();

        if(isClear(player_pos.x, player_pos.y, goal_pos.x, goal_pos.y, goal.width, goal.height)){
            
            if(stage >= 8){
                document.getElementsByTagName("body")[0].innerHTML="";
                document.write("<h1 id='finished'>축하합니다! 다 끝내셨어요!</h1>");
                return ;
            } else {
                stage++;
                document.getElementsByTagName("main")[0].innerHTML="";
                setup();
            }
        }
        if(isOut(player_pos.x, player_pos.y)){
            document.getElementsByTagName("main")[0].innerHTML="";
            setup();
        }
        if(jump_pad.length !== 0 || us_add_jump.length !== 0){
            var first;
            for(var i = 0; i< jump_pad.length; i++){
                if(isOn_jump(player_pos.x, player_pos.y, jump_pad[i].body.position.x, jump_pad[i].body.position.y, jump_pad[i].width, jump_pad[i].height)){
                    if(jump_called === undefined){
                        first = true;
                    }
                    jump_called = new Date().getTime();

                    if((jump_called- jump_last_called) / 1000 >= 1 || first){
                        if(world.gravity.scale > 0){
                            jump("up", 0.2);
                        } else if(world.gravity.scale < 0){
                            jump("down", 0.2);
                        }
                        
                        grav_last_called = new Date().getTime();
                        first = false;
                    }
                }
            }
            for(var i = 0; i< us_add_jump.length; i++){
                if(isOn_jump(player_pos.x, player_pos.y, us_add_jump[i].body.position.x, us_add_jump[i].body.position.y, us_add_jump[i].width, us_add_jump[i].height)){
                    if(jump_called === undefined){
                        first = true;
                    }
                    jump_called = new Date().getTime();

                    if((jump_called- jump_last_called) / 1000 >= 1 || first){
                        if(world.gravity.scale > 0){
                            jump("up", 0.2);
                        } else if(world.gravity.scale < 0){
                            jump("down", 0.2);
                        }
                        
                        grav_last_called = new Date().getTime();
                        first = false;
                    }
                }
            }
        }
        if(grav_pad.length !== 0 || us_add_grav.length !== 0){
            var first;
            for(var i = 0; i< grav_pad.length; i++){
                if(isOn_grav(player_pos.x, player_pos.y, grav_pad[i].body.position.x, grav_pad[i].body.position.y, grav_pad[i].width, grav_pad[i].height)){
                    if(grav_called === undefined){
                        first = true;
                    }
                    grav_called = new Date().getTime();

                    if((grav_called- grav_last_called) / 1000 >= 1 || first){
                        world.gravity.scale = -world.gravity.scale;
                        grav_last_called = new Date().getTime();
                        first = false;
                    }
                }
            }
            for(var i = 0; i< us_add_grav.length; i++){
                if(isOn_grav(player_pos.x, player_pos.y, us_add_grav[i].body.position.x, us_add_grav[i].body.position.y, us_add_grav[i].width, us_add_grav[i].height)){
                    if(grav_called === undefined){
                        first = true;
                    }
                    grav_called = new Date().getTime();

                    if((grav_called- grav_last_called) / 1000 >= 1 || first){
                        world.gravity.scale = -world.gravity.scale;
                        grav_last_called = new Date().getTime();
                        first = false;
                    }
                }
            }
        }
        if(death_pad.length !== 0){
            for(var i =0; i< death_pad.length; i++){
                if(isOn_death(player_pos.x, player_pos.y, player.width,death_pad[i].body.position.x, death_pad[i].body.position.y, death_pad[i].width, death_pad[i].height)){
                    document.getElementsByTagName("main")[0].innerHTML="";
                    setup();
                }
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
        var failed = 0;
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
                failed = force(param[0], param[1]);
                break;
            case "add":
                failed = add(param[0], parseInt(param[1]), parseInt(param[2]), parseInt(param[3]), parseInt(param[4]), parseInt(param[5]), param[6]);
                break;
        }
        if(failed !== 1){
            now.innerHTML = `<img src=${check_icon_src} alt="check" id="check_icon">${input}`;
        } else {
            now.innerHTML = `<img src=${alert_icon_src} alt='alert' id='alert_icon'>명령어의 형식이 잘못되었습니다.`;
        }
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
}

window.addEventListener("load", () => {
    document.getElementById("reset").addEventListener("click", () => { 
        document.getElementsByTagName("main")[0].innerHTML="";
        setup();
    })
    document.getElementById("undo").addEventListener("click", () => {
        if(us_recent[us_recent.length-1].constructor.name === "Obstacle"){
            us_add_ob.splice(us_add_ob.length-1, 1); 
        }
        else if(us_recent[us_recent.length-1].constructor.name === "Jump_pad"){
            us_add_jump.splice(us_add_jump.length-1, 1); 
        }
        else if(us_recent[us_recent.length-1].constructor.name === "Grav_pad"){
            us_add_grav.splice(us_add_grav.length-1, 1); 
        }
    })
})

function dev_next_level() {
    if(stage >= 8){
        document.getElementsByTagName("body")[0].innerHTML="";
        var div = document.createElement("div");
        div.setAttribute("id", "all_div");
        document.getElementsByTagName("body")[0].appendChild(div);
        document.write("<h1 id='finished'>축하합니다! 다 끝내셨어요!</h1>");
        var img = document.createElement("img");
        img.src = "https://c8.alamy.com/comp/BKW1KN/young-man-blowing-party-horn-blower-close-up-BKW1KN.jpg"
        document.getElementById("img_div").appendChild(img);
        return ;
    }else {
        stage++;
        document.getElementsByTagName("main")[0].innerHTML="";
        setup();
    }
}