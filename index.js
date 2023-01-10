function receivesAFunction (spy) {
   return spy();
}

function returnsANamedFunction (){
    const fn = x => x * x;
    return fn;
}

function returnsAnAnonymousFunction () {
    return function () {
        
    }
}
