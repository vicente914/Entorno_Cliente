//EL gato

class Cat {
    constructor(tiredness, hunger, loneliness, happiness){
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }

    run(){this.tiredness++}
    play(){this.hunger++}
    watchOtherCats(){this.loneliness++}
    pet(){this.hapinnes++}
    sleep(){this.tiredness--}
    eat(){this.hunger--}
    interactWithCats(){this.loneliness--}
    getAfraid(){this.happiness--}
}