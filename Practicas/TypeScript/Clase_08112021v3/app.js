(function () {
    var _style = "font-family; color:white; \n        background:#162c40;\n        padding: 3px;\n        border-radius: 5px;\n        font-weight: 700";
    // --------- Promise---------
    var _promise = new Promise(function (resolve, reject) {
        try {
            resolve(1);
        }
        catch (error) {
            reject(0);
        }
    });
    _promise
        .then(function (num) { return console.log("%cN\u00FAmero: " + num, _style); })["catch"](function (error) { return console.log("%cError " + error, _style); });
    var moneyActual = 3000;
    var drawOnMoney = function (res) {
        return new Promise(function (resolve, reject) {
            if (res > moneyActual)
                reject("Fondos Insuficientes...");
            else
                moneyActual -= res;
            resolve(moneyActual);
        });
    };
    drawOnMoney(2100)
        .then(function (balance) { return console.log("%cSaldo: " + balance, _style); })["catch"](function (message) { return console.warn(message); });
})();
