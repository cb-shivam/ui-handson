<template>
  <div class="container">
    <div class="row justify-content-between mt-5 mb-5">
      <div class="col-4">
        <h3>Team Members ({{ member_count }})</h3>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-primary" id="show-modal" @click="showModal = true">
          + Invite Team Members
        </button>
      </div>
    </div>
    <MemberRow></MemberRow>
    <MemberRow></MemberRow>
    <!-- use the modal component, pass in the prop -->
    <transition name="modal">
      <InviteMemberModal v-if="showModal" @close="showModal = false">
      </InviteMemberModal>
    </transition>
  </div>
</template>

<script>
import MemberRow from '@/components/MemberRow.vue';
import InviteMemberModal from '@/components/InviteMemberModal.vue';

export default {
  name: 'Home',
  data() {
    return {
      member_count: 5,
      showModal: false,
      show: true,
    };
  },
  methods: {
    inviteMember() {
      alert('Inviting Member');
    },
  },
  components: {
    InviteMemberModal,
    MemberRow,
  },
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
