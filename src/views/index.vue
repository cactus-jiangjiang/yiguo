<template>
    <div class="index">
        <header-view></header-view>
        <catalog-view></catalog-view>
        <banner-view></banner-view>
        <section>
            <div class="container">
                <!--广告-->
                <div class="advertise">
                    <ul class="advertise-list flex">
                        <li class="left">
                            <router-link to="/notfind" class="relative">
                                <img src="http://127.0.0.1:3000/img/imgIndex/adv001.jpg" alt="">
                                <p class="absolute">
                                    <b>新品专区</b>
                                    探访源头产地 臻选当令时鲜
                                </p>
                            </router-link>
                        </li>
                        <li class="left">
                            <router-link to="/notfind"  class="relative">
                                <img src="http://127.0.0.1:3000/img/imgIndex/adv002.jpg" alt="">
                                <p  class="absolute">
                                    <b>优质生活</b>
                                    美食有态度 生活更有味
                                </p>
                            </router-link>
                        </li>
                        <li class="left">
                            <router-link to="/notfind"  class="relative">
                                <img src="http://127.0.0.1:3000/img/imgIndex/adv003.jpg" alt="">
                                <p  class="absolute">
                                    <b>水果专区</b>
                                    全球水果新鲜速递
                                </p>
                            </router-link>
                        </li>
                        <li class="left">
                            <router-link to="/notfind"  class="relative">
                                <img src="http://127.0.0.1:3000/img/imgIndex/adv004.jpg" alt="">
                                <p  class="absolute">
                                    <b>菜谱专栏</b>
                                    大厨私房菜 餐桌新食尚
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!--楼层-->
                <div id="floor">
                    <div class="floor fl1">
                        <div class="floor-title flex relative">
                            <h2>
                                <router-link to="/productlist/1" class="absolute">
                                    <i>F1</i>
                                    进口水果
                                </router-link>
                            </h2>
                            <span>
                            <router-link to="/searchlist/进口苹果">进口苹果</router-link><span></span>
                            <router-link to="/searchlist/佳沛专区">佳沛专区</router-link><span></span>
                            <router-link to="/searchlist/泰国鲜果">泰国鲜果</router-link>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <router-link to="/productlist/1">
                                    <img src="http://127.0.0.1:3000/img/imgIndex/fruit_big_1.jpg" alt="1">
                                </router-link>
                            </div>
                            <div class="floor-main">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fruit_1.jpg" alt="1">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fruit_2.jpg" alt="2">
                                        </a>
                                    </li>
                                    <li class="width">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fruit_3.jpg" alt="3">
                                        </a>
                                    </li>
                                    <li class="width">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fruit_4.jpg" alt="4">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fruit_5.jpg" alt="5">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fruit_6.jpg" alt="6">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="floor fl2">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute ">
                                    <i>F2</i>
                                    国产水果
                                </a>
                            </h2>
                            <span>
                            <a href="#">果味四川</a><span></span>
                            <a href="#">秋日梨享</a><span></span>
                            <a href="#">甜蜜柚惑</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/guo_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/guo_1.jpg" alt="1">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/guo_2.jpg" alt="2">
                                        </a>
                                    </li>
                                    <li class="width">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/guo_3.jpg" alt="3">
                                        </a>
                                    </li>
                                    <li class="width">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/guo_4.jpg" alt="4">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/guo_5.jpg" alt="5">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/guo_6.jpg" alt="6">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="floor fl3">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute">
                                    <i>F3</i>
                                    海鲜水产
                                </a>
                            </h2>
                            <span>
                            <a href="#">刺身专区</a><span></span>
                            <a href="#">东海水产</a><span></span>
                            <a href="#">海产干货</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/fish_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fish_1.jpg" alt="1">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fish_2.jpg" alt="2">
                                        </a>
                                    </li>
                                    <li class="width">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fish_3.jpg" alt="3">
                                        </a>
                                    </li>
                                    <li class="width">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fish_4.jpg" alt="4">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fish_5.jpg" alt="5">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/fish_6.jpg" alt="6">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="floor style-2 fl4">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute">
                                    <i>F4</i>
                                    精选肉类
                                </a>
                            </h2>
                            <span>
                            <a href="#">欧洲天然猪</a><span></span>
                            <a href="#">澳洲牛肉</a><span></span>
                            <a href="#">肉类制品</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/meat_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main flex">
                                <div>
                                    <div class="left-side left">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/meat_big_3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="small-img left">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_1.jpg" alt="1">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_2.jpg" alt="2">
                                                </a>
                                            </li>
                                            <li class="width">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_3.jpg" alt="3">
                                                </a>
                                            </li>
                                            <li class="width">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_4.jpg" alt="4">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bottom-logo left">
                                        <ul>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_logo_1.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_logo_2.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_logo_3.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_logo_4.png" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/meat_logo_5.jpg" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <a href="">
                                        <img src="http://127.0.0.1:3000/img/imgIndex/meat_big_2.jpg" alt="">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="floor style-2 fl5">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute">
                                    <i>F5</i>
                                    乳品糕点
                                </a>
                            </h2>
                            <span>
                            <a href="#">味全</a><span></span>
                            <a href="#">蛋糕</a><span></span>
                            <a href="#">卓德乳品</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/meat_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main flex">
                                <div>
                                    <div class="left-side left">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/milk_big_3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="small-img left">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/milk_1.jpg" alt="1">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/milk_2.jpg" alt="2">
                                                </a>
                                            </li>
                                            <li class="width">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/milk_3.jpg" alt="3">
                                                </a>
                                            </li>
                                            <li class="width">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/milk_4.jpg" alt="4">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bottom-logo left">
                                        <ul>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/milk_logo_1.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/milk_logo_2.jpg" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <a href="">
                                        <img src="http://127.0.0.1:3000/img/imgIndex/milk_big_2.jpg" alt="">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="floor style-2 fl6">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute">
                                    <i>F6</i>
                                    方便速食
                                </a>
                            </h2>
                            <span>
                            <a href="#">大娘水饺</a><span></span>
                            <a href="#">湾仔码头</a><span></span>
                            <a href="#">龙凤</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/food_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main flex">
                                <div>
                                    <div class="left-side left">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/food_big_3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="small-img left">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_1.jpg" alt="1">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_2.jpg" alt="2">
                                                </a>
                                            </li>
                                            <li class="width">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_3.jpg" alt="3">
                                                </a>
                                            </li>
                                            <li class="width">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_4.jpg" alt="4">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bottom-logo left">
                                        <ul>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_logo_1.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_logo_2.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_logo_3.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/food_logo_4.jpg" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="http://127.0.0.1:3000/img/imgIndex/food_big_2.jpg" alt="">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="floor style-3 fl7">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute">
                                    <i>F7</i>
                                    粮油杂货
                                </a>
                            </h2>
                            <span>
                            <a href="#">进口食用油</a><span></span>
                            <a href="#">人气零嘴</a><span></span>
                            <a href="#">进口酱料</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/oil_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main flex">
                                <div>
                                    <div class="left-side left">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/oil_big_3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="small-img left">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/oil_1.jpg" alt="1">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/oil_2.jpg" alt="2">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bottom-logo left">
                                        <ul>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/oil_logo_1.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/oil_logo_2.jpg" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <a href="">
                                        <img src="http://127.0.0.1:3000/img/imgIndex/oil_big_2.jpg" alt="">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="floor style-3 fl8">
                        <div class="floor-title flex relative">
                            <h2>
                                <a href="#" class="absolute">
                                    <i>F8</i>
                                    饮料酒水
                                </a>
                            </h2>
                            <span>
                            <a href="#">饮用水</a><span></span>
                            <a href="#">纯正麦片</a><span></span>
                            <a href="#">贝纳颂</a>
                        </span>
                        </div>
                        <div class="floor-body flex">
                            <div class="floor-side">
                                <img src="http://127.0.0.1:3000/img/imgIndex/drink_big_1.jpg" alt="1">
                            </div>
                            <div class="floor-main flex">
                                <div>
                                    <div class="left-side left">
                                        <a href="">
                                            <img src="http://127.0.0.1:3000/img/imgIndex/drink_big_3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="small-img left">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/drink_1.jpg" alt="1">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/drink_2.jpg" alt="2">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bottom-logo left">
                                        <ul>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/drink_logo_1.jpg" alt="">
                                                </a>
                                            </li>
                                            <li class="left">
                                                <a href="">
                                                    <img src="http://127.0.0.1:3000/img/imgIndex/drink_logo_2.jpg" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <a href="">
                                        <img src="http://127.0.0.1:3000/img/imgIndex/drink_big_2.jpg" alt="">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--楼层电梯-->
            <div class="floor-guide" v-show="isShowGuide">
                <div class="mui-nav">
                    <a @click.prevent="toFloor(i)" :class="item.isCurrent" v-for="(item,i) in floorguide" :key="i">
                        <b :class="item.b">&nbsp;</b>
                        <em>{{item.f}}</em>
                        <i>&nbsp;</i>
                    </a>
                </div>
            </div>
        </section>
        <footer-view></footer-view>
        <side-bar></side-bar>
    </div>
</template>

<script>
    import '@/assets/css/index.css'
    import Header from '../components/allHeader'
    import Banner from '../components/banner'
    import Catalogs from '../components/indexCatalogs'
    import Footer from '../components/bigFooter'
    import Sidebar from '../components/sidebar'
    export default {
        data:function(){
            return{
                y:0,
                isShowGuide:false,
                floorguide:[
                    {"f":"进口水果","b":"icon_01_channelhome","isCurrent":"current"},
                    {"f":"国产水果","b":"icon_02_channelhome","isCurrent":""},
                    {"f":"海鲜水产","b":"icon_03_channelhome","isCurrent":""},
                    {"f":"精选肉类","b":"icon_04_channelhome","isCurrent":""},
                    {"f":"乳品糕点","b":"icon_05_channelhome","isCurrent":""},
                    {"f":"方便速食","b":"icon_06_channelhome","isCurrent":""},
                    {"f":"粮油杂货","b":"icon_07_channelhome","isCurrent":""},
                    {"f":"饮料酒水","b":"icon_08_channelhome","isCurrent":""},
                ],
                indexList:[]
            }
        },
        components:{
            "header-view":Header,
            "banner-view":Banner,
            "catalog-view":Catalogs,
            "footer-view":Footer,
            "side-bar":Sidebar
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
            this.getIndex()
        },
        methods:{
            getIndex(){
                this.$http.get("index/list").then(res=>{
                    if(res.body.code==1){
                        this.indexList = res.body.msg;
                    }else{
                        alert(res.body.msg)
                    }
                })
            },
            handleScroll(){
                this.y=window.scrollY;
                if(this.y<800){
                    this.isShowGuide=false;
                }else{
                    this.isShowGuide=true;
                }
                this.floorguide.forEach((elem,i)=>{
                    if(this.y>=i*500+800&&this.y<(i+1)*500+800){
                        elem.isCurrent = "current"
                    }else{
                        elem.isCurrent = ""
                    }
                })
            },
            toFloor(i){
                window.scrollTo(0,i*500+800);
            }
        }
    }
</script>

<style scoped>

</style>