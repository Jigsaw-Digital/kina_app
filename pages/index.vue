<template>
  <k-page>
    <k-navbar title="Login"/>
    <k-block strong inset>
      <p>Login to your account, if you dont have create one
        <NuxtLink to="/signup">here</NuxtLink>
        .
      </p>
    </k-block>
    <k-block-title>Log In</k-block-title>
    <k-list inset strong>
      <k-list-input  label="Email" type="email" placeholder="Your email" :value="email"/>
      <k-list-input
        outline
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
      />
      <div class="mx-2 my-2">
        <k-button v-on:click="signIn()">Login</k-button>
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
    signIn() {
      const router = useRouter();
      router.push({ name: 'home' });
    }
  },
};
</script>
