<template>
  <div class="bg-white">
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>

    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-8">Are You Sure?</h1>

    <div class="w-full pb-2 pt-3 px-8 block">
      <h1 class="text-[#9C9B9B] text-lg font-bold text-left block mb-0 mt-2">Asset Reference</h1>
      <h1 class="text-[#EA5E65] text-lg font-bold text-left block mb-0 mt-0">1077</h1>
      <h1 class="text-[#9C9B9B] text-lg font-bold text-left block mb-0 mt-2">Model Number</h1>
      <h1 class="text-[#EA5E65] text-lg font-bold text-left block mb-0 mt-0">1077-M-33</h1>
      <h1 class="text-[#9C9B9B] text-lg font-bold text-left block mb-0 mt-2">Serial Number</h1>
      <h1 class="text-[#EA5E65] text-lg font-bold text-left block mb-0 mt-0">LA020160179</h1>
    </div>

    <div class="w-full pb-2 pt-3 px-8 block">
      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Reason For Service</label>
        <input type="email" placeholder=""
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Name</label>
        <input type="email" placeholder=""
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Position</label>
        <input type="email" placeholder=""
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Email</label>
        <input type="email" placeholder=""
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Telephone</label>
        <input type="email" placeholder=""
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>

      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Notes</label>
        <textarea type="email" placeholder="" rows="5"
                  class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>


      <div class="mx-2 my-4 mb-[30vh]">
        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-[#EA5E65] text-white rounded-full py-2 px-5 mx-auto text-center" v-on:click="submit()">Done</a>
      </div>
    </div>

    <div class="bg-[#EA5E65] text-white fixed bottom-28 w-[60%] pb-2 pt-3 px-8 block rounded-r-full">
      <p>Warranty Period</p>
      <p class="text-lg font-black">16 Months 30 Days</p>
    </div>

    <div class="bg-[#EA5E65] fixed bottom-0 w-full pb-2 pt-3 px-8 block">
      <div class="grid grid-cols-4 relative">
        <div><img src="/icons/dashboard.png" v-on:click="home()" class="w-[60%] mx-auto"/></div>
        <div><img src="/icons/assets.png" v-on:click="assets()" class="w-[45%] mx-auto"/></div>
        <div><img src="/icons/service-filled.png" v-on:click="services()" class="w-[55%] mx-auto"/></div>
        <div><img src="/icons/chat.png" class="w-[45%] mx-auto"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import {kBlock, kBlockTitle, kButton, kLink, kList, kListInput, kListItem, kNavbar, kPage, kToolbar,} from 'konsta/vue';
import axios from "axios";

export default {
  components: {
    kPage,
    kNavbar,
    kBlock,
    kButton,
    kList,
    kListItem,
    kListInput,
    kLink,
    kBlockTitle,
    kToolbar,
  },
  fetchKey: 'Asset-create',
  data() {
    return {
      list: null
    }
  },
  mounted() {
    axios
      .get('https://kinda.jdsx.app/api/resources/assets/get')
      .then(response => (this.list = response.data))
  },
  methods: {
    back() {
      const router = useRouter();
      router.push(`/home`);
    },
    home() {
      const router = useRouter();
      router.push(`/home/`);
    },
    assets() {
      const router = useRouter();
      router.push(`/assets/`);
    },
    services() {
      const router = useRouter();
      router.push(`/services/`);
    },
    submit() {
      const router = useRouter();
      router.push(`/services/thankyou/`);
    },
  }
};
</script>
