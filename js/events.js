var Engine = new engine
var Game = new game
class events{
    enterCode(debugCode){
        if(debugCode === 'admin'){
            Game.act = prompt('Enter act number');
            Game.scene = prompt('Enter scene number')
        }
    }
    survivorsTalking(){
        if(Game.survivors.Jake.found == true && Game.survivors.Jake.speaking == true){
            $('.scenario').css(
                'color','#00B59C'
            )
        }
    }
}



var event = new events
