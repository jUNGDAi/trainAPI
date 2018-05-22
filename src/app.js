var Greeting = /** @class */ (function () {
    function Greeting(name) {
        console.log("in constructor", name);
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting(555);
obj.greet();
