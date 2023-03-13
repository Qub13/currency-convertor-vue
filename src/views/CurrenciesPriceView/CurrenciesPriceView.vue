<template>
  <div class="courses-view">

    <div class="base-currency">
      <p class="base-currency__header">Base currency: </p>
      <AntSelect @change="getCurrenciesInfo" class="base-currency__select" v-model:value="defaultCurrency"
                 :options="defaultCurrencyOptions"
      />
    </div>
    <AntTable class="currency-course-table"
              :align="'center'"
              :columns="currencyTableColumns"
              :dataSource="coursesData.data"
              :pagination="false"
              :scroll="{y: 200}"
              :showSorterTooltip="false"
              row-key="currency">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'saved'">
          <FavouriteCheckbox @click="addToFavouriteList(record.currency)"
                             @changeCheckboxValue="(e) => record.saved = e"
                             :checkboxStatusProp="record.saved" />
        </template>
      </template>
    </AntTable>
  </div>
</template>

<script>
import currencyApi from "@/services/currencyApi.js";
import { ref, computed } from "vue";
import FavouriteCheckbox from "@/components/FavouriteCheckbox.vue";
import { Select, Table } from "ant-design-vue";
import { currencyTableColumns } from "@/views/CurrenciesPriceView/config.table.js";

export default {
  name: "CurrenciesPriceView",
  components: {
    FavouriteCheckbox,
    AntSelect: Select,
    AntTable: Table
  },
  setup() {

    const defaultCurrency = ref("USD");
    const defaultCurrencyOptions = ref([]);

    const coursesData = ref({ data: [] });

    const favouriteList = ref([]);

    const addToFavouriteList = (curr) => {
      favouriteList.value.push(curr);
      favouriteList.value = [...new Set(favouriteList.value)];
    };
    const getCurrenciesInfo = async () => {
      coursesData.value.data = [];
      defaultCurrencyOptions.value = [];
      const response = await currencyApi.getCurrenciesConvertRates(defaultCurrency.value);
      const data = await response.json();
      for (const currency in data.rates) {
        coursesData.value.data.push({
          currency: currency,
          price: (data.rates[currency] * 1).toFixed(2),
          saved: favouriteList.value.includes(currency.toUpperCase())
        });
        defaultCurrencyOptions.value.push({ value: currency.toUpperCase(), label: currency.toUpperCase() });
      }
    };
    getCurrenciesInfo();

    return {
      coursesData,
      defaultCurrency,
      defaultCurrencyOptions,
      currencyTableColumns,
      getCurrenciesInfo,
      favouriteList,
      addToFavouriteList
    };
  }
};
</script>

<style lang="scss">

.base-currency {
  .ant-select {
    .ant-select-selector {
      border-color: $accent-color;
    }
  }

  .ant-select-arrow {
    color: $accent-color;
  }

  &__select {
    width: 140px;
  }
}

.currency-course-table {
  width: 90%;

  .ant-table-cell {
    text-align: center;
  }
}

.courses-view {

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .base-currency {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    column-gap: 15px;

    margin-bottom: 20px;
  }
}

.currency-course-table {
  height: 300px;
}
</style>