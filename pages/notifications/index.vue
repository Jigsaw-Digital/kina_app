<template>
  <div class="bg-white">
    <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Notifications</h1>
  
    <div class="w-[80%] mx-auto mt-12">
      <h1 class="text-[#EA5E65] text-lg font-black block mt-4">Messages</h1>
      <div class="rounded-[20px] border border-gray-200 p-2" v-on:click="messages()">
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">3 Notifications</h1>
      </div>
    <h1 class="text-[#EA5E65] text-lg font-black block mt-4">Service Requests</h1>
    <div class="rounded-[20px] border border-gray-200 p-2" v-on:click="service_requests()">
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">2 Service Request Places</h1>
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">1 Service Request Resolved</h1>
      </div>
    <h1 class="text-[#EA5E65] text-lg font-black block mt-4">Asset Uploads</h1>
    <div class="rounded-[20px] border border-gray-200 p-2" v-on:click="asset_uploads()">
        <h1 class="text-[#9C9B9B] block mb-0 mt-2 ml-2">2 Notifications</h1>
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
    back() {
      const router = useRouter();
      router.push(`/home/`);
    },
    messages() {
      const router = useRouter();
      router.push(`/notifications/messages/`);
    },
    service_requests() {
      const router = useRouter();
      router.push(`/notifications/service-requests/`);
    },
    asset_uploads() {
      const router = useRouter();
      router.push(`/notifications/asset-uploads/`);
    },
  }
};
</script>
