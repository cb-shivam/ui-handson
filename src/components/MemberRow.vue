<template>
  <div class="row text-start justify-content-center mt-0">
    <div class="col-1 border border-light border-end-0 border-3">
      <img src="@/assets/dp_placeholder.png" class="rounded-start img-thumbnail mt-1 mb-1"
           alt="..." width="70%">
    </div>
    <div class="col-5 border-light border-top border-bottom border-3">
      <p class="mt-2">{{ memberName }} ({{ memberRole }})<br>{{ memberEmail }}</p>
    </div>

    <div class="col-1 border border-light border-start-0 border-3">
      <div class="mt-3">
        <img src="@/assets/three-dots-vertical.svg" alt="Bootstrap">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberRow',
  props: {
    memberName: {
      type: String,
      required: true,
    },
    memberRole: {
      type: String,
      required: true,
    },
    memberEmail: {
      type: String,
      required: true,
    },
  },
};
</script>
