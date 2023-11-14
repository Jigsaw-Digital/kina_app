<template>
    <div class="bg-white">
      <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Menu</h1>
      <h1 class="text-[#9C9B9B]  text-center block mb-0 mt-2">Hub for your options</h1>

  
      <div class="w-[80%] mx-auto"> 
        <div class="rounded-[20px] border border-gray-200 p-2 mt-2" v-on:click="account_management">
            <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">Account Details</h1>
            <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Last Updated: 20/04/23 14:32</h2>
        </div>
      </div>

      <div class="w-[80%] mx-auto"> 
        <div class="rounded-[20px] border border-gray-200 p-2 mt-2" v-on:click="documents">
            <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">Asset Uploads</h1>
            <h2 class="text-[#9C9B9B] text-[10px] block mb-0 mt-2 ml-2">Last Updated: 20/04/23 14:32</h2>
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
    kBlockTitle,
    kToolbar,
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
    },
    methods: {
      account_management(){
        const router = useRouter();
        router.push(`/account/`);
      },
      documents(){
        const router = useRouter();
        router.push(`/menu/documents/`);
      },
      notifications(){
        const router = useRouter();
        router.push(`/notifications/`);
      },
      home(){
        const router = useRouter();
        router.push(`/home/`);
      },
      assets(){
        const router = useRouter();
        router.push(`/assets/`);
      },
      services() {
        const router = useRouter();
        router.push(`/services/`);
      },
        chat(){
        const router = useRouter();
        router.push(`/chat/`);
      },
      menu() {
        const router = useRouter();
        router.push(`/menu/`);
      },
    }
  };
  </script>
  