<template>
    <div class="p-details">
        <header-view></header-view>
        <catalogs-view></catalogs-view>
        <div class="container">
            <!--面包屑-->
            <div class="crumbs" v-cloak>
                <router-link class="to-index" to="/">首页</router-link>&gt;
                <router-link :to="'/productlist/'+info.cat_id">{{catalog}}</router-link>&gt;
                <router-link :to="'/searchlist/'+info.family">{{info.family}}</router-link>&gt;
                <b>{{info.title}}</b>
            </div>
            <div class="content clear-float">
                <!--放大镜-->
                <div class="left-img">
                    <div class="outer" v-cloak>
                        <div class="pic-big">
                            <img class="md-img" :src="img">
                            <div class="mask" v-show="isShowBig" :style="{'top':t+'px','left':l+'px'}"></div>
                            <div class="super-mask d-none" @mouseenter="showZoom($event)"  @mouseleave="showZoom" @mousemove="mMove($event)"></div>
                            <div id="div-lg" v-show="isShowBig" :style="{'background-image':'url('+img+')','background-position': pl+'px  '+pt+'px'}"></div>
                            <div>
                                <div class="img-list">
                                    <ul>
                                        <li class="float-left" v-for="(item,i) in smList" :key="i" @mouseenter="chenge(i)">
                                            <img :src="item.sm" >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--详情-->
                <div class="right-info clear-float" v-cloak>
                    <div class="title">
                        <h1>{{info.title}}</h1>
                        <p>{{info.sub_title}}</p>
                    </div>
                    <div class="price">
                        <div class="pro-price">
                            <div>
                                <span class="tt">价格：</span>
                                <span><b>¥</b><i>{{info.price |priceFilter}}</i></span>
                            </div>
                            <div class="pro-m2">
                                更多商品优惠，尽在易果生鲜APP
                            </div>
                        </div>
                        <div class="pro-tel">
                            <p><i></i>手机下单购买<b>立即扫码</b></p>
                            <div class="code">
                                <img src="data:img/png;base64,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">
                            </div>
                        </div>
                        <div class="pro-review">
                            <p>总体满意度</p>
                            <p><b>4.8</b> 分</p>
                            <p><span>(评论数{{info.comments}})</span></p>
                        </div>
                    </div>
                    <div class="others clear-float">
                        <div class="left">
                            <div class="choose clear-float">
                                <div class="dt">规格：</div>
                                <div class="dd">
                                    <ul>
                                        <li class="selected">
                                            <a href="#">
                                                <span>￥{{info.price|priceFilter}}</span>
                                                <span>{{info.spec}}</span>
                                                <i></i>
                                            </a>
                                        </li>
                                        <li class="dNone">
                                            <a href="#">
                                                <span>￥48.90</span>
                                                <span>6个/份</span>
                                                <i></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pro-service">满百包邮，<b>24:00</b> 前完成订单 预计明日<b>({{date|datetimeFilter}})</b>送达</div>
                            <div class="pro-service">
                                <i class="mr5">
                                    <img src="http://127.0.0.1:3000/img/details/icon1.png">
                                </i>
                                不支持7天无理由退货
                            </div>
                            <div class="pro-amount ">
                                <div class="dt">数量：</div>
                                <div class="dd">
                                    <div class="select-count">
                                        <button :class="count>1?'decrease':'decrease disabled'" @click="decCount">-</button>
                                        <input type="text" class="spinner" id="pcount" maxlength="2" v-model="count">
                                        <button :class="count<99?'increase':'increase disabled'" @click="addCount">+</button>
                                    </div>
                                    <div class="add-cart">
                                        <a class="btn-gn" href="javascript:" @click="pToCart">
                                            <i></i>加入购物车
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <table width="100%" cellspacing="0" cellpadding="0" border="0" class="zx">
                                <tbody>
                                <tr><th>原产地：</th><td>{{info.origin}}</td></tr>
                                <tr><th>商品编号：</th><td>{{info.id}}</td></tr>
                                <tr><th>品牌：</th><td>{{info.brand}}</td></tr>
                                <tr><th>发货地：</th><td>{{info.delivery_address}}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pro-details">
                <!--猜你喜欢-->
                <div class="left-recommend left">
                    <div class="hd">猜你喜欢</div>
                    <div class="bd">
                        <div class="p">
                            <div class="img">
                                <a href="#" target="_blank">
                                    <img src="http://127.0.0.1:3000/img/details/9288724007691460_300.jpg">
                                </a>
                            </div>
                            <div class="txt">
                                <a href="#" target="_blank">
                                    <b>国产精选蓝莓12盒(125g以上/盒)</b>
                                    <span>¥138.00</span>
                                </a>
                            </div>
                            <a class="add">加入购物车</a>
                        </div>
                        <div class="p">
                            <div class="img">
                                <a href="#" target="_blank">
                                    <img src="http://127.0.0.1:3000/img/details/9288724007691460_300.jpg">
                                </a>
                            </div>
                            <div class="txt">
                                <a href="#" target="_blank">
                                    <strong>国产精选蓝莓12盒(125g以上/盒)</strong>
                                    <span>¥138.00</span>
                                </a>
                            </div>
                            <a class="add">加入购物车</a>
                        </div>
                        <div class="p">
                            <div class="img">
                                <a href="#" target="_blank">
                                    <img src="http://127.0.0.1:3000/img/details/9288724007691460_300.jpg">
                                </a>
                            </div>
                            <div class="txt">
                                <a href="#" target="_blank">
                                    <strong>国产精选蓝莓12盒(125g以上/盒)</strong>
                                    <span>¥138.00</span>
                                </a>
                            </div>
                            <a class="add">加入购物车</a>
                        </div>
                    </div>
                </div>
                <!--右侧详情-->
                <div class="right-details left">
                    <!--热卖-->
                    <div class="hot-sale">
                        <div class="hd">当季热卖</div>
                        <div class="bd clear-float">
                            <ul>
                                <li>
                                    <div class="p-img">
                                        <a href="#" target="_blank">
                                            <img src="http://127.0.0.1:3000/img/details/170118150418505_425799_300.jpg">
                                        </a>
                                    </div>
                                    <div class="p-name">
                                        <a href="#" target="_blank">养乐多活菌型乳酸菌乳饮品100ml*5</a></div>
                                    <div class="p-price">
                                        <b>¥12.00</b>
                                        <s>￥12.00</s>
                                    </div>
                                </li>
                                <li>
                                    <div class="p-img">
                                        <a href="#" target="_blank">
                                            <img src="http://127.0.0.1:3000/img/details/9288724483253453_300.jpg">
                                        </a>
                                    </div>
                                    <div class="p-name"><a href="#" target="_blank">美威欧式原味三文鱼排（2片装）250g</a></div>
                                    <div class="p-price">
                                        <b>¥62.90</b>
                                        <s>￥62.90</s>
                                    </div>
                                </li>
                                <li>
                                    <div class="p-img">
                                        <a href="#" target="_blank">
                                            <img src="http://127.0.0.1:3000/img/details/9288721780843665_300.jpg">
                                        </a>
                                    </div>
                                    <div class="p-name">
                                        <a href="#" target="_blank">新西兰Jazz爵士苹果6个150g以上/个</a>
                                    </div>
                                    <div class="p-price">
                                        <b>¥25.90</b>
                                        <s>￥25.90</s>
                                    </div>
                                </li>
                                <li>
                                    <div class="p-img">
                                        <a href="#" target="_blank">
                                            <img src="http://127.0.0.1:3000/img/details/170118150234302_1233566_300.jpg">
                                        </a>
                                    </div>
                                    <div class="p-name"><a href="#" target="_blank">澳洲谷饲小公牛雪花牛肉粒250g</a></div>
                                    <div class="p-price">
                                        <b>¥58.00</b>
                                        <s>￥58.00</s>
                                    </div>
                                </li>
                                <li>
                                    <div class="p-img">
                                        <a href="#" target="_blank">
                                            <img src="http://127.0.0.1:3000/img/details/170508095120808_154370_300.jpg">
                                        </a>
                                    </div>
                                    <div class="p-name"><a href="#" target="_blank">崇明生态乳鸽300g</a></div>
                                    <div class="p-price">
                                        <b>¥33.90</b>
                                        <s>￥33.90</s>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-detail">
                        <div class="detail-tab">
                            <ul class="detail-ul">
                                <li :class="sNum==1?'active':''"><a href="#" @click.prevent="checkP">商品详情</a></li>
                                <li :class="sNum==2?'active':''"><a href="#" @click.prevent="checkC">用户评论<b>{{info.comments}}</b></a></li>
                            </ul>
                            <div class="addcart">
                                <a href="#">加入购物车</a>
                            </div>
                            <div class="shopping-cart">
                                <dl>
                                    <dt class="shopping-btn">
                                        <a href="#">
                                            <span class="totalNum">
                                                <b>0</b>
                                            </span>
                                            <b class="totlePrice">0.00</b>
                                        </a>
                                    </dt>
                                    <dd class="shopping-list" style="display: none">
                                        <div class="spacer"></div>
                                        <div class="no-goods">
                                            购物车中还没有商品,赶紧选购吧!
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div class="detail-content">
                            <!--商品详情-->
                            <div class="detail-item details clear-float" v-show="sNum==1">
                                <div>
                                    <table class="detail-table">
                                        <tbody>
                                        <tr>
                                            <th>单果规格</th>
                                            <td>150g以上/个</td>
                                        </tr>
                                        <tr>
                                            <th>保质期（商品原标签标注）</th>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <th>商品状态</th>
                                            <td>冷藏</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <p v-for="(item,i) in pDetails" :key="i">
                                        <img :src="item.details_pic">
                                    </p>
                                </div>
                            </div>
                            <!--用户评论-->
                            <div class="detail-item comment" v-show="sNum==2">
                                <div class="comment-info clear-float">
                                    <div class="score">总体满意度
                                        <b>4.8
                                            <span>分</span>
                                        </b>
                                        (共有<strong>5</strong>人评论)
                                    </div>
                                    <div class="percent">
                                        <ul class="slip">
                                            <li>
                                                <b>好评</b>
                                                <span style="width: 80%;"></span>
                                                <i>80%</i>
                                            </li>
                                            <li>
                                                <b>中评</b>
                                                <span style="width: 20%;"></span>
                                                <i>20%</i>
                                            </li>
                                            <li>
                                                <b>差评</b>
                                                <span style="width: 0%;">

                                                </span>
                                                <i>0%</i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="comment-btn">
                                        前5位评论用户可获得更高悠币奖励
                                        <a class="btn-gn" id="commentBtn">我要评论</a>
                                        <p>只有购买过该商品的用户才能评</p>
                                    </div>
                                </div>
                                <div class="comment-list clear-float">
                                    <div class="comment-tab-wrap clear-float">
                                        <div class="comment-tab ">
                                            <span class="on">全部评论（<b id="vote_all">5</b>）</span>
                                            <span>好评（<b id="vote_hp">4</b>）</span>
                                            <span>中评（<b id="vote_zp">1</b>）</span>
                                            <span>差评（<b id="vote_cp">0</b>）</span>
                                            <span>有晒单（<b id="vote_st">0</b>）</span>
                                        </div>
                                        <div class="extra right">
                                            <span>
                                                <select id="commontsort">
                                                    <option value="0">按默认</option>
                                                    <option value="1">按时间</option>
                                                </select>
                                            </span>
                                            <span class="sort">
                                                <label>
                                                    <input type="checkbox" value="1" id="commenthascontent" checked="checked">有内容
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="ProductComment">
                                        <div>
                                            <div class="comment-item">
                                                <ul>
                                                    <li class="clear-float">
                                                        <div>
                                                            <div class="user">
                                                                <img src="http://127.0.0.1:3000/img/details/star1.jpg" alt="">
                                                                <span class="name">18***</span>
                                                                <span class="level">易果生鲜普通用户</span>
                                                            </div>
                                                            <div class="content-comment">
                                                                <div class="heading">
                                                                    <div class="stars left clear-float">
                                                                        <div class="stars-bg">
                                                                            <span></span>
                                                                        </div>
                                                                        <div>
                                                                            <b>3</b>分
                                                                        </div>
                                                                    </div>
                                                                    <div class="txt left">
                                                                        <span>商品质量:好</span>
                                                                        <span>配送服务:未知</span>
                                                                        <span>服务质量:好</span>
                                                                    </div>
                                                                    <div class="date ">
                                                                        2018年09月04日
                                                                        <span>16:47:02</span>
                                                                    </div>
                                                                    <div class="comefrom">
                                                                        来自
                                                                        <b class="green">易果App</b>
                                                                        <div class="dropdown">
                                                                            <i></i>
                                                                            <img src="http://127.0.0.1:3000/img/details/qrcode_app.jpg" alt="">
                                                                            <span>扫一扫下载APP</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    蜜橘很大,里面有核
                                                                    <div class="reply-images"></div>
                                                                    <div class="reply-images-big">
                                                                        <img src="" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="clear-float">
                                                        <div>
                                                            <div class="user">
                                                                <img src="http://127.0.0.1:3000/img/details/star1.jpg" alt="">
                                                                <span class="name">18***</span>
                                                                <span class="level">易果生鲜普通用户</span>
                                                            </div>
                                                            <div class="content-comment">
                                                                <div class="heading">
                                                                    <div class="stars left clear-float">
                                                                        <div class="stars-bg">
                                                                            <span></span>
                                                                        </div>
                                                                        <div>
                                                                            <b>3</b>分
                                                                        </div>
                                                                    </div>
                                                                    <div class="txt left">
                                                                        <span>商品质量:好</span>
                                                                        <span>配送服务:未知</span>
                                                                        <span>服务质量:好</span>
                                                                    </div>
                                                                    <div class="date ">
                                                                        2018年09月04日
                                                                        <span>16:47:02</span>
                                                                    </div>
                                                                    <div class="comefrom">
                                                                        来自
                                                                        <b class="green">易果App</b>
                                                                        <div class="dropdown dNone">
                                                                            <i></i>
                                                                            <img src="http://127.0.0.1:3000/img/details/qrcode_app.jpg" alt="">
                                                                            <span>扫一扫下载APP</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    蜜橘很大,里面有核
                                                                    <div class="reply-images"></div>
                                                                    <div class="reply-images-big">
                                                                        <img src="" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="clear-float">
                                                        <div>
                                                            <div class="user">
                                                                <img src="http://127.0.0.1:3000/img/details/star1.jpg" alt="">
                                                                <span class="name">18***</span>
                                                                <span class="level">易果生鲜普通用户</span>
                                                            </div>
                                                            <div class="content-comment">
                                                                <div class="heading">
                                                                    <div class="stars left clear-float">
                                                                        <div class="stars-bg">
                                                                            <span></span>
                                                                        </div>
                                                                        <div>
                                                                            <b>3</b>分
                                                                        </div>
                                                                    </div>
                                                                    <div class="txt left">
                                                                        <span>商品质量:好</span>
                                                                        <span>配送服务:未知</span>
                                                                        <span>服务质量:好</span>
                                                                    </div>
                                                                    <div class="date ">
                                                                        2018年09月04日
                                                                        <span>16:47:02</span>
                                                                    </div>
                                                                    <div class="comefrom">
                                                                        来自
                                                                        <b class="green">易果App</b>
                                                                        <div class="dropdown dNone">
                                                                            <i></i>
                                                                            <img src="http://127.0.0.1:3000/img/details/qrcode_app.jpg" alt="">
                                                                            <span>扫一扫下载APP</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    蜜橘很大,里面有核
                                                                    <div class="reply-images"></div>
                                                                    <div class="reply-images-big">
                                                                        <img src="" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="clear-float">
                                                        <div>
                                                            <div class="user">
                                                                <img src="http://127.0.0.1:3000/img/details/star1.jpg" alt="">
                                                                <span class="name">18***</span>
                                                                <span class="level">易果生鲜普通用户</span>
                                                            </div>
                                                            <div class="content-comment">
                                                                <div class="heading">
                                                                    <div class="stars left clear-float">
                                                                        <div class="stars-bg">
                                                                            <span></span>
                                                                        </div>
                                                                        <div>
                                                                            <b>3</b>分
                                                                        </div>
                                                                    </div>
                                                                    <div class="txt left">
                                                                        <span>商品质量:好</span>
                                                                        <span>配送服务:未知</span>
                                                                        <span>服务质量:好</span>
                                                                    </div>
                                                                    <div class="date ">
                                                                        2018年09月04日
                                                                        <span>16:47:02</span>
                                                                    </div>
                                                                    <div class="comefrom">
                                                                        来自
                                                                        <b class="green">易果App</b>
                                                                        <div class="dropdown dNone">
                                                                            <i></i>
                                                                            <img src="http://127.0.0.1:3000/img/details/qrcode_app.jpg" alt="">
                                                                            <span>扫一扫下载APP</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="reply">
                                                                    蜜橘很大,里面有核
                                                                    <div class="reply-images"></div>
                                                                    <div class="reply-images-big">
                                                                        <img src="" alt="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dNone"></div>
                                        <div class="dNone"></div>
                                        <div class="dNone"></div>
                                        <div class="dNone"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-view></footer-view>
        <side-bar></side-bar>
    </div>
</template>

<script>
    import "@/assets/css/details.css"
    import Header from '../components/allHeader'
    import Catalogs from '../components/catalogs'
    import Footer from '../components/bigFooter'
    import Sidebar from '../components/sidebar'
    export default {
        data:function(){
            return {
                id:0,
                smList:[],
                img:"",
                info:{},
                pDetails:[],
                catalog:"",
                isShowBig:false,
                n:-1,t:0,l:0,pt:0,pl:0,
                date:0,
                count:1,
                sNum:1,
                url:""

            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getInfo();
        },
        components:{
            "header-view":Header,
            "catalogs-view":Catalogs,
            "footer-view":Footer,
            "side-bar":Sidebar
        },
        methods:{
            getInfo(){
                this.$http.get(`details/list?id=${this.id}`).then(res=>{
                    if(res.body.code==1){
                        this.smList = res.body.msg.sm_img;
                        this.img = this.smList[0]['sm'];
                        this.catalog = res.body.msg.cata;
                        this.info = res.body.msg.product;
                        this.pDetails = res.body.msg.details;

                    }else{
                        this.$router.push("/notfind")
                    }
                });
                this.date = new Date()
            },
            chenge(i){
                this.img = this.smList[i]['sm']
            },
            showZoom(){
                this.n*=-1;
                if(this.n>0){
                    this.isShowBig = true;
                }else{
                    this.isShowBig = false;
                }
            },
            mMove(e){
                this.t = e.offsetY-100;
                this.l = e.offsetX-100;
                this.t = this.t<0?0:this.t>200?200:this.t;
                this.l = this.l<0?0:this.l>200?200:this.l;
                this.pt = -0.5*this.t;
                this.pl = -0.5*this.l;
            },
            decCount(){
                if(this.count>1) this.count--;
            },
            addCount(){
                if(this.count<99) this.count++
            },
            checkP(){
                this.sNum = 1
            },
            checkC(){
                this.sNum = 2
            },
            pToCart(){
                this.url = "details:"+this.id;
                this.addToCart(this.count,this.id,this.url)
            }
        }
    }
</script>

<style scoped>

</style>