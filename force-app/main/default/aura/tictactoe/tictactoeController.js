({
    oninit: function(component, event, helper) {
         var data = [
            {id:'tile1',value:''},
            {id:'tile2',value:''},
            {id:'tile3',value:''},
            {id:'tile4',value:''},
            {id:'tile5',value:''},
			{id:'tile6',value:''},            
            {id:'tile7',value:''},
            {id:'tile8',value:''},
            {id:'tile9',value:''},
        ]
        component.set('v.state', data)
    },
    handleOnClick: function(component, event, helper) {
       
        var showImage = component.get('v.showImage');
        if (showImage == 'show-x') {
            if (event.srcElement.value == 'tile1') {
                if (component.find('tile1x').get('v.class') == 'slds-hide' && component.find('tile1o').get('v.class') == 'slds-hide') {
                    component.find('tile1x').set('v.class', 'slds-show');
                    component.find('tile1o').set('v.class', 'slds-hide');
                    component.set('v.tile1', 'x');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile2') {
                if (component.find('tile2x').get('v.class') == 'slds-hide' && component.find('tile2o').get('v.class') == 'slds-hide') {
                    component.find('tile2x').set('v.class', 'slds-show');
                    component.set('v.tile2', 'x');
                    component.find('tile2o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile3') {
                if (component.find('tile3x').get('v.class') == 'slds-hide' && component.find('tile3o').get('v.class') == 'slds-hide') {
                    component.find('tile3x').set('v.class', 'slds-show');
                    component.set('v.tile3', 'x');
                    component.find('tile3o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile4') {
                if (component.find('tile4x').get('v.class') == 'slds-hide' && component.find('tile4o').get('v.class') == 'slds-hide') {
                    component.find('tile4x').set('v.class', 'slds-show');
                    component.set('v.tile4', 'x');
                    component.find('tile4o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile5') {
                if (component.find('tile5x').get('v.class') == 'slds-hide' && component.find('tile5o').get('v.class') == 'slds-hide') {
                    component.find('tile5x').set('v.class', 'slds-show');
                    component.set('v.tile5', 'x');
                    component.find('tile5o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile6') {
                if (component.find('tile6x').get('v.class') == 'slds-hide' && component.find('tile6o').get('v.class') == 'slds-hide') {
                    component.find('tile6x').set('v.class', 'slds-show');
                    component.set('v.tile6', 'x');
                    component.find('tile6o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile7') {
                if (component.find('tile7x').get('v.class') == 'slds-hide' && component.find('tile7o').get('v.class') == 'slds-hide') {
                    component.find('tile7x').set('v.class', 'slds-show');
                    component.set('v.tile7', 'x');
                    component.find('tile7o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile8') {
                if (component.find('tile8x').get('v.class') == 'slds-hide' && component.find('tile8o').get('v.class') == 'slds-hide') {
                    component.find('tile8x').set('v.class', 'slds-show');
                    component.set('v.tile8', 'x');
                    component.find('tile8o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            } else if (event.srcElement.value == 'tile9') {
                if (component.find('tile9x').get('v.class') == 'slds-hide' && component.find('tile9o').get('v.class') == 'slds-hide') {
                    component.find('tile9x').set('v.class', 'slds-show');
                    component.set('v.tile9', 'x');
                    component.find('tile9o').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-o');
                }
            }
        } else {
            if (event.srcElement.value == 'tile1') {
                if (component.find('tile1x').get('v.class') == 'slds-hide' && component.find('tile1o').get('v.class') == 'slds-hide') {
                    component.find('tile1o').set('v.class', 'slds-show');
                    component.set('v.tile1', 'o');
                    component.find('tile1x').set('v.class', 'slds-hide');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile2') {
                if (component.find('tile2x').get('v.class') == 'slds-hide' && component.find('tile2o').get('v.class') == 'slds-hide') {
                    component.find('tile2x').set('v.class', 'slds-hide');
                    component.find('tile2o').set('v.class', 'slds-show');
                    component.set('v.tile2', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile3') {
                if (component.find('tile3x').get('v.class') == 'slds-hide' && component.find('tile3o').get('v.class') == 'slds-hide') {
                    component.find('tile3x').set('v.class', 'slds-hide');
                    component.find('tile3o').set('v.class', 'slds-show');
                    component.set('v.tile3', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile4') {
                if (component.find('tile4x').get('v.class') == 'slds-hide' && component.find('tile4o').get('v.class') == 'slds-hide') {
                    component.find('tile4x').set('v.class', 'slds-hide');
                    component.find('tile4o').set('v.class', 'slds-show');
                    component.set('v.tile4', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile5') {
                if (component.find('tile5x').get('v.class') == 'slds-hide' && component.find('tile5o').get('v.class') == 'slds-hide') {
                    component.find('tile5x').set('v.class', 'slds-hide');
                    component.find('tile5o').set('v.class', 'slds-show');
                    component.set('v.tile5', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile6') {
                if (component.find('tile6x').get('v.class') == 'slds-hide' && component.find('tile6o').get('v.class') == 'slds-hide') {
                    component.find('tile6x').set('v.class', 'slds-hide');
                    component.find('tile6o').set('v.class', 'slds-show');
                    component.set('v.tile6', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile7') {
                if (component.find('tile7x').get('v.class') == 'slds-hide' && component.find('tile7o').get('v.class') == 'slds-hide') {
                    component.find('tile7x').set('v.class', 'slds-hide');
                    component.find('tile7o').set('v.class', 'slds-show');
                    component.set('v.tile7', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile8') {
                if (component.find('tile8x').get('v.class') == 'slds-hide' && component.find('tile8o').get('v.class') == 'slds-hide') {
                    component.find('tile8x').set('v.class', 'slds-hide');
                    component.find('tile8o').set('v.class', 'slds-show');
                    component.set('v.tile8', 'o');
                    component.set('v.showImage', 'show-x');
                }
            } else if (event.srcElement.value == 'tile9') {
                if (component.find('tile9x').get('v.class') == 'slds-hide' && component.find('tile9o').get('v.class') == 'slds-hide') {
                    component.find('tile9x').set('v.class', 'slds-hide');
                    component.find('tile9o').set('v.class', 'slds-show');
                    component.set('v.tile9', 'o');
                    component.set('v.showImage', 'show-x');
                }
            }
        }
        var tile1 = component.get('v.tile1');
        var tile2 = component.get('v.tile2');
        var tile3 = component.get('v.tile3');
        var tile4 = component.get('v.tile4');
        var tile5 = component.get('v.tile5');
        var tile6 = component.get('v.tile6');
        var tile7 = component.get('v.tile7');
        var tile8 = component.get('v.tile8');
        var tile9 = component.get('v.tile9');
        if (((tile1 == tile2) && (tile1 == tile3)) || ((tile1 == tile4) && (tile1 == tile7)) ||
            ((tile1 == tile5) && (tile1 == tile9)) || ((tile3 == tile5) && (tile3 == tile7)) ||
            ((tile2 == tile5) && (tile2 == tile8)) || ((tile4 == tile5) && (tile4 == tile6)) ||
            ((tile7 == tile8) && (tile8 == tile9)) || ((tile3 == tile6) && (tile3 == tile9))) {
            if (showImage == 'show-x') {
                if (component.get('v.player1') == 'X') {
                    component.set('v.gameResultModal', true);
                    component.set('v.gameResultMessage', 'Player 1 won the match')
                } else {
                    component.set('v.gameResultModal', true);
                    component.set('v.gameResultMessage', 'Player 2 won the match')
                }
            } else {
                if (component.get('v.player2') == 'O') {
                    component.set('v.gameResultModal', true);
                    component.set('v.gameResultMessage', 'Player 2 won the match');
                } else {
                    component.set('v.gameResultModal', true);
                    component.set('v.gameResultMessage', 'Player 1 won the match');
                }
            }
            component.set('v.gameCompleted', true);
        }
        if (component.get('v.gameCompleted') == false && tile1 != 'tile1' && tile2 != 'tile2' && tile3 != 'tile3' && tile4 != 'tile4' && tile5 != 'tile5' && tile6 != 'tile6' &&
            tile7 != 'tile7' && tile8 != 'tile8' && tile9 != 'tile9') {
            component.set('v.gameResultModal', true);
            component.set('v.gameResultMessage', 'Game Tied')
        }
    },
    submitDetails: function(component, event, helper) {
        if (component.get('v.player1') == 'X') {
            component.set('v.showImage', 'show-x');
        } else {
            component.set('v.showImage', 'show-o');
        }
        component.set("v.playerSelectionModal", false);
    },
    onPlayer1Change: function(component, event, helper) {
        if (component.get('v.player1') == 'X') {
            component.set('v.player2', 'O');
        } else {
            component.set('v.player2', 'X');
        }
    },
    onPlayer2Change: function(component, event, helper) {
        if (component.get('v.player2') == 'X') {
            component.set('v.player1', 'O');
        } else {
            component.set('v.player1', 'X');
        }
    },
    restart: function(component, event, helper) {
        location.reload();
    }
})