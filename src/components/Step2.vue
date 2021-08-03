<template>
  <div class="first-step step">
    <div class="row">
      <form @submit.prevent="submitForm" class="w-100 m-0 p-0">
        <div class="col-12">
          <div class="home__stage mt-3 step__block">
            <div class="step__block__header">
              <div class="step__block__header__content">
                Details du Projet
              </div>
            </div>
            <div class="w-100 step__input">
              <!-- Field 1 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Catégorie de projet*</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.maitredouvrage"
                    :options="categorieDeProjetOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 1 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 2 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Le type de déclaration</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.LeTypeDeDeclaration"
                    :options="LeTypeDeDeclarationOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 2 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 3 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Déclaration</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.declaration"
                    :options="declarationOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 3 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 4 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Surface plancher couverts / Aménageable en m²</label
                  >
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.surfacePlancherCouverts"
                    type="text"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 4 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 5 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Description projet</label
                  >
                </div>
                <div class="col-7">
                  <b-textarea
                    class="step__input__textarea"
                    rows="10"
                    v-model="form.descriptionProjet"
                  ></b-textarea>
                </div>
              </div>
              <!-- Field 5 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 6 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >attestation</label
                  >
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.attestation"
                    type="text"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 6 end -->
            </div>
          </div>
        </div>
        <!-- HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE -->
        <div class="col-12">
          <div class="home__stage mt-3 step__block">
            <div class="step__block__header">
              <div class="step__block__header__content">
                localisation du projet
              </div>
            </div>
            <div class="w-100 step__input">
              <!-- Field 1 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Préfecture ou Province</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.prefectureOuProvince"
                    :options="prefectureOuProvinceOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 1 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 2 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Commune</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.commune"
                    :options="communeOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 2 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 3 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Arrondissement</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.arrondissement"
                    :options="arrondissementOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 3 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 4 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Adresse du projet</label
                  >
                </div>
                <div class="col-7">
                  <b-textarea
                    class="step__input__textarea"
                    rows="10"
                    v-model="form.adresseDuProjet"
                  ></b-textarea>
                </div>
              </div>
              <!-- Field 4 end -->
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="home__stage mt-3 step__block">
            <div class="step__block__header">
              <div class="step__block__header__content">
                Centroïde Lambert du projet
              </div>
            </div>
            <div class="w-100 step__input">
              <!-- Field 1 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1">X</label>
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.centroideLambertDuProjetX"
                    type="number"
                    step="0.01"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 1 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 2 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1">Y</label>
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.centroideLambertDuProjetY"
                    type="number"
                    step="0.01"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 2 end -->
            </div>
          </div>
        </div>
      </form>
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
  name: "Step-2",
  data: () => ({
    form: {
      categorieDeProjet: 0,
      LeTypeDeDeclaration: "",
      declaration: "",
      surfacePlancherCouverts: "",
      descriptionProjet: "",
      attestation: "",
      prefectureOuProvince: "0",
      commune: "",
      arrondissement: "",
      adresseDuProjet: ""
    },
    LeTypeDeDeclarationOptions: [
      {
        value: "",
        text: "Sélectionnez le type de projet"
      }
    ],
    communeOptions: [
      {
        value: "",
        text: "Sélectionnez commune"
      }
    ],
    arrondissementOptions: [
      {
        value: "",
        text: "Sélectionnez Arrondissement"
      }
    ],
    declarationOptions: [
      {
        value: "",
        text: "Veuillez sélectionner projet"
      }
    ]
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
      // maitreDouvrageOptions: state => [
      //   { value: "", text: "Veuillez selectionnez" },
      //   ...state.app.selectOptions.maitreDouvrage
      // ],
      // prefectureOuProvinceOptions: state => [
      //   { value: "", text: "Veuillez selectionnez" },
      //   ...state.app.selectOptions.prefectureOuProvince
      // ],
      // countries: state => [
      //   { value: "", text: "Veuillez selectionnez" },
      //   ...state.app.selectOptions.countries
      // ],
      categorieDeProjetOptions: state =>
        state.app.secondStepOptions.categorieDeProjet,
      prefectureOuProvinceOptions: state =>
        state.app.secondStepOptions.prefectureOuProvince
    })
  }
};
</script>
<style lang="scss" scoped></style>
