var hotPlate = [];
var hotPlateUpdated = []
hotPlate8 = [
    0, 50, 50, 50, 50, 50, 50, 0,
    50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 100, 100, 50, 50, 50,
    50, 50, 50, 100, 100, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50,
    0, 50, 50, 50, 50, 50, 50, 0
]

// currentHotPlate = [
//     0, 50, 50, 50, 50, 0,
//     50, 50, 50, 50, 50, 50,
//     50, 50, 100, 100, 50, 50,
//     50, 50, 100, 100, 50, 50,
//     50, 50, 50, 50, 50, 50,
//     0, 50, 50, 50, 50, 0
// ]


currentHotPlate = [
    0, 20, 50, 50, 20, 0,
    20, 20, 50, 50, 20, 20,
    50, 50, 100, 100, 50, 50,
    50, 50, 100, 100, 50, 50,
    20, 20, 50, 50, 20, 20,
    0, 20, 50, 50, 20, 0
]


var arrayHolder = document.getElementById("js_thatArray");
var countTheArrayItems = 1;

var currentAverage, currentIndex, gridNum, gridTotal;

gridNum = 6;
gridTotal = gridNum * gridNum;

var first100 = ((gridTotal / 2) - (gridNum / 2) - 1);
var second100 = ((gridTotal / 2) - (gridNum / 2));
var third100 = ((gridTotal / 2) + (gridNum / 2) - 1);
var fourth100 = ((gridTotal / 2) + (gridNum / 2));

var firstZero = (gridNum / gridNum) - 1;
var secondZero = (gridNum) - 1;
var thirdZero = (gridNum * (gridNum - 1) + 1) - 1;
var fourthZero = (gridNum * gridNum) - 1;


// use a counter for testing 
// initialize it now
var countThis = 0;
var thatcounter = 0;
var currentTop = 0;

// make a copy of the currentHotPlate array
function getHotPlate() {
    arrayHolder.innerHTML = '';
    hotPlate.length = 0;
    hotPlate = currentHotPlate.slice(0);
    thatcounter = 0;

    for (i = 0; i < hotPlate.length; i++) {

        if (hotPlate[i] == 0 || hotPlate[i] == 100) {
            thatcounter++;

        } else {
            if (i >= gridNum && i < (gridTotal - gridNum)) {
                //interior number will be divided by 4
                var getAvgOfSurrounding = 4;
            } else {
                // the numbers on the edge of the hotPlate will only be divided by 3
                var getAvgOfSurrounding = 3;
            }
            // This checks the right side values
            if (i == (gridNum * 2) - 1 || i == (gridNum * 3) - 1 || i == (gridNum * 4) - 1 || i == (gridNum * 5) - 1) {
                var getAvgOfSurrounding = 3;
            }
            // This checks the left side values
            if (i == gridNum * 1 || i == gridNum * 2 || i == gridNum * 3 || i == gridNum * 4) {
                var getAvgOfSurrounding = 3;
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
            if (hotPlate[i - 1]) {
                currentLeft = hotPlate[i - 1];
            } else {
                currentLeft = 0;
            }
            if (hotPlate[i + 1]) {
                currentRight = hotPlate[i + 1];
            } else {
                currentRight = 0;
            }

            currentAverage = Math.round(((currentTop + currentBottom + currentLeft + currentRight) / getAvgOfSurrounding) * 1000) / 1000;
            currentHotPlate[i] = currentAverage;
        }
    }
    console.log(thatcounter);
    for (i = 0; i < currentHotPlate.length; i++) {
        var currentVal = currentHotPlate[i];
        arrayHolder.innerHTML += "<div class='cell'>" + currentVal + "</div> ";
        // if index divides by 8 add a <br>
        if ((countTheArrayItems) % (6) == 0) {
            arrayHolder.innerHTML += "<br>";
        }
        countTheArrayItems++;
    }
};
getHotPlate();