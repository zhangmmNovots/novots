<template>
  <a-menu :mode="mode" :selectedKeys="currentPage">
    <template v-for="item in subMenuData">
      <a-menu-item
        v-if="!item.subWlosGuide.length"
        :key="item.pageUuid || Math.random() + '_default_menu'"
        @click="toPath(item)"
      >
        {{ item.guideName }}
      </a-menu-item>
      <a-sub-menu v-else :key="item.uuid">
        <span slot="title">{{ item.guideName }}</span>
        <template v-for="sub in item.subWlosGuide">
          <a-menu-item
            v-if="!sub.subWlosGuide.length"
            :key="sub.pageUuid || Math.random() + '_default_menu'"
            @click="toPath(sub)"
          >
            {{ sub.guideName }}
          </a-menu-item>
          <a-sub-menu v-else :key="sub.uuid">
            <span slot="title">{{ sub.guideName }}</span>
            <template v-for="subItem in sub.subWlosGuide">
              <a-menu-item
                :key="subItem.pageUuid || Math.random() + '_default_menu'"
                @click="toPath(subItem)"
              >
                {{ subItem.guideName }}
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
<script>
export default {
  name: 'menuItem',
  props: {
    mode: {
      type: String,
      default: 'horizontal',
    },
    currentPage: {
      type: Array,
      default: () => [],
    },
    subMenuData: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  methods: {
    toPath(arg) {
      this.$emit('toPath', arg)
    },
  },
}
</script>
