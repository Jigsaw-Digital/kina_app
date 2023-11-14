<template>
  <div class="bg-white">
    <h1 class="text-[#EA5E65] text-lg font-bold text-center block mb-0 mt-4">Sign Up</h1>
    <k-list inset strong>
      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Email</label>
        <input type="email" placeholder="Your email" :value="email"
               class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"/>
      </div>
      <div class="py-2 px-2">
        <label class="text-[#EA5E65] ">Password</label>
        <input
          type="password"
          placeholder="Your password"
          :value="password"
          class="block border rounded-full border-[#e5e5e5] w-full py-2 px-5 mt-2"
        />
      </div>
      <div class="mx-2 my-4">
        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-[#EA5E65] text-white rounded-full py-2 px-5 mx-auto text-center"
           v-on:click="signUp()">Sign Up</a>
      </div>
      <div class="mx-2 my-4">
        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-white text-[#EA5E65] rounded-full py-2 px-5 mx-auto text-center"
           v-on:click="signIn()">Login</a>
      </div>
      <div class="mx-2 my-4">
        <a href="#"
           class="block border border-1 border-[#EA5E65] bg-white text-[#EA5E65] rounded-full py-2 px-5 mx-auto text-center"
           v-on:click="forgot_password()">Forgot Password</a>
      </div>
    </k-list>
  </div>
</template>
<script>
// Konsta UI components
import {kBlock, kBlockTitle, kButton, kLink, kList, kListInput, kListItem, kNavbar, kPage,} from 'konsta/vue';

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
    signUp() {
      const router = useRouter();
      router.push({name: 'home'});
    },
    signIn() {
      const router = useRouter();
      router.push(`/`);
    },
    forgot_password() {
      const router = useRouter();
      router.push({name: 'forgot-password'});
    }
  },
};
</script>
