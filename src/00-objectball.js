function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 2,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

//   ===========================================================
//                     REFACTORED SOLUTION
//   ===========================================================

const homeTeam = gameObject().home
const awayTeam = gameObject().away
const allPlayers = {...homeTeam.players, ...awayTeam.players}

function numPointsScored(playerName) {
    for(const player in allPlayers){
        if(player === playerName) return allPlayers[playerName].points
    }
}

function shoeSize(playerName) {
    for(const player in allPlayers){
        if(player === playerName) return allPlayers[playerName].shoe
    }
}

function teamColors(teamInput) {
    return homeTeam.teamName === teamInput ? homeTeam.colors : awayTeam.colors
}

function teamNames() {
    return [homeTeam.teamName, awayTeam.teamName]
}

function playerNumbers(teamName) {
    let teamPlayers = selectTeam(teamName);
    let result = [];
    for (const player in teamPlayers){
        result.push(teamPlayers[player].number)
    }
    return result;
}

function bigShoeRebounds() {
    return allPlayers[bigShoe().player].rebounds
}

function playerStats(playerName) {
    return allPlayers[playerName]
}

function mostPointsScored() {
    let mostPoints = { points: 0, player: null}
    for(const player in allPlayers){
        if(allPlayers[player].points > mostPoints.points){
            mostPoints.points = allPlayers[player].points
            mostPoints.player = player
        }
    }
    return mostPoints.player
}

function winningTeam() {
    const game = gameObject()
    let teamPoints = { home: 0, away: 0 }
    for (const team in game) {
        const players = game[team].players
        for (const player in players) {
            teamPoints[team] += players[player].points
        }
    }
    return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName
}

function playerWithLongestName() {
    let longest = { nameLength: 0, name: null}
    for(const name in allPlayers){
        if(name.length > longest.nameLength){
            longest.nameLength = name.length
            longest.name = name
        }
    }
    return longest.name
}

function doesLongNameStealATon() {
    return playerWithLongestName() === mostSteals()
}




//   ===========================================================
//                           HELPER FUNCTIONS 
//   ===========================================================

function selectTeam(teamName) {
    return homeTeam.teamName === teamName ? homeTeam.players : awayTeam.players
}
function mostSteals() {
    let player = { steals: 0, playerName: "" };
    for (let gameKey in game) {
        let teamObj = game[gameKey].players;
        for (let playerKey in teamObj) {
            if (teamObj[playerKey].steals > player.steals) {
                player.steals = teamObj[playerKey].steals
                player.playerName = playerKey
            }
        }
    }
    return player.playerName
}

function bigShoe(){
    let bigPlayer = { shoe: 0, player: null}
    for(const player in allPlayers){
        if(allPlayers[player].shoe > bigPlayer.shoe){
            bigPlayer.shoe = allPlayers[player].shoe
            bigPlayer.player = player
        }
    }
    return bigPlayer
}