<template>
    <div>
        {{ name }} | {{ email }} | {{ phone }}
    </div>
</template>
<script>
export default {
  props: ['name', 'email', 'phone'],
  name: 'EmergencyContact'
};
</script>
<style scoped>

</style>
