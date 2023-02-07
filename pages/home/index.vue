<template>
  <k-page>
    <k-navbar title="Kina" />
    <k-toolbar navbar>
      <k-link toolbar @click="account_management">Account</k-link>
      <k-link toolbar @click="notifications">Notifications</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is your Nuxt & Konsta UI app. Let's see what we have here.</p>
    </k-block>
    <k-block-title>Navigation</k-block-title>
    <k-list inset>
      <k-list-item href="/sites" title="Sites" />
    </k-list>
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
    kBlock,
    kButton,
    kList,
    kListItem,
    kLink,
    kBlockTitle,
    kToolbar,
  },
  methods: {
    account_management(){
      const router = useRouter();
      router.push(`/account/`);
    },
    notifications(){
      const router = useRouter();
      router.push(`/notifications/`);
    }
  }
};
</script>
