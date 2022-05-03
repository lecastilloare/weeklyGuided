/// ------------THE BELOW IS THE EASY SECTION OF THE WEEKLY GUIDED INQUIRY--------------:

// Psuedo code: It's asking for a variable named run (that is now also a function) that takes in another function called exercise. The parameter is runnning. But when you conside log the new run function it prints the following string "Today's exercise: Running" Same for swimming.


function exercise(activity) {
    return () => `Today's exercise: ${activity}`;
}

const run = exercise(`running`);
const swim = exercise(`swimming`);

console.log(run());
console.log(swim());

/// -------------THE BELOW IS THE MEDIUM SECTION OF THE WEEKLY GUIDED INQUIRY---------

// PSUEDO CODE: We have a function called cutPizzaSlices that takes in a parameter which I assume is the number of slices we want to share later. Then it gets stored into a variable names share pizza and then share pizza takes in another parameter which I assume is the number of people. and then when you console log sharePizza with a parameter you get the following string: Each person gets NUMBER slices of pizza. 

function cutPizzaSlices(slices) {
    return (numberOfPeople) => {
        const pizzaForEach = (slices / numberOfPeople);
        const rUpPizzaForEach = pizzaForEach.toFixed(2);
        return `Each person gets ${rUpPizzaForEach} slices of pizza`;
    }
}

const sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));


/// THE BELOW IS THE HARD PORTION OF THE ASSIGNMENT: 
// PSUEDO CODE: Inside of a closure, use a constructor function that will create an object called pii. This object will have two properties. name and ssn. Only the name property will be accesible and can be called through a public function called getName().


const PersonalInfo = function (name) {

    const privateNumber = function () {
        let ssn = 333333333;
        return "secretNumber";
    }

    this.name = name;
    this.getName = () => `${this.name}`;
    this.ssn = function () {
        privateNumber()
        return "You should not be looking here"
    }
}

const pii = new PersonalInfo("Ellen");

console.log(pii.getName());
console.log(pii.ssn())

///// THE BELOW IS THE VERY HARD SECTION OF THE GUIDED INQUIRY

class Person {

    constructor(name, job, age) {
        this.name = name,
            this.job = job,
            this.age = age,
            this.busy = false
    }

    exercise() {
        console.log("This prints when the exercise() method is called");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, langs) {
        super(name, job, age);

        this.langs = [langs];
        this.busy = true;
    }

    completeTask() {
        if (this.busy = true) {
            this.busy = false;
        }
    }

    offerNewTask() {
        if (this.busy) {
            console.log("This programmer is busy");
        } else {
            console.log("This programmer is NOT busy")
        }
    }

    learnLanguage(language) {
        this.langs.push(language);
    };


    listLanguages() {
        console.log(this.langs)
    };

}

const lee = new Programmer("Lee", "Former SB Barista", 22, "python");


lee.learnLanguage("aaaa");

console.log(lee)

