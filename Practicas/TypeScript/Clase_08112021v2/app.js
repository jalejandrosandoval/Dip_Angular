var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var _style = "font-family; color:white; \n        background:#162c40;\n        padding: 3px;\n        border-radius: 5px;\n        font-weight: 700";
    // --------- Static Class ---------
    var Numbers = /** @class */ (function () {
        function Numbers() {
        }
        Numbers._mayor = function (num1, num2) {
            if (num1 > num2)
                return num1;
            else
                return num2;
        };
        return Numbers;
    }());
    var resNum = Numbers._mayor(1, 2);
    // console.log(`%c${resNum}`, _style);
    /* --------- Access ---------
       Acceso:                 Public, Private, Protected
       Instancia de una Clase    X   ,    -   ,     -
       Clases                    X   ,    x   ,     -
       Clases Hijas              X   ,    -   ,     X
    */
    // Instancia de una Clase
    var FooBase = /** @class */ (function () {
        function FooBase() {
        }
        return FooBase;
    }());
    var foo = new FooBase();
    foo.x; // Ok
    //foo.y; // Error
    //foo.z; // Error
    // Herencia: Acceso a propiedades de una clase.
    var FooChild = /** @class */ (function (_super) {
        __extends(FooChild, _super);
        function FooChild() {
            var _this = 
            //Inicializar la Clase y acceder a las propiedades de la clase padre.
            _super.call(this) || this;
            _this.x; // Ok
            // this.y; // Error
            _this.z; // Ok
            return _this;
        }
        return FooChild;
    }(FooBase));
    // Herencia Ej:
    var Animals = /** @class */ (function () {
        function Animals(_name) {
            this.name = _name;
        }
        Animals.prototype.Move = function (distanceMt) {
            if (distanceMt === void 0) { distanceMt = 0; }
            console.log("%c" + this.name + " se mueve a " + distanceMt, _style);
        };
        return Animals;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(_name) {
            return _super.call(this, _name) || this;
        }
        Snake.prototype.Move = function (distanceMt) {
            if (distanceMt === void 0) { distanceMt = 5; }
            _super.prototype.Move.call(this, distanceMt);
        };
        return Snake;
    }(Animals));
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(_name) {
            return _super.call(this, _name) || this;
        }
        Dog.prototype.Move = function (distanceMt) {
            if (distanceMt === void 0) { distanceMt = 8; }
            _super.prototype.Move.call(this, distanceMt);
        };
        return Dog;
    }(Animals));
    var _array = [
        new Snake("Boa"),
        new Dog("Pitbull")
    ];
    console.log(_array);
    /* This VS Super
       Super => Referencia Clase Padre - Uso exclusivo cuando no existen funciones Flecha
       This => Se usa en funciones de flecha.*/
    var Base = /** @class */ (function () {
        function Base() {
        }
        Base.prototype.log = function () {
            console.log("Hello!");
        };
        return Base;
    }());
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Child.prototype.log = function () {
            _super.prototype.log.call(this);
        };
        return Child;
    }(Base));
    var Arrow = /** @class */ (function () {
        function Arrow() {
            this.log = function () {
                console.log("Hello! Arrow");
            };
        }
        return Arrow;
    }());
    var ChildArrow = /** @class */ (function (_super) {
        __extends(ChildArrow, _super);
        function ChildArrow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChildArrow.prototype.log = function () {
            this.log();
        };
        return ChildArrow;
    }(Base));
    var Test = /** @class */ (function () {
        function Test(_b, _c) {
            this.b = _b;
            this.c = _c;
        }
        return Test;
    }());
    // Crear una clase Figuras (Triangulo, circulo, cuadrado), calcular el área 
    var Figure = /** @class */ (function () {
        function Figure(_name) {
            this.nameFigure = _name;
        }
        Figure.prototype.getResult = function () {
            console.log("%cEl \u00E1rea de " + this.nameFigure + " es de " + this.result, _style);
        };
        return Figure;
    }());
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(_l1) {
            var _this = _super.call(this, "Cuadrado") || this;
            _this.l1 = _l1;
            return _this;
        }
        Square.prototype.calculateArea = function () {
            this.result = this.l1 * this.l1;
            _super.prototype.getResult.call(this);
        };
        return Square;
    }(Figure));
    var Triangle = /** @class */ (function (_super) {
        __extends(Triangle, _super);
        function Triangle(_base, _height) {
            var _this = _super.call(this, "Triángulo") || this;
            _this.base = 0;
            _this.height = 0;
            _this.base = _base;
            _this.height = _height;
            return _this;
        }
        Triangle.prototype.calculateArea = function () {
            this.result = (this.base * this.height) / 2;
            _super.prototype.getResult.call(this);
        };
        return Triangle;
    }(Figure));
    var _square = new Square(10);
    _square.calculateArea();
    var _triangle = new Triangle(10, 6);
    _triangle.calculateArea();
    // Promise 
})();
