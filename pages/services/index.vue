<template>
  <div class="bg-white">
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>

    <div class="block"><img src="/icons/nfc.png" class="w-[40%] mx-auto mt-2"/></div>

    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-8">Scan NFC</h1>
    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-8">OR</h1>

    <div class="mx-2 my-4">
      <a href="#" v-on:click="service_asset()"
         class="block border border-1 border-[#EA5E65] bg-white text-[#EA5E65] rounded-full py-2 px-5 mx-auto text-center w-[70%]">Use
        Barcode</a>
    </div>

    <div class="mx-2 my-4">
      <a href="#" v-on:click="service_asset()"
         class="block border border-1 border-[#EA5E65] bg-[#EA5E65] text-white rounded-full py-2 px-5 mx-auto text-center w-[70%]">Use
        QR Code</a>
    </div>

    <div class="mx-2 my-4">
      <a href="/services/asset"
         class="block border border-1 border-[#EA5E65] bg-white text-[#EA5E65] rounded-full py-2 px-5 mx-auto text-center w-[70%]">Asset
        Reference</a>
    </div>

    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-8">OR</h1>

    <div class="mx-2 my-4">
      <a href="#" v-on:click="service_request_form()"
         class="block border border-1 border-[#EA5E65] bg-white text-[#EA5E65] rounded-full py-2 px-5 mx-auto text-center w-[70%]">Continue Without</a>
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
    service_asset() {
      const router = useRouter();
      router.push(`/services/asset`);
    },
    service_request_form() {
      const router = useRouter();
      router.push(`/services/service-request-form`);
    },
  }
};
</script>
