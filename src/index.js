document.addEventListener('DOMContentLoaded', () => {
fetchDogs()
})

function fetchDogs() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => {
        data.forEach(addDog)
    });
};

function addDog(dog) {
    let tr = document.createElement('tr')
    let tdName = document.createElement('td')
    tdName.textContent = `${dog["name"]}`
    let tdBreed = document.createElement('td')
    tdBreed.textContent = `${dog["breed"]}`
    let tdSex = document.createElement('td')
    tdSex.textContent = `${dog["sex"]}`
    let tdButton = document.createElement('td')
    let button = document.createElement('button')
    button.textContent = `Edit Dog`
    tdButton.append(button)

    let dogTable = document.querySelector('#table-body')

    tr.append(tdName, tdBreed, tdSex, tdButton)
    dogTable.append(tr)

    button.addEventListener('click', () => {
        document.getElementsByName('name')[0]['value']= `${dog["name"]}`
        document.getElementsByName('breed')[0]['value']= `${dog["breed"]}`
        document.getElementsByName('sex')[0]['value']= `${dog["sex"]}`
    }
    )

    let dogForm = document.querySelector("dog-form")
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/dogs/${dog['id']}`)
        //***This is where I stopped*** I haven't learned patch yet. 
        // After this dogForm event listener is working (clicking 'Submit' patches the API),
        //next steps might be to delete all dogs from table and reinvoke fetchDogs
    })


}

/*
// I wonder if figuring out this way would yield cleaner code:
function dogInnerHTML(dog) {
    // return (`<tr><td>${dog["name"]}</td> <td>${dog["breed"]}</td> <td>${dog["sex"]}</td> <td><button>Edit</button></td></tr>
   // `)
}
*/

