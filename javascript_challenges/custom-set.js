function isUnique(arr) {
  return arr.filter((element, idx) => arr.indexOf(element) === idx);
}

class CustomSet {
  constructor(data = []) {
    this.data = isUnique(data);
  }

  isEmpty() {
    return this.data.length === 0;
  }

  contains(element) {
    return this.data.includes(element);
  }

  isSubset(set) {
    return this.data.every(element => set.contains(element));
  }

  isDisjoint(set) {
    return !this.data.some(element => set.contains(element));
  }

  isSame(set) {
    if (this.data.length !== set.data.length) return false;
    return this.data.every(element => set.contains(element));
  }

  add(element) {
    if (!this.contains(element)) {
      this.data.push(element);
    }
   
    return this;
  }

  intersection(set) {
    return new CustomSet(this.data.filter(element => set.contains(element)));
  }

  difference(set) {
    return new CustomSet(this.data.filter(element => !set.data.includes(element)));
  }

  union(set) {
    return new CustomSet(this.data.concat(set.data));
  }
}

module.exports = CustomSet;