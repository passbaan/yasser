<template>
  <div class="first-step step">
    <div class="row">
      <div class="col-12">
        <div class="home__stage mt-3 step__block">
          <div class="step__block__header">
            <div class="step__block__header__content">
              Maître d’ouvrage : Informations
            </div>
          </div>
          <form @submit.prevent="submitForm">
            <div class="w-100 step__input">
              <!-- Field 1 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Maître d’ouvrage</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.maitredouvrage"
                    :options="maitreDouvrageOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 1 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 2 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1">Nom</label>
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.nom"
                    type="text"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 2 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 3 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1">Prénom</label>
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.prenom"
                    type="text"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 3 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 4 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Adresse</label
                  >
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.adresse"
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
              <!-- Field 5 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 6 Start -->
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
                    :options="maitreDouvrageOptions"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 6 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 7 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Code postale</label
                  >
                </div>
                <div class="col-7">
                  <b-form-input
                    class="step__input__text"
                    v-model="form.codePostale"
                    :min="0"
                    type="number"
                  ></b-form-input>
                </div>
              </div>
              <!-- Field 7 end -->
            </div>
            <div class="w-100 step__input">
              <!-- Field 8 Start -->
              <div class="row">
                <div class="col-5">
                  <label class="step__input__label" for="input-1"
                    >Nationalité</label
                  >
                </div>
                <div class="col-7">
                  <b-form-select
                    class="step__input__select"
                    v-model="form.nationalite"
                    :options="countries"
                  ></b-form-select>
                </div>
              </div>
              <!-- Field 8 end -->
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
                <th class="text-center">Initiale</th>
                <th class="text-center">Identifiant</th>
                <th class="text-center">Dénomination</th>
                <th class="text-center">Adresse</th>
                <th class="text-center">Préfecture/Commune</th>
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
  name: "Step-1",
  data: () => ({
    form: {
      maitredouvrage: "",
      nom: "",
      prenom: "",
      adresse: "",
      prefectureOuProvince: "",
      commune: "",
      codePostale: "",
      nationalite: ""
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
      maitreDouvrageOptions: state => [
        { value: "", text: "Veuillez selectionnez" },
        ...state.app.selectOptions.maitreDouvrage
      ],
      prefectureOuProvinceOptions: state => [
        { value: "", text: "Veuillez selectionnez" },
        ...state.app.selectOptions.prefectureOuProvince
      ],
      countries: state => [
        { value: "", text: "Veuillez selectionnez" },
        ...state.app.selectOptions.countries
      ]
    })
  }
};
</script>

<style lang="scss" scoped></style>
