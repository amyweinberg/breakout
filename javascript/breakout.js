
import Game from './game.js'
import Welcome from './welcome.js'
import Gameover from './gameover.js'

const VIEW_NAMES = {
    welcome: 'w',
    game: 'g',
    gameover: 'go'
}

let views = {}
let gameState = {
        currentView: VIEW_NAMES.welcome
    }

function render(data) {
    //clean up (call remove on the current view)
    for(var viewName in views) {
        if(views[viewName])
            views[viewName].remove()
    }

    //Render the appropriate view
    views[data.currentView].init()
}

document.addEventListener("DOMContentLoaded", function(){

    let viewContainer = document.getElementById('view-container')
    
    let welcomeView = views[VIEW_NAMES.welcome] = new Welcome(viewContainer)
    let gameView = views[VIEW_NAMES.game] = new Game(viewContainer)
    let gameoverView = views[VIEW_NAMES.gameover] = new Gameover(viewContainer)

    //wire up events from views
    //when the start game button is pushed, change gameState and call render(gameState)
    welcomeView.onGameStart(function(){
        gameState.currentView = VIEW_NAMES.game
        render(gameState)
    })

     gameoverView.onGameStart(function(){
        gameState.currentView = VIEW_NAMES.game
        render(gameState)
    })
    
    //Step 1, document.createElement(). Step 2: Invent your own front end framework using ES6 classes and pub/sub. Thanks honey.

    render(gameState)
});
