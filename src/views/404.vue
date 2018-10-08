<template>
    <div class="not-find">
        <header-view></header-view>
        <catalogs-view></catalogs-view>
        <div class="container">
            <div class="not-found clear-float">
                <div class="error">
                    <h2>该商品不存在或已下架！</h2>
                    <p>您可以：稍后再试或联系客服。</p>
                </div>
            </div>
        </div>
        <footer-view></footer-view>
    </div>
</template>

<script>
    import '@/assets/css/404.css'
    import Header from '../components/allHeader'
    import Catalogs from '../components/catalogs'
    import Footer from  '../components/bigFooter'
    export default {
        data:function () {
            return {

            }
        },
        components:{
            "header-view":Header,
            "catalogs-view":Catalogs,
            "footer-view":Footer
        }
    }
</script>

<style scoped>

</style>