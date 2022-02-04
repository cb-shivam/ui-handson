<template>
  <!-- template for the modal component -->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container container w-50">

        <!--        Modal Header-->
        <div class="modal-header">
          <h5 class="modal-title">Change role for <span class="fw-bolder">{{ memberEmail }}</span>
          </h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <!--        Modal Body-->
        <div class="modal-body">

          <!--          Role Input-->
          <div id="v-model-radiobutton">
            <p class="fw-lighter">Select User Access Level</p>

            <div class="form-check">
              <input class="form-check-input" type="radio" id="TechSupportRadio"
                     v-model="memberRole" name="memberRole" value="Tech Support">
              <label class="form-check-label" for="TechSupportRadio">
                <span class="fw-bold">Tech Support</span> <br> User can view "Subscriptions" and
                "Product Catalog" tabs. Can also view, add comments to, send, download individual
                Invoices/Credit Notes.
              </label>
              <hr>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" id="AnalystRadio" v-model="memberRole"
                     name="memberRole" value="Analyst">
              <label class="form-check-label" for="AnalystRadio">
                <span class="fw-bold">Analyst</span> <br> In addition to Tech Support level access,
                user will have access to the SaaS metrics report.
              </label>
              <hr>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" id="AdminRadio" v-model="memberRole"
                     name="memberRole" value="Admin">
              <label class="form-check-label" for="AdminRadio">
                <span class="fw-bold">Admin</span> <br> Access everything in Chargebee.
              </label>
            </div>

          </div>

        </div>

        <!--        Modal Footer-->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" @click="editMemberRole">Save changes
          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'EditMemberModal',
  data() {
    return {
      memberRole: '',
    };
  },
  props: {
    memberId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    memberEmail() {
      return this.$store.getters.getMember(this.memberId).email;
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    editMemberRole() {
      this.$store.commit('editMemberRole', {
        id: this.memberId,
        role: this.memberRole,
      });
      this.closeModal();
    },
  },
  mounted() {
    this.memberRole = this.$store.getters.getMember(this.memberId).role;
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
}
</style>
