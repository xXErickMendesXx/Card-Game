// variables
let car = {
    make: 'Thanos',
    model: 'Perfection',
    color: 'purple',
    mileage 0,
    IsWorking; true,

    driveToWork(){
        alert(`Old Milage: ${this.mileage}`);
        this.milage = this.milage + 10;
        alert(`New Milage: ${this.mileage}`);
    },
}

// Functions
// logs all out car's current stat to the console
const rewriteStats()=>{

}

//mainProcess
//Captures Keyboard input , Depending on the letter pressed it will "call" (execute) different functions
document.onkeyup(event) => {

    //captures the keypress, converts it to lower case ten saves it to a variable
    let letter = String.fromCharCode(event.keycode).toLowerCase();

    if (letter === "d"){
        car.driveToWork();
        rewriteStats();
    }
}