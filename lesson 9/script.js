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

// Action #5
function lunch(toHaveLunch) {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
        if (toHaveLunch === true) {
            resolve("After lunch you can continue working")
        } else {
            reject("A lot of work, no time for lunch")
        }
      }, 400)
    });
}

// Action #6 
function comeBackHome() {
    return new Promise (resolve => {
        setTimeout( () => {
            resolve("Come back home at 6:00 p. m.")
        }, 3000)
    });
}

// Action #7
function dinner() {
    return new Promise (resolve => {
        setTimeout( () => {
            resolve("After dinner, you can go about your business")
        }, 1500)
    });
}

// Action #8
function toRead(pages) {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (pages >= 10) {
                resolve("I read the norm, Today")
            } else {
                reject("I didn't read the norm, Today")
            }
        }, 4000)
    });
}

// Action #9
function watchTV() {
    return new Promise (resolve => {
        setTimeout( () => {
            resolve("After watching TV, I can go to bed")
        }, 1800)
    });
}

// Action #10
function goToSleep(time) {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (time == 11) {
                resolve("After a busy day, I went to bed on time")
            } else {
                reject("I went to bed late, I won't get up on time again tomorrow")
            }
        }, 2500)
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

    return lunch(true)
})
.then(value => {
    console.log(value);

    return comeBackHome()
})
.then(value => {
    console.log(value);

    return dinner()
})
.then(value => {
    console.log(value);

    return toRead(10)
})
.then(value => {
    console.log(value);

    return watchTV()
})
.then(value => {
    console.log(value);

    return goToSleep(11)
})
.then(value => {
    console.log(value);
})
.catch(reason => {
    console.error(reason);
})
.finally( () => {
    console.log("Finaly");
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

    const haveLunch = await lunch(true)
    console.log(haveLunch);

    const backHome = await comeBackHome()
    console.log(backHome);

    const haveDinner = await dinner()
    console.log(haveDinner);

    const read = await toRead(10)
    console.log(read);

    const watch = await watchTV()
    console.log(watch);

    const sleep = await goToSleep(11)
    console.log(sleep);
    } catch (error) {
        console.log(error);
    }
}

routine()