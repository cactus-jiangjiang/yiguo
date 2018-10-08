<template>
    <div class="banner">
        <!-- 切换的图片部分 -->
        <div class="bannerImg">
            <transition-group tag="div">
              <span v-for="(v,i) in banners" :key="i" :style="{opacity:(i+1)==n?'1':'0'}" class="active">
                <img :src="v" alt="">
              </span>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/banner.css'
    export default {
        data:function () {
            return {
                banners:[
                    'http://127.0.0.1:3000/img/imgIndex/carousel1.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel2.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel3.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel4.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel5.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel6.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel7.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel8.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel9.jpg',
                    'http://127.0.0.1:3000/img/imgIndex/carousel10.jpg'
                ],
                n:1,            // 图片的index。
                bFlag:true,    // 锁定
                timer1:'',      // 这是bFlag定时器的数据
                timer2:'',      // 这是自动播放（next（））定时器的数据
                timer3:'',      // 这是打开浏览器时，初始运动定时器的数据
            }
        },
        methods:{
            next(){ // 下一张
                     // 为了避免连续点击。让bFlag运动结束后再变为true
                if(this.bFlag){
                    this.bFlag=false;
                    this.clearT();                           // 运动之前，清除所有定时器。
                    this.n=this.n+1==11?1:this.n+1;         // 下一张，如果是第4张，就返回第一张。
                    // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
                    this.timeout();
                }
            },
            clearT(){                       // 清除所有定时器
                clearTimeout(this.timer1);
                clearTimeout(this.timer2);
                clearTimeout(this.timer3);
            },
            timeout(){          // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
                                // 运动时间是1s。
                this.timer2=setTimeout(()=>{
                    this.bFlag=true
                },1000);
                this.timer1=setTimeout(()=>{
                    this.next()
                },3000);
            },
            change(num){
                // 点击按钮，切换到对应图片，需要获取index。
                if(this.bFlag){
                    this.bFlag=false;
                    this.clearT();
                    this.n=num;                 // 将显示图片变为选中的那一张
                    this.timeout()
                }
            }
        },
        mounted(){
            this.timer3=setTimeout(this.next,3000);
        }
    }
</script>

<style scoped>

</style>