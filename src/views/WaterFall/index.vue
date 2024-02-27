<!-- 瀑布流 -->
<template>
  <div class="wraps">
    <div :style="{height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px'}" class="items" v-for="item in waterList"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const list:any[] = [
    {
        height: 300,
        background: 'red'
    },
    {
        height: 400,
        background: 'pink'
    },
    {
        height: 500,
        background: 'blue'
    },
    {
        height: 200,
        background: 'green'
    },
    {
        height: 300,
        background: 'gray'
    },
    {
        height: 400,
        background: '#CC00FF'
    },
    {
        height: 200,
        background: 'black'
    },
    {
        height: 100,
        background: '#996666'
    },
    {
        height: 500,
        background: 'skyblue'
    },
    {
        height: 300,
        background: '#993366'
    },
    {
        height: 100,
        background: '#33FF33'
    },
    {
        height: 400,
        background: 'skyblue'
    },
    {
        height: 200,
        background: '#6633CC'
    },
    {
        height: 300,
        background: '#666699'
    },
    {
        height: 300,
        background: '#66CCFF'
    },
    {
        height: 300,
        background: 'skyblue'
    },
    {
        height: 200,
        background: '#CC3366'
    },
    {
        height: 200,
        background: '#CC9966'
    },
    {
        height: 200,
        background: '#FF00FF'
    },
    {
        height: 500,
        background: '#990000'
    },
    {
        height: 400,
        background: 'red'
    },
    {
        height: 100,
        background: '#999966'
    },
    {
        height: 200,
        background: '#CCCC66'
    },
    {
        height: 300,
        background: '#FF33FF'
    },
    {
        height: 400,
        background: '#FFFF66'
    },
    {
        height: 200,
        background: 'red'
    },
    {
        height: 100,
        background: 'skyblue'
    },
    {
        height: 200,
        background: '#33CC00'
    },
    {
        height: 300,
        background: '#330033'
    },
    {
        height: 100,
        background: '#0066CC'
    },
    {
        height: 200,
        background: 'skyblue'
    },
    {
        height: 100,
        background: '#006666'
    },
    {
        height: 200,
        background: 'yellow'
    },
    {
        height: 300,
        background: 'yellow'
    },
    {
        height: 100,
        background: '#33CCFF'
    },
    {
        height: 400,
        background: 'yellow'
    },
    {
        height: 400,
        background: 'yellow'
    },
    {
        height: 200,
        background: '#33FF00'
    },
    {
        height: 300,
        background: 'yellow'
    },
    {
        height: 100,
        background: 'green'
    }
 
]

const waterList = reactive<any[]>([])
const heightList:number[] = []

const init = () => {
  const width = 130;
  const x = document.body.clientWidth;
  const column = Math.floor(x / width)
  console.log(column)

  for (let i = 0; i < list.length; i++) {
    if (i < column) { // 第一行
      list[i].left = i * width;
      list[i].top = 20;
      waterList.push(list[i])
      heightList.push(list[i].height)
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, i) => {
        if (current > h) {
          current = h;
          index = i;
        }
      })
      list[i].top = current + 20
      list[i].left = index * width
      heightList[index] = heightList[index] + list[i].height + 20
      waterList.push(list[i])
    }
  }
}

onMounted(() => {
  init()
})
</script>

<style scoped lang="scss">
.wraps {
  position: relative;
  height: 100%;
  width: 100%;
  .items {
    position: absolute;
    width: 120px;
  }
}
</style>