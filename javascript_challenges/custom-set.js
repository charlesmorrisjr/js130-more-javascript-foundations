class CustomSet {
  constructor(data = []) {
    this.data = data;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  contains(element) {
    return this.data.includes(element);
  }

  isSubset(set) {
    if (this.isEmpty()) return true;
    if (!set.isEmpty() && this.isEmpty()) return false;
    
    return this.data.every(element => set.contains(element));
  }

  isDisjoint(set) {
    if (this.isEmpty() || set.isEmpty()) return true;
    return !this.data.some(element => set.contains(element));
  }

  isSame(set) {
    if (this.isEmpty() && set.isEmpty()) return true;
    if (this.isEmpty() || set.isEmpty()) return false;
    
    return this.data.every(element => set.contains(element));
  }

  add(element) {
    if (!this.contains(element)) {
      this.data.push(element);
    }
   
    return this;
  }

  intersection(set) {
    if (this.isEmpty() || set.isEmpty()) return new CustomSet([]);
    return new CustomSet(this.data.filter(element => set.contains(element)));
  }

  difference(set) {
    if (this.isEmpty()) return new CustomSet([]);
    return new CustomSet(this.data.filter(element => !set.data.includes(element)));
  }

  union(set) {
    return new CustomSet(this.data
      .concat(set.data)
      .filter((element, _, arr) => arr.indexOf(element) === arr.lastIndexOf(element))
      .sort((a, b) => a - b));
  }
}

module.exports = CustomSet;