class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerIDref = await database.ref('playerID').once("value");
            if (playerIDref.exists()) {
                playerID = playerIDref.val();
                player.getID();
            }
            form = new Form()
            form.display()
        }
    
    }
    
    play(){
        form.hide();
        Player.getPlayerInfo();
    }
}