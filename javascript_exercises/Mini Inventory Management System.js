let ItemCreator = (function() {
  function nameIsValid(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function categoryIsValid(category) {
    return category.length >= 5 && /\s/g.test(category) === false;
  }

  function generateSkuCode(itemName, category) {
    return itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() + category.slice(0, 2).toUpperCase();
  }

  function quantityIsProvided(quantity) {
    return quantity !== undefined;
  }
  
  return function(itemName, category, quantity) {
    if (nameIsValid(itemName) && categoryIsValid(category) && quantityIsProvided(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  
  getItem(skuCode) {
    return this.items.filter(item => item.skuCode === skuCode)[0];
  },

  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, itemProps) {
    Object.assign(this.getItem(skuCode), itemProps);
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);
    return {
      itemInfo() {
        Object.entries(item).forEach(prop => console.log(`${prop[0]}: ${prop[1]}`));
      }
    }
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.itemName).join(', '));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot

ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');

// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
