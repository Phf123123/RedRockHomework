Function.prototype.myCall = function(firstThis){
    firstThis.fn = this;
    const argument = [...arguments].slice(1);
    const end = firstThis.fn(...argument);
    delete firstThis.fn;
    return end;
}