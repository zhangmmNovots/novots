
<template>
  <div class="validate">
    <div :class="validateClassName">
      <slot></slot>
    </div>
    <div class="rule" v-if="validateClassName">
      {{ 
        errorMessage
      }} 
    </div>
  </div>
</template>
<script>
import validator from "validator";

export default {
  name: "validate",
  props: {
    value: {},
    rules: {
      type: Array,
      default: () => [],
    },
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 校验类名 是否正确
      validateClassName: "",
      // 错误提示
      errorMessage: "",
    };
  },
  watch: {
    // 监听值变化 触发校验规则
    value(newValue) {
      this.validator(newValue);
    },
  },
  methods: {
    tiggerValidate(){
      return this.validator(this.value)
    },
    /* 校验哪些规则
     * @param {String} value 当前输入值
     */
    validator(value) {
      // 所有的校验规则执行
      const result = this.rules.find((item) => {
        return item.checked ? this.validatorCheck(item, value) : false;
      });
      if (result) {
        // 说明验证不通过
        this.errorMessage = result.message;
        this.validateClassName = "content";
        return false
      } else {
        // 验证通过
        this.message = "";
        this.validateClassName = "";
        return true;
      }
    },
    /* 验证每一项规则
     * @param {Array} rule 校验规则
     * @param {String} value 当前输入值
     */
    validatorCheck(rule, value) {
      let isCheck = false;
      switch (rule.type) {
        case "required":
          // 必填验证
          isCheck = validator.isEmpty(value);
          break;
        case "limitNumbers":
          // 数值验证
          isCheck = !validator.isFloat(value.toString(), { min: rule.min, max: rule.max });
          break;
        case "wordLimit":
          // 数字范围验证
          isCheck = !validator.isLength(value, {
            min: rule.min,
            max: rule.max,
          });
          break;
        case "limitInputType":
          // 正则验证
          isCheck = !eval(rule.pattern).test(value);
          break;
      }
      return isCheck;
    },
  },
};
</script>
<style scoped lang="less">
.content {
  > * {
    border: 1px solid #e25246 !important ;
    box-shadow: 0 0 0 2px rgba(226, 82, 70, 0.3) !important;
  }
}
.rule {
  color: #e25246;
  transition: color 0.3s cubic-bezier(0.4, 0, 1, 1);
}
</style>
