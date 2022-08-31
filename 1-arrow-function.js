const square = (x) => {
    return (x * x)
}
console.log(square(3))

const add = (x) => x + x
console.log(add(3))

const event = {
    name : 'Birthday party',
    guestList : ['khan', 'sajid', 'saeed'],
    printGuestList(){
        name = this.name
        // use arrow function
        this.guestList.forEach(function(guest){
            console.log(guest + this.name)
        })
    }
}
event.printGuestList()