<template>
    <div class="s-list">
        <header-view></header-view>
        <catalogs-view></catalogs-view>
        <div class="container">
            <div class="filter clear-float">
                <div class="filter_sort">
                    <a :class="defaultClass" href="javascript:" @click="getByDefault">默认排序</a>
                    <a :class="saleClass" href="javascript:" @click="getBySale">销量<i class="dowm"></i></a>
                    <a :class="priceClass" href="javascript:" @click="getByPrice">价格<i class="sort_down"></i></a>
                    <a :class="commentsClass" href="javascript:" @click="getByComment">评论<i class="dowm"></i></a>
                </div>
            </div>
            <div class="goods_list clear-float">
                <ul>
                    <li class="product_item" v-for="(item,i) in sList" :key="i">
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
                                <div class="p_name"><a href="#" target="_blank">{{item.title}}</a></div>
                                <div class="p_price">
                                <span class="price">
                                    <strong>¥{{item.price.toFixed(2)}}</strong>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-buy">
                            <span>{{item.sub_title}}</span>
                            <a class="btn-buy" href="#" @click.prevent="pListToCart(item.id)">加入购物车</a>
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
        <footer-view></footer-view>
    </div>
</template>

<script>
    import '@/assets/css/productlist.css'
    import Header from '../components/allHeader'
    import Catalogs from '../components/catalogs'
    import Footer from  '../components/bigFooter'
    export default {
        data:function () {
            return {
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
                kw:"",
                pno:0,
                sList:[],
                pageCount:0,
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
            this.kw = this.$route.params.kw;
            this.searchList();
        },
        watch: {
            $route(){
                this.kw = this.$route.params.kw;
            },
            kw() {
                this.searchList()
            }
        },
        methods:{
            getByDefault(){
                this.defaultClass.on = true;
                this.saleClass.on = false;
                this.priceClass.on = false;
                this.commentsClass.on = false;
                this.priceClass.down = false;
                this.priceClass.up = false;
            },
            getBySale(){
                this.defaultClass.on = false;
                this.saleClass.on = true;
                this.priceClass.on = false;
                this.commentsClass.on = false;
                this.priceClass.down = false;
                this.priceClass.up = false;
            },
            getByPrice(){
                this.isDown*=-1;
                this.defaultClass.on = false;
                this.saleClass.on = false;
                this.priceClass.on = true;
                this.commentsClass.on = false;
                if(this.isDown>0){
                    this.priceClass.down = true;
                    this.priceClass.up = false;
                }else if(this.isDown<0){
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
            },
            searchList(){
                this.$http.get(`products/searchlist?kw=${this.kw}&pno=${this.pno}`).then(res=>{
                    if(res.body.code==1){
                        this.sList = res.body.msg.data;
                        this.pageCount = res.body.msg.pageCount
                    }else{
                        this.$router.push("/notfind")
                    }
                })
            },
            changePage(p){
                this.$http.get(`products/searchlist?kw=${this.kw}&pno=${p}`).then(res=>{
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
            pListToCart(pid,price){
                this.url = "searchlist:"+this.kw;
                this.addToCart(1,pid,this.url)
            }
        }
    }
</script>

<style scoped>

</style>