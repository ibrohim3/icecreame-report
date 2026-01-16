<template>
  <section></section>
</template>
<script setup>
import { ref } from "vue";
import { addOrder } from "../api/order";

const date = ref("");
const name = ref("");
const quantity = ref();
const unitPrice = ref();
const paidAmount = ref();
const submit = async () => {
  try {
    const res = await addOrder({
      date: date.value,
      name: name.value,
      quantity: quantity.value,
      unitPrice: unitPrice.value,
      paidAmount: paidAmount.value,
    });
  } catch (error) {
    console.log(error.message);
  }
};
</script>
<style></style>
