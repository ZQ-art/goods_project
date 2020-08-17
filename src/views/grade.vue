<template>
  <div id="grade">
    <GradeNav />
    <GradeSwipe />
    <GradeGroup />
  </div>
</template>

<script>
import GradeNav from "../components/Grade/gradeNav";
import GradeSwipe from "../components/Grade/gradeSwipe";
import GradeGroup from "../components/Grade/gradeGroup";

export default {
  data() {
    return {};
  },
  name: "grade",
  components: {
    GradeNav,
    GradeSwipe,
    GradeGroup,
  },
};
</script>

<style scoped>
</style>
