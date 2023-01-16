class game {
    act = 1
    scene = 1
    start() {
        if (this.act == 1 && this.scene == 1) {
            $(".choice1").hide()
            $(".choice2").hide()
        }
    }
    give(Achivement) {
        eval(Game.alert(Achivement.name +" - "+Achivement.info, 'Achievement Get!'))
    }
    survivors = {
        'Jake': {
            'name': 'Jake',
            'bio': "I wonder why he's always standing behind you.",
            'age': "24",
            'found': false,
            'speaking': false
        },
    }
    achivements = {
        'hdwgh': {
            'name': 'How did we get here?',
            'info': 'Play the game for the first time'
        },
        'hwdtb': {
            'name': 'Havent we dont this before?',
            'info': 'Play the game a second time'
        },
        'sd': {
            'name ': 'Serious Dedication',
            'info': 'find all endings'
        },
        'oaf': {
            'name': 'Oooh a friend!',
            'info': 'find a survivor of the wrekage'
        },
        'nar': {
            'name': 'Narcisist',
            'info': 'You left the wrekage without looking for any survivors. Pretty selfish if you ask me'
        }
    }
    debugMode = {
        on(debugCode) {
            var E = new events
            E.enterCode(debugCode);
            Engine.options.debug = true
        },
        off() {
            Engine.options.debug = false
        }
    }
    closeAlert() {
        $('.notif').fadeOut(200)
    }
    alert(text, title) {
        $('.ntit').text(title)
        $('.ntext').text(text)
        $('.notif').fadeIn(200)
    }
}

setInterval(()=>{
    var E = new events
    E.survivorsTalking()
}, 1)

var Engine = new engine
var Game = new game

$('.notif').click(function () {
    Game.closeAlert()
})