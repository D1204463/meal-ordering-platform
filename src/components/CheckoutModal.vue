<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Select Payment Method</h2>
      <div>
        <button @click="selectPaymentMethod('credit-card')">Credit Card</button>
        <button @click="selectPaymentMethod('paypal')">PayPal</button>
        <button @click="selectPaymentMethod('apple-pay')">Apple Pay</button>
        <button @click="selectPaymentMethod('line-pay')">Line Pay</button>
        <button @click="selectPaymentMethod('cod')">Cash on Delivery</button>
      </div>
      <button @click="closeModal">Cancel</button>
    </div>
    <div v-if="selectedMethod && selectedMethod !== 'cod'" class="confirmation-overlay">
      <div class="confirmation-content">
        <h2>Enter Card Details</h2>
        <div>
          <label for="card-number">Card Number:</label>
          <input type="text" id="card-number" v-model="cardNumber" />
        </div>
        <button @click="confirmSelection">Confirm</button>
        <button @click="cancelSelection">Cancel</button>
      </div>
    </div>
    <div v-if="selectedMethod === 'cod'" class="confirmation-overlay">
      <div class="confirmation-content">
        <h2>Confirm Payment Method</h2>
        <p>You have selected: {{ selectedMethod === 'cod' ? 'Cash on Delivery' : selectedMethod }}</p>
        <button @click="confirmSelection">Confirm</button>
        <button @click="cancelSelection">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutModal',
  props: {
    show: Boolean
  },
  data() {
    return {
      selectedMethod: null,
      cardNumber: ''
    };
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedMethod = method;
    },
    confirmSelection() {
      // Emit the selected method and card number if applicable
      const paymentData = {
        method: this.selectedMethod,
        cardNumber: this.selectedMethod !== 'cod' ? this.cardNumber : null
      };
      this.$emit('confirm', paymentData);
      this.closeModal();
      this.$router.push('/delivery-status');
    },
    cancelSelection() {
      this.selectedMethod = null;
      this.cardNumber = '';
    },
    closeModal() {
      this.$emit('close');
      this.selectedMethod = null;
      this.cardNumber = '';
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content, .confirmation-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
.confirmation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
