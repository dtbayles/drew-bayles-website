<template>
  <b-card bg-variant="default" text-variant="dark" :header="title" class="text-left" style="width: 20rem;">
    <b-card-text>
      <b-card-text>{{ description }}</b-card-text>
      <span v-for="badge in badges" :key="badge" class="badge badge-success">{{ badge }}</span>
    </b-card-text>
    <template #footer>
      <small class="text-muted">Completed {{ completedDate }}</small>
    </template>
  </b-card>


<!--  <div class="card" style="width: 20rem;">-->
<!--    <div class="card-body">-->
<!--      <h5 class="card-title">{{ title }}</h5>-->
<!--      <p class="card-text">{{ description }}</p>-->
<!--      <span v-for="badge in badges" :key="badge" class="badge badge-success">{{ badge }}</span>-->
<!--    </div>-->
<!--    <div class="card-footer">-->
<!--      <small class="text-muted">Completed {{ completedDate }}</small>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "Bootstrap-Card",
  props: {
    title: String,
    description: String,
    badges: Array,
    completedDate: String,
  }
}
</script>

<style scoped>

</style>