function isOn_grav(player_x, player_y, grav_x, grav_y, width, height) {
    var grav_x1 = grav_x - width/2;
    var grav_y1 = grav_y - height/2;
    var grav_x2 = grav_x + width/2;
    var grav_y2 = grav_y + height/2;

    return (grav_x1 <= player_x && player_x <= grav_x2 && grav_y1 <= player_y && player_y <= grav_y2);
}