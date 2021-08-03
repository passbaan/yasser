<template>
  <div class="last-step step">
    <div class="row">
      <div class="col-6">
        <table class="table table-borderless">
          <tr>
            <td>Cotisation Complémentaire Obligatoire</td>
            <td>
              <b-form-input
                class="step__input__text"
                v-model="form.cotisationComplementaireObligatoire"
                type="number"
                step="0.01"
              ></b-form-input>
            </td>
          </tr>
          <tr>
            <td>Cotisation Fond de solidarité</td>
            <td>
              <b-form-input
                class="step__input__text"
                v-model="form.cotisationFondDeSolidarite"
                type="number"
                step="0.01"
              ></b-form-input>
            </td>
          </tr>
          <tr class="border-top">
            <td>Total cotisations</td>
            <td>
              <b-form-input
                class="step__input__text"
                v-model="form.totalCotisations"
                type="number"
                step="0.01"
              ></b-form-input>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-6 d-flex align-items-center">
        <b-form-radio-group
          id="radio-slots"
          v-model="form.choice"
          :options="choiceOptions"
        >
        </b-form-radio-group>
      </div>
      <div class="col-12">
        <p>
          <strong
            >(*) Redistributions suspendues depuis 01/09/2019:Décision du
            conseil N°:81 du 16/10/2019</strong
          >
        </p>
      </div>
    </div>
    <div class="row border-bottom">
      <div class="col-12 text-left">
        <a
          href="javascript:void(0)"
          @click="prevStep"
          class="button button--blue"
          >Précédent</a
        >
      </div>
    </div>
    <div class="row border-top">
      <div class="col-12 text-right">
        <a
          href="javascript:void(0)"
          @click="prevStep"
          class="button button--green"
          >Modifier</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step-5",
  data: () => ({
    form: {
      cotisationComplementaireObligatoire: 0,
      cotisationFondDeSolidarite: 0,
      totalCotisations: 0,
      choice: 1
    },
    choiceOptions: [
      { value: 1, text: "Je veux cotiser au Fond de Solidarité" },
      { value: 2, text: "Je ne veux pas cotiser au Fond de Solidarité" }
    ]
  }),
  methods: {
    nextStep() {
      this.$emit("go-next");
    },
    prevStep() {
      this.$emit("go-back");
    }
  }
};
</script>

<style lang="scss" scoped></style>
