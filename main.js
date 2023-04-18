const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
      console.log(this.cart);
    },
    removeAllFromCart(removeId) {
      // remove all items with this id
      const copy = this.cart.filter((prodId) => {
        return prodId !== removeId;
      });
      this.cart = [...copy];
      // remove the last item that was added which has the matching id
      // this.cart.findLastIndex((prodId) => {
      //   return prodId !== removeId;
      // });
      // then splice, split, or soemthing of the sort to remove at that
      // index
      console.log(this.cart);
    },
    removeById(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
