import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  VueResource  from 'vue-resource'
Vue.use(VueResource);

Vue.http.options.root = "http://127.0.0.1:3000/";
Vue.http.options.emulateJSON=true;
Vue.http.options.header={'Content-Type':'application/x-www-form-urlencoded;chartset=UTF-8'};
//购物车


Vue.filter("datetimeFilter",function(val){
    var date=new Date(val);
    var m=date.getMonth()+1;
    m<10&&(m="0"+m);
    var d=date.getDate();
    d<10&&(d="0"+d);
    return `${m}月${d+1}日`;
});

Vue.filter("priceFilter",function(val){
    return val.toFixed(2);
});

Vue.prototype.changeCart = function (n,pid,phone){
    this.$http.get(`http://localhost:3000/carts/add?phone=${phone}&count=${n}&pid=${pid}`).then(res=>{
        if(res.body.code==1){
            console.log(res.body.msg)
        }
    })
};
Vue.prototype.addToCart = function(n,pid,url){
    this.phone = sessionStorage.getItem("phone");
    if(this.phone){
        this.changeCart(n,pid,this.phone)
    }else{
        this.$router.push("/login/"+url)
    }
};





import '@/assets/css/base.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
