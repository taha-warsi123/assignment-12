import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "aap kis se baat kerna pasand kare ge....",
            name: "select",
            choices: ["khud se : self", "student", "Bye"]
        });
        if (ans.select == "khud se : self")
            console.log("Hello me khu se baat ker raha hun");
        console.log("meri tabiat achi hai.");
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "ap ko kis student se baat kerni hai?",
                name: "student"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, me theek hun`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, me theek hun.........`);
                console.log(persons.students);
            }
            if (ans.student == "Bye") {
                return process.exit();
            }
        }
    } while (true);
};
programStart(persons);
