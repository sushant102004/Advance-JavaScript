class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

class Student extends Person {
    constructor(name, age, gender, rollNo, department) {
        super(name, age, gender)
        this.rollNo = rollNo
        this.department = department
    }
}

const sushant = new Student('Sushant', 19, 'Male', 11212531, 'B.Tech CSE')

console.log(sushant)