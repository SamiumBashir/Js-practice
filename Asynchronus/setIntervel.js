const countdownClock = () => {
    const intervalID = setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString('en-BG'));
    },1000);

    setTimeout (() => {
        clearInterval(intervalID)
        console.log('clock stopped')
    },5000);
}

// countdownClock()

let count = 5; 
const countDown = () => {
    if(count < 1) {
        console.log('Done! Set to go')
        return;
    }
    console.log(count);
    count-- ;

    setTimeout(() => {
        countDown()
    }, 1000);
}

countDown()