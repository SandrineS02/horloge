// function horloge() {
    // var ladate = new Date;
    
    // var seconde = ladate.getSeconds();
    // var minute = ladate.getMinutes();
    // var heure = ladate.getHours();
    // var degS = seconde * 6;
    // var degM = minute * 6;
    // var degH = heure * 30;
    // document.getElementById('aiguilleS').style.transform = `rotate(${degS}deg)`;
    // document.getElementById('aiguilleM').style.transform = "rotate(" + degM + "deg)";
    // document.getElementById('aiguilleH').style.transform =  "rotate(" + degH + "deg)";
    // setTimeout(horloge, 500);console.log(heure)
// }
// horloge();

class Horloge{
    constructor(){
        this.date = new Date();
 
        } 

    convertTZ(timeZone) { ;
    let newDate=  this.date.toLocaleString("fr-FR", {timeZone});
    
    let splitDate = newDate.split(" ");
    
    let time = splitDate[1].split(":")
    console.log(time)
    return time;
}


   
  
  
  

    getDisplay = () =>{ 
         
        let time=  this.convertTZ(document.getElementById('pays').value);

        document.querySelector('h1').innerHTML = document.getElementById('pays').value;

        document.getElementById('aiguilleH').style.transform =  "rotate(" + time[0] *30 + "deg)";
        document.getElementById('aiguilleM').style.transform = "rotate("  + time[1] *6 + "deg)";
        document.getElementById('aiguilleS').style.transform = `rotate(${time[2] *6}deg)`;

        
         document.getElementById('am-pm').innerHTML= time[0]<=12?'AM':'PM';
        


        switch (document.getElementById('pays').value) {
        case "Asia/Tokyo":
            document.body.style.backgroundImage ="url(country/japon.jpg)";
            document.getElementById('horloge').style.background ="url(japan.png)";
            document.body.style.backgroundSize =" 100% 100vh";
            break;
        case "Europe/Paris":
            document.body.style.backgroundImage ="url(country/paris.jpg)";
            document.body.style.backgroundSize =" 100% 100vh";
            document.getElementById('horloge').style.backgroundImage ="url(paris.png)";
            break;
        case "America/New_York":
            document.body.style.backgroundImage ="url(country/NY.jpg)";
            document.body.style.backgroundSize =" 100% 100vh";
            document.getElementById('horloge').style.backgroundImage ="url(NY.png)";
            break;
            
    } 
    }
    
}
    

       
                   
setInterval(()=>{
    let horloge = new Horloge();
    
    horloge.getDisplay();
    
},1000)









