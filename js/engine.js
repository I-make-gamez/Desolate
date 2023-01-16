class engine {
    init = {
        code(debugCode){
            if(Engine.options.debug === true){
                Game.debugMode.on(debugCode)
            }else{
                console.error('Error: You must turn on debug mode to access codes!')
            }
        },
        debug(bool){
            Engine.options.debug = bool; 
            if(bool === true){console.warn('Turning on debug mode could cause game errors! Turn on at your own risk!')}
        }
    }
    game = {
        new() {
            var Game = new game;
            Game.start()
        }
    }
    options = {
        'debug': false
    }
}


var Engine = new engine

