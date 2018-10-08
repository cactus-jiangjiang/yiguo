<template>
    <div class="sidebar" v-show="showbar">
        <a href="" class="goTop" @click.prevent="toTop"></a>
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                showbar:false,
                top:0
            }
        },
        mounted(){
            window.addEventListener('scroll', this.scrollTo)
        },
        methods:{
            scrollTo(){
                this.top = window.scrollY;
                if(this.top>=600){
                    this.showbar=true;
                }else{
                    this.showbar=false;
                }
            },
            toTop(){
                window.scrollTo(0,0)
            }
        }
    }
</script>

<style>
    .sidebar {
        display: block;
        z-index: 100;
        position: fixed;
        bottom: 20px;
        right: 47%;
        margin-right: -625px;
        width: 56px;
    }
    .sidebar .goTop {
        overflow: hidden;
        display: block;
        width: 50px;
        height: 42px;
        margin-bottom: 10px;
        background: url("http://127.0.0.1:3000/img/imgIndex/sidebar.png") no-repeat 0 0;
    }
</style>