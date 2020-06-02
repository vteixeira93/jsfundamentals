const classA = [
    {
        name: "Vitor",
        grade: 8
    },
    {
        name: "Jade",
        grade: 10
    },
    {
        name: "Meg",
        grade: 12.5
    },
    {
        name: "Raquel",
        grade: 9.5
    }
]

const classB = [
    {
        name: "Ryan",
        grade: 8
    },
    {
        name: "Connor",
        grade: 11.5
    },
    {
        name: "Carla",
        grade: 9
    },
    {
        name: "Carlos",
        grade: 13.5
    }
]


function average_calculation(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const medavg = sum / students.length
    return (medavg)
}

function send_msg(avg, classes) {
    if (avg > 10) {
        console.log(`The students average grade from Class ${classes} is ${avg}. Congratulations!`)
    } else {
        console.log(`The stundents average grade from Class ${classes} is ${avg}. Better luck next time!`)
    }
}

function passed_students(students) {
    for (let student of students) {
        student.passed = false
        if (student.grade >= 10) {
            student.passed = true
        }
    }

    console.table(students)
}

function send_msg_student(students) {
    for (let student of students) {
        student.passed = false
    if (student.grade >= 10) {
        student.passed = true
        console.log(`The student ${student.name} has passed. Congratulations!`)
        
    }
}
}

const avg1 = average_calculation(classA)
const avg2 = average_calculation(classB)

send_msg(avg1, 'A')
send_msg(avg2, 'B')

passed_students(classA)
passed_students(classB)

send_msg_student(classA)
send_msg_student(classB)