<template>
  <v-container fill-height>
    <v-row justify="center" align="center" smAndUp:margin-t-left>
      <v-col cols="12" md="3" class="text-center">
        <img
          src="@/assets/space-2.svg"
          alt="Not Found"
          class="content-center"
        />
      </v-col>
      <v-col cols="12" md="3" class="xsOnly:text-center smAndUp:text-left">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p class="mb-3">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <v-btn color="teal-accent-4 white--text align">HOME</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
