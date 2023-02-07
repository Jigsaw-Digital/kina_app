<template>
  <k-page>
    <k-navbar title="View Site"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Edit Site Information</p>
    </k-block>
    <k-list inset strong >
      <k-list strong-ios outline-ios>
        <div v-if="!loading" v-for="(key, field) in fields">
          <k-list-input v-if="key.type === 'select'" :label="key.name" type="select" :value="entry.value[key.property]" dropdown :placeholder="key.name" @input="updateValue(key.property, $event.target.value)" required>
            <option value=""></option>
            <option v-for="option in key.options" :value="option">{{option}}</option>
          </k-list-input>
          <k-list-input v-if="key.type != 'select'" :label="key.name" type="text" :value="entry.value[key.property]" :placeholder="key.name" @input="updateValue(key.property, $event.target.value)" required/>
        </div>

        <div class="mx-2 my-2">
          <k-button v-on:click="update">Update</k-button>
        </div>
      </k-list>
    </k-list>

    <k-toast position="center" :opened="opened.center">
      <template #button>
        <k-button clear inline @click="() => (opened.center = false)">
          Close
        </k-button>
      </template>
      <div class="shrink">Site updated successfully!</div>
    </k-toast>

  </k-page>
</template>
<script>
import { ref } from 'vue';
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
  kToast,
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
    kToast,
    kLink,
    kBlockTitle,
  },
  setup() {
    const opened = ref({
      center: false,
    });
    const openToast = (side) => {
      // close other toast
      opened.value = { left: false, center: false, right: false };
      opened.value[side] = true;
    };
    return {
      openToast,
      opened,
    };
  },
  data() {
    return {
      loading: true,
      fields: {},
      entry: {},
    }
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      this.loading = true;
      axios
        .get('https://cornerstone.test/api/resources/account-users/info')
        .then(response => (this.fields = response.data));

      this.loading = false;

      axios
        .get(`https://cornerstone.test/api/resources/account-users/` + this.$route.params.id + `/get`)
        .then(response => (this.entry = response.data));

      this.loading = false;
    },
    updateValue(key, value) {
      this.$emit("input", { ...this.entry['value'][key] = value });
    },
    back(){
      const router = useRouter();
      router.push(`/sites/` + this.$route.params.id);
    },
    update() {
      let data = {};

      for (const field in this.entry['value']) {
        data[field] = this.entry['value'][field];
      }

      axios
        .post(`https://cornerstone.test/api/resources/account-users/`+ this.$route.params.id +`/update`, data)
        .then(response => (this.fields = response.data))
        .then(response => ( this.openToast('center')))
        .then(response=> (this.reload()));
    }
  }
};
</script>
