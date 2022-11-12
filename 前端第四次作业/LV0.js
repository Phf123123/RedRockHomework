const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
}

const {name} = stu;
let [h1,h2,h3] = ['play','run','sing'];
const {hobby} = stu;
const {address:{home:HOME}} = stu;
const a ={...['student',{year:2022}]};
const {year=2022} = a;

console.log(name)  
console.log(h1,h2,h3)  
console.log(HOME)  
console.log(year)  
// 这个year的解构应该有点问题，我太菜了呜呜