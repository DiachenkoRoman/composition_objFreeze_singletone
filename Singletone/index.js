const _base = {
    laws: [{id: 777, text: "Запретить дальнобои"}],
    budget: 1000000,
    citizensSatisfaction: 0
}

const Government = {
    add: (id, name, description) =>{
        _base.laws.push({id, name, description})
        _base.citizensSatisfaction -=10
    },

    read: () => console.log(_base.laws),

    readExact: (id) => {
        [..._base.laws].filter(elem => {
            if (elem.id === id){
                console.log(elem)
            }
        })
    },

    showSatisfaction: () => console.log(_base.citizensSatisfaction),

    showBudget: () => console.log(_base.budget),

    celebrate: () =>{
        _base.budget -= 50000
        _base.citizensSatisfaction += 5
    }

}

Government.add(21, "Грустить", "Всем грустить")

Object.freeze(Government)