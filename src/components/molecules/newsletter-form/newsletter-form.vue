<script setup lang="ts">
const props = defineProps({
  theme: {
    type: String,
    default: 'primary',
    validator: (value:string) => ['primary', 'secondary', ].includes(value)
  }
})

// User email
const email = ref('');

// Status info
const submitted = ref(false)
const submitting = ref(false)
const hasError = ref(false)
const statusMsg = ref('')

// Change state based on server response
const handleServerResponse = (ok:boolean, msg:string) => {
  if (ok) {
    email.value = ''
    submitted.value = true
    submitting.value = false
    hasError.value = false
    statusMsg.value = msg
  } else {
    hasError.value = true
    statusMsg.value = msg
  }
}

// Handle form input
const handleOnChange = (e:{target:any}) => {
  email.value = e.target.value
  submitted.value = false
  submitting.value = false
  hasError.value = false
  statusMsg.value = ''
}

// Handle form submit
const handleOnSubmit = () => {
    submitting.value = true

    // Send data to Formspree server
    useFetch('https://formspree.io/f/mlekgjdk', {
      method: 'POST',
      body: { email: email.value }
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, you\'re all signed-up!')
      })
      .catch((error) => {
        handleServerResponse(false, error?.response?.data?.error);
      });
  };

</script>

<template>
  <c-section :is-container="false">
    <h3>Sign up for the newsletter</h3>
    <p>For updates on new releases, live streams, and performances.</p>
    <form @submit.prevent="handleOnSubmit">
      <label for="email">Your email address</label>
      <input 
        type="email"
        name="email"
        placeholder="example@example.com"
        id="email"
        required
        :value="email"
        :disabled="submitting"
        @change="handleOnChange"
      />
      <atoms-c-button 
        type="submit" 
        :class="theme"
        :disabled="submitting"
        >
        {{ !submitting
            ? !submitted
              ? 'Subscribe'
              : 'Submitted'
            : 'Submitting...' }}
      </atoms-c-button>
    </form>
    
    <p v-if="hasError" class="error">Error: {{ statusMsg }}</p>
    <p v-else-if="statusMsg" class="success">{{ statusMsg }}</p>

    <p><small><sup>*</sup>We promise not to spam you</small></p>
  </c-section>
</template>

<style scoped>
h3 {
  color: var(--contrast);
  font-weight: 300;
  margin-bottom: 0.5rem;
}

input, 
[type="submit"],
form {
  max-width: 99%;
}

</style>
