const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'The best socks you will find on the internet',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3',
      inStock: true,
      inventory: 7,
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
        },
        {
          id: 2234,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
        },
      ],
      sizes: ['tiny timmy', 'regular randle', 'large and in charge larry'],
    };
  },
  methods: {
    addToCart() {
      if (this.inStock && this.inventory > 0) {
        this.cart += 1;
        this.inventory -= 1;
      }
      this.updateInventory();
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
        this.inventory += 1;
      }
      this.updateInventory();
    },
    updateInventory() {
      if (this.inventory > 0) {
        this.inStock = true;
      } else {
        this.inStock = false;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
