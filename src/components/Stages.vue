<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="stages">
          <template v-for="stage in stages">
            <div
              :class="
                `stages__stage${
                  stage.stage === active ? ' stages__stage--active' : ''
                }`
              "
              :key="stage.stage"
            >
              {{ stage.stage }} {{ stage.text }}
              <template v-if="stage.stage < 5">
                <div
                  :class="
                    `stages__stage__arrow${
                      stage.stage + 1 === active
                        ? ' stages__stage__arrow--active-before'
                        : ''
                    }${
                      stage.stage === active
                        ? ' stages__stage__arrow--active'
                        : ''
                    }`
                  "
                ></div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stages",
  props: {
    active: Number
  },
  data: () => ({
    stages: [
      {
        stage: 1,
        text: "Maître d’ouvrage"
      },
      {
        stage: 2,
        text: "PROJET"
      },
      {
        stage: 3,
        text: "Support Foncier"
      },
      {
        stage: 4,
        text: "Documents à joindre"
      },
      {
        stage: 5,
        text: "Cotisations"
      }
    ]
  })
};
</script>
