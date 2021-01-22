function isOn_jump(player_x, player_y, jump_x, jump_y, width, height) {
    var jump_x1 = jump_x - width/2;
    var jump_y1 = jump_y - height/2;
    var jump_x2 = jump_x + width/2;
    var jump_y2 = jump_y + height/2;

    return (jump_x1 <= player_x && player_x <= jump_x2 && jump_y1 <= player_y && player_y <= jump_y2);
    
}