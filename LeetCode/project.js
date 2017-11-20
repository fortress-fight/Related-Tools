{function a (){
    this.name = 'my name is a';
}
a.prototype.sayName = function (){
    console.log(this.name);
};

function b (){
    this.name = 'my name is b'
}
b.prototype = new a();

var c = new b();
c.sayName();
// 会运行被复制对象的初始化，但是可以被覆盖
}


{function a (run){
    if (run === false) return;
    this.name = 'my name is a';
}
a.prototype.sayName = function (){
    console.log(this.name);
};

function b (){
}
b.prototype = new a(false);

var c = new b();
c.sayName(); // undefined
// 手动阻止其运行 被拷贝对象的初始化；
}

{
    function a (age){
        this.name = 'my name is a';
        this.age = age;
    }
    a.prototype.sayName = function (){
        console.log(this.name, this.age);
    };

    function b (){
    }
    b.prototype = new a();

    var c = new b(24);
    c.sayName();
    // 参数并不能传递，仅仅是通过 prototype 查找到了 name 而已
}

// 最终：实现 主动运行 初始化并且传递参数，如果不想运行初始化 可以跳过绑定行为；
{
    function o (){};
    function a (age){
        this.name = 'my name is a';
        this.age = age;
    }
    a.prototype.sayName = function (){
        console.log(this.name, this.age);
    };

    o.prototype = a.prototype;
    // 因为 直接对 b 进行复制，会将两者绑定到一起，一点一方改变就会影响另一方，传址；所以需要一个中间对象；
    // 而 通过 赋值 new o 就是在当前原型上没有找到的情况下才会沿着原型链向上查找，如果当前就已经找到了就会直接采用，将不会影响原有行为；使用 __proto__ 具有相同的功能
    function b (){

        a.apply(this, arguments);
    }
    b.prototype = new o();

    var c = new b(24);
    c.sayName();
}

{
    function a (){
        this.name = 'my name is a';
    }
    a.prototype.sayName =function (){
        console.log("运行了");
        console.log(this.name);
    }
    
    function b() {
        
    }
    b.prototype.__proto__ = a.prototype;
    var c = new b();
    c.sayName();
    b.prototype.sayName = function (){
        console.log('this is b')
    }
    c.sayName()
}