<template>
  <div class="bg-white">
    <k-navbar title="View Asset"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
      <k-link toolbar @click="update">Update</k-link>
    </k-toolbar>

    <div class="w-full pb-2 pt-3 px-8 block">
      <div v-if="!loading" v-for="(key, field) in entry.value">
        <h1 class="text-[#9C9B9B] text-lg font-bold text-left block mb-0 mt-2">{{ field }}</h1>
        <h1 class="text-[#EA5E65] text-lg font-bold text-left block mb-0 mt-0">{{ entry.value[field] }}</h1>
      </div>
    </div>


    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-4">Place Service Request</h1>
    <div class="bg-[#B3B5B8] text-white w-[70%] text-center rounded-r-full py-2 my-4" v-on:click="service_request">Click
      Here
    </div>

    <h1 class="text-[#EA5E65] text-lg font-black text-center block mb-0 mt-4">Replace This Asset</h1>
    <div class="bg-[#EA5E65] text-white w-[70%] text-center rounder-r-full py-2 my-4">Click Here</div>


    <div class="w-[70%] pb-2 pt-3 px-8 mx-auto mb-20">
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Information</h1>
      <h1 class="text-[#B3B5B8] text-lg font-black  block mb-0 mt-4">Customer Docs</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">User Training</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Cleaning</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Health & Safety</h1>
      <h1 class="text-[#B3B5B8] text-lg font-black  block mb-0 mt-4">Manufacturer links</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Website</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Brochure</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Accessories</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Specification</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">User Manual</h1>
      <h1 class="text-[#EA5E65] text-lg font-black  block mb-0 mt-4">Install Manual</h1>
    </div>

  </div>
</template>
<script>
// Konsta UI components
import {kBlock, kBlockTitle, kButton, kLink, kList, kListInput, kListItem, kNavbar, kPage, kToolbar,} from 'konsta/vue';
import axios from "axios";

export default {
  components: {
    kToolbar,
    kPage,
    kNavbar,
    kBlock,
    kButton,
    kList,
    kListItem,
    kListInput,
    kLink,
    kBlockTitle,
  },
  data() {
    return {
      loading: true,
      entry: {}
    }
  },
  mounted() {
    axios
      .get(`https://kinda.jdsx.app/api/resources/assets/` + this.$route.params.id + `/get`)
      .then(response => (this.entry = response.data));

    this.loading = false;
  },
  methods: {
    back() {
      const router = useRouter();
      router.push(`/Assets/`);
    },
    update() {
      const router = useRouter();
      router.push(`/Assets/update/` + this.$route.params.id);
    },
    service_request() {
      const router = useRouter();
      router.push(`/services/service-request-form/`);
    }
  }
};
</script>
