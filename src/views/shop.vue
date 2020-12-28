<template>
  <div class="shop-page container">
    {{shop}}
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const shop = ref('')
    onMounted(() => {
      shop.value = route.query.shop
    })
    return { shop }
  }
}
</script>

<style lang="scss">
.shop-page {
  background: #f7f7f7;
}
</style>