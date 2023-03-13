<template>
  <div class="convertor">
    <label class="convertor__label">
      <span class="label__header">Enter currency to convert</span>
      <CurrencyInput @generateConvertObj="getDataToConvert" />
    </label>

    <div class="convertor__info">
      <div class="info__from">
        <p class="value">{{ outputData.fromValue }}</p>
        <p class="currency">{{ outputData.from }}</p>
      </div>
      <p class="convert__equal">=</p>
      <div class="info__to">
        <p class="currency">{{ outputData.convertedValue }}</p>
        <p class="value">{{ outputData.to }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import currencyApi from "@/services/currencyApi.js";
import { ref, computed } from "vue";
import CurrencyInput from "@/components/CurrencyInput.vue";


export default {
  name: "ConvertView",
  components: {
    CurrencyInput
  },
  setup() {
    const convertRates = ref({});
    const getCurrenciesConvertRates = async (currency) => {
      const response = await currencyApi.getCurrenciesConvertRates(currency);
      const data = await response.json();
      convertRates.value = data.rates;
    };

    const dataToConvert = ref(null);

    const convertedAmount = ref(0);
    const convertCurrency = () => {
      convertedAmount.value = (dataToConvert.value.value * convertRates.value[dataToConvert.value.to.toUpperCase()]).toFixed(2);
    };
    const getDataToConvert = async (val) => {
      dataToConvert.value = val;
      await getCurrenciesConvertRates(dataToConvert.value.from);
      convertCurrency();
    };

    const outputData = computed(() => {
      return {
        from: dataToConvert.value?.from.toUpperCase() || "CUR",
        to: dataToConvert.value?.to.toUpperCase() || "CUR",
        fromValue: dataToConvert.value?.value || 0,
        convertedValue: convertedAmount.value || 0
      };
    });

    return {
      outputData,
      getDataToConvert
    };
  }

};
</script>

<style lang="scss" scoped>
.convertor {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  &__label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .label__header {
      font-weight: 600;
      margin-bottom: 20px;
    }
  }

  &__info {
    text-align: center;
    margin-top: 20px;

    .info__from, .info__to {
      display: flex;
      column-gap: 5px;
      justify-content: center;
    }

    p {
      font-weight: 600;
      font-size: 22px;
    }
  }

}
</style>