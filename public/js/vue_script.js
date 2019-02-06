
var vm = new Vue({
  el: '#burgerWrap',
  data: {
    menuArray: food,
  }
})
var vm = new Vue({
  el: '#orders',
  data: {
    orderResult: {"fn":"", "ln":"", "em":"", "str":"", "nr":"", "pay":"", "gen":"", "burg":""}
  },
  methods:{
      order: function(){
        alert("Order made!");
        this.orderResult = form();
    }
  }
})
;
