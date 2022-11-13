// 1.这是一个浅拷贝
// 浅拷贝相当于是引用，同时将两者的指针同时指向同一个对象，两者共用同一块内存，
// 对其中任意一个变量的改变会影响到另一个变量
// 数组的类型也属于object，这里对object进行浅拷贝
    const myself = {
        name:'phf',
        age:18,
        gender:'male',
        group:{
            rank:4,
            teacher:'X,Z',
        }
    };
    const shallowCopy = myself;
    console.log(myself);
    shallowCopy.name = 'PHF';
    console.log(shallowCopy);