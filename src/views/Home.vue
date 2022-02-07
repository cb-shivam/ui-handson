<template>
  <div class="container">

    <div class="row justify-content-between mt-5 mb-5 text-center">
      <div class="col-4">
        <h3>Team Members ({{ membersCount }})</h3>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MemberRow from '@/components/MemberRow.vue';
import InviteMemberModal from '@/components/InviteMemberModal.vue';
import DeleteMemberModal from '@/components/DeleteMemberModal.vue';
import EditMemberModal from '@/components/EditMemberModal.vue';
import { Member } from '@/types';

@Component({
  components: {
    MemberRow,
    InviteMemberModal,
    DeleteMemberModal,
    EditMemberModal,
  },
})
export default class Home extends Vue {
  showInviteMemberModal = false;

  selectedMemberId = -1;

  showDeleteMemberModal = false;

  showEditMemberModal = false;

  renderDeleteMemberModal(memberId :number) :void {
    this.selectedMemberId = memberId;
    this.showDeleteMemberModal = true;
  }

  renderEditMemberModal(memberId :number) :void {
    this.selectedMemberId = memberId;
    this.showEditMemberModal = true;
  }

  get membersList() :Member[] {
    return this.$store.state.membersList;
  }

  get membersCount() :number {
    return this.$store.getters.getMemberCount;
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
