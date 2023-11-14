<template>

  <div class="bg-white">
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-list inset strong>
      <div v-if="!loading" v-for="(key, field) in fields">
        <div class="w-full pb-2 pt-3 px-8 block" v-if="key.type != 'select'">
          <div class="py-2 px-2">
            <label class="text-[#EA5E65] ">{{ key.name }}</label>
            <input type="text" @input="updateValue(key.property, $event.target.value)" required
                   class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
          </div>
        </div>
        <div class="w-full pb-2 pt-3 px-8 block" v-else>
          <label class="text-[#EA5E65] ">{{ key.name }}</label>
          <select  type="select"  @input="updateValue(key.property, $event.target.value)" required   class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2">
            <option value=""></option>
            <option v-for="option in key.options" :value="option">{{option}}</option>
          </select>
        </div>
        </div>


        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-[#EA5E65] text-white rounded-full mx-auto text-center py-2 px-5 mt-2"
           v-on:click="create()">Create</a>
    </k-list>

    <k-toast position="center" :opened="opened.center">
      <template #button>
        <k-button clear inline @click="() => (opened.center = false)">
          Close
        </k-button>
      </template>
      <div class="shrink">Asset created successfully!</div>
    </k-toast>
  </div>
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
      .get('https://kinda.jdsx.app/api/resources/assets/info')
      .then(response => (this.fields = response.data));

    this.loading = false;
  },
  methods: {
    back(){
      const router = useRouter();
      router.push(`/Assets/`);
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
        .post('https://kinda.jdsx.app/api/resources/assets/create', data)
        .then(response => (this.fields = response.data))
        // .then(response => (this.openToast('center')))
        .then(response => ( router.push({ name: 'Assets' })))
    }
  }
};
</script>
