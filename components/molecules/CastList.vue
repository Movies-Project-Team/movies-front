<script setup lang="ts">
import CastItem from '../atoms/CastItem.vue';
import Flex from '../atoms/Flex.vue';

</script>

<template>
  <Flex gap="14px" wrap="wrap" justify="flex-start" align="center">
    <CastItem v-for="(cast, index) in 10" :key="index"/>
  </Flex>
</template>

<style scoped></style>
