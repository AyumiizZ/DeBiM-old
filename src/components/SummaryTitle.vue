<template>
  <div class="title-count">
    <b-row>
      <b-col
        sm="2"
        class="title-stats-counts"
        v-for="(list, index) in titleLists"
        :key="index"
      >
        <p class="count-top">
          <font-awesome-icon :icon="list.icon" />
          {{ list.title }}
        </p>
        <div class="count">
          <span :class="getColor(list.percent)"> {{ list.count }} </span>
        </div>
        <p class="count-bottom">
          <span :class="getColor(list.percent)">
            <font-awesome-icon :icon="getIcon(list.percent)" />{{
              Math.abs(list.percent)
            }}
          </span>
          From last ?
        </p>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'summaryTitle',
  data() {
    return {
      titleLists: [
        {
          title: 'Total Quries (Last 5 Min)',
          count: 1245,
          percent: 40,
          icon: 'user'
        },
        {
          title: 'Quries Suspected (Last 5 Min)',
          count: 102,
          percent: 5,
          icon: 'user'
        },
        {
          title: 'IP Suspected (Last 5 Min)',
          count: 18,
          percent: 34,
          icon: 'user'
        },
        {
          title: 'Total Quries (Last7 Days)',
          count: 2315,
          percent: 26,
          icon: 'user'
        },
        {
          title: 'Quries Suspected (Last 7 Days)',
          count: 732,
          percent: -12,
          icon: 'user'
        },
        {
          title: 'IP Suspected (Last 7 Days)',
          count: 54,
          percent: 28,
          icon: 'user'
        }
      ]
    }
  },
  methods: {
    getColor(percent) {
      if (percent > 0) return 'green'
      if (percent < 0) return 'red'
      return ''
    },
    getIcon(percent) {
      if (percent > 0) return 'sort-up'
      if (percent < 0) return 'sort-down'
      return 'equals'
    }
  }
}
</script>
<style lang="scss" scoped>
.title-count {
  //   overflow: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
}

.title-stats-counts {
  margin-top: 10px;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    height: 65px;
    border-right: 2px solid #73879c;
    margin-top: 10px;
  }
  &:last-child {
    &:before {
      border-right: 0px;
    }
  }
}
.count_top {
  font-size: 12px;
  color: #73879c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
p {
  margin-bottom: 0px;
}
svg {
  margin-right: 5px;
}
.count {
  margin: 0;
  font-size: 40px;
  font-weight: 700;
  color: #73879c;
}
.count_bottom {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.green {
  color: #1abb9c;
}
.red {
  color: #d00b04;
}
</style>
