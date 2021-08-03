<template>
  <div class="fourth-step step">
    <div class="row">
      <div class="col-12">
        <p style="color:red;">
          TAILLE MAXIMALE PAR FICHIER = 15MO, Evitez le téléchargement des
          fichiers lourds (images hautes résolution, couleurs...) Utilisez, le
          cas échéant, le site
          <a href="www.ilovepdf.com" target="_blank">www.ilovepdf.com</a> pour
          optimiser les fichiers PDF
        </p>
      </div>
      <div class="col-12">
        <vue-dropzone
          ref="myVueDropzone"
          :useCustomSlot="true"
          id="dropzone"
          @vdropzone-upload-progress="uploadProgress"
          :options="dropzoneOptions"
          @vdropzone-file-added="fileAdded"
          @vdropzone-sending-multiple="sendingFiles"
          @vdropzone-success-multiple="success"
        ></vue-dropzone>
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
    </div>
    <div class="row mt-4">
      <div class="col-6 text-left">
        <a
          href="javascript:void(0)"
          @click="prevStep"
          class="button button--blue"
          >Précédent</a
        >
      </div>
      <div class="col-6 text-right">
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
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  data: () => ({
    dropzoneOptions: {
      url: `the server url, where you want your filesto be sent`,
      maxFilesize: 42,
      dictDefaultMessage: "Upload Files Here xD",
      includeStyling: false,
      previewsContainer: false,
      thumbnailWidth: 250,
      thumbnailHeight: 140,
      uploadMultiple: true,
      parallelUploads: 20
    }
  }),
  components: {
    vueDropzone: vue2Dropzone
  },
  name: "Step-4",
  methods: {
    paramName() {
      return "file[]";
    },
    uploadProgress() {
      console.log("uploadProgress | test");
    },

    fileAdded() {
      console.log("fileAdded | test");
    },

    sendingFiles() {
      console.log("sendingFiles | test");
    },

    success() {
      console.log("success | test");
    },

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
