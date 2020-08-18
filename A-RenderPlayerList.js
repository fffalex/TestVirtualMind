// PlayerService should be created before create a new PlayerDetailsController
// const playerService = new PlayerService();
// 
// Then inject de the service:
// const playerDetailController = new PlayerDetailsController(8, playerService);
// playerDetailController.showTeammatesClick();

class PlayerService {
    getPlayerTeamId(playerId) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `/player/${playerId}/team`,
                success: (team) => {
                    resolve(team.id);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    }

    getPlayers(teamId) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `/team/${teamId}/player`,
                success: (playerList) => {
                    resolve(playerList);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    }
}

/**
 * Contains player and teams methods.
 * @class
 * @public
 */
class PlayerDetailsController {
    PlayerService;
    playerId;

    /**
     * Requires inputs.
     * @param playerId playerId required for getPlayerTeamId input
     * @param PlayerService a PlayerService instance
     */
    constructor(playerId, PlayerService) {
        this.playerId = playerId;
        this.PlayerService = PlayerService;
    }

    /*
    * Gets all team's player with a give playerId.
    */
    showTeammatesClick() {
        this.PlayerService.getPlayerTeamId(this.playerId).then((teamId) => {
            this.PlayerService.getPlayers(teamId).then((playerList) => {
                // Render playerList
            });
        });
    }

    /*
    * Same as showTeammatesClick using async/await
    */
    async showTeammatesClickAsyncAwait() {
        const teamId = await this.PlayerService.getPlayerTeamId(this.playerId);
        const playerList = await this.PlayerService.getPlayers(teamId);
        // Render playerList
    }
}
