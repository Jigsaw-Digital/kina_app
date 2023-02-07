<template>
  <k-page>
    <k-navbar title="Kina Legal"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is your Kina legal text...</p>
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
  kBlockTitle,
  kToolbar,
} from 'konsta/vue';

export default {
  components: {
    kPage,
    kNavbar,
    kToolbar,
    kBlock,
    kButton,
    kList,
    kListItem,
    kLink,
    kBlockTitle,
  },
  methods: {
    back(){
      const router = useRouter();
      router.push(`/home/`);
    },
  }
};
</script>
