function A() {

}

A.prototype.hello  = function() {
    console.log('hello world');
}

var a = new A();

a.hello();
console.log(a.__proto__ === A.prototype);