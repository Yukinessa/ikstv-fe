<template>
  <b-container>
    <b-row>
      <b-col>
        <router-link :to="'/list-lost/mobile'">
          <img
            src="@/assets/info-barang-hilang.png"
            class="shadow"
            style="border-radius: 5px; width: 100%; height: 100%; margin-left: .5rem"
          />
        </router-link>
      </b-col>
      <b-col>
        <router-link :to="'/loker'">
          <img
            src="@/assets/info-loker.png"
            class="shadow"
            style="border-radius: 5px; width: 100%; height: auto; margin-left: -.5rem"
          />
        </router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-link :to="'list-number/mobile'">
          <img
            src="@/assets/info-urgent-number.png"
            class="shadow"
            style="border-radius: 5px; width: 100%; height: auto; margin-left: .5rem"
          />
        </router-link>
      </b-col>
      <b-col>
        <router-link :to="'list-sosial/mobile'">
          <img
            src="@/assets/info-sosial.png"
            class="shadow"
            style="border-radius: 5px; width: 100%; height: auto;margin-left: -.5rem"
          />
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
