function force(target, direction, power){
    if(target === "player"){
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
                Body.applyForce(target, {x: target.position.x, y: target.position.y }, { x: +power, y: 0});
                break;
            default:
                return;
        }
    }
    param = [];
    return ;
}