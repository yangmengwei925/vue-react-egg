<template>
  <div class="main">
    <Choose />
    <Welcome />
    <Ourserves />
    <Special />
<Swiper style="margin-top:80px; color:#F00"/>
     <Last />
  </div>
</template>
<script>
import Choose from '@/components/home/choose'
import Welcome from '@/components/home/welcome'
import Ourserves from '@/components/home/ourServes'
import Swiper from '@/components/swipers.vue'
import Last  from '@/components/home/last.vue'
import Special  from '@/components/home/special.vue'
export default {
   components: {
        Choose,
        Welcome,
        Ourserves,
        Swiper,
        Last,
        Special
   }
}
</script>
<style scoped>
.main{
  width: 100vw;
}

</style>