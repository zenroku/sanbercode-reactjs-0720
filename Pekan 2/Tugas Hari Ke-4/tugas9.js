// jawaban soal no 1

const newFunction = (firstName, lastName) => ({
    firstName: firstName,
    lastName: lastName,
    fullName: () => console.log(`${firstName} ${lastName}`)
})

// Driver Code
newFunction("William", "Imoh").fullName()

// jawaban soal no 2

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {
    firstName,
    lastName,
    destination,
    occupation
} = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

// jawaban soal no 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east];

// Driver code
console.log(combined);