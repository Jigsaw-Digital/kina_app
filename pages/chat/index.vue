<template>
    <div class="bg-white">
  
      <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Chat</h1>
      <h1 class="text-[#9C9B9B]  text-center block mb-0 mt-2">Chat to one of our advisors</h1>
    

      <NuxtLink v-for="item in list">
    
        <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                  MT
                </div>
                <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                  <div>
                   {{ item.value.message}}
                  </div>
                </div>
              </div>
            </div>
      </NuxtLink>

      <div class="bg-[#efefef] fixed bottom-[50px] w-full pb-2 pt-3 px-8 block z-50">
        <input type="text"  v-model="messsage" required
                class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>

        <div class="mx-2 my-2">
            <k-button v-on:click="create">Create</k-button>
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
  import * as https from "https";
import axios from "axios";
  
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
    data () {
    return {
      list: null,
      loading: true,
      fields: {},
      from:"Michael Taylor",
      messsage:"",
      to:"Kina",
    }
  },
  mounted () {
    axios
      .get('https://kinda.jdsx.app/api/resources/user-messages/get')
      .then(response => (this.list = response.data));
      
      axios
      .get('https://kinda.jdsx.app/api/resources/user-messages/info')
      .then(response => (this.fields = response.data));

    this.loading = false;
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
      create() {
      const router = useRouter();
      let data = {};

      for (const field in this.fields) {
        data[field] = this.fields[field].value;
      }

      axios
        .post('https://kinda.jdsx.app/api/resources/user-messages/create', {message: this.messsage})
        .then(response => (this.fields = response.data))
        // .then(response => (this.openToast('center')))
        .then(response => ( router.push({ name: 'chat' })))
    }
    }
  };
  </script>
  