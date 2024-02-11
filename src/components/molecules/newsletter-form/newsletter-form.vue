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
const submitting = ref(false)
const hasError = ref(false)
const statusMsg = ref('')
</script>

<template>
  <c-section :is-container="false">
    <h3>Sign up for the newsletter</h3>
    <p>For updates on new releases, live streams, and performances.</p>
    <form  action="https://dev.us9.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value="257a1e0bac87544e5ef92cb4d">
      <input type="hidden" name="id" value="178070e696">

      <!-- people should not fill these in and expect good things -->
      <div class="field-shift" aria-label="Please leave the following three fields empty" aria-hidden="true">
        <label for="b_name">Name: </label>
        <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name">

        <label for="b_email">Email: </label>
        <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email">

        <label for="b_comment">Comment: </label>
        <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
      </div>
      <label for="MERGE0">Your email address</label>
      <input 
        type="email"
        name="MERGE0"
        placeholder="example@example.com"
        id="MERGE0"
        required
        size="25"
        autocapitalize="none"
        autocorrect="off"
        :value="email"
      />
      <atoms-c-button 
        type="submit"
        name="submit"
        :class="theme"
        >
        Subscribe
      </atoms-c-button>
      <input type="hidden" name="ht" value="0499fc9703a59a43dd4a6eed43a71658b464064d:MTcwNzYyMjY3OS40NjQ5">
      <input type="hidden" name="mc_signupsource" value="hosted">
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

.field-shift {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

</style>
