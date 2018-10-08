<template>
    <div class="p-list">
        <header-view></header-view>
        <catalogs-view></catalogs-view>
        <section>
            <div class="container">
                <div class="page_ad clear-float">
                    <a class="big" href="#" target="_blank">
                        <img src="http://127.0.0.1:3000/img/productlist/9288725230331101.jpg" width="1200" height="300"></a>
                    <a class="medium mr" href="#" target="_blank">
                        <img src="http://127.0.0.1:3000/img/productlist/9288693076336760.jpg" width="405" height="180"></a>
                    <a class="medium mr" href="#" target="_blank">
                        <img src="http://127.0.0.1:3000/img/productlist/9288692679975011.jpg" width="405" height="180"></a>
                    <a class="small mr" href="#" target="_blank">
                        <img src="http://127.0.0.1:3000/img/productlist/9288725230363869.jpg" width="180" height="180"></a>
                    <a class="small" href="#" target="_blank">
                        <img src="http://127.0.0.1:3000/img/productlist/9288698048782684.jpg" width="180" height="180"></a>
                </div>
                <div class="select">
                    <div class="all clear-float">
                        <div class="tit left">►所有分类</div>
                        <ul class="left">
                            <li v-for="(item,i) in fList" :key="i">
                                <a href="javascript:" @click.prevent="getDifference(item.family)">{{item.family}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--排序-->
                <div class="filter clear-float">
                    <div class="filter_sort">
                        <a :class="defaultClass" href="javascript:" @click="getByDefault">默认排序</a>
                        <a :class="saleClass" href="javascript:" @click="getBySale">销量<i class="dowm"></i></a>
                        <a :class="priceClass" href="javascript:" @click="getByPrice">价格<i class="sort_down"></i></a>
                        <a :class="commentsClass" href="javascript:" @click="getByComment">评论<i class="dowm"></i></a>
                    </div>
                </div>
            </div>
            <div class="container">
                <!--商品列表-->
                <div class="goods_list clear-float">
                    <ul>
                        <li class="product_item" v-for="(item,i) in pList" :key="i">
                            <div @click="toDetail(item.id)">
                                <div class="p_img clear-float">
                                    <p class="tag" v-show="item.new==1">
                                        <img src="http://127.0.0.1:3000/img/productlist/ICON06.png" width="46" height="46"  alt="">
                                    </p>
                                    <a href="javascript:" target="_blank">
                                        <img :src="item.src" width="290" height="290" class="j_product_img">
                                    </a>
                                </div>
                                <div class="p_info clear-float">
                                    <div class="p_name"><a target="_blank">{{item.title}}</a></div>
                                    <div class="p_price">
                                    <span class="price">
                                        <strong>¥{{item.price|priceFilter}}</strong>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-buy">
                                <span>{{item.sub_title}}</span>
                                <a class="btn-buy" @click.prevent="pListToCart(item.id)">加入购物车</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="page_btn clear-float">
                    <div class="paging right">
                        <div class="paging-num">
                            <a :class="n==1?'width-btn disabled':'width-btn'" @click="prevP">上一页</a>
                            <a :class="num==n?'this':''" v-for="num in pageCount" :key="num" @click="setPno(num)">{{num}}</a>
                            <a :class="n==pageCount?'width-btn disabled':'width-btn'" @click="nextP">下一页</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer-view></footer-view>
    </div>
</template>
<script>
    import '@/assets/css/productlist.css'
    import Header from '../components/allHeader'
    import Catalogs from '../components/catalogs'
    import Footer from  '../components/bigFooter'
    export default {
        data:function (){
            return {
                fList:[],
                family:"",
                pList:[],
                pno:0,
                pageCount:0,
                num:1,
                cat_id:0,
                defaultClass:{on:true},
                saleClass:{on:false},
                priceClass:{
                    price:true,
                    up:false,
                    down:false,
                    on:false
                },
                commentsClass:{on:false},
                isDown:1,
                n:1,
                url:""
            }
        },
        components:{
            "header-view":Header,
            "catalogs-view":Catalogs,
            "footer-view":Footer
        },
        mounted(){
            this.cat_id = this.$route.params.cat_id;
            this.getFamily()
        },
        watch: {
            $route(){
                this.cat_id = this.$route.params.cat_id;
            },
            cat_id() {
                this.getFamily()
            }
        },
        methods:{
            getFamily(){
                this.$http.get("products/family?cat_id="+this.cat_id).then(res=>{
                    if(res.body.code==1){
                        this.fList = res.body.msg;
                        this.getList(1);
                    }else{
                        this.$router.push('/notfind')
                    }
                })
            },
            getList(n){
                this.$http.get(`products/list?cat_id=${this.cat_id}&order=${n}`).then(res=>{
                    if(res.body.code==1){
                        this.pList = res.body.msg.data;
                        this.pageCount = res.body.msg.pageCount
                    }else{
                        this.$router.push('/notfind')
                    }
                })
            },
            getDifference(f){
                this.$http.get(`products/difference?cat_id=${this.cat_id}&family=${f}`).then(res=>{
                    if(res.body.code==1){
                        this.pList = res.body.msg.data;
                        this.pageCount = res.body.msg.pageCount
                    }else{
                        this.$router.push('/notfind')
                    }
                })
            },
            getByDefault(){
                this.defaultClass.on = true;
                this.saleClass.on = false;
                this.priceClass.on = false;
                this.commentsClass.on = false;
                this.priceClass.down = false;
                this.priceClass.up = false;
                this.getList(1)
            },
            getBySale(){
                this.defaultClass.on = false;
                this.saleClass.on = true;
                this.priceClass.on = false;
                this.commentsClass.on = false;
                this.priceClass.down = false;
                this.priceClass.up = false;
                this.getList(2);
            },
            getByPrice(){
                this.isDown*=-1;
                this.defaultClass.on = false;
                this.saleClass.on = false;
                this.priceClass.on = true;
                this.commentsClass.on = false;
                if(this.isDown>0){
                    this.getList(3);
                    this.priceClass.down = true;
                    this.priceClass.up = false;
                }else if(this.isDown<0){
                    this.getList(4);
                    this.priceClass.down = false;
                    this.priceClass.up = true;
                }
            },
            getByComment(){
                this.defaultClass.on = false;
                this.saleClass.on = false;
                this.priceClass.on = false;
                this.commentsClass.on = true;
                this.priceClass.down = false;
                this.priceClass.up = false;
                this.getList(5);
            },
            changePage(p){
                this.$http.get(`products/list?cat_id=${this.cat_id}&pno=${p}`).then(res=>{
                    if(res.body.code==1){
                        this.pList = res.body.msg.data;
                        this.pageCount = res.body.msg.pageCount
                    }else{
                        this.$router.push('/notfind')
                    }
                })
            },
            setPno(num){
                this.n = num;
                this.changePage(this.n-1)
            },
            prevP(){
                if(this.n>=2){
                    this.n--;
                    this.changePage(this.n-1)
                }
            },
            nextP(){
                if(this.n<this.pageCount){
                    this.n++;
                    this.changePage(this.n-1)
                }
            },
            toDetail(id){
                this.$router.push("/details/"+id)
            },
            //加入购物车
            pListToCart(pid,price){
                this.url = "productlist:"+this.cat_id;
                this.addToCart(1,pid,this.url)
            }
        }
    }
</script>

<style scoped>

</style>