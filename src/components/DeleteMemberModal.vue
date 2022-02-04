<template>
  <!-- template for the modal component -->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container container w-50">

        <!--        Modal Header-->
        <div class="modal-header">
          <h5 class="modal-title">Are you sure to want to remove this member ?</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <!--        Modal Body-->
        <div class="modal-body">
          <p class="text-start"><span class="fw-bold">{{ memberName }}</span> will not be able to
            access the site.</p>
        </div>

        <!--        Modal Footer-->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="removeMember">Remove Member</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DeleteMemberModal extends Vue {
  @Prop({ required: true })
  memberId !:number;

  // Computed Property
  get memberName() :string {
    return this.$store.getters.getMember(this.memberId).name;
  }

  // Methods
  closeModal() :void {
    this.$emit('close');
  }

  removeMember() :void {
    this.$store.commit('deleteMember', this.memberId);
    this.closeModal();
  }
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
