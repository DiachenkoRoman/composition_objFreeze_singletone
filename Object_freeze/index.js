let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
        bonuses: ['cookies', 'great look'],
        pop:{
            push:{
                slice:{
                    cats: 'woohoo'
                }
            }
        }
    }
};

const work = (obj) => {
    Object.freeze(obj)

    Object.getOwnPropertyNames(obj).forEach(elem =>{
        if ((obj.hasOwnProperty(elem) && obj[elem] !== null && (typeof obj[elem] === "object" || typeof obj[elem] === "function") && !Object.isFrozen(obj[elem]))){
            work(obj[elem])
        }
    })
}

work(universe)
