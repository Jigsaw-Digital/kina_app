<template>
  <k-page>
    <k-navbar title="Kina Notifications"/>
    <k-toolbar navbar>
      <k-link toolbar @click="back">Back</k-link>
    </k-toolbar>
    <k-block strong inset>
      <p>Here is your Kina notifications.</p>
    </k-block>

    <div class="lg:grid lg:grid-cols-2">
    <k-card outline>
      <template #footer>
        <div class="flex justify-between material:hidden">
          <k-link>Mark as unread</k-link>
          <k-link>Read more</k-link>
        </div>
        <div className="flex justify-start ios:hidden space-x-2">
          <k-button rounded inline> Mark as unread </k-button>
          <k-button rounded inline outline> Read more </k-button>
        </div>
      </template>
      <div
        class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
      >
        Journey To Kina
      </div>
      <p>
        Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
        efficitur vitae non felis. Phasellus quis nibh hendrerit...
      </p>
    </k-card>
    </div>
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
  kBlockTitle, kToolbar,
  kCard
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
    kCard
  },
  methods: {
    back() {
      const router = useRouter();
      router.push(`/home/`);
    },
  }
};
</script>
