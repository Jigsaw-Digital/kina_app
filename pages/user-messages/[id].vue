<template>
  <k-page>
    <k-navbar title="View Message"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
      <k-link toolbar @click="update">Update</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>View Message Information</p>
    </k-block>
    <k-list inset strong >
      <k-list strong-ios outline-ios>
        <div v-if="!loading" v-for="(key, field) in entry.value">
          <k-list-item
            :chevron-material="false"
            :title="field"
            :subtitle="key"/>
          </div>
      </k-list>
    </k-list>
  </k-page>
</template>
<script>
// Konsta UI components
import {
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
} from 'konsta/vue';
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
      .get(`https://kinda.jdsx.app/api/resources/user-messages/` + this.$route.params.id + `/get`)
      .then(response => (this.entry = response.data));

    this.loading = false;
  },
  methods: {
    back(){
      const router = useRouter();
      router.push(`/user-messages/`);
    },
    update(){
      const router = useRouter();
      router.push(`/user-messages/update/` + this.$route.params.id);
    }
  }
};
</script>
