<template>
  <div class="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center py-3">
    <div class="row w-100 h-100">
      <div class="col-md-5 col-lg-3">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Toplist by 24H</span>
          <span v-if="currencies.length" class="badge bg-secondary rounded-pill">{{ currencies.length }}</span>
        </h4>
        <ul v-if="currencies.length" class="list-group mb-3">
          <router-link 
            v-for="(currency, i) in currencies" 
            :key="currency.CoinInfo.Internal" 
            tag="li" 
            active-class="active" 
            class="currency-item list-group-item d-flex justify-content-between lh-sm"
            :to="{ name: 'currency', params: {id: currency.CoinInfo.Internal}}"
          >
            <div>
              <h6 class="my-0 d-flex align-items-center">
                <img :src="`${crypto_app_url}/${currency.CoinInfo.ImageUrl}`" :alt="currency.CoinInfo.FullName" style="max-width: 30px">
                <span class="currency-item__name ml-3 text-muted">{{ currency.CoinInfo.FullName }}</span>
              </h6>
              <!-- <small class="text-muted">Brief description</small> -->
            </div>
            <div class="d-flex flex-column">
              <span v-for="(sub_currency, j) in currency.DISPLAY" :key="`${i}-${j}`" class="text-muted">
                {{ sub_currency.PRICE }} 
              </span>
            </div>
          </router-link>
        </ul>
        <figcaption class="blockquote-footer mt-4">
          Test Task by Andrew Beznosko <a href="https://github.com/AndrewBeznosko/my-crypto" target="_blank"><cite title="Source Title">Source Code</cite></a>
        </figcaption>
      </div>
      <div class="col-lg-9 d-flex flex-column">
        <h4 class="d-flex justify-content-between align-items-center mb-3 ml-lg-5 pl-lg-2" style="flex: 0 1 auto;">
          <span class="text-muted">Daily Pair </span>
          <span class="badge bg-secondary rounded-pill"><span class="fw-bold">{{ $route.params.id }} / USD</span></span>
        </h4>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyChart from '@/components/MyChart.vue'
import ApiCryptoCompare from '@/api/cryptocompare'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyChart
  },
  data() {
    return {
      crypto_app_url: process.env.VUE_APP_CRYPTOCOMPARE_URL,
      currencies: {},
    }
  },
  methods: {
    getCurrencies() {
      ApiCryptoCompare.topTotalvolfull({
        params: {
          limit: 15,
          tsym: 'USD'
        }
      })
      .then((res) => {
        if(!(this.$route.params.id)) this.$router.push({ name: 'currency', params: {id: res.data.Data[0].CoinInfo.Name}})
        this.currencies = res.data.Data
      })
      .catch((err) => {
        console.log(err)
      })
    },
  },
  mounted() {
    this.getCurrencies()
  }
}
</script>

<style scoped lang="scss">
  .currency-item {
    cursor: pointer;
    background-color: #2c3945;

    &:hover,
    &.active {
      background-color: #23a776;
      border-color: #23a776;

      .text-muted {
        color: #fff !important;
      }

      .currency-item__name {
        color: #fff;
      }
    }
  }
</style>
