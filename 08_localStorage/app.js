// console.log("learing LocalStorage using JavaScript");

// DOM Elements
const studentForm = document.getElementById('studentForm')
const studentsContainer = document.querySelector('.students')
const nameInput = studentForm['name']
const ageInput = studentForm['age']
const classRoomInput = studentForm['classRoom']

/*
const students = [
    {
        name: "Anup",
        age: 18,
        classRoom: 9
    },
    {
        name: "Rohit",
        age: 16,
        classRoom: 7
    }
]
*/
/*
{
    name: '',
    age: number,
    calssRoom: number
}
*/

const students = []

const addStudent = (name, age, classRoom) => {
    students.push({
        name: name,
        age: age,
        classRoom: classRoom
    })
    return{name, age, classRoom}
}

const careateStudentElement = ({name, age, classRoom}) => {
    // Create Elements
    const studentDiv = document.createElement('div')
    const studentName = document.createElement('h2')
    const studentAge = document.createElement('p')
    const studentClassRoom = document.createElement('p')

    // Fill Content
    studentName.innerText = "Student name: " + name
    studentAge.innerText = "Student age: " + age
    studentClassRoom.innerText = "Student name: " + classRoom

    // Add to DOM
    studentDiv.append(studentName, studentAge, studentClassRoom)
    studentsContainer.appendChild(studentDiv)
}

students.map(careateStudentElement)

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        classRoomInput.value 
    )

    careateStudentElement(newStudent)

    nameInput.value = ""
    ageInput.value = ""
    classRoomInput.value = ""
}