<template>
    <div class="catalogs clear-float">
        <catalog-view></catalog-view>
        <div class="nav-items">
            <ul id="home-nav">
                <li><a href="#" target="_blank">新品专区</a></li>
                <li><a href="#" target="_blank">优质生活</a></li>
                <li><a href="#" target="_blank">银行专区</a></li>
                <li><a href="#" target="_blank">菜谱专栏</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Catalogs from '../components/indexCatalogs'
    export default {
        data:function(){
            return{}
        },
        components:{
            "catalog-view":Catalogs,
        }
    }
</script>

<style scoped>
    .catalogs{
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .nav-items{
        overflow: hidden;
        float: left;
        width: 1200px;
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #008842;
    }
    .nav-items ul{
        margin-left: 180px;
    }
    .nav-items ul li{
        float: left;
        width: 115px;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
    }
    .nav-items ul li a{
        color: #444;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }
</style>