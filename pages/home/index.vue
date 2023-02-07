<template>
  <k-page>
    <k-navbar title="Kina" />
    <k-toolbar navbar>
      <k-link toolbar @click="account_management">Account</k-link>
      <k-link toolbar @click="notifications">Notifications</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Welcome to Kina</p>
    </k-block>
    <k-block-title>Navigation</k-block-title>
    <k-list inset>
      <k-list-item href="/user-messages" title="Messages" />
      <k-list-item href="/sites" title="Sites" />
      <k-list-item href="/assets" title="Assets" />
      <k-list-item href="/asset-issues" title="Asset Issues" />
    </k-list>

    <k-block-title>Footer</k-block-title>
    <k-list inset>
      <k-list-item href="/legal" title="Legal" />
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
