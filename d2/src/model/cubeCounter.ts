type cubeQuantity = {
    red: number;
    green: number;
    blue: number;
}

export default class cubeCounter {
    games: string;
    cubeQuantity: cubeQuantity;

    constructor(games:string, red: number, green:number, blue:number) {
        this.games = games;
        this.cubeQuantity = {red: red,green: green,blue: blue}
    }

    getGameID = (gameRow: string):number => 0;
    
    getCubesQuantity = (gamesRow: string):cubeQuantity => ({red: 0, green: 0, blue:0});

    possibleGame = (cubeQuantity: cubeQuantity):boolean => false;
    
    computeIdSum = ():number => {
        return 0;
    } 

}