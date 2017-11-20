var MyModule = (function Manager (){

    var modules = {};

    function define (name, deps, impl){
        
        for (var i = 0; i < deps.length; i++) {
            
            console.log(modules[deps[i]]);
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps);
    }

    function get (name){
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

MyModule.define('bar', [], function (){
    function hello (who){

        return 'Let me introduce:' + who;
    }

    return {
        hello: hello
    };
});

MyModule.define ('foo', ['bar'], function (bar){

    var hungry ='hippo';

    function awesome (){

        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});

var bar = MyModule.get('bar');
var foo = MyModule.get('foo');

console.log(bar.hello('hippo'));
foo.awesome();