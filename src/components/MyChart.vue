<template>
    <div ref="chartWrapp" class="chart-wrapper position-relative">
        <trading-vue :data="data" :width="width" :height="height" :toolbar="true" :chart-config="{TB_ICON_BRI: 1.9}"></trading-vue>
    </div>
</template>
<script>

import TradingVue from 'trading-vue-js'
import ApiCryptoCompare from '@/api/cryptocompare'

export default {
    name: 'MyChart',
    components: { TradingVue },
    data() {
        return {
            data: {
                ohlcv: []
            },
            width: 800,
            height: 500,
        }
    },
    watch: {
        $route(to, from) {
            this.GetHourlyPairOHLCV(this.$route.params.id)
        }
    },
    methods: {
        GetHourlyPairOHLCV(fsym) {
            ApiCryptoCompare.histohour({
                params: {
                    fsym,
                    tsym: 'USD',
                    limit: 200
                }
            })
            .then((res) => {
                // new TradingVueJs.DataCube(data)
                this.data.ohlcv = res.data.Data.Data.map((el) => {
                    return [
                        el.time, 
                        el.open, 
                        el.high, 
                        el.low, 
                        el.close, 
                        el.volumefrom
                    ]
                })
            })
            .catch((err) => {
                console.log(err)
            })
        },
        onResize(event) {
            this.width = this.$refs.chartWrapp.clientWidth
            this.height = this.$refs.chartWrapp.clientHeight
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
        window.DataCube = this.data.ohlcv

        this.GetHourlyPairOHLCV(this.$route.params.id)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
}

</script>

<style scoped lang="scss">
    .chart-wrapper {
        flex: 1 1 auto;
    }
</style>