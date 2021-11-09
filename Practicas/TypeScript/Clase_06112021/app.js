var _style = "font-family; color:white; \n    background:#162c40;\n    padding: 3px;\n    border-radius: 5px;\n    font-weight: 700";
var _avengers = [
    {
        _name: "THOR",
        _mission: "Proteger Asgard."
    },
    {
        _name: "SpiderMan",
        _mission: "Ser el buen vecino y salvaguardar NYC."
    }
];
var res = function (avenger) {
    console.group("Avengers");
    avenger.forEach(function (x) {
        console.log("%cNombre: " + x._name + " - Misi\u00F3n: " + x._mission, _style);
    });
    console.groupEnd();
};
res(_avengers);
