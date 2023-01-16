$('.proceed').click(function () {
    if (Game.act === 1 && Game.scene === 1) {
        Game.give(Game.achivements.hdwgh)
        $('.text').text("You realize your phone has no service.\nWhat do you do?")
        $('.proceed').hide()
        $('.choice1').text("Search for\nsurvivors")
        $('.choice1').show();
        $('.choice2').text("Find some help")
        $('.choice2').show();
        Game.scene = 2;
    } else {
        switch (Game.act) {
            case 1:
                switch (Game.scene) {
                    case 3:
                        Game.survivors.Jake.speaking = true;
                        Game.alert('Characters speak in colored text', 'Alert!')
                        $('.text').text('This is some Dummy Text.')
                }
        }
    }
})

// $('.text')
// $('.proceed')
// $('.choice1')
// $('.choice2')

$('.choice1').click(function () {
    switch (Game.act) {
        case 1:
            switch (Game.scene) {
                case 2:
                    Game.survivors.Jake.found = true
                    Game.give(Game.achivements.oaf)
                    $('.proceed').show()
                    $('.choice1').hide()
                    $('.choice2').hide()
                    $('.text').text(
                        "You search the wrekage of the plane and find one survivor. He says his name is Jack"
                    )
                    Game.scene += 1
            }
            break;
        case 2:
            break;
    }
})

// $('.text')
// $('.proceed')
// $('.choice1')
// $('.choice2')

$('.choice2').click(function () {
    switch (Game.act) {
        case 1:
            switch (Game.scene) {
                case 2:
                    Game.give(Game.achivements.nar)
                    $('.choice1').text(
                        "Call it home"
                    )
                    $('.choice2').text(
                        "Keep searching"
                    )
                    $('.text').text(
                        "You wander for a little while and find an abbandonded hut in the middle of the woods. Looks comfy and safe. What do you do?"
                    )
                    Game.scene = 13
            }
            break;
        case 2:
            break;
    }
})

var Engine = new engine
var Game = new game

// $('.text')
// $('.proceed')
// $('.choice1')
// $('.choice2')