<template>
  <k-page>
    <k-navbar title="Create Site"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is where you can create your site. A site is where all your assets/users can be assigned to keep
        everything organised.</p>
    </k-block>
    <k-list inset strong>
      <div v-if="!loading" v-for="(key, field) in fields">
        <k-list-input v-if="key.type === 'select'" :label="key.name" type="select" dropdown :placeholder="key.name" @input="updateValue(key.property, $event.target.value)" required>
          <option value=""></option>
          <option v-for="option in key.options" :value="option">{{option}}</option>
        </k-list-input>
        <k-list-input v-if="key.type != 'select'" :label="key.name" type="text" :placeholder="key.name" @input="updateValue(key.property, $event.target.value)" required/>
      </div>

      <div class="mx-2 my-2">
        <k-button v-on:click="create">Create</k-button>
      </div>
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
  kListInput,
  kLink,
  kBlockTitle,
  kToolbar,
} from 'konsta/vue';
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
    kToolbar
  },
  data() {
    return {
      loading: true,
      fields: {}
    }
  },
  mounted() {
    axios
      .get('https://cornerstone.test/api/resources/account-users/info')
      .then(response => (this.fields = response.data));

    this.loading = false;
  },
  methods: {
    back(){
      const router = useRouter();
      router.push(`/sites/`);
    },

    updateValue(key, value) {
      this.$emit("input", { ...this.fields[key]['value'] = value });
    },

    create() {
      let data = {};


      for (const field in this.fields) {
        data[field] = this.fields[field].value;
      }

      axios
        .post('https://cornerstone.test/api/resources/account-users/create', data)
        .then(response => (this.fields = response.data));

      const router = useRouter();
      router.push({ name: 'sites' });
    }
  }
};
</script>
