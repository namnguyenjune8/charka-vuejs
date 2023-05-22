<template>
    <section>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div class="carousel-slide"><img src="../assets/ImageAvartar1.jpg" alt=""></div>
    <div class="carousel-slide"><img src="../assets/ImageAvartar2.jpg" alt=""></div>
    <div class="carousel-slide"><img src="../assets/ImageAvartar3.jpg" alt=""></div>
  </a-carousel>
</section>
</template>

  <script>
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      LeftCircleOutlined,
      RightCircleOutlined,
    },
  });
  </script>
  <style scoped>
  /* For demo */
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 560px;
    line-height: 160px;
    background:#fff;
    overflow: hidden;
  }
  
  .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #0f0f0f;
    background-color: rgba(248, 250, 252, 0.11);
    opacity: 0.4;
    z-index: 1;
  }
  .ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
    text-align: center;
  }
  .ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
  }
  
  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }
  .carousel-slide {
    margin-left: 13rem;
  }
  
  </style>
  