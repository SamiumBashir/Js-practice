function checkStatus (itemName) {
    return new Promise((resolve, reject) => {
        console.log('Checking Status...');

        setTimeout(() => {
            if(itemName === 'Laptop'){
                resolve ('Laptop is in Stock')
            } else {
                reject('Sorry,Out of Stock');
            }
        },2000);
    });
};

async function showResult() {
    try {
        const result = await checkStatus ('Camera');
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

showResult();