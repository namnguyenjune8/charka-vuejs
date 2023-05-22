<template >
    <section>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-28 mt-20 text-center lg:pt-12 gap-4 flex max-md:pb-8 pb-8 ">
          <div class="w-1/2 max-md:w-full flex flex-col">
          <h3 class="text-start ml-12 font-inherif mb-4">CONTACT US</h3>
          <h1 class="lg:text-6xl max-md:text-center md:text-2xl max-sm:text-2xl font-crimson font-normal text-88 leading-126 tracking-tight text-gray-900 max-md:text-3xl md:ml-12 text-left">
            <span class="block">Have question?</span>
            <span class="block">Get in touch!</span>
           
        </h1>
     
            <p class=" mt-2 max-w-2xl max-md:text-center px-4 text-lg sm:px-14 lg:px-14 tracking-tight text-slate-700 text-left ">In case you gave any questions about our community, you are welcome to write us.</p>
            <div class="mt-10 flex flex-row justify-start text-start items-center gap-x-6 ml-14 max-md:ml-0 max-md:justify-center">
              <div class="flex flex-col">
                <a href="" class="hover:text-customGreen text-black" >
                    <i class="fa-solid fa-location-dot text-customGreen text-2xl"></i>
                <span class="ml-4 text-xl">
                    785 15h Street, Office 478 Berlin
                </span>
              </a>
              <a href="" class="hover:text-black text-black my-4" >
                <i class="fa-solid fa-mobile-screen text-customGreen text-2xl"></i>
                <span class="ml-4 text-xl">

                  0 800 555 44 33
                </span>
              </a>
              <a href="" class="hover:text-customGreen text-black" >
                <i class="fa-regular fa-envelope text-customGreen text-2xl"></i>
                <span class="ml-4 text-xl">
                    
                    info@email.com
                  
                </span>
              </a>
            </div>
        </div>
            <div class="mt-36 lg:mt-44">
              
            </div>
          </div>
  
          <div class="w-1/2 max-md:hidden	 text-center md:text-right relative mt-12">
          <InputInformation />
        </div>
  </div>
    </section>
</template>
<script setup> 
import InputInformation from './InputInformation.vue';

</script>

<style lang="scss">
    
</style>