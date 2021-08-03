<template>
  <div class="home">
    <stages :active="step" />
    <div class="container">
      <div class="row">
        <div class="col-12 m-3 home__stage p-4">
          <template v-if="step === 1">
            <first-step @go-next="goNext" />
          </template>
          <template v-else-if="step === 2">
            <second-step @go-next="goNext" @go-back="goBack" />
          </template>
          <template v-else-if="step === 3">
            <third-step @go-next="goNext" @go-back="goBack" />
          </template>
          <template v-else-if="step === 4">
            <fourth-step @go-next="goNext" @go-back="goBack" />
          </template>
          <template v-else-if="step === 5">
            <last-step @go-back="goBack" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "@/components/Step1.vue";
import Step2 from "@/components/Step2.vue";
import Step3 from "@/components/Step3.vue";
import Step4 from "@/components/Step4.vue";
import Step5 from "@/components/Step5.vue";
import Stages from "@/components/Stages.vue";

export default {
  data: () => ({
    step: 1
  }),
  name: "Home",
  components: {
    "first-step": Step1,
    "second-step": Step2,
    "third-step": Step3,
    "fourth-step": Step4,
    "last-step": Step5,
    stages: Stages
  },
  methods: {
    goNext() {
      this.step += 1;
    },
    goBack() {
      this.step -= 1;
    }
  }
};
</script>
