function isClear(player_x, player_y, goal_x, goal_y, width, height) {
    var goal_x1 = goal_x - width/2;
    var goal_y1 = goal_y - height/2;
    var goal_x2 = goal_x + width/2;
    var goal_y2 = goal_y + height/2;

    return (goal_x1 <= player_x && player_x <= goal_x2 && goal_y1 <= player_y && player_y <= goal_y2);
}

function isOut(player_x, player_y) {
    return (player_x < -100 || player_x > 1920 || player_y < -100 || player_y > 1020);
}