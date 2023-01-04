class SimpleLinkedList {  
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }
  
  peek() {
    return this.size() !== 0 ? this.list[0].datum() : null;
  }

  pop() {
    return this.list.shift().datum();
  }

  push(el) {
    this.list.unshift(new Element(el, this.list[0]));
  }

  head() {
    return this.list[0];
  }

  static fromArray(arr) {
    let newList = new SimpleLinkedList();
  
    if (arr !== null && arr.length !== 0) {
      [...arr].reverse().forEach(el => newList.push(el));
    }
  
    return newList;
  }

  toArray() {
    return this.list.length > 0 ? this.list.map(el => el.datum()) : [];
  }

  reverse() {
    this.list.reverse();
    
    for (let i = 0; i < this.list.length - 1; i++) {
      this.list[i].nextEl = this.list[i + 1];
    }
    this.list[this.list.length - 1].nextEl = null;

    return this;
  }
}

class Element {
  constructor(data, nextEl = null) {
    this.data = data;
    this.nextEl = nextEl;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextEl;
  }

  isTail() {
    return this.nextEl === null;
  }
}

module.exports = { SimpleLinkedList, Element };