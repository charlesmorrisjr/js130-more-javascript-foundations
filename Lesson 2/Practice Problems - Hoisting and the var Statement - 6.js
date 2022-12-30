let Image;
var catImage;
var pudding;

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

Image = class {
  constructor(file) {
    this.file = file;
  }
}

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);