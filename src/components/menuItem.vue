<template>
  <!-- 显示内容区 -->
  <!--  -->
  <div
    v-if="menuCollapsed"
    class="menu-item-show"
    :class="{
      'menu-item-show-active': value === item[replaceFields.id] && value,
    }"
    :style="{ paddingLeft }"
    @click.stop="select(item)"
  >
    <!-- 分为两侧 左右侧 -->
    <!-- 左侧 图标和名称 -->
    <div class="menu-item-show-left">
      <!-- 图标 -->
      <div class="menu-item-show-left-icon" v-if="menuIcon">
        <img :src="item.icon" alt="" />
      </div>
      <!-- 名称 -->
      <div
        class="menu-item-show-left-text"
        :class="{
          'menu-item-show-left-text-active': value === item[replaceFields.id] && value,
        }"
      >
        {{item[replaceFields.name] }}
      </div>
    </div>
    <!-- 右侧 展开图标 -->
    <div class="menu-item-show-right">
      <!-- 有子集并且不是顶部导航 -->
      <div v-if="item[replaceFields.children] && item[replaceFields.children].length && isVertical">
        <img :src="unfoldIcon" alt="" v-if="expandKeys.includes(item[replaceFields.key])" />
        <img :src="packUpIcon" alt="" v-else />
      </div>
    </div>
  </div>
  <!-- 收缩 -->
  <div
    v-else
    class="menu-item-show menu-item-show-center"
    :class="{
      'menu-item-show-active': value === item[replaceFields.id] && value,
    }"
    @click.stop="select(item)"
  >
    <div class="menu-item-show-left-icon" v-if="menuIcon">
      <img :src="item.icon" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'menuItem',
  props: {
    // 展开或者折叠
    menuCollapsed: {
      type: Boolean,
      default: false,
    },
    // 是否是垂直
    isVertical: {
      type: Boolean,
      default: false,
    },
    // 每一行数据
    item: {
      type: Object,
      default: () => ({}),
    },
    // 替换字段
    replaceFields: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
    // 菜单图标
    menuIcon: {
      type: Boolean,
      default: false,
    },
    // 展开图标
    unfoldIcon: {
      type: String,
      default: '',
    },
    // 收起图标
    packUpIcon: {
      type: String,
      default: '',
    },
    // 层级
    tier: {
      type: Number,
      default: 1,
    },
    // 缩进
    retract: {
      type: Number,
      default: 0,
    },
    // 展开的id
    expandKeys: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  computed: {
    // 缩进距离
    paddingLeft() {
      return this.tier * this.retract + 'px'
    },
  },
  methods: {
    select(data) {
      this.$emit('select', data)
    },
  },
}
</script>

<style scoped lang="less">
.menu-item {
  &-show {
    height: 42px;
    line-height: 42px;
    cursor: pointer;
    display: flex;
    background: var(--menu-background);
    border-radius: var(--menu-radius);

    &-center {
      .menu-item-show-left-icon {
        margin: auto;
      }
    }

    &-left {
      display: flex;
      width: calc(100% - 20px);
      overflow: hidden;
      &-icon {
        width: 20px;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
      &-text {
        margin-left: 5px;
        font-size: 14px;
        color: var(--text-default-color);
        &-active {
          color: var(--text-checked-color);
        }
      }
    }
    &-right {
      width: 20px;
      display: flex;
      align-items: center;
      img {
        width: 15px;
        height: 15px;
      }
    }
    &-active {
      background: var(--menu-checked-background);
    }
  }
  &-show:hover {
    background: var(--menu-hover-background);
    .menu-item-show-left {
      &-text {
        color: var(--text-hover-color);
      }
    }
  }
}
</style>
