<template>
    <a-row type="flex">
      <a-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
        <a-card hoverable style="width: 100%">
         <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </template>
    
  </a-card>
      </a-col>
      <a-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
        2 col-order-responsive
      </a-col>
      <a-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }">
        3 col-order-responsive
      </a-col>
      <a-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }">
        <a-card hoverable style="width: 100%; height: 500px;">
         <template #cover>
      <img alt="example" src="https://chakra.ancorathemes.com/wp-content/uploads/2021/09/image-home2-copyright-12-1536x1024.jpg" />
        </template>
    
  </a-card>
      </a-col>
    </a-row>
  </template>
<script>
export default {
    
}
</script>
<style scoped>

</style>