<template>
    <div class="register">
        <header>
            <div class="wrap clear-float">
                <div class="left-logo">
                    <router-link to="/"></router-link>
                </div>
                <div class="login">注册</div>
            </div>
        </header>
        <section>
            <div class="content">
                <div class="clear-float">
                    <div class="to-signin right">
                        我已经注册,现在就
                        <router-link to="/login">登录</router-link>
                    </div>
                </div>
                <div class="main">
                    <div class="left-side">
                        <div>
                            <p>
                                <span class="tiName">图形验证码</span>
                                <input class="test" type="text" placeholder="图形验证码" autofocus @blur="testCode" v-model="ucode">
                                <img :src="vcode.url" alt="">
                                <a @click="change">换一张</a>
                                <span class="isCorrect">
                                    <img :src="codeurl" alt="">
                                </span>
                            </p>
                            <p>
                                <span class="tiName">手机号</span>
                                <input class="test" type="text" maxlength="11" placeholder="请输入您的手机号" @blur="testPhone" v-model="phone">
                                <span class="isCorrect">
                                    <img :src="phoneurl" alt="">
                                </span>
                            </p>
                            <p>
                                <span class="tiName">手机验证码</span>
                                <input class="test" type="text" placeholder="手机验证码">
                                <a href="#">获取验证码</a>
                            </p>
                            <p>
                                <span class="tiName">设置密码</span>
                                <input class="test" type="password" placeholder="6-20位字母、符号或数字" v-model="upwd" @blur="testupwd">
                                <span class="isCorrect">
                                    <img :src="upwdurl" alt="">
                                </span>
                            </p>
                            <p>
                                <span class="tiName">确认密码</span>
                                <input class="test" type="password" placeholder="再次输入密码" v-model="rpwd" @blur="testrpwd">
                                <span class="isCorrect">
                                    <img :src="rpwdurl" alt="">
                                </span>
                            </p>
                            <p>
                                <span class="tiName"></span>
                                <input type="checkbox" id="checkIt" :checked="isChecked" @click="cheBox">&nbsp;&nbsp;
                                <label for="checkIt">我已阅读并同意 <a href="#"  class="colorGreen">《易果服务协议》</a></label>
                                <br>
                                <span :class="isMsgShow">请接受服务协议</span>
                            </p>
                            <p>
                                <span class="tiName"></span>
                                <a href="javascript:" class="registerNow" @click.stop="toRegister">立即注册</a>
                            </p>
                        </div>
                    </div>
                    <div class="right-side relative">
                        <div class="right-img">
                            <img src="http://127.0.0.1:3000/img/register/register.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import '@/assets/css/register.css'
    import footerView from "../components/tinyFooter.vue"
    export default {
        data:function(){
            return{
                ucode:"",
                phone:"",
                upwd:"",
                rpwd:"",
                vcode:{id:1,msg:"SCGh",url:"http://127.0.0.1:3000/img/login/verifycode1.jpg"},
                list:[],
                isOK:[
                    'http://127.0.0.1:3000/img/register/ok.png',
                    'http://127.0.0.1:3000/img/register/err.png'
                ],
                codeurl:"",
                phoneurl:"",
                upwdurl:"",
                regupwd:"",
                rpwdurl:"",
                isRegister:false,
                isChecked:false,
                isMsgShow:{
                    "msg":true,
                    "dNone":false
                }
            }
        },
        created(){
            this.getVcode();
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
            testCode(){
                if(this.vcode.msg!=this.ucode){
                    this.codeurl=this.isOK[1];
                    this.isRegister = false;
                    this.change()
                }else{
                    this.codeurl=this.isOK[0];
                    this.isRegister = true;
                }
            },
            testPhone(){
                this.$http.get("users/list?phone="+this.phone).then(res=>{
                    if(res.body.code==1){
                        this.phoneurl = this.isOK[0];
                        this.isRegister = true;
                    }else{
                        this.phoneurl=this.isOK[1];
                        this.isRegister = false;
                    }
                })
            },
            testupwd(){
                this.regupwd=/^\w{6,20}$/ig;
                if(this.regupwd.test(this.upwd)){
                    this.upwdurl = this.isOK[0];
                    this.isRegister = true;
                }else{
                    this.upwdurl = this.isOK[1];
                    this.isRegister = false;
                }
            },
            testrpwd(){
                if(this.rpwd==this.upwd){
                    this.rpwdurl = this.isOK[0];
                    this.isRegister = true;
                }else{
                    this.rpwdurl = this.isOK[1];
                    this.isRegister = false;
                }
            },
            cheBox(){
                if(this.isChecked){
                    this.isChecked=false;
                    this.isMsgShow.dNone = false;
                    this.isRegister = false;
                }else{
                    this.isChecked=true;
                    this.isMsgShow.dNone = true;
                    this.isRegister = true;
                }
            },
            toRegister(){
                if(this.isRegister){
                    this.$http.post("users/register",{phone:this.phone,upwd:this.upwd}).then((res)=>{
                        if(res.body.code==1){
                            alert("注册成功");
                            if(confirm("是否跳转到登录页")){
                                this.$router.push("/login")
                            }
                        }
                    })
                }else{
                    alert("信息不完整,请重新填写")
                }
            }
        },
        components:{
            "footer-view":footerView
        }
    }
</script>

<style scoped>

</style>