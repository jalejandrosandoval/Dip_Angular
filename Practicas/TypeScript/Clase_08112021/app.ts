(() => {

    var _style = `font-family; color:white; 
        background:#162c40;
        padding: 3px;
        border-radius: 5px;
        font-weight: 700`;

    // --------- Static Class ---------

    class Numbers{
        static _mayor(num1: number, num2: number): number{
            if (num1 > num2)
                return num1;
            else
                return num2;
        }
    }

    var resNum = Numbers._mayor(1,2);
    // console.log(`%c${resNum}`, _style);

    /* --------- Access ---------
       Acceso:                 Public, Private, Protected
       Instancia de una Clase    X   ,    -   ,     -
       Clases                    X   ,    x   ,     -
       Clases Hijas              X   ,    -   ,     X
    */

    // Instancia de una Clase

    class FooBase {
        public x: number;
        private y: number;
        protected z: number;
    }

    var foo = new FooBase();

    foo.x; // Ok
    //foo.y; // Error
    //foo.z; // Error

    // Herencia: Acceso a propiedades de una clase.

    class FooChild extends FooBase{

        constructor() {
            //Inicializar la Clase y acceder a las propiedades de la clase padre.
            super();
            this.x; // Ok
            // this.y; // Error
            this.z; // Ok
        }

    }

    // Herencia Ej:

    class Animals{
        name: string;

        constructor(_name: string) {
            this.name = _name;
        }

        Move(distanceMt: Number = 0){
            console.log(`%c${this.name} se mueve a ${distanceMt}`, _style);
        }
    }

    class Snake extends Animals{
        constructor(_name: string) {
            super(_name);
        }

        Move(distanceMt: number = 5){
            super.Move(distanceMt);
        }
    }

    class Dog extends Animals{
        constructor(_name: string) {
            super(_name);
        }

        Move(distanceMt: number = 8){
            super.Move(distanceMt);
        }
    }

    let _array: Animals[] =
        [
            new Snake("Boa"),
            new Dog("Pitbull")
        ];
    
    // console.log(_array);

    /* This VS Super
       Super => Referencia Clase Padre - Uso exclusivo cuando no existen funciones Flecha
       This => Se usa en funciones de flecha.*/

    class Base{
        log(){
            console.log(`Hello!`);
        }
    }

    class Child extends Base{
        log(){
            super.log();
        }
    }

    class Arrow{
        log = () => {
            console.log(`Hello! Arrow`);
        }
    }

    class ChildArrow extends Base{
        log(){
            this.log();
        }
    }

    // --------- Abstract Class ---------
    // Interfaces

    interface a{
        b: number;
    }

    interface b extends a{
        c: string;
    }

    class Test implements b{
        b: number;
        c: string;

        constructor(_b: number, _c: string) {
            this.b = _b;
            this.c = _c;
        }
    }

    // Crear una clase Figuras (Triangulo, circulo, cuadrado), calcular el área 

    class Figure{
        private nameFigure: string;
        protected result: number;
        
        constructor(_name: string) {
            this.nameFigure = _name;
        }

        getResult(){
            console.log(`%cEl área de ${this.nameFigure} es de ${this.result}`, _style);
        }
    }

    interface Form{
        calculateArea();
    }

    class Square 
        extends Figure 
        implements Form
    {
        private l1: number;

        constructor(_l1: number) {
            super("Cuadrado");
            this.l1 = _l1;
        }

        calculateArea(){
            this.result = this.l1 * this.l1;
            super.getResult();
        }
    }

    class Triangle 
        extends Figure
        implements Form
    {
        private base: number = 0;
        private height: number = 0;

        constructor(_base: number, _height: number) {
            super("Triángulo");
            this.base = _base;
            this.height = _height;          
        }
        
        calculateArea(){
            this.result = (this.base * this.height) / 2;
            super.getResult();
        }

    }

    let _square: Square = new Square(10);
    _square.calculateArea();

    let _triangle: Triangle = new Triangle(10,6);
    _triangle.calculateArea();

    
    // --------- TIFE ---------
    // Inmediately-Invoked Function Expression.
    // Funciones Anonimas.

    class Point{
        public x: number;
        public y: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        add(_point : Point){
            return new Point(
                this.x + _point.x,
                this.y + _point.y
            );
        }
    }

    class Point3D 
        extends Point
    {
        private z: number;

        constructor(_x: number, _y: number, _z: number) {
            super(_x, _y);
            this.z = _z;
        }

        add(_point3D : Point3D){
            let _point = super.add(_point3D);
            return new Point3D(
                _point.x, _point.y, this.z + _point3D.z
            );

        }
    }

})()
