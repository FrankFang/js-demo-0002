function jQuery(选择器或节点或节点集, 范围 = document) {
  let 标签数组 = []
  if (typeof 选择器或节点或节点集 === 'string') {
    const 标签伪数组 = 范围.querySelectorAll(选择器或节点或节点集)
    标签数组 = Array.from(标签伪数组)
  } else if (选择器或节点或节点集 instanceof Node) {
    标签数组 = [选择器或节点或节点集]
  } else if (选择器或节点或节点集 instanceof NodeList) {
    标签数组 = Array.from(选择器或节点或节点集)
  } else {
    throw new Error('你传的什么鬼东西')
  }


  const api = {
    addClass: (className) => {
      标签数组.forEach((标签) => {
        标签.classList.add(className)
      })
      return api
    },
    removeClass: (className) => {
      标签数组.forEach((标签) => {
        标签.classList.remove(className)
      })
      return api
    },
    text: (newText) => {
      if (newText === undefined) {
        return 标签数组[0].textContent // getter
      } else {
        标签数组[0].textContent = newText // setter
        return api
      }
    },
    index: () => {
      const element = 标签数组[0]
      const parent = element.parentNode
      const siblings = parent.children
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === element) {
          return i
        }
      }
    }
  }
  return api
}

const $ = jQuery

const x = $('#x').index()
console.log(x)





