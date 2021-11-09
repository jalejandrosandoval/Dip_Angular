(() => {

    var _style = `font-family; color:white; 
        background:#162c40;
        padding: 3px;
        border-radius: 5px;
        font-weight: 700`;

    // --------- Decoradores de Clases---------

    const DecoratorsParams = (param1: number, param2: string) => {
        return function (target: Function){
            console.log(`%cDecoradores de Párametros`, _style);
        }
    }

    @DecoratorsParams(1, "2")
    class classDecorator{
        x: string;
    }

    const a = new classDecorator();

})()