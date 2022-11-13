// 2.这是一个深拷贝
// 深拷贝相当于复制，会新建一个对象，它们有自己独自的内存，
// 对其中任意一个变量操作不会影响到另一个变量
// 深拷贝应该也能用递归实现，但是我太菜了不会qaq
    const myself = {
        name:'phf',
        age:18,
        gender:'male',
        group:{
            rank:4,
            teacher:'X,Z',
        }
    };
    const deepCopy = Object.assign({},myself);
    deepCopy.name = 'PHF';
    console.log(myself);
    console.log(deepCopy);