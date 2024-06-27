// Task routine
// Action #1
function getUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === 8) {
                resolve("8:00")
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
            resolve("I'm done with morning self-care")
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




getUp(8)
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
})
.catch(reason => {
    console.error(reason);
})