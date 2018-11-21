function horloge() {
    var ladate = new Date;
    var seconde = ladate.getSeconds();
    var minute = ladate.getMinutes();
    var heure = ladate.getHours();

    var degS = seconde * 6;
    var degM = minute * 6;
    var degH = heure * 30;



    document.getElementById('aiguilleS').style.transform = `rotate(${degS}deg)`;
    document.getElementById('aiguilleM').style.transform = "rotate(" + degM + "deg)";
    document.getElementById('aiguilleH').style.transform =  "rotate(" + degH + "deg)";

    setTimeout(horloge, 500);

}

horloge();