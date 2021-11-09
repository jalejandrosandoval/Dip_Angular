(() => {

    var _style = `font-family; color:white; 
        background:#162c40;
        padding: 3px;
        border-radius: 5px;
        font-weight: 700`;

    // --------- Promise---------

    const _promise = new Promise((resolve, reject) =>{
        try{
            resolve(1);
        }catch(error){
            reject(0);
        }
    });
    
    _promise
        .then(num => console.log(`%cNúmero: ${num}`, _style))
        .catch(error => console.log(`%cError ${error}`, _style));
    
    let moneyActual = 3000;

    const drawOnMoney = (res: number): Promise<number> =>{
        return new Promise((resolve, reject) => {
            if(res > moneyActual)
                reject(`Fondos Insuficientes...`);
            else
                moneyActual -= res;
                resolve(moneyActual);
        });
    }

    drawOnMoney(2100)
        .then(balance => console.log(`%cSaldo: ${balance}`, _style))
        .catch(message => console.warn(message));

})()