<template>
    <div class="shopping">
        <header>
            <div class="container">
                <div class = "fl left">
                    <div>欢迎光临易果生鲜！</div>
                </div>
                <!--右侧-->
                <ul class = "fr right">
                    <li :class="isPhShow?'bgWhite':''" @mouseenter="showPh" @mouseleave="showPh">
                        <a href="javascript:">
                            <i class ="smallImg"></i>
                            手机易果
                        </a>
                        <span></span>
                        <div v-show="isPhShow">
                            <div>
                                <img src="http://127.0.0.1:3000/img/imgIndex/qrcode_app.jpg" alt="">
                                <span>扫一扫下载APP</span>
                            </div>
                            <div>
                                <img src="http://127.0.0.1:3000/img/imgIndex/qrcode_wechat.jpg" alt="">
                                <span>易果生鲜微信</span>
                            </div>
                        </div>
                    </li>
                    <li :class="isMsgShow?'bgWhite':''"  @mouseenter="showYg" @mouseleave="showYg">
                        <i class="smallImg"></i>
                        <a href="javascript:">我的易果</a>
                        <span></span>
                        <div v-show="isMsgShow">
                            <a href="">我的订单</a>
                            <a href="">我的优惠券<b id="coupon">0</b></a>
                            <a href="">我的收藏</a>
                            <a href="">我的退换货</a>
                            <a href="">预存款查询</a>
                            <a href="javascript:" class="logout">退出</a>
                        </div>
                    </li>
                </ul>
                <ul class = "fr" v-show="!isSignin">
                    <li>
                        <router-link to="/register">[注册]</router-link>
                    </li>
                    <li>
                        <router-link to="/login">[登录]</router-link>
                    </li>
                </ul>
                <ul class = "fr" v-show="isSignin">
                    <li>
                        <a @click="signOut">
                            [退出]
                        </a>
                    </li>
                    <li class="colorGreen">
                        欢迎{{phone}}
                    </li>
                </ul>
            </div>
            <div class="logoRow">
                <div class="container">
                    <div class="left-logo left">
                        <router-link to="/">
                        </router-link>
                    </div>
                    <div class="steps">
                        <ul>
                            <li class="on">
                                <b class="b1"></b>
                                <span>我的购物车</span>
                            </li>
                            <li>
                                <i></i>
                                <b class="b2"></b>
                                <span>填写订单信息</span>
                            </li>
                            <li>
                                <i></i>
                                <b class="b3"></b>
                                <span>成功提交订单</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container cart" v-show="!isEmpty">
                <h2>
                    我的购物车
                    <div class="city ">
                        <div class="city-sz"><i></i>配送至：</div>
                        <div class="city-tit">
                            <a class="city-name" href="">北京<s></s></a>
                        </div>
                    </div>
                    <router-link class="on-shopping" to="/">继续购物 &gt; &gt;</router-link>
                </h2>
                <div class="cart-content">
                    <div class="cart-header">
                        <table class="cart-table">
                            <tbody>
                            <tr>
                                <th class="cart-t-check"><label><input type="checkbox" class="chkAll" v-model="allCheck" @click="allSelect()">全选</label></th>
                                <th class="cart-t-info">商品信息</th>
                                <th class="cart-t-ub" style="width:75px;">悠币</th>
                                <th class="cart-t-price">单价</th>
                                <th class="cart-t-num">购买数量</th>
                                <th class="cart-t-total">合计</th>
                                <th class="cart-t-spec">规格</th>
                                <th class="cart-t-opera">操作</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cart-list" id="theInsulationCan">
                        <table class="cart-table" v-for="(item,i) in cartList" :key="i">
                            <tbody>
                            <tr>
                                <td class="cart-t-check">
                                    <input type="checkbox" :checked="item.checked==1?'checked':''" @click="singleSelect(i)">
                                </td>
                                <td class="cart-t-img">
                                    <router-link :to="'details/'+item.pid">
                                        <img :src="item.src">
                                    </router-link>
                                </td>
                                <td class="cart-t-info"><a href="#">{{item.title}}</a></td>
                                <td class="cart-t-ub"></td>
                                <td class="cart-t-price">￥{{item.price|priceFilter}}</td>
                                <td class="cart-t-num">
                                    <div class="quantity-form">
                                        <a href="#" class="decrement" @click.prevent="insCount(i)"></a>
                                        <input type="text" class="pCount" :value="item.count" >
                                        <a href="#" class="increment" @click.prevent="disCount(i)"></a>
                                    </div>
                                </td>
                                <td class="cart-t-total">￥<span>{{item.price*item.count|priceFilter}}</span></td>
                                <td class="cart-t-spec">{{item.spec}}</td>
                                <td class="cart-t-opera">
                                    <a href="#" @click.prevent="delProduct(item.cid)">删除</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cart-footer settle">
                        <div class="clear-float">
                            <div class="left">
                                <label><input type="checkbox" v-model="allCheck" class="chkAll" @click="allSelect()">全选</label>
                                <a href="#" @click.prevent="delChecked"><i></i>删除选中的商品</a>
                                <a href="#" @click.prevent="clearAll">清空购物车</a>
                            </div>
                            <div class="right">
                                <span class="ub">悠币：<i>0</i>个</span>
                                <span class="total-price">总价：<i>￥<span>{{total|priceFilter}}</span></i></span>
                                <input id="SelectedCommIds" name="SelectedCommIds" type="hidden" value="">
                                <a href="#" class="btn" id="btnSubmit" name="btnSubmit" >去结算</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container cart cart-empty" v-show="isEmpty">
                <div class="cart-none">
                    <p>
                        <b>购物车是空的，去买点东西吧！<router-link to="/">继续逛逛&gt;&gt;</router-link></b>
                        <br>您还尚未<router-link to="/login/index">登录</router-link>
                    </p>
                </div>
            </div>
        </section>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import '@/assets/css/cart.css'
    import Footer from '../components/tinyFooter'
    export default {
        data:function () {
            return {
                phone:"",
                isSignin:false,
                isMsgShow:false,
                isPhShow:false,
                i:-1,
                m:-1,
                cartList:[],
                isEmpty:false,
                total:0,
                count:0,
                cid:-1,
                cheNum:-1,
                allCheck:false,
                selectData:[],
            }
        },
        components:{
            "footer-view":Footer
        },
        mounted(){
            this.getPhone();
        },
        methods:{
            getPhone(){
                this.phone = sessionStorage.getItem("phone");
                if(this.phone){
                    this.isSignin = true;
                    this.getCartList()
                }else{
                    this.isSignin = false;
                }
            },
            getCartList(){
                this.n = 0;
                this.total = 0;
                this.$http.get("carts/list?phone="+this.phone).then(res=>{
                    if(res.body.code==1){
                        this.cartList = res.body.msg;
                        this.total=this.cartList.filter((elem)=>{return elem.checked==1})
                            .reduce((prev,elem)=>{return prev += elem.count*elem.price},0);
                        this.isEmpty = false;
                        this.selectData = this.cartList.filter(elem=>{
                            return elem.checked==1
                        });
                        this.selectData.length==this.cartList.length?this.allCheck = true:this.allCheck = false
                    }else{
                        this.isEmpty = true
                    }
                })
            },
            delChecked(){
                this.cartList.forEach(elem=>{
                    if(elem.checked==1){
                        this.delProduct(elem.cid);
                        this.$store.commit("subtract")
                    }
                })
            },
            clearAll(){
                this.cartList.forEach(elem=>{
                    this.delProduct(elem.cid);
                })
            },
            delProduct(cid){
                this.$store.commit("subtract");
                this.$http.get(`http://localhost:3000/carts/delete?cid=${cid}`).then(res=>{
                    if(res.body.code==1){
                        this.getCartList()
                    }
                })
            },
            singleSelect(n){
                this.cartList.forEach((elem,i)=>{
                    if(i==n){
                        this.cid = elem.cid;
                        this.cheNum = elem.checked;
                        this.cheNum*=-1;
                    }
                });
                this.$http.get(`carts/ischecked?cid=${this.cid}&checked=${this.cheNum}`).then(res=>{
                    if(res.body.code==1){
                        this.getCartList()
                    }
                })
            },
            allSelect() {
                if(this.allCheck){
                    this.allCheck = false;
                    this.cheNum = -1;
                }else{
                    this.cheNum = 1;
                    this.allCheck = true;
                }
                this.cartList.forEach(elem => {
                    elem.checked = this.cheNum;
                    this.$http.get(`carts/ischecked?cid=${elem.cid}&checked=${elem.checked}`).then(res=>{
                        if(res.body.code==1){
                            this.getCartList()
                        }
                    })
                });
            },
            insCount(n){
                this.cartList.forEach((elem,i)=>{
                    if(i==n){
                        this.count = elem.count;
                        this.count++;
                        this.cid = elem.cid;
                        this.updataCart(this.count,this.cid)
                    }
                })
            },
            disCount(n){
                this.cartList.forEach((elem,i)=>{
                    if(i==n){
                        this.count = elem.count;
                        this.count--;
                        this.cid = elem.cid;
                        this.updataCart(this.count,this.cid)
                    }
                })
            },
            updataCart(count,cid){
                this.$http.get(`carts/update?cid=${cid}&count=${count}`).then(res=>{
                    if(res.body.code==1){
                        this.getCartList()
                    }
                })
            },
            showPh(){
                this.m*=-1;
                if(this.m>0){
                    this.isPhShow = true;
                }else{
                    this.isPhShow = false;
                }
            },
            showYg(){
                this.i*=-1;
                if(this.i>0){
                    this.isMsgShow = true;
                }else{
                    this.isMsgShow = false;
                }
            },
            signOut(){
                sessionStorage.removeItem("phone");
                this.getPhone()
            }
        }
    }
</script>

<style scoped>

</style>