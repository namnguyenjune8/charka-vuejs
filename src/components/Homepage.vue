<template>
    <div class="app-container">
        <Header />
        <Carousel />
    <main>
      <SectionWelcome />
      <SectionOurpurpose />
      <SectionImage />
      <SectionMeditation />
      <SectionWhatwedo />
      <SectionVideo />
      <SectionAvatar />
      <SectionNews />
      <SectionQuesion />
    </main>
    <Footer />
    <router-view/>
  </div>
  </template>
  
  <script setup>
 
  import Header from './Header.vue';
  import Carousel from './Carousel.vue';
  import SectionWelcome from './SectionWelcome.vue';
  import SectionOurpurpose from './SectionOurpurpose.vue';
  import SectionImage from './SectionImage.vue';
  import SectionMeditation from './SectionMeditation.vue';
  import SectionWhatwedo from './SectionWhatwedo.vue';
  import SectionVideo from './SectionVideo.vue';
  import SectionAvatar from './SectionAvatar.vue';
  import SectionNews from './SectionNews.vue';
  import SectionQuesion from './SectionQuestion.vue';


  import Footer from './Footer.vue';
  
  
  </script>
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Viaoda+Libre&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  
  </style>