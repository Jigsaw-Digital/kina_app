<template>
  <k-page>
    <k-navbar title="Create Message"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is where you can create your Message. A Message is where all your user-messages/users can be assigned to keep
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

    <k-toast position="center" :opened="opened.center">
      <template #button>
        <k-button clear inline @click="() => (opened.center = false)">
          Close
        </k-button>
      </template>
      <div class="shrink">Message created successfully!</div>
    </k-toast>
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
  kToast,
  kBlockTitle,
  kToolbar,
} from 'konsta/vue';
import axios from "axios";
import {ref} from "vue";

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
    kToast,
    kBlockTitle,
    kToolbar
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
      fields: {}
    }
  },
  mounted() {
    axios
      .get('https://cornerstone.test/api/resources/user-messages/info')
      .then(response => (this.fields = response.data));

    this.loading = false;
  },
  methods: {
    back(){
      const router = useRouter();
      router.push(`/user-messages/`);
    },

    updateValue(key, value) {
      this.$emit("input", { ...this.fields[key]['value'] = value });
    },

    create() {
      const router = useRouter();
      let data = {};

      for (const field in this.fields) {
        data[field] = this.fields[field].value;
      }

      axios
        .post('https://cornerstone.test/api/resources/user-messages/create', data)
        .then(response => (this.fields = response.data))
        // .then(response => (this.openToast('center')))
        .then(response => ( router.push({ name: 'user-messages' })))
    }
  }
};
</script>
