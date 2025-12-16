class Student {
    constructor(name, surname, birthdate) {
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.grades = [];
        this.visiting = [];
        this.courses = [];
    }

    addGrade(grade) {
        return this.grades.push(grade);
    }

    addVisiting(visit) {
        return this.visiting.push(visit);
    }

    averageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }

    averageVisiting() {
        if (this.visiting.length === 0) return 0;
        const count = this.visiting.filter(visit => visit === 'Красава').length;
        const result = (count / this.visiting.length) * 100;
        return result.toFixed(2);
    }

    visitedClasses() {
        function wordDeclension (number) {
            const lastDigit = number % 10;
            const lastTwoDigits = number % 100;

            if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
                return 'занятий';
            }

            if (lastDigit === 1) {
                return 'занятие';
            }

            if (lastDigit >= 2 && lastDigit <= 4) {
                return 'занятия';
            }

            return 'занятий';
        }

        const count = this.visiting.filter(visit => visit === 'Красава').length;
        const word = wordDeclension(count);

        return `Студент посетил: ${count} ${word}`
    }

    allInfo() {
        return {
            name: `${this.name} ${this.surname}`,
            birthdate: this.birthdate,
            courses: this.courses,
            grades: this.grades,
            average_Grade: `Средний балл: ${this.averageGrade()}`,
            visiting: this.visitedClasses(),
            average_Visiting: `Посещаемость: ${this.averageVisiting()}%`
        }
    }

    addCourse(courseName) {
        if (!this.courses.includes(courseName)) {
            this.courses.push(courseName);
        }
    }

    deleteCourse(courseName) {
        this.courses = this.courses.filter(course => course !== courseName);
    }
}

class Group {
    constructor(groupName) {
        this.groupName = groupName;
        this.students = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }
    }

    deleteStudent(studentDeleted) {
        if (studentDeleted instanceof Student) {
            this.students = this.students.filter(student => student !== studentDeleted);
        }
    }

    averageGroupGrades() {
        this.students.sort((a, b) => b.averageGrade() - a.averageGrade());
        console.log('Рейтинг лохов');
        this.students.forEach((student, place) => {
            console.log(`${place + 1}. ${student.name} ${student.surname}. Средний балл: ${student.averageGrade()}`);
        })
    }

    averageGroupVisiting() {
        this.students.sort((a, b) => b.averageVisiting() - a.averageVisiting());
        console.log('Рейтинг лохов');
        this.students.forEach((student, place) => {
            console.log(`${place + 1}. ${student.name} ${student.surname}. Посещаемость: ${student.averageVisiting()}%`);
        })
    }
}

const studentA = new Student('Sasha', 'Sazhen', '19.02.2006');
const studentB = new Student('B', 'B', '19.02.2006');
const studentC = new Student('C', 'C', '19.02.2006');
const studentD = new Student('D', 'D', '19.02.2006');

studentA.addGrade(5);
studentA.addGrade(4);
studentA.addGrade(3);
studentA.addGrade(5);
studentA.addGrade(2);
studentA.addGrade(1);
studentA.addGrade(5);
studentA.addGrade(2);
studentA.addVisiting('Красава');
studentA.addVisiting('Лошара');
studentA.addVisiting('Красава');
// studentA.changeCourse('df');
studentA.addCourse('a');
studentA.addCourse('b');
studentA.deleteCourse('a');


console.log(studentA);
console.log(studentA.averageVisiting());
console.log(studentA.averageGrade());
console.log(studentA.visitedClasses());
console.log(studentA.allInfo());

const groupA = new Group('c');
groupA.addStudent(studentA);

console.log(groupA);

groupA.addStudent(studentB);
groupA.addStudent(studentC);
groupA.addStudent(studentD);

groupA.deleteStudent(studentB);
groupA.deleteStudent(studentA);
groupA.addStudent(studentA);
groupA.addStudent(studentB);

studentB.addGrade(5);
studentB.addGrade(5);
studentB.addGrade(5);
studentB.addGrade(5);
studentB.addGrade(5);
studentB.addGrade(5);
studentB.addGrade(5);
studentB.addGrade(5);

studentC.addGrade(5);
studentC.addGrade(2);
studentC.addGrade(1);
studentC.addGrade(1);
studentC.addGrade(1);
studentC.addGrade(3);
studentC.addGrade(4);
studentC.addGrade(5);

studentD.addGrade(4);
studentD.addGrade(1);
studentD.addGrade(1);
studentD.addGrade(1);
studentD.addGrade(1);
studentD.addGrade(1);
studentD.addGrade(2);
studentD.addGrade(3);

studentB.addVisiting('Красава');
studentB.addVisiting('Лошара');
studentB.addVisiting('Красава');
studentB.addVisiting('Красава');
studentB.addVisiting('Лошара');
studentB.addVisiting('Лошара');
studentB.addVisiting('Лошара');



studentC.addVisiting('Красава');
studentC.addVisiting('Красава');
studentC.addVisiting('Красава');
studentC.addVisiting('Красава');

studentD.addVisiting('Красава');
studentD.addVisiting('Красава');
studentD.addVisiting('Лошара');
studentD.addVisiting('Лошара');
studentD.addVisiting('Лошара');
studentD.addVisiting('Лошара');
studentD.addVisiting('Лошара');





console.log(studentB);
console.log(studentC);
console.log(studentD);


groupA.averageGroupGrades();
groupA.averageGroupVisiting();
