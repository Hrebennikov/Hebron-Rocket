// Task routine
// Action #1
function gotUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === 8) {
               return resolve("8:00")
            } else {
                reject("I am too lazy to get up at 8:00")
            }
        }, 1000)
    });
}

// Action #2
function selfCare() {
    return new Promise((resolve) => {
        setTimeout(() => {
           return resolve("I'm done with morning self-care")
        }, 500)
    });
}

// Action #3
function breakfast() {
    return new Promise (resolve => {
        setTimeout( () => {
            resolve("I had breakfast")
        }, 300)
    });
}

// Action #4
function goToWork(time) {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (time === "9:30") {
                resolve("I made it to work, everything is fine");
            } else {
                reject("I overslept and was late for work");
            }
        }, 2000)
    });
}


// Output
gotUp(8)
.then(gotUp => {
    console.log("I got up at", gotUp);

    return selfCare()
})
.then(value => {
    console.log(value);

    return breakfast()
})
.then(value => {
    console.log(value);

    return goToWork("9:30")
})
.then(value => {
    console.log(value);
})
.catch(reason => {
    console.error(reason);
})

// Or
async function routine() {
    try {
    const getUp = await gotUp(8)
    console.log("I got up at", getUp);

    const care = await selfCare()
    console.log(care);

    const ate = await breakfast()
    console.log(ate);

    const cameOut = await goToWork("9:30")
    console.log(cameOut);
    } catch (error) {
        console.log(error);
    }
}

routine()