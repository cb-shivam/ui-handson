<template>
  <div class="container">
    <div class="row justify-content-between mt-5 mb-5 text-center">
      <div class="col-4">
        <h3>Team Members ({{ member_count }})</h3>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-primary" id="show-modal"
                @click="showInviteMemberModal = true">
          + Invite Team Members
        </button>
      </div>
    </div>
    <MemberRow v-for='member in membersList' :key="member.id" v-bind:member-email="member.email"
               v-bind:member-name="member.name" v-bind:member-role="member.role"
               v-bind:member-id="member.id"
               @removeMemberEvent="renderDeleteMemberModal($event)"
               @editMemberEvent="renderEditMemberModal($event)"></MemberRow>

    <!-- use the modal component, pass in the prop -->
    <transition name="modal">
      <InviteMemberModal v-if="showInviteMemberModal" @close="showInviteMemberModal = false">
      </InviteMemberModal>

      <DeleteMemberModal v-if="showDeleteMemberModal" @close="showDeleteMemberModal = false"
                         v-bind:member-id="selectedMemberId">
      </DeleteMemberModal>

      <EditMemberModal v-if="showEditMemberModal" @close="showEditMemberModal = false"
                         v-bind:member-id="selectedMemberId">
      </EditMemberModal>

    </transition>
  </div>
</template>

<script>
import MemberRow from '@/components/MemberRow.vue';
import InviteMemberModal from '@/components/InviteMemberModal.vue';
import DeleteMemberModal from '@/components/DeleteMemberModal.vue';
import EditMemberModal from '@/components/EditMemberModal.vue';

export default {
  name: 'Home',
  data() {
    return {
      member_count: 5,
      showInviteMemberModal: false,
      selectedMemberId: null,
      showDeleteMemberModal: false,
      showEditMemberModal: false,
    };
  },
  methods: {
    renderDeleteMemberModal(memberId) {
      this.selectedMemberId = memberId;
      this.showDeleteMemberModal = true;
    },
    renderEditMemberModal(memberId) {
      this.selectedMemberId = memberId;
      this.showEditMemberModal = true;
    },
  },
  computed: {
    membersList() {
      return this.$store.state.membersList;
    },
  },
  components: {
    EditMemberModal,
    InviteMemberModal,
    MemberRow,
    DeleteMemberModal,
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
