方法一:
var arr1=[1,[2,3],[4,5,[6,7,8]],9];
        function flatten(arr)
        {
            let arr0=[];
            for(let i=0;i<arr.length;i++)
            {
                if(Array.isArray(arr[i]))
                {
                arr0=arr0.concat(flatten(arr[i]));
                }
                else
                {
                 arr0.push(arr[i]);
                }
            }
        return arr0;
        }
        console.log(flatten(arr1));

/*方法二(bushi):
let arr=[1,[2,3],[4,5,[6,7,8]],9];
console.log(arr.flat(2));但是不能用这个呜呜*/

方法二:
let flatten=(arr)=>arr.toString().split(',').map((item)=>+item);
let arr=[1,[2,3],[4,5,[6,7,8]],9];
console.log(flatten(arr));
/* 然后这种方法我有些是借鉴了网上的用法，然后就有几点想麻烦学长学姐解决一下
1.这个"=>"是用来连接对数组字符化的操作吗
2.我之前学到的js中的map里好像只能放三种格式：元素，索引号，数组。所以我有点看不懂这个map中放的item是啥意思 */