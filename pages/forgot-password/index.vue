<template>
  <k-page>
    <k-navbar title="Forgot Password" />
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>If you have forgotten your password please enter your email below.</p>
    </k-block>
    <k-block-title>Sign Up</k-block-title>
    <k-list inset strong>
      <k-list-input  label="Email" type="email" placeholder="Your email" :value="email"/>
      <div class="mx-2 my-2">
        <k-button v-on:click="signUp()">Forgot Password</k-button>
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
} from 'konsta/vue';

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
  },
  data() {
    return {
      email: 'michael@jigsaw.digital',
      password: 'K1r4d4x31246969??',
    }
  },
  methods: {
      back(){
        const router = useRouter();
        router.push(`/`);
      },
    signUp() {
      const router = useRouter();
      router.push({ name: 'home' });
    }
  },
};
</script>
