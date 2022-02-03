<template>
  <!-- template for the modal component -->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container container">

        <div class="modal-header">
          <h5 class="modal-title">Invite a team member to use ChargeBee</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'InviteMemberModal',
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
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
  font-family: Helvetica, Arial, sans-serif;
}
</style>
