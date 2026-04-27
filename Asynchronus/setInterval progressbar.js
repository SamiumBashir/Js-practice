let progress = 0;

const intervalID = setInterval(() => {
    progress += 10;

    if(progress <=100){
        console.log(`Uploading... ${progress}%`);
    }
    if(progress === 100){
        clearInterval(intervalID);
        console.log('Upload Complete')
    }
}, 500);

console.log(intervalID)