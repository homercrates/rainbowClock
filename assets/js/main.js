const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');


function setDate(whereSec, whereMin, whereHour) {
    let canvasSec = whereSec;
    const now = new Date();
    const secondsATM = now.getSeconds();
    const secondsFill = secondsATM * 5;
    


    if(canvasSec.getContext) {
        var ctxSec = canvasSec.getContext('2d');
            ctxSec.fillRect(secondsFill, 0, 5, 150);
            console.log(secondsATM);
            

            if(secondsATM <= 18) {

                result = secondsATM * 18.875;
                rToY = 'rgb(255,' + result + ', 0)';
                ctxSec.fillStyle = rToY;
                console.log(result, "-result in line 24:: seoncdsATM=" + secondsATM)

            } else if(secondsATM > 18 && secondsATM < 27) {
                yellowCounter = (secondsATM - 18);
                let yellowToG = 255 - (yellowCounter * 18.33333333);
                yToG ='rgb(' + yellowToG + ', 255, 0)';
                ctxSec.fillStyle = yToG;

            } else if(secondsATM > 27 && secondsATM < 39) {
                let blueCounter = secondsATM - 27;
                let greenToB = 255 - (blueCounter * 21.25);
                let blueToG = 0 + (blueCounter * 21.25);
                gToB = 'rgb(0, ' + greenToB + ', ' + blueToG +  ')';
                ctxSec.fillStyle = gToB;

            } else if(secondsATM > 39 && secondsATM < 59) {
                let purpleCounter = secondsATM - 40;
                blueToP = purpleCounter * 8.875;
                purpToB = 255 - (purpleCounter * 4.75)
                bToP = 'rgb(' + blueToP + ', 0,' + purpToB + ')';
                ctxSec.fillStyle = bToP;

            }

            
            if(secondsFill == 295) { 
                ctxSec.clearRect(0, 0, canvasSec.width, canvasSec.height);
            }            
    }

    let canvasMin = whereMin;
    const minutesATM = now.getMinutes();
    const minutesFill = minutesATM * 5;
    if(canvasMin.getContext) {
        var ctxMin = canvasMin.getContext('2d');
            ctxMin.fillRect(minutesFill, 0, 5, 150);


            if(minutesFill == 295) { 
                ctxMin.clearRect(0, 0, canvasMin.width, canvasMin.height);
            }            
    } 

    let canvasHours = whereHour;
    const hoursATM = now.getHours();
    // for a 12 hour set up  
    // if i want 24hr hoursFill = hoursATM * 12.5;
    const hoursFill = (hoursATM * 25) / 2;
    if(canvasHours.getContext) {
        var ctxHours = canvasHours.getContext('2d');
            ctxHours.fillRect(hoursFill, 0, 5, 150);
            
            // for a 24hr hoursFill == 287.5
            if(hoursFill == 275) {   
                ctxHours.clearRect(0, 0, canvasHours.width, canvasHours.height);
            }            
    }    
}


setInterval(function() {setDate(seconds, minutes, hours);}, 1000);





// the way i worked it out
// first make sure it draws then I tied the values to Date()
//let b = 0;
/*
function drawTick(where) {
    var canvas = where;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        b+=5
        ctx.fillRect(b, 0, 5, 150);
        if(b == 300) {
            b = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log('trip');
        }
    }
}
*/