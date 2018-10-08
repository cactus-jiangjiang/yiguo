<template>
    <div>
        <div class="y-catalogs">
            <div class="catalogs">
                <div class="catalogs-title" @click="showList">
                    <a href="javascript:">全部商品分类▼</a>
                </div>
                <div class="catalogs-list" v-show="isShow" v-for="(item ,i) in catalogsList" :key="i" @mouseenter="beSelected(i)" @mouseleave="unSelected">
                    <h3 :class="i==m?'active':''" @click="toList(i)">
                        <router-link :to="'/productlist/'+(i+1)">
                            <i></i>
                            <b>{{item.catalog}}</b>
                        </router-link>
                        <s class="hide">&gt;</s>
                    </h3>
                    <div catalogs-item="" :class="i==m?'active':''">
                        <div class="sub-item hide">
                            <h2>
                                <a>{{item.catalog}}</a>
                            </h2>
                            <div class="sub-list" >
                                <router-link :to=" '/searchlist/'+det" target="_blank" v-for="(det,n) in item.details" :key="n">{{det}}</router-link>
                            </div>
                            <div class="sub-img">
                                <img :src="item.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/indexCatalogs.css'
    export default {
        data :function () {
            return {
                catalogsList:[
                    {'catalog':'进口水果',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_1.png',
                        'details':['奇异果','车厘子','莓','牛油果','提子','苹果','梨','柑桔橙柚','山竹','香蕉','火龙果','椰子','芒果','凤梨','榴莲']
                    },
                    {'catalog':'国产水果',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_2.png',
                        'details':['苹果','梨','樱桃','柑桔橙柚','瓜','葡萄','桃','李','枣','莓','芒果','凤梨','芭乐','百香果','热带水果']
                    },
                    {'catalog':'精选肉类',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_3.png',
                        'details':['进口牛肉','国产牛肉','猪肉','羊肉','香肠','火腿/培根','肉制品','进口鹿肉']
                    },
                    {'catalog':'海鲜水产',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_4.png',
                        'details':['鱼','三文鱼','虾','蟹','贝','活鲜','海产干货','特色海产']
                    },
                    {'catalog':'乳品糕点',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_5.png',
                        'details':['奶酪','黄油/奶油','酸奶/乳酸饮料','牛奶','面包','蛋糕','甜点']
                    },
                    {'catalog':'新鲜蔬菜',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_6.png',
                        'details':['叶菜类','根茎类','茄果/瓜果类','花菜/豆类','香料','菌菇','沙拉菜','冷冻蔬菜']
                    },
                    {'catalog':'粮油杂货',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_7.png',
                        'details':['米','杂粮','面/面制品','油','调味料','干货','果干/零食']
                    },
                    {'catalog':'饮料酒水',
                        'img':'http://127.0.0.1:3000/img/imgIndex/catalogs_img_8.png',
                        'details':['水','果汁/饮料','冲调饮品','葡萄酒/酒具']
                    },
                    {'catalog':'即烹美食','img':'',
                        'details':['独家秘制','生猛海鲜','日韩料理','经典主菜','中华美食','精致西餐','开胃小菜']}
                ],
                n:1,
                isShow:false,
                m:-1
            }
        },
        methods:{
            beSelected(i){
                this.m = i
            },
            unSelected(){
                this.m=-1
            },
            showList(){
                this.n*=-1;
                if(this.n<0){
                    this.isShow=true;
                }else{
                    this.isShow=false;
                }
            },
            toList(i){
                this.$router.push("/productlist/"+(i+1))
            }
        }
    }
</script>

<style scoped>

</style>