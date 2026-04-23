
function orderPizza (orderItem) {
    return new Promise((resolve, reject) => {
        console.log('Placing Your order');
        setTimeout(() => {
            if(orderItem === 'pizza'){
                resolve ('Order Received')
            } else{
                reject ('Sorry, try again!')
            }
        }, 2000);
    });
};

function preparePizza (status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status === 'Order Received'){
                resolve ('Pizza is Ready');
            } else{
                reject('Sorry');
            }
        }, 3000);
    })
}

async function receivedOder() {
    try{
        const result = await orderPizza('pizza');
        console.log(result);

        const finalresult = await preparePizza(result);
        console.log(finalresult);
    } catch (error){
        console.log(error)
    }
}

receivedOder();