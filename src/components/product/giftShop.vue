<template>
  <div>
    <search></search>
    <p>我是礼品商城</p>
    <router-link :to="{path:'/giftShop/shopDetail',query:{ goodinfo:'aaa' }}">点击进入详情</router-link>
  </div>
</template>
<script>
 import search from "../common/search"
export default {
  name: 'giftShop',
  components:{search}
}
</script>