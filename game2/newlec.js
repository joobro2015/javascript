class context{
    #enemies;
    constructor(){
        this.#enemies = null;
    }
    get enemies(){
        return this.#enemies;
    }

    set enemies(value){
        this.#enemies = value;
    }
}

export default new context();