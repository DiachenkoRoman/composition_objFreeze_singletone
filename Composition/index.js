
const MakeBackendMagic = () =>({
    backMagic: () =>{console.log("Похоже на JSON!")}
})

const MakeFrontendMagic = () =>({
    fontMagic: () =>{console.log("Производительно!") }
})

const MakeItLooksBeautiful = () =>({
    designMagic: () =>{console.log("Красиво!")}
})

const DistributeTasks = () =>({
    pmMagic: () =>{console.log("Конечно, сделаем за 2 дня!")}
})

const DrinkSomeTea = () =>({
    drink: () =>{console.log("Два сахара, спасибо")}
})

const WatchYouTube = () =>({
    watch: () =>{console.log("Индус с палкой строит Las Vegas")}
})

const Procrastinate = () =>({
    procrastinate: () =>{console.log("...")}
})

const ProjectManager = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age
    };
    return Object.assign({}, stats, DistributeTasks(), Procrastinate(), DrinkSomeTea())

}

const BackendDeveloper = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age
    };
    return Object.assign({}, stats, MakeBackendMagic(), DrinkSomeTea(), Procrastinate())
}

const FrontendDeveloper = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age
    };
    return Object.assign({}, stats, MakeFrontendMagic(), DrinkSomeTea(), WatchYouTube())
}

const Designer = (name, gender, age) =>{
    let stats = {
        name: name,
        gender: gender,
        age: age
    };
    return Object.assign({}, stats, MakeItLooksBeautiful(), WatchYouTube(), Procrastinate())
}