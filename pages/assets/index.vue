<template>
  <div class="bg-white">
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>

    <h1 class="text-[#EA5E65] text-lg font-bold text-center block mb-0 mt-4">Assets</h1>
    <div class="block"><img src="/icons/asset-search.png" class="w-[60%] mx-auto mt-2"/></div>

    <div class="w-full overflow-x-scroll">
      <div class="my-4 overflow-x-scroll ml-5 w-[300%]">
        <div class="w-[120px] h-[120px] bg-[#EA5E65] mx-2 rounded inline-block">
          <img src="/icons/pinned.png" class="p-4 w-[90%] mx-auto"/>
        </div>
        <div class="w-[120px] h-[120px] bg-[#EA5E65] mx-2 rounded  inline-block">
          <img src="/icons/recent.png" class="p-4 w-[80%] mx-auto"/>
        </div>
        <div class="w-[120px] h-[120px] bg-[#EA5E65] mx-2 rounded  inline-block">
          <img src="/icons/critical.png" class="p-4 w-[90%] mx-auto"/>
        </div>
        <div class="w-[120px] h-[120px] bg-[#EA5E65] mx-2 rounded inline-block">
          <img src="/icons/linked.png" class="p-4 w-[80%] mx-auto"/>
        </div>
        <div class="w-[120px] h-[120px] bg-[#EA5E65] mx-2 rounded inline-block">
          <img src="/icons/warranty.png" class="p-4 w-[94%] mx-auto"/>
        </div>
      </div>
    </div>

    <k-list inset>
      <NuxtLink v-for="item in list" :to="`/Assets/` + item.id">
        <k-list-item :title="item.value.name"></k-list-item>
      </NuxtLink>
    </k-list>
    <k-list inset class="mt-2">
      <k-list-item href="/Assets/create" title="Create Asset"/>
    </k-list>
    <div class="bg-[#EA5E65] fixed bottom-0 w-full pb-2 pt-3 px-8 block">
      <div class="grid grid-cols-4 relative">
        <div><img src="/icons/dashboard.png" v-on:click="home()" class="w-[60%] mx-auto"/></div>
        <div><img src="/icons/assets-filled.png" v-on:click="assets()" class="w-[45%] mx-auto"/></div>
        <div><img src="/icons/service.png" v-on:click="services()" class="w-[35%] mx-auto"/></div>
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
  }
};
</script>
