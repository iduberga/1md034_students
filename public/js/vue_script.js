
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
        this.orderResult = form();
        if(orderResult.fn.length!=0 && orderResult.ln.length!=0 &&  orderResult.em.length!=0 && orderResult.str.length!=0 && orderResult.nr.length!=0){
          alert("Order made!");
        }
    }
  }
})
;
