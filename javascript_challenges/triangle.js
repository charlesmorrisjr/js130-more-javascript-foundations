class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.isLegal();
  }

  checkSum() {
    // Check if any side is greater
    if (
        this.a + this.b > this.c &&
        this.b + this.c > this.a &&
        this.a + this.c > this.b
      ) {
      return true;
    } else {
      return false;
    }
  }
  
  isLegal() {
    // Check if each side is greater than 0
    if (this.a > 0 && this.b > 0 && this.c > 0 && this.checkSum()) {
      return true;
    } else {
      throw new Error('Illegal triangle');
    }
  }
  
  kind() {
    if (this.a === this.b && this.b === this.c) {
      return "equilateral";
    } else if (this.a === this.b || this.b === this.c || this.a === this.c) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;