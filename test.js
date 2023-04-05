console.log(this) // window

const fb = function () {

  console.log(this)

  const fa = (p1, p2, p3) => {
    console.log(this) // a
  }

  fa.call(window, 1, 2, 3)

}

fb()
const a = { say: fb }
a.say() // this ===  a
