<template>
  <input v-model.lazy="inputValue" class="input" :class="{'input-error': inputErrors.length}"
         placeholder="Example: 15 usd in uah"
         type="text">
  <span class="error-message" v-if="inputErrors.length">{{ inputErrors[0] }}</span>
  <button @click="convertData" class="convert-btn">
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0051 21.9843C17.5165 21.9843 21.9843 17.5165 21.9843 12.0051C21.9843 6.49372 17.5165 2.02588 12.0051 2.02588C6.49372 2.02588 2.02588 6.49372 2.02588 12.0051C2.02588 17.5165 6.49372 21.9843 12.0051 21.9843Z"
        stroke="#05aae3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.13721 4.02173L14.3002 12.2047L14.3202 7.66414" stroke="#05aae3" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.8629 19.9784L9.69989 11.8054L9.67993 16.336" stroke="#05aae3" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { string, addMethod } from "yup";

export default {
  name: "CurrencyInput",
  emits: ["generateConvertObj", "generateInputString"],
  setup(props, { emit }) {
    addMethod(string, "currencyValidate", function format(message = "Incorrect input. Example of correct input: 15 usd in uah.") {
      return this.test("three-letter-word", message, function(value) {
        const regex = /^(?:\d+(\.\d+)?\s\w{3}\sin\s\w{3}|)$/;
        return regex.test(value.trim());
      });
    });

    const { validate } = useForm({
      initialValues: {
        inputField: ""
      },
      validationSchema: {
        inputField: string().currencyValidate()
      }
    });

    const { value: inputValue, errors: inputErrors } =
      useField("inputField");

    const getConvertedCurrency = (enteredString) => {
      const valuesArr = enteredString.split(" ").filter(item => {
        return item.toLowerCase() !== "in";
      });
      return {

        value: parseFloat(valuesArr[0]).toFixed(2),
        from: valuesArr[1],
        to: valuesArr[2]
      };
    };

    const getInputString = async () => {
      const { valid } = await validate();
      if (valid && inputValue.value !== "") {
        emit("generateConvertObj", getConvertedCurrency(inputValue.value));
        return true;
      }
    };
    const convertData = () => {
      getInputString();
    };

    return {
      inputValue,
      inputErrors,
      convertData
    };
  }
};
</script>

<style scoped lang="scss">
.input {
  width: 250px;
  padding: 7px;

  border: 1px solid $accent-color;
  border-radius: 5px;

  font-weight: 600;

  &:focus {
    border: 1px solid $accent-color-lighter;
    outline: none;
  }

}

.input-error {
  border-color: #ff0000 !important;
}

.error-message {
  color: #ff0000;
  font-weight: 700;
}

.convert-btn {
  display: flex;

  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: transparent;

  border: none;

  margin-top: 10px;

  svg {
    max-height: 100%;
  }
}

</style>