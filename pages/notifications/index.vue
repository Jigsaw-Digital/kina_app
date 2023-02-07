<template>
  <k-page>
    <k-navbar title="Kina Notifications"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is your Kina notifications.</p>
    </k-block>
  </k-page>
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
  kBlockTitle, kToolbar,
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
    back() {
      const router = useRouter();
      router.push(`/home/`);
    },
  }
};
</script>
