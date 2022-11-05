function myPush(arr){
    arr.unshift('这是一个unshift');
    arr.push('这是一个push','加上我就push了多个元素');
    arr[4]='这是一个新增元素';
    return arr;
    }
    myPush(arr=[1]);
    console.log(Array.isArray(arr));
    console.log(arr.length);
    console.log(arr);