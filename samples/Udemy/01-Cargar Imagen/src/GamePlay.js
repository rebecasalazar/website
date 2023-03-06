
GamePlayManager = {
    init: function() {
        console.log("init");
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
    },
    update: function() {
        console.log("update");
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");