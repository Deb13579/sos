class Player {
    constructor() {
        this.index = null
        this.name = null;
        this.score = 0;
          // create the property for the score and intialize with zero
    }

    getID() {
        var playerIDref = database.ref('playerID');
        playerIDref.on("value", (data) => {
            playerID = data.val();
        })
    }

    updateID(ID) {
        database.ref('/').update({
            playerID: ID
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
