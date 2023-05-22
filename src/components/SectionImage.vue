<template>
    <a-row type="flex" class="mt-20 mb-12">
        <a-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
            
      <a-card hoverable style="width: 100%; height: 100%;">
        <template #cover>
          <div style="height: 100%; display: flex; align-items: flex-end;">
            <img alt="example" src="../assets/image4.jpg" style="height: 400px; width: 100%;" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-300  hover:opacity-80 "></div>
            <div class="absolute top-auto pb-8 bottom-0 inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-100">
        <div class="flex flex-col text-center ">
          <h3 class="mt-4 text-white font-inherit font-medium text-2xl not-italic">Group Classes</h3>
          <p class="mt-1 text-sm font-medium text-white font-inherit not-italic">Practice together</p>
        </div>
      </div>
          </div>
        </template>
      </a-card>
   
</a-col>
      <a-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
        <a-card hoverable style="width: 100%;height: 100%;">
         <template #cover>
      <img alt="example" src="../assets/image3.jpg" style="height: 400px; width: 100%;" />
        </template>
    
  </a-card>
      </a-col>
      <a-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }">
        <a-card hoverable style="width: 100%;height: 100%;">
         <template #cover>
      <img alt="example" src="../assets/image2.jpg" style="height: 400px; width: 100%;"/>
        </template>
    
  </a-card>
      </a-col>
      <a-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }">
        <a-card hoverable style="width: 100%;height: 100%;">
         <template #cover>
      <img alt="example" src="../assets/image1.jpg" style="height: 400px; width: 100%;"/>
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