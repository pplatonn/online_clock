// strict mode 

'use strict'

function setTime() {

    // declare the new Date object
    // and get all the information:
    // hours, minutes and seconds 
    // also string converting 

    const date = new Date()
    const hours = date.getHours().toString().padStart(2, 0)
    const minutes = date.getMinutes().toString().padStart(2, 0)
    const seconds = date.getSeconds().toString().padStart(2, 0)

    // set all the variables into a template string
    // and change the clock's content to that string

    const timeString = `${hours} : ${minutes} : ${seconds}`
    document.querySelector(".clock").textContent = timeString;
}

// execute function once and then
// add the interval in 1 s 

setTime()
setInterval(setTime, 1000);