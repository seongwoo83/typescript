"use strict";
function calculateAverage(student) {
    let average = 0;
    let sum = 0;
    sum = student.scores.korean + student.scores.math + student.scores.society + student.scores.science + student.scores.english;
    average = sum / Object.keys(student.scores).length;
    return average;
}
function assignGrade(average) {
    let grade = '';
    if (average >= 90) {
        grade = 'A';
    }
    else if (average >= 80) {
        grade = 'B';
    }
    else if (average >= 70) {
        grade = 'C';
    }
    else if (average >= 60) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    return grade;
}
function createStudent(name, age, korean, math, society, science, english) {
    return {
        name,
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
function printResult(student) {
    const average = calculateAverage(student);
    const grade = assignGrade(average);
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
    printResult(spartan);
}
main();
