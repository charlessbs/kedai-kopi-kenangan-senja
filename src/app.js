document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Paket CCTV Analog 4 Kamera",
        img: "img/products/1.jpg",
        price: 450,
      },
      {
        id: 2,
        name: "Paket CCTV Analog 8 Kamera",
        img: "img/products/2.jpg",
        price: 700,
      },
      {
        id: 3,
        name: "Paket CCTV Analog 16 Kamera",
        img: "img/products/3.jpg",
        price: 1200,
      },
      {
        id: 4,
        name: "Paket CCTV Digital 4 Kamera",
        img: "img/products/4.jpg",
        price: 650,
      },
      {
        id: 5,
        name: "Paket CCTV Digital 8 Kamera",
        img: "img/products/5.jpg",
        price: 1050,
      },
      {
        id: 6,
        name: "Paket CCTV Digital 16 Kamera",
        img: "img/products/6.jpg",
        price: 1900,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newitem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.item);
    },
  });
});

// konversi ke usd
const usd = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
};
