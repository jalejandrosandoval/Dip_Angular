var _style = `font-family; color:white; 
    background:#162c40;
    padding: 3px;
    border-radius: 5px;
    font-weight: 700`;

//Interface de Avengers...

interface Avengers{
    _name: string;
    _mission: string;
}

var _avengers: Avengers [] = [
    {
        _name: "THOR",
        _mission: "Proteger Asgard."
    },
    {
        _name: "SpiderMan",
        _mission: "Ser el buen vecino y salvaguardar NYC."
    }
]

var res = (avenger : Avengers[]) =>{
    console.group("Avengers");
    avenger.forEach(x => {
        console.log(`%cNombre: ${x._name} - Misión: ${x._mission}`,_style);
    });
    console.groupEnd();
}

res(_avengers);