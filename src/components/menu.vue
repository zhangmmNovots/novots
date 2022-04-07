<template>
  <div class="menu" :class="{ 'menu-pack': !menuCollapsed }">
    <!-- 树每一项 -->
    <div
      class="menu-item"
      v-for="item in menuData"
      :key="item[replaceFields.key]"
      :style="menuItemStyle"
    >
      <!-- 子菜单弹出 -->
      <div>
        <a-popover
          :placement="placement"
          trigger="click"
          :getPopupContainer="(trigger) => trigger.parentNode"
          destroyTooltipOnHide
          v-if="menuPopover && item[replaceFields.children] && item[replaceFields.children].length"
        >
          <template slot="content">
            <!-- 子数据渲染 -->
            <div class="menu-item-children">
              <l-menu
                :menuData="item[replaceFields.children]"
                :retract="retract"
                :tier="tier"
                :value="value"
                @select="selectChange"
                :unfoldIcon="unfoldIcon"
                :packUpIcon="packUpIcon"
                :menuIcon="menuIcon"
                :menuItemStyle="menuItemStyle"
                :menuPopover="menuPopover"
                :showCurrentMenu="showCurrentMenu"
                :replaceFields="replaceFields"
              />
            </div>
          </template>
          <!-- 显示内容区 -->
          <!--  -->
          <menu-item
            :item="item"
            :unfoldIcon="unfoldIcon"
            :packUpIcon="packUpIcon"
            @select="select"
            :tier="tier"
            :value="value"
            :replaceFields="replaceFields"
            :menuCollapsed="menuCollapsed"
            :menuIcon="menuIcon"
            :retract="retract"
            :isVertical="isVertical"
            :expandKeys="expandKeys"
          />
        </a-popover>

        <menu-item
          v-else
          :item="item"
          :unfoldIcon="unfoldIcon"
          :packUpIcon="packUpIcon"
          @select="select"
          :tier="tier"
          :value="value"
          :replaceFields="replaceFields"
          :menuCollapsed="menuCollapsed"
          :menuIcon="menuIcon"
          :retract="retract"
          :isVertical="isVertical"
          :expandKeys="expandKeys"
        />
      </div>
      <!-- 子数据渲染 -->
      <div
        class="menu-item-children"
        v-if="expandKeys.includes(item[replaceFields.key]) && !menuPopover"
      >
        <l-menu
          :menuData="item[replaceFields.children]"
          :retract="retract"
          :tier="tier + 1"
          :value="value"
          @select="selectChange"
          :unfoldIcon="unfoldIcon"
          :packUpIcon="packUpIcon"
          :menuIcon="menuIcon"
          :menuItemStyle="menuItemStyle"
          :menuPopover="menuPopover"
          :showCurrentMenu="showCurrentMenu"
          :replaceFields="replaceFields"
          :expandKeys="expandKeys"
        />
      </div>
    </div>

    <!-- 菜单收缩图标 -->
    <div class="menu-collapse" v-if="collapsed">
      <svg class="icon" aria-hidden="true" @click="switchCollapse">
        <use href="#iconshiti2" />
      </svg>
    </div>
  </div>
</template>
<script>
import menuItem from './menuItem'

export default {
  name: 'lMenu',
  props: {
    // 树数据
    menuData: {
      type: Array,
      default: () => [],
    },
    // 替换key
    replaceFields: {
      type: Object,
      default: () => ({
        children: 'children',
        id: 'uuid',
        name: 'name',
        key: 'uuid',
      }),
    },
    value: {
      type: String,
      default: '',
    },
    // 缩进
    retract: {
      type: Number,
      default: 15,
    },
    // 层级
    tier: {
      type: Number,
      default: 1,
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
    // 菜单样式
    menuItemStyle: {
      type: Object,
      default: () => ({}),
    },
    // 菜单收缩
    collapsed: {
      type: Boolean,
      default: false,
    },
    // 菜单图标
    menuIcon: {
      type: Boolean,
      default: false,
    },
    // 子菜单弹出
    menuPopover: {
      type: Boolean,
      default: false,
    },
    // 只展开当前导航
    showCurrentMenu: {
      type: Boolean,
      default: false,
    },
    // 展现形式
    // vertical 垂直
    // horziontal 水平
    vertical: {
      type: String,
      default: 'vertical',
    },
  },
  data() {
    return {
      expandKeys: [],
      // 导航收缩
      menuCollapsed: true,
    }
  },
  components: { menuItem },
  computed: {
    // 缩进距离
    paddingLeft() {
      return this.tier * this.retract + 'px'
    },
    // 是否 垂直类型
    isVertical() {
      return this.vertical === 'vertical'
    },
    // 垂直导航右边弹窗
    // 顶部导航底部弹窗
    placement() {
      return this.isVertical ? 'right' : 'bottom'
    },
  },
  methods: {
    switchCollapse() {
      this.menuCollapsed = !this.menuCollapsed
    },
    /* 展开或者关闭分组 */
    expandChange(data) {
      // 如果只展开当前导航的话
      if (!this.showCurrentMenu) {
        // 多个
        if (this.expandKeys.includes(data.uuid)) {
          this.expandKeys = this.expandKeys.filter((id) => id !== data.uuid)
        } else {
          this.expandKeys.push(data.uuid)
        }
      } else {
        // 展开的数组中只有一个
        this.expandKeys = this.expandKeys.includes(data.uuid) ? [] : [data.uuid]
      }
    },
    /* 点击菜单每一项
     * 如果有子集的话就是展开
     */
    select(data) {
      if (data.children.length) {
        this.expandChange(data)
      } else this.$emit('select', data)
    },
    selectChange(data) {
      this.select(data)
    },
  },
}
</script>
<style scoped lang="less">
.menu {
  position: relative;
  &-item {
    flex-shrink: 0;

    // 重置样式
    /deep/ .ant-popover {
      min-width: 200px;
      .ant-popover-content {
        border: none;
      }
      .ant-popover-inner {
        background: var(--sub-menu-background);
        .ant-popover-inner-content {
          padding: 0;
        }
      }
    }

    &-children {
      transition: all 1s;
      background: var(--sub-menu-background);
    }
  }

  &-pack {
    width: 80px !important;
  }
  &-collapse {
    width: 14px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    .icon {
      width: 100%;
      height: 14px;
    }
  }
}
</style>
