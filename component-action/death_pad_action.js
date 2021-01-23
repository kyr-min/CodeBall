function isOn_death(player_x, player_y, player_width, death_x, death_y, death_width, death_height) {
    var death_x1 = death_x - death_width/2;
    var death_y1 = death_y - death_height/2;
    var death_x2 = death_x + death_width/2;
    var death_y2 = death_y + death_height/2;

    var player_cor = {
        x_left: {
            x: player_x - player_width/2,
            y: player_y
        },
        x_right: {
            x: player_x + player_width/2,
            y: player_y
        },
        y_top: {
            x: player_x,
            y: player_y - player_width/2
        },
        y_down: {
            x: player_x,
            y: player_y + player_width/2
        }
    }

    if((death_x1 <= player_cor.x_left.x && player_cor.x_left.x <= death_x2 && death_y1 <= player_cor.x_left.y && player_cor.x_left.y <= death_y2)){
        return true;
    }
    if((death_x1 <= player_cor.x_right.x && player_cor.x_right.x <= death_x2 && death_y1 <= player_cor.x_right.y && player_cor.x_right.y <= death_y2)){
        return true;
    }
    if((death_x1 <= player_cor.y_top.x && player_cor.y_top.x <= death_x2 && death_y1 <= player_cor.y_top.y && player_cor.y_top.y <= death_y2)){
        return true;
    }
    if((death_x1 <= player_cor.y_down.x && player_cor.y_down.x <= death_x2 && death_y1 <= player_cor.y_down.y && player_cor.y_down.y <= death_y2)){
        return true;
    }
    
}