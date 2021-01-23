function isOn_jump(player_x, player_y, jump_x, jump_y, jump_width, jump_height) {
    var jump_x1 = jump_x - jump_width/2;
    var jump_y1 = jump_y - jump_height/2;
    var jump_x2 = jump_x + jump_width/2;
    var jump_y2 = jump_y + jump_height/2;

    return (jump_x1 <= player_x && player_x <= jump_x2 && jump_y1 <= player_y && player_y <= jump_y2);
    
}