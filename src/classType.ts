// Declier class

class Product {
 private id: number;
 private name: string;
 private brand: string;
 private category: string;
 private price: number;
 private stock: number;
  private images: string[];
 private rating: number;
 private isFeatured: boolean;
 private isActive: boolean;

  constructor(
    id: number,
    name: string,
    brand: string,
    category: string,
    price: number,
    stock: number,
    images: string[],
    rating: number,
    isFeatured: boolean,
    isActive: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.rating = rating;
    this.isFeatured = isFeatured;
    this.isActive = isActive;
  };


  addStock(stock:number):boolean{
    this.stock =  this.stock + stock;
    return true
  }

  discount(price:number):boolean{
    this.price = this.price - price
    return true
  }

  prientDetlices():void {
    console.log("Producat Name", this.name);
    console.log("Producat Price", this.price );
  }
}

const product_1 = new Product(
  1,
  "iPhone 17 Pro",
  "Apple",
  "Smartphone",
  5000,
  20,
  ["front.jpg", "back.jpg"],
  4.8,
  true,
  true,
);

const product_2 = new Product(
  2,
  "Galaxy S25 Ultra",
  "Samsung",
  "Smartphone",
  135000,
  15,
  ["s25-front.jpg", "s25-back.jpg"],
  4.7,
  true,
  true,
);

const product_3 = new Product(
  3,
  "MacBook Air M4",
  "Apple",
  "Laptop",
  145000,
  10,
  ["macbook-front.jpg", "macbook-side.jpg"],
  4.9,
  false,
  true,
);

const product_4 = new Product(
  4,
  "Sony WH-1000XM6",
  "Sony",
  "Headphones",
  42000,
  30,
  ["sony-front.jpg", "sony-side.jpg"],
  4.6,
  true,
  true,
);

const product_5 = new Product(
  5,
  "Logitech MX Master 3S",
  "Logitech",
  "Mouse",
  12500,
  0,
  ["mouse-front.jpg", "mouse-side.jpg"],
  4.5,
  false,
  true,
  

);

const producat: Product[] = [
  product_1,
  product_2,
  product_3,
  product_4,
  product_5,
];

product_1.addStock(45);
product_1.discount(500)
console.log("All Producat List", producat);

product_1.prientDetlices();


