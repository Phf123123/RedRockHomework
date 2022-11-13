function strictEqual(a,b){
    this.type1 = a;
    this.type2 = b;
    const class1 = typeof type1;
    const class2 = typeof type2;
    if(class1 == class2 && type1 == type2)
    {
       console.log(type1+' is strictEqual to '+type2);
       return 0;
    }
    else
    {
       console.log(type1+' is not strictEqual to '+type2);
       return 0;
    }
    return 0;
}
strictEqual(1,'1');
strictEqual(1,1);
strictEqual(true,1);
strictEqual(undefined,null);
strictEqual(0,null);
// 虽然写完了，但应该还有情况没考虑好