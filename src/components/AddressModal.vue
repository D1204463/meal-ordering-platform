<template>
  <div class="modal fade" id="addressModal" tabindex="-1" aria-labelledby="addressModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addressModalLabel">Enter Your Address</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input v-model="newAddress" type="text" class="form-control" placeholder="Enter address">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="submitAddress">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newAddress: ''
    };
  },
  methods: {
    submitAddress() {
      this.$emit('address-submitted', this.newAddress);
      this.newAddress = ''; // Clear input field
      const modalElement = document.getElementById('addressModal');
      // eslint-disable-next-line no-undef
      const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
      modal.hide();
    }
  }
};
</script>

<style scoped>
/* Add any styles specific to the modal here */
</style>
