<template>
  <k-page>
    <k-navbar title="user-messages" />
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is your user-messages assigned to your account.</p>
    </k-block>

    <k-block-title>user-messages</k-block-title>
    <k-list inset>
      <NuxtLink v-for="item in list"  :to="`/user-messages/` + item.id">
        <k-list-item :title="item.value.message"></k-list-item>
      </NuxtLink>
    </k-list>
    <k-list inset class="mt-2">
      <k-list-item href="/user-messages/create" title="Create Message" />
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
  fetchKey: 'Message-create',
  data () {
    return {
      list: null
    }
  },
  mounted () {
    axios
      .get('https://cornerstone.test/api/resources/user-messages/get')
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
