<template>
  <div class="home">
    <v-container class="mb-6">
      <v-row align="start" no-gutters style="height: 150px">
        <v-col v-for="n in 4" :key="n">
          <v-card class="pa-2 mx-2" max-width="344" variant="outlined">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">OVERLINE</div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>
