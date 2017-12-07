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