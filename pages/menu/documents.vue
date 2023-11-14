<template>
    <div class="bg-white">
      <h1 class="text-[#EA5E65] text-lg font-black text-center block mt-4">Documents</h1>
      <h1 class="text-[#9C9B9B]  text-center block mb-0 mt-2">Hub for your documents</h1>

  
      <div class="w-[80%] mx-auto"> 
       
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">

        <input type="text"  v-model="messsage" required
                class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>

        <div class="mx-2 my-2">
            <k-button v-on:click="create">Create</k-button>
        </div>
      </div>


      <NuxtLink v-for="item in list">
    
    <div class="col-start-1 col-end-8 p-3 rounded-lg mt-4">
          <div class="flex flex-row items-center">
    
            <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              <div>
               {{ item.value.document_name}}
              </div>
            </div>
          </div>
        </div>
  </NuxtLink>

  
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
      .get('https://kinda.jdsx.app/api/resources/documents/get')
      .then(response => (this.list = response.data));
      
      axios
      .get('https://kinda.jdsx.app/api/resources/documents/info')
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
        .post('https://kinda.jdsx.app/api/resources/documents/create', {document_name: this.messsage})
        .then(response => (this.fields = response.data))
        // .then(response => (this.openToast('center')))
        .then(response =>  this.$forceUpdate())
    }
    }
      
  };
  </script>
  