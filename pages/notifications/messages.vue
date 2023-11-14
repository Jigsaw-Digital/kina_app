<template>
  <div class="bg-white">
  
  
    <div class="w-[80%] mx-auto">
      <h1 class="text-[#9C9B9B] text-lg font-black text-[10px] block mt-4" v-on:click="back()">Back</h1>
    <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Notifications</h1>

      <h1 class="text-[#EA5E65] text-lg font-black block mt-16">Messages</h1>
      <div class="rounded-[20px] border border-gray-200 p-2">
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">Michal Taylor </h1>
        <h2 class="text-[#9C9B9B] text-[12px] block mb-0 mt-2 ml-2">Test Notification 2</h2>
        <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Date: 18/04/23</h2>
        <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Date: 9:43</h2>
      </div>
      <div class="rounded-[20px] border border-gray-200 p-2 mt-2">
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">Michal Taylor </h1>
        <h2 class="text-[#9C9B9B] text-[12px] block mb-0 mt-2 ml-2">Test Notification 1</h2>
        <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Date: 18/04/23</h2>
        <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Date: 9:41</h2>
      </div>
      <div class="rounded-[20px] border border-gray-200 p-2 mt-2">
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">Michal Taylor </h1>
        <h2 class="text-[#9C9B9B] text-[12px] block mb-0 mt-2 ml-2">Test Notification</h2>
        <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Date: 18/04/23</h2>
        <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Date: 9:32</h2>
      </div>
      </div>
      <div class="bg-[#EA5E65] fixed bottom-0 w-full pb-2 pt-3 px-8 block z-50">
        <div class="grid grid-cols-5 relative">
        <div><img src="/icons/dashboard-filled.png" v-on:click="home()" class="w-[60%] mx-auto"/></div>
        <div><img src="/icons/assets.png" v-on:click="assets()" class="w-[35%] mx-auto"/></div>
        <div><img src="/icons/service.png" v-on:click="services()" class="w-[35%] mx-auto"/></div>
        <div><img src="/icons/chat.png" v-on:click="chat()" class="w-[45%] mx-auto"/></div>
        <div><img src="/icons/menu.png" v-on:click="menu()" class="w-[45%] mt-[10px] mx-auto"/></div>
        </div>
      </div>
  </div>
</template>
<script>
// Konsta UI components
import {
  kPage, 
  kNavbar,
  kBlock,
  kButton,
  kList,
  kListItem,
  kLink,
  kBlockTitle, kToolbar,
  kCard
} from 'konsta/vue';

export default {
  components: {
    kPage,
    kNavbar,
    kBlock,
    kButton,
    kList,
    kListItem,
    kLink,
    kBlockTitle,
    kToolbar,
    kCard
  },
  methods: {
    back() {
      const router = useRouter();
      router.push(`/notifications/`);
    },
  }
};
</script>
