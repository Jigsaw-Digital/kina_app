<template>
  <div class="bg-white">
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>

    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-8">Almost done!</h1>


    <div class="w-full pb-2 pt-3 px-8 block">

      <div class="py-2 px-2 flex">
        <input type="checkbox"
               class="block border rounded-full border-[#e5e5e5] py-2 px-5 mt-2 mr-4"/>
        <div>
          <label class="text-[#EA5E65] pt-2">Non Warranty Service Disclaimer</label>
          <p class="text-xs text-[#9C9B9B]">I hereby accept that may actioning the above
            service request, that if, the following inspection
            is found to be non-warranty, we, the client, will
            accept financial responsibility for any cost
            associated to this service request.</p>
        </div>
      </div>

      <div class="py-2 px-2 flex">
        <input type="checkbox"
               class="block border rounded-full border-[#e5e5e5] py-2 px-5 mt-2 mr-4"/>
        <div>
          <label class="text-[#EA5E65] pt-2">Attendance Disclaimer </label>
          <p class="text-xs text-[#9C9B9B]">Standard manufacturing service times apply.</p>
        </div>
      </div>

      <div class="py-2 px-2 flex">
        <input type="checkbox"
               class="block border rounded-full border-[#e5e5e5] py-2 px-5 mt-2 mr-4"/>
        <div>
          <label class="text-[#EA5E65] pt-2">Service Deposit </label>
          <p class="text-xs text-[#9C9B9B]">A service deposit is required.</p>
        </div>
      </div>

      <div class="py-2 px-2 flex">
        <input type="checkbox"
               class="block border rounded-full border-[#e5e5e5] py-2 px-5 mt-2 mr-4"/>
        <div>
          <label class="text-[#EA5E65] pt-2">Select All </label>
        </div>
      </div>



      <div class="mx-2 my-4 mb-[30vh]">
        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-[#EA5E65] text-white rounded-full py-2 px-5 mx-auto text-center" v-on:click="next()">Next</a>
      </div>
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
      router.push(`/services/service-request-form-2/`);
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
    next() {
      const router = useRouter();
      router.push(`/services/service-request-form-4/`);
    },
  }
};
</script>
