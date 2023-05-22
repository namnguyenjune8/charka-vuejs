<template>
    <div class="flex flex-col gap-8">
    <div class="flex flex-row gap-14">

      <div class="relative mt-2 rounded-md shadow-sm input-item ">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
          <span class="text-gray-500 sm:text-sm">
            <i class="fa-solid fa-user-astronaut text-2xl"></i>
          </span>
        </div>
        <input type="text" name="name" id="name" class="text-2xl block w-full border-b border-t-0 border-r-0 border-l-0 py-1.5 pl-7 pr-20 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" Name" />
       
      </div>
      <div class="relative mt-2 rounded-md shadow-sm input-item">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm">
            <i class="fa-regular fa-envelope"></i>
          </span>
        </div>
        <input type="text" name="email" id="email" class=" block w-full border-b border-t-0 border-r-0 border-l-0 py-1.5 pl-7 pr-20 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" Email Address" />
       
      </div>
    </div>
    <div class="flex flex-row gap-14">

<div class="relative mt-2 rounded-md shadow-sm input-item">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <span class="text-gray-500 sm:text-sm">
        <i class="fa-solid fa-phone-volume"></i>
    </span>
  </div>
  <input type="text" name="phone" id="phone" class=" block w-full border-b border-t-0 border-r-0 border-l-0 py-1.5 pl-7 pr-20 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" Phone" />
 
</div>
<div class="relative mt-2 rounded-md shadow-sm input-item">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <span class="text-gray-500 sm:text-sm">
        <i class="fa-solid fa-circle-info"></i>
    </span>
  </div>
  <input type="text" name="subject" id="subject" class=" block w-full border-b border-t-0 border-r-0 border-l-0 py-1.5 pl-7 pr-20 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" Subject" />
 
</div>
</div>
<div class="relative mt-2 rounded-md shadow-sm input-item gap-8">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm">
            <i class="fa-solid fa-pencil pb-12"></i>
          </span>
        </div>
        <input type="text" name="content" id="content" class=" block w-full border-b border-t-0 border-r-0 border-l-0 py-1.5 pb-12 pl-7 pr-20 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" How can we help you? Feel free to get in touch!" />
       
      </div>
    </div>
    <div class="flex flex-col">
    <div class="mt-10 flex justify-start items-center gap-x-6 max-md:ml-0 max-md:justify-center">
              <a type="submit" class="flex-none text-2xl rounded-full font-crimson bg-customGreen px-9 py-4 font-semibold text-white shadow-sm hover:bg-hoverGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 first-letter
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer
              ">
              <i class="fa-brands fa-telegram mr-2 text-2xl"></i>
                 GET IN TOUCH</a>
              <a href="" class="hover:text-customGreen text-black " >
               
                
              </a>
            </div>
            <a-checkbox style="margin-left: 1rem; margin-top: 0.5rem;font-size: 1rem;" v-model:checked="checked">I agree that my data is 
                
                <a href="" class="underline	text-black">collected and stored</a> .</a-checkbox>
        </div>
  </template>
  <script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      checked: ref(false),
    };
  },
});
</script>
<style lang="scss">
.input-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1.5px;
  width: 100%;
  height: 2px;
  background-color: #080808;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease-out;
}
.input-item:hover::after {
  transform: scaleX(1);
}
</style>