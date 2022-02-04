<template>
  <!-- template for the modal component -->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container container w-50">

        <!--        Modal Header-->
        <div class="modal-header">
          <h5 class="modal-title">Invite a team member to use ChargeBee</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <!--        Modal Body-->
        <div class="modal-body">
          <p class="text-start">You can either let your team members access everything in this site,
            or assign specific roles to them.</p>

          <!--          Email Input-->
          <div class="mb-3 row">
            <label for="memberEmailInput" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="memberEmailInput" v-model="memberEmail">
            </div>
          </div>

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
          <button type="button" class="btn btn-primary" @click="inviteMember">Save changes</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InviteMemberModal extends Vue {
  memberEmail = '';

  memberRole = 'Tech Support';

  closeModal(): void {
    this.$emit('close');
  }

  inviteMember(): void {
    this.$store.commit('addMember', {
      id: Date.now(),
      name: this.memberEmail,
      email: this.memberEmail,
      role: this.memberRole,
    });
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
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
