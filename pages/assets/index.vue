<template>
  <k-page>
    <k-navbar title="Assets" />
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is your Assets assigned to your account.</p>
    </k-block>

    <k-block-title>Assets</k-block-title>
    <k-list inset>
      <NuxtLink v-for="item in list"  :to="`/Assets/` + item.id">
        <k-list-item :title="item.value.name"></k-list-item>
      </NuxtLink>
    </k-list>
    <k-list inset class="mt-2">
      <k-list-item href="/Assets/create" title="Create Asset" />
    </k-list>
  </k-page>
</template>

<script>
import {
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
    kListInput,
    kLink,
    kBlockTitle,
    kToolbar,
  },
  fetchKey: 'Asset-create',
  data () {
    return {
      list: null
    }
  },
  mounted () {
    axios
      .get('https://kinda.jdsx.app/api/resources/assets/get')
      .then(response => (this.list = response.data))
  },
  methods: {
    back(){
      const router = useRouter();
      router.push(`/home`);
    },
  }
};
</script>
