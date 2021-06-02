class coffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(order) {
    if (this.menu.some((i) => i.name === order)) {
      this.orders.push(order);
      return;
    }
    return "This item is currently unavailable!";
  }
  fullFilOrder() {
    if (this.orders.length) {
      let firstOrder = this.orders.shift();
      return `this ${firstOrder} ready`;
    }
    return "All orders have been fulfilled!";
  }
  get listOrders() {
    return this.orders;
  }
  dueAmount() {
    let total = 0;
    for (let order of this.orders) {
      total += this.menu.find((item) => item.name === order).price;
    }
    return total;
  }
  chepeastItem() {
    let priceArr = [];
    this.menu.forEach((item) => {
      priceArr.push(item.price);
    });
    return Math.min(...priceArr);
  }
  drinksOnly() {
    let drinksOnlyArr = [];
    this.menu.forEach((item) => {
      if (item.type === "drink") {
        drinksOnlyArr.push(item.name);
      }
    });
    return drinksOnlyArr;
  }
  foodOnly() {
    let foodOnlyArr = [];
    this.menu.forEach((item) => {
      if (item.type === "food") {
        foodOnlyArr.push(item.name);
      }
    });
    return foodOnlyArr;
  }
}
const menu = [
  { name: "cinnamon roll", type: "food", price: 1 },
  { name: "iced coffee", type: "drink", price: 1.5 },
];
