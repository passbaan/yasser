<template>
  <div class="first-step step">
    <div class="row">
      <div class="col-12">
        <div class="home__stage mt-3 step__block">
          <div class="step__block__header">
            <div class="step__block__header__content">
              Les Régimes fonciers
            </div>
          </div>
          <form @submit.prevent="submitForm">
            <div class="w-100 step__input">
              <!-- Field 1 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Régime foncier
                  </label>
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.regimeFoncier"
                    :options="regimeFoncierOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 1 end -->
            </div>

            <div class="w-100 step__input">
              <!-- Field 5 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Statut foncier</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.statutFoncier"
                    :options="statutFoncierOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 5 end -->
            </div>
            <div class="w-100 text-right">
              <button type="submit" class="button button--green">
                Enregistrer et ajouter un autre Maître d'ouvrage
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12">
        <div class="home__stage step__block mt-3">
          <div class="step__block__header">
            <div class="step__block__header__content">
              Maître d’ouvrage : Informations
            </div>
          </div>
          <table class="text-center table table-bordered">
            <thead>
              <tr style="background-color: #d58512;color: white;">
                <th class="text-center">N°</th>
                <th class="text-center">Régime foncier</th>
                <th class="text-center">Support foncier</th>
                <th class="text-center">Statut foncier</th>
                <th class="text-center" style="width:10%">Supprimer</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div class="col-12 text-right mt-4">
        <a
          href="javascript:void(0)"
          @click="nextStep"
          class="button button--blue"
          >suivant</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Step-3",
  data: () => ({
    form: {
      regimeFoncier: "",
    
      statutFoncier: ""
    }
  }),

  methods: {
    nextStep() {
      this.$emit("go-next");
    },
    submitForm() {
      this.nextStep();
    }
  },
  computed: {
    ...mapState({
      statutFoncierOptions: state => [
        { value: "", text: "Veuillez Statut foncier" },
        ...state.app.thirdStepOptions.statutFoncier
      ],
      regimeFoncierOptions: state => [
        { value: "", text: "Veuillez sélectionnez le régime foncier" },
        ...state.app.thirdStepOptions.regimeFoncier
      ]
    })
  }
};
</script>

<style lang="scss" scoped></style>
