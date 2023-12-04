type cubeQuantity = {
    red: number;
    green: number;
    blue: number;
    [key: string]: number;
}

export default class cubeCounter {
    games: string;
    cubeQuantity: cubeQuantity;

    constructor(games:string, red: number, green:number, blue:number) {
        this.games = games;
        this.cubeQuantity = {red: red,green: green,blue: blue}
    }

    getGameID = (gameRow: string):number => {
        const gameID = gameRow.match('(?<=Game ).*?(?=:)');
        if (gameID && gameID.length === 1) {
            return parseInt(gameID[0])
        } else {
            return 0;
        }
    }
    
    getCubesQuantity = (gamesRow: string):cubeQuantity => {
        let totColors:cubeQuantity = {red: 0,green: 0,blue: 0}
        const turns = gamesRow.split(': ')[1].split('; ')
        
        turns.forEach(turn => {
            const rounds = turn.split(',');
            rounds.forEach(cubes => {
                const n = cubes.replace(/[^0-9]/g, '');
                const s = cubes.match(/[A-Za-z]/g);
                if (s && s?.length) {
                    const name:string = s.join('');
                    if (totColors[name] < parseInt(n)) { totColors[name] = parseInt(n)}
                }
            })
            
            
           
        });
        return totColors;
    }
    possibleGame = (cubeQuantity: cubeQuantity):boolean => {
        for (let color in this.cubeQuantity) {
            if (cubeQuantity[color] > this.cubeQuantity[color]) {
                return false
            }
        }
        return true;
    };
    
    computeIdSum = ():number => {
        let counter: number = 0;
        this.games.split('\n').forEach(gameRow => {
            const cubeQuantity = this.getCubesQuantity(gameRow);
            const gameID = this.getGameID(gameRow);
            const isPossible = this.possibleGame(cubeQuantity); 
            if (isPossible) {
                counter = counter + gameID
            }
        })
        return counter;
    } 

}