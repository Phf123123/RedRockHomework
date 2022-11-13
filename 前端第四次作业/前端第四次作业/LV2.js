const stu = {
  name:'Ming',
  skills:{
      speak(){
      this.name='JACK'
      }
  }
}
  const fn = function (obj){
  stu.mySpeak = stu.skills.speak;
}
fn()
stu.mySpeak();
console.log(stu.name)