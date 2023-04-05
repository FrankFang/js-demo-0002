var fn = function () {
  console.log(this.name)
}
var name = 'hi';
var a = {
  name: 'a',
  say: function () {
    console.log(this.name)
  }
}
var b = {
  name: 'b',
  say: function (fn) {
    fn() // this === window
  }
}
b.say(a.say) // 输出1 // this === b // hi
b.say = a.say
b.say() // 输出2 // this === b // b
