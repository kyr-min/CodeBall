
window.addEventListener("load", () => {
    var cv = document.getElementById("defaultCanvas0");
    
    cv.addEventListener("mousemove", (event) => {
        var cors = document.getElementById('cor'); // 출력할 위치 div 지정
    
        var x_cor = parseInt((event.offsetX));  // 정가운데 (0,0) 기준으로 좌표 계산, 정수형으로 변환
        var y_cor = parseInt((event.offsetY * -1 + 920));
    
        var text = "x= " + x_cor + "\n" + "y= " + y_cor; //innerText 설정
        cors.innerText = text;
    })
})