class Human {
    constructor(name, profession) {
        this.name = name;
        this.profession = profession;
    }
    sleep(timeSleep) {
        console.log(`${this.name} спит ${timeSleep} часов`);
    }
}

class Physician extends Human {
    sayHowLongWorking(timeWork) {
        console.log(`${this.profession} работает ${timeWork} часов в день`)
    }
}

class Cook extends Human {
    sayAboutYourWork() {
        console.log(`${this.name} работает ${this.profession}ом и любит свое дело`)
    }
}

const physician = new Physician('Александр', "доктор");
const jsonPhysician = JSON.stringify(physician);

const cook = new Cook("Вася", "повар");
const jsonCook = JSON.stringify(cook);