<template>
    <div
      v-if="show"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 transition-opacity"
          aria-hidden="true"
          @click="close"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
          class="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        >
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                Add {{ accountType }} Account
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500 dark:text-gray-300">
                  Add your {{ accountType }} account details here.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              @click="save"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      accountType: {
        type: String,
        required: true,
      },
      saveFunction: {
        type: Function,
        required: true,
      },
    },
    methods: {
      close() {
        this.$emit("close");
      },
      save() {
        console.log(this.accountType)
        this.saveFunction(this.accountType);
        this.close();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  