                        // This checks the right side values
                        if (i == ((gridNum*2) -1) || i == ((gridNum*3) -1) || i == ((gridNum*4) -1) || i == ((gridNum*5) -1) || i == ((gridNum*6) -1) || i == ((gridNum*7) -1) || i == ((gridNum*8) -1)   ){
                            getAvgOfSurrounding = 3;
                            // there is no right value
                            currentRight = 0;
                        } else {
                            if (hotPlate[i + 1]) {
                                currentRight = hotPlate[i + 1];
                            } else {
                                currentRight = 0;
                            }
                        }

                        // This checks the left side values
                        if ( i == gridNum*1 || i == gridNum*2 || i == gridNum*3 || i == gridNum*4 || i == gridNum*5 || i == gridNum*6 || i == gridNum*7 ) {
                            getAvgOfSurrounding = 3;
                            // there is no left value
                            currentLeft = 0;
                        } else {
                            if (hotPlate[i - 1]) {
                                currentLeft = hotPlate[i - 1];
                            } else {
                                currentLeft = 0;
                            }
                        }





                        if (gridNum*(i+1) -1) {
                            getAvgOfSurrounding = 3;
                            currentRight = 0
                        }

////////////////////////////////////////////////////////////////////////
<script type="text/javascript">
var hotPlate = [];
var hotPlateUpdated = [];

currentHotPlate = [
0,1,1,1,1,0,
1,1,1,1,1,1,
1,1,100,100,1,1,
1,1,100,100,1,1,
1,1,1,1,1,1,
0,1,1,1,1,0,
]
currentHotPlate8 = [
0,	50,	50,	50,	50,	50,	50,	0,
50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	100,100,50,	50,	50,
50,	50,	50,	100,100,50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,
0,	50,	50,	50,	50,	50,	50,	0
]
currentHotPlate12 = [
0,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	0,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	100,100,50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	100,100,50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,
0,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	0
]


var arrayHolder = document.getElementById("js_thatArray");
var turnsHolder = document.getElementById("js_howManyTurns");
var countTheArrayItems = 1;

var currentAverage, currentIndex, gridNum, gridTotal;

gridNum = 6;
gridTotal = gridNum * gridNum;

var first100 = ((gridTotal / 2) - (gridNum / 2) -1);
  var second100 = ((gridTotal / 2) - (gridNum / 2));
  var third100 = ((gridTotal / 2) + (gridNum / 2) -1);
  var fourth100 = ((gridTotal / 2) + (gridNum / 2));

var firstZero = (gridNum/gridNum)-1;
var secondZero = (gridNum)-1;
var thirdZero = (gridNum*(gridNum-1)+1)-1;
var fourthZero = (gridNum * gridNum)-1;


// use a counter for testing 
// initialize it now
var countThis = 0;
var thatcounter = 0;
var getAvgOfSurrounding;
var currentTop = 0;
var currentBottom = 0;
var currentLeft = 0;
var currentRight = 0;

// make a copy of the currentHotPlate array
function getHotPlate(){
    arrayHolder.innerHTML= '';
    hotPlate.length = 0;
    hotPlate = currentHotPlate.slice(0);

    for (i = 0; i < hotPlate.length ; i ++ ){
        
        // Don't change the 0 or the 100 cells
        if (hotPlate[i] !== 0 && hotPlate[i] !== 100) {
            if(i >= gridNum && i < (gridTotal - gridNum)){
                //interior number will be divided by 4
                getAvgOfSurrounding = 4;
            } else {
                // the numbers on the edge of the hotPlate will only be divided by 3
                getAvgOfSurrounding = 3;
            }
            // This checks the right side values

            /*
            if (i == ((gridNum*2) -1) || i == ((gridNum*3) -1) || i == ((gridNum*4) -1) || i == ((gridNum*5) -1) || i == ((gridNum*6) -1) || i == ((gridNum*7) -1) || i == ((gridNum*8) -1)   ){
                getAvgOfSurrounding = 3;
                // there is no right value
                currentRight = 0;
            */
/*                        6*(0+1) -1 = 5
            6*(1+1) -1 = 11
            6*(2+1) -1 = 17
            6*(3+1) -1 = 23
            6*(4+1) -1 = 29

if (i < gridNum) {
if (i == (gridNum*(i+1) -1)) {
getAvgOfSurrounding = 3;
currentRight = 0;
}
}*/



/*
            for(h = 1; h <= gridNum; h++ ){
                if(i == ((gridNum*h) -1)){
                    console.log("this is i: " + i);
                    getAvgOfSurrounding = 3;
                    currentRight = 0;
                }
            }
            if (hotPlate[i + 1]) {
                currentRight = hotPlate[i + 1];
            } else {
                currentRight = 0;
            }
*/

            if (i % gridNum == (gridNum -1) ){
            //if (i == ((gridNum*i) -1 )) {
            //if (i == ((gridNum*2) -1) || i == ((gridNum*3) -1) || i == ((gridNum*4) -1) || i == ((gridNum*5) -1) || i == ((gridNum*6) -1) || i == ((gridNum*7) -1) || i == ((gridNum*8) -1)   ){    

                getAvgOfSurrounding = 3;
                currentRight = 0;
            } else {
                if (hotPlate[i + 1]) {
                    currentRight = hotPlate[i + 1];
                } else {
                    currentRight = 0;
                }
            }
            
            // if the index is equal to 8, 16, 24, 32, 40, 48, 56
            // This checks the left side values
                //8 % 1 
            if (i % gridNum == 0){
            //if ( i == gridNum*1 || i == gridNum*2 || i == gridNum*3 || i == gridNum*4 || i == gridNum*5 || i == gridNum*6 || i == gridNum*7 ) {

                getAvgOfSurrounding = 3;
                // there is no left value
                currentLeft = 0;
            } else {
                if (hotPlate[i - 1]) {
                    currentLeft = hotPlate[i - 1];
                } else {
                    currentLeft = 0;
                }
            }


            if (hotPlate[i - gridNum]) {
                currentTop = hotPlate[i - gridNum];
            } else {
                currentTop = 0;
            }
            if (hotPlate[i + gridNum]) {
                currentBottom = hotPlate[i + gridNum];
            } else {
                currentBottom = 0;
            }




            currentAverage = Math.round(((currentTop + currentBottom + currentLeft + currentRight)/getAvgOfSurrounding)*1000)/1000;
            //currentAverage = (((gridNum - hotPlate[i] )+(hotPlate[i] - 1)+(hotPlate[i] + 1)+(hotPlate[i] + gridNum))/4);

            currentHotPlate[i] = currentAverage;
        } else {
            // write the zeros and 100s into the array
            currentHotPlate[i] = hotPlate[i];    
        }
        



    
    }
    
    for( h = 0 ; h < currentHotPlate.length ; h++ ){
        var currentVal = currentHotPlate[h];
        arrayHolder.innerHTML += currentVal + " ";
        // if index divides by 8 add a <br>
        if((countTheArrayItems)%(gridNum) == 0 ){
            arrayHolder.innerHTML += "<br>";
        }
        countTheArrayItems++;
    }
    if (countThis < 3 ) {
        setTimeout(getHotPlate, 10);
        //arrayHolder.innerHTML= '';
        //console.log("another: " + countThis);

        countThis++;	
    }

};
getHotPlate();

</script>
