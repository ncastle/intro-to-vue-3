const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: 'NCastle Dev',
      product: 'Socks',
      description: 'The best socks you will find on the internet',
      selectedVariant: 0,
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3',
      inventory: 7,
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 33,
        },
        {
          id: 2234,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      // let titleString = this.brand + ' ' + this.product;
      // if (this.onSale) {
      //   titleString += ' is on sale!';
      // }
      // return titleString;
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      if (this.onSale) {
        return ' is on sale!';
      }
      return '';
    },
  },
});
