// select DOM Elements
const createForm = document.getElementById('create_form')
const updateForm = document.getElementById('update_form')

const studentInfo = document.getElementById('studentInfo')
const displayInfo = document.getElementById('displayInfo')

let localContent = JSON.parse(localStorage.getItem('studentDetails')) || [];

let editIndex = null

renderTable()

createForm.addEventListener('submit', function(e){
    e.preventDefault()
    const name = this.querySelector('.createName').value
    const email = this.querySelector('.createEmail').value

    localContent.push({name,email})
    // console.log(localContent);
    localStorage.setItem('studentDetails', JSON.stringify(localContent))
    this.reset()
    
    renderTable()
})

updateForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = updateForm.querySelector('.updateName').value
    const email = updateForm.querySelector('.updateEmail').value

    // console.log(localContent[editIndex])
    localContent[editIndex] = {name, email}

    localStorage.setItem('studentDetails', JSON.stringify(localContent))
    updateForm.reset()
    renderTable()

    //Styles - Show Hide forms
    createForm.style.display = "block"
    updateForm.style.display = "none"
    
})

function renderTable(){
    studentInfo.innerHTML = "<h2>Out Area in JSON format</h2>" + localStorage.getItem('studentDetails')

    let tbody = document.querySelector('.tableBody')       
    let displayTablelist = ''

    localContent.forEach(function(item, index){
        displayTablelist += `<tr>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td><button class="edit-btn" data-index="${index}">Edit</button></td>
                            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
                        </tr>`
    })

    tbody.innerHTML = displayTablelist

    document.querySelectorAll('.edit-btn').forEach((button) => {
        // console.log(button)
        button.addEventListener("click", () => {
            // console.log(button.getAttribute('data-index'));
            editIndex = button.getAttribute('data-index');
            // console.log(localContent[editIndex])
            let item = localContent[editIndex]
            // console.log(item.name);
            // console.log(item.email);

            updateForm.querySelector('.updateName').value = item.name
            updateForm.querySelector('.updateEmail').value = item.email

            //Styles - Show Hide forms
            updateForm.style.display = "block"
            createForm.style.display = "none"
        })
    })

    document.querySelectorAll('.delete-btn').forEach((button) => {
        // console.log(button);
        button.addEventListener('click', () => {
            // console.log(button);
            // console.log(button.getAttribute('data-index'));
            let index = button.getAttribute('data-index')

            localContent.splice(index, 1)
            localStorage.setItem('studentDetails', JSON.stringify(localContent))
            renderTable()
        })
    })
}