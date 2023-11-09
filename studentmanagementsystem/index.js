#!/usr/bin/env node
class School {
    addStudent(stdObj) {
        this.student.push(stdObj);
    }
    addTeacher(techObj) {
        this.teacher.push(techObj);
    }
    constructor(name) {
        this.student = [];
        this.teacher = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, schoolName, gender) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
        this.gender = gender;
    }
}
class Teacher extends Student {
}
let school1 = new School("Alpha");
let school2 = new School("Hyphen");
let s1 = new Student("Naveed", 12, "male", school1.name);
let s2 = new Student("Bilal", 32, "male", school2.name);
let s3 = new Student("sameer", 23, "male", school2.name);
let t1 = new Teacher("Raza", 52, "Male", school1.name);
let t2 = new Teacher("Irfan", 48, "Male", school2.name);
let t3 = new Teacher("Aneela", 45, "female", school1.name);
let t4 = new Teacher("Fatima", 61, "female", school2.name);
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s2);
school1.addTeacher(t1);
school2.addTeacher(t4);
school1.addTeacher(t3);
console.log(school1);
console.log(school2);
export {};
