<template>
  <div class="bg-white">
    <k-toolbar navbar>
      <k-link toolbar @click="account_management">Account</k-link>
      <k-link toolbar @click="notifications">Notifications</k-link>
    </k-toolbar>

    <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Dashboard</h1>
    <h1 class="text-[#9C9B9B]  text-center block mb-0 mt-2">Assets under warranty</h1>
    <img src="/widget_circle.png" class="w-[70%] mx-auto mt-2"/>
    <h1 class="text-[#9C9B9B]  text-center block mb-0 mt-4">Assets ending soon</h1>
    <img src="/widget_loader.png" class="w-[70%] mx-auto mt-2 mb-12"/>


    <h1 class="text-[#9C9B9B] w-[70%] mx-auto  font-bold block mb-0 mt-4">Service Costs</h1>
    <img src="/widget_service_costs.png" class="w-[70%] mx-auto mt-4 mb-12"/>


    <h1 class="text-[#9C9B9B] w-[70%] mx-auto font-bold block mb-0 mt-4">Parts Vs Labour</h1>
    <img src="/widget_service_costs.png" class="w-[70%] mx-auto mt-4 mb-12"/>



   <div class="mb-[30vh]">
     <k-block-title class="text-[#EA5E65]">Navigation</k-block-title>
     <k-list inset>
       <k-list-item href="/user-messages" title="Messages" />
       <k-list-item href="/sites" title="Sites" />
       <k-list-item href="/assets" title="Assets" />
       <k-list-item href="/asset-issues" title="Asset Issues" />
       <k-list-item href="/asset-addons" title="Asset Addons" />
     </k-list>

     <k-block-title class="text-[#EA5E65]">Footer</k-block-title>
     <k-list inset>
       <k-list-item href="/legal" title="Legal" />
       <k-list-item href="/ideas" title="Visual Ideas" />
     </k-list>
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
