<template>
    <div class="signin">
        <div class="sigin-top">
            <div class="wrap clear-float">
                <div class="left-logo">
                    <router-link to="/">
                    </router-link>
                </div>
                <div class="login">登录</div>
            </div>
        </div>
        <!-- 主体部分 -->
        <section>
            <div class="main clear-float">
                <div class="left-side">
                    <img src="http://127.0.0.1:3000/img/login/image_left.jpg" alt="">
                </div>
                <div class="right-side">
                    <div>
                        <p>
                            <span class="strong">欢迎登录</span>
                            <span class="small">还没有账号?
                              <router-link to="/register">立即注册</router-link>
                            </span>
                        </p>
                        <p class="relative">
                            <span class="sprit-img"></span>
                            <input type="text" placeholder="邮箱/账号/已验证手机" name="uname" v-model="phone">
                        </p>
                        <p>
                            <span class="sprit-img"></span>
                            <input type="password" placeholder="密码" name="upwd" v-model="upwd">
                        </p>
                        <p class="flex">
                            <span class="sprit-img"></span>
                            <input type="text" placeholder="验证码" class="input-key" v-model="ucode">
                            <span class="img">
                              <img :src="vcode.url">
                            </span>
                            <a @click="change">换一张</a>
                        </p>
                        <p class="clear-float">
                            <span class="right">
                                <a href="#">忘记登录密码?</a>
                            </span>
                        </p>
                        <p>
                            <a @click="toLogin" class="btn-green" id="login">登 &nbsp; 录</a>
                        </p>
                        <p class="clear-float">
                            <span class="left">第三方登录</span>
                        </p>
                        <p class="clear-float">
                            <a  class="qq left">
                                <i></i>
                            </a>
                            <a class="sina left">
                                <i></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import '@/assets/css/login.css'
    import footerView from "../components/tinyFooter.vue"
    export default {
        data:function(){
            return {
                phone:"",
                upwd:"",
                ucode:"",
                vcode:{id:1,msg:"SCGh",url:"http://127.0.0.1:3000/img/login/verifycode1.jpg"},
                list:[],
                myStorage:[],
                back:0
            }
        },
        created(){
            this.getVcode();
            this.back = this.$route.params.back;
        },
        components:{
            "footer-view":footerView
        },
        methods:{
            getVcode(){
                this.$http.get("users/vCodeList").then(res=>{
                    if(res.body.code==1){
                        this.list=res.body.msg;
                    }else{
                        alert("网络故障")
                    }
                })
            },
            change(){
                var vid = Math.round(Math.random()*this.list.length);
                this.vcode=this.list[vid];
            },
            toLogin(){
                if(this.vcode.msg!=this.ucode){
                    alert("请输入正确的验证码");
                    this.change()
                }else{
                    this.$http.get(`http://127.0.0.1:3000/users/signin?phone=${this.phone}&upwd=${this.upwd}`).then(res=>{
                        if(res.body.code==1){
                            sessionStorage.setItem("phone",this.phone);
                            if(this.back.indexOf(":")==-1){
                                alert("登录成功,跳转到首页");
                                this.$router.push("/")
                            }else {
                                alert("登录成功,正在跳转");
                                this.$router.push("/"+this.back.replace(":","/"))
                            }
                        }else{
                            alert(res.body.msg)
                        }
                    })
                }
            }
        }
    }

</script>

<style scoped>
</style>