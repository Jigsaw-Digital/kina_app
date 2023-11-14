<template>
  <div class="bg-white">
    <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Account Settings</h1>
  

    <div class="w-[80%] mx-auto"> 
      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Name</label>
        <input type="text" placeholder="" value="Michael Taylor"
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Phone Number</label>
        <input type="text" value="07572408697"
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Email Address</label>
        <input type="text" value="michael@jigsaw.digital"
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <hr/>
      <div class="py-2 px-2 mt-4">
        <label class="text-[#EA5E65] ">Current Password</label>
        <input type="password"
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">New Password</label>
        <input type="password"
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="mx-2 my-4 mb-[30vh]">
        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-[#EA5E65] text-white rounded-full py-2 px-5 mx-auto text-center">Save</a>
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
