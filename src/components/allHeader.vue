<template>
    <div>
        <!--顶部导航-->
        <div class="header-top">
            <div class="container relative">
                <ul class = "fl left">
                    <li>欢迎光临易果生鲜！</li>
                    <li>
                        <div class="colorGreen">配送至：</div>
                    </li>
                </ul>
                <!--二级菜单-->
                <div class="dropdown" @mouseenter="showBox" @mouseleave="showBox">
                    <div :class="colorChange">
                        <b>北京</b>
                        <span :class="isRotate?'rotate':''"></span>
                    </div>
                    <div class="cities" v-show="isDropdown">
                        <div>
                            <div class="headline">
                                请根据您的收货地址选择
                                <a href="javascript:">全国其它城市&gt;&gt;</a>
                            </div>
                            <div class="city-hot">
                                <span><i></i>热门城市</span>
                                <a href="javascript:">上海</a>
                                <a href="javascript:">北京</a>
                                <a href="javascript:">天津</a>
                                <a href="javascript:">南京市</a>
                                <a href="javascript:">苏州市</a>
                                <a href="javascript:">昆山市</a>
                                <a href="javascript:">无锡市</a>
                                <a href="javascript:">杭州市</a>
                                <a href="javascript:">宁波市</a>
                            </div>
                            <p class="citytab">
                                <span :class="item.isActive" v-for="(item,i) in citiesTabList" :key="i" @mouseenter="showMsg(i)">{{item.t}}</span>
                            </p>
                            <div :class="items[0]" v-for="(items,i) in citiesList" :key="i">
                                <dl v-for="(item,j) in items[1]" :key="j" class="clear-float">
                                    <dt class="left">{{item[0]}}</dt>
                                    <dd class="left clear-float">
                                        <a  :class="obj.isHot"  v-for="(obj,n) in item[1]" :key="n">{{obj.c}}</a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
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
                        <router-link to="/login/1">[登录]</router-link>
                    </li>
                </ul>
                <ul class="fr" v-show="isSignin">
                    <li>
                        <a @click.prevent="signOut">
                            [退出]
                        </a>
                    </li>
                    <li class="colorGreen">
                        欢迎{{phone}}
                    </li>
                </ul>
            </div>
        </div>
        <!--搜索框-->
        <div class="header-search">
            <div class="container">
                <div class="left-logo left">
                    <router-link to="/">
                        <img src="http://127.0.0.1:3000/img/imgIndex/logo.png" alt="">
                    </router-link>
                </div>
                <div class="center-search left">
                    <div>
                        <input type="text" value="" placeholder="输入商品名 / 编号 " v-model="kw" @keyup.13="toSubmit">
                        <input type="button" class="btnSubmit" value="搜索" @click="toSubmit">
                    </div>
                    <div>
                        <router-link to="/productlist/1">澳大利亚脐橙</router-link>
                        <router-link to="/productlist/1">奇异果</router-link>
                        <router-link to="/productlist/3" class="hot">谷饲</router-link>
                        <router-link to="/productlist/3">家佳康</router-link>
                        <router-link to="/productlist/4" class="hot">三文鱼</router-link>
                        <router-link to="/productlist/4">贝类</router-link>
                        <router-link to="/productlist/4" class="hot">鳕鱼</router-link>
                    </div>
                </div>
                <div class="left">
                    <div class="clear-float" @click.prevent="toCart">
                        <a >
                            <span class="cart"></span>
                        </a>
                        <b >{{$store.getters.optCount}}</b>
                        <b class="bigFont">{{$store.getters.optTotal|priceFilter}}</b>
                        <div class="hidden"></div>
                    </div>
                </div>
            </div>
        </div>
        <!--搜索框固定-->
        <div class="search-fixed" v-show="isFixed">
            <div class="container">
                <div class="left-logo left">
                    <router-link to="/index">
                        <img src="http://127.0.0.1:3000/img/imgIndex/logo.png" alt="">
                    </router-link>
                </div>
                <div class="center-search left">
                    <div>
                        <input type="text" placeholder="输入商品名 / 编号 "  v-model="kw" @keyup.13="toSubmit">
                        <input type="button" class="btnSubmit" value="搜索" @click="toSubmit">
                    </div>
                    <div>
                        <router-link to="/productlist/1">澳大利亚脐橙</router-link>
                        <router-link to="/productlist/1" class="hot">奇异果</router-link>
                        <router-link to="/productlist/3" class="hot">谷饲</router-link>
                        <router-link to="/productlist/3">家佳康</router-link>
                    </div>
                </div>
                <div class="cart">
                    <div class="clear-float" @click.prevent="toCart">
                        <a>
                            <span class="cart"></span>
                        </a>
                        <b >{{$store.getters.optCount}}</b>
                        <b class="bigFont">{{$store.getters.optTotal|priceFilter}}</b>
                        <div class="dNone"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '@/assets/css/header.css'
    export default {
        data:function(){
            return {
                n:-1,
                isDropdown:false,
                colorChange:{
                    "city-name":true,
                    colorGreen:true,
                    on:false
                },
                isRotate:false,
                citiesTabList:[
                    {t:"ABCDE",isActive:""},
                    {t:"FGHIJ",isActive:"active"},
                    {t:"KLMNO",isActive:""},
                    {t:"PQRST",isActive:""},
                    {t:"UVWXYZ",isActive:""},
                ],
                citiesList:[
                    ["city-list",
                        [
                            ["A",[{"c":"安庆市","isHot":""}]] ,
                            ["B",[
                                {"c":"滨州市","isHot":""},
                                {"c":"蚌埠市","isHot":""},
                                {"c":"保定市","isHot":""},
                                {"c":"北京","isHot":"hot"},
                                {"c":"北京(郊区)","isHot":""}
                            ]],
                            ["C",[
                                {"c":"崇明县","isHot":""},
                                {"c":"慈溪市","isHot":""},
                                {"c":"滁州市","isHot":""},
                                {"c":"成都市","isHot":""},
                                {"c":"承德市","isHot":""},
                                {"c":"长春市","isHot":""},
                                {"c":"常熟市","isHot":""},
                                {"c":"常州市","isHot":""},
                                {"c":"池州市","isHot":""},
                                {"c":"长沙市","isHot":""},
                                {"c":"巢湖市","isHot":""},
                                {"c":"沧州市","isHot":""},
                                {"c":"重庆","isHot":""}
                            ]],
                            ["D",[
                                {"c":"东莞市","isHot":"hot"},
                                {"c":"大连市","isHot":""},
                                {"c":"东营市","isHot":""},
                                {"c":"德州市","isHot":""},
                                {"c":"丹阳市","isHot":""}
                            ]]
                        ]
                    ],
                    ["city-list active",
                        [
                            ["F",[
                                {"c":"佛山市","isHot":"hot"},
                                {"c":"福州市","isHot":""},
                                {"c":"阜阳市","isHot":""},
                                {"c":"奉化市","isHot":""}
                            ]],
                            ["G",[
                                {"c":"广州市","isHot":"hot"}
                            ]],
                            ["H",[
                                {"c":"衡水市","isHot":""},
                                {"c":"淮南市","isHot":""},
                                {"c":"菏泽市","isHot":""},
                                {"c":"淮北市","isHot":""},
                                {"c":"邯郸市","isHot":""},
                                {"c":"海宁市","isHot":""},
                                {"c":"合肥市","isHot":""},
                                {"c":"黄山市","isHot":""},
                                {"c":"哈尔滨市","isHot":""},
                                {"c":"湖州市","isHot":""},
                                {"c":"淮安市","isHot":""},
                                {"c":"杭州市","isHot":"hot"}
                            ]],
                            ["J",[
                                {"c":"济南市","isHot":""},
                                {"c":"句容市","isHot":""},
                                {"c":"揭阳市","isHot":""},
                                {"c":"吉林市","isHot":""},
                                {"c":"嘉兴市","isHot":""},
                                {"c":"景德镇市","isHot":""},
                                {"c":"江门市","isHot":"hot"},
                                {"c":"江阴市","isHot":""},
                                {"c":"金华市","isHot":""},
                                {"c":"济宁市","isHot":""}
                            ]]
                        ]
                    ],
                    ["city-list",
                        [
                            ["K",[
                                {"c":"昆山市","isHot":"hot"}
                            ]],
                            ["L",[
                                {"c":"丽水市","isHot":""},
                                {"c":"临沂市","isHot":""},
                                {"c":"聊城市","isHot":""},
                                {"c":"兰州市","isHot":""},
                                {"c":"连云港市","isHot":""},
                                {"c":"六安市","isHot":""},
                                {"c":"辽阳市","isHot":""},
                                {"c":"莱芜市","isHot":""},
                                {"c":"廊坊市","isHot":""}
                            ]],
                            ["M",[
                                {"c":"马鞍山市","isHot":""}
                            ]],
                            ["N",[
                                {"c":"南宁市","isHot":""},
                                {"c":"南昌市","isHot":""},
                                {"c":"南通市","isHot":""},
                                {"c":"南京市","isHot":"hot"},
                                {"c":"宁波市","isHot":"hot"}
                            ]]
                        ]
                    ],
                    ["city-list",
                        [
                            ["Q",[
                                {"c":"泉州市","isHot":""},
                                {"c":"秦皇岛市","isHot":""},
                                {"c":"青岛市","isHot":""},
                                {"c":"衢州市","isHot":""}
                            ]],
                            ["R",[
                                {"c":"日照市","isHot":""}
                            ]],
                            ["S",[
                                {"c":"绍兴市","isHot":""},
                                {"c":"宿州市","isHot":""},
                                {"c":"宿迁市","isHot":""},
                                {"c":"沈阳市","isHot":""},
                                {"c":"汕头市","isHot":""},
                                {"c":"深圳市","isHot":"hot"},
                                {"c":"上海","isHot":"hot"},
                                {"c":"上海(郊区)","isHot":""},
                                {"c":"苏州市","isHot":"hot"},
                                {"c":"石家庄市","isHot":""},
                            ]],
                            ["T",[
                                {"c":"唐山市","isHot":""},
                                {"c":"太原市","isHot":""},
                                {"c":"台州市","isHot":""},
                                {"c":"泰安市","isHot":""},
                                {"c":"铜陵市","isHot":""},
                                {"c":"桐乡市","isHot":""},
                                {"c":"太仓市","isHot":""},
                                {"c":"泰州市","isHot":""},
                                {"c":"天津","isHot":"hot"}
                            ]]
                        ]
                    ],
                    ["city-list",
                        [
                            ["W",[
                                {"c":"潍坊市","isHot":""},
                                {"c":"武汉市","isHot":""},
                                {"c":"芜湖市","isHot":""},
                                {"c":"温州市","isHot":""},
                                {"c":"威海市","isHot":""},
                                {"c":"吴江市","isHot":""},
                                {"c":"无锡市","isHot":"hot"}
                            ]],
                            ["X",[
                                {"c":"宣城市","isHot":""},
                                {"c":"邢台市","isHot":""},
                                {"c":"西安市","isHot":""},
                                {"c":"厦门市","isHot":""},
                                {"c":"徐州市","isHot":""}
                            ]],
                            ["Y",[
                                {"c":"扬州市","isHot":""},
                                {"c":"宜兴市","isHot":""},
                                {"c":"盐城市","isHot":""},
                                {"c":"烟台市","isHot":""},
                                {"c":"仪征市","isHot":""},
                                {"c":"阳江市","isHot":""},
                                {"c":"余姚市","isHot":""},
                                {"c":"燕郊","isHot":""},
                                {"c":"义乌市","isHot":""},
                                {"c":"银川市","isHot":""}
                            ]],
                            ["Z",[
                                {"c":"张家口市","isHot":""},
                                {"c":"亳州市","isHot":""},
                                {"c":"珠海市","isHot":"hot"},
                                {"c":"郑州市","isHot":""},
                                {"c":"湛江市","isHot":""},
                                {"c":"张家港市","isHot":""},
                                {"c":"中山市","isHot":"hot"},
                                {"c":"舟山市","isHot":""},
                                {"c":"枣庄市","isHot":""},
                                {"c":"淄博市","isHot":""},
                                {"c":"镇江市","isHot":""}
                            ]]
                        ]
                    ]
                ],
                m:-1,
                isPhShow:false,
                i:-1,
                isMsgShow:false,
                isFixed:false,
                h:0,
                phone:"",
                isSignin:false,
                kw:"",
                myStorage:[]
            }
        },
        mounted(){
            window.addEventListener('scroll', this.pageScroll);
            this.getPhone();
        },
        methods:{
            showBox(){
                this.n*=-1;
                if(this.n>0){
                    this.isDropdown = true;
                    this.isRotate = true;
                    this.colorChange.on=true;
                }else{
                    this.isDropdown = false;
                    this.isRotate = false;
                    this.colorChange.on=false;
                }
            },
            showMsg(n){
                this.citiesTabList.forEach((elem,i)=>{
                    if(i===n){
                        elem.isActive="active"
                    }else{
                        elem.isActive=""
                    }
                });
                for(var j=0;j<this.citiesList.length;j++){
                    if(j==n){
                        this.citiesList[j][0]="city-list active"
                    }else{
                        this.citiesList[j][0]="city-list"
                    }
                }
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
            pageScroll(){
                this.h = window.scrollY;
                if(this.h>=150){
                    this.isFixed=true;
                }else{
                    this.isFixed=false;
                }
            },
            getPhone(){
                this.phone = sessionStorage.getItem("phone");
                if(this.phone){
                    this.isSignin = true;
                }else{
                    this.isSignin = false;
                }
                this.myStorage = JSON.parse(localStorage.getItem("cart"));
                if(this.myStorage){
                    this.myStorage.forEach((elem)=>{
                        this.$store.commit('increment',elem.count);
                        this.$store.commit('calcTotal',elem.count*elem.price.toFixed(2));
                    })
                }
            },
            signOut(){
                sessionStorage.removeItem("phone");
                this.getPhone()
            },
            toSubmit(){
                this.$router.push("/searchlist/"+this.kw)
            },
            toCart(){
                if(this.phone){
                    this.$router.push("/cart")
                }else{
                    this.$router.push("/login/index")
                }
            }
        }
    }
</script>
<style scoped>

</style>