<template>
  <v-content class="py-0">
    <v-container class="py-0">

      <h2>新着情報</h2>
        <v-card
          class="overflow-y-auto my-6 px-4 py-2"
          max-height="200"
        >
          <div
            v-for="(item,i) in news"
            :key="`news-${i}`"
          >
            <span class="caption font-weight-light">{{ item.date }}</span><br>
            {{ item.text }}
            <v-divider class="divider my-2"></v-divider>
          </div>
        </v-card>

      <h2 class="mt-6">企画紹介<span class="caption mx-4">URLは当日公開します</span></h2>
      <v-card class="my-4 px-2 py-1">
        <h3 class="ma-2">実験班</h3>
        <p class="mt-4 mx-4 mb-1 body-2">計数工学科・物理工学科の学生達が、それぞれの興味関心に応じて制作した実験を展示しています。</p>
        <p class="mt-2 mx-4 mb-1 body-2 font-weight-bold">実験にはそれぞれ物語がそえられており、読み進めることで不思議な世界をめぐりながら実験を楽しむことができます。</p>
      </v-card>

      <v-card class="my-4 px-2 py-1">
        <h3 class="ma-2">ライブ配信</h3>
        <h5 class="mt-4 mx-4 mb-1">①実験や講演企画を五月祭当日に生配信！</h5> 
        <h5 class="mt-4 mx-4 mb-1">②Spatial Chatでメンバーと交流できる！</h5>
      </v-card>

      <v-divider class="my-6"></v-divider>

      <p class="text-center headline font-weight-bold"><span class="rink">リンク</span></p>
      <v-row justify="center">
        <template v-for="(item, i) in items_3">
          <v-col
            :key="`link-${i}`"
            cols="12"
            sm="6"
            md="4"
            align="center"
          >
            <a v-bind:href="item.url" target="_blank" rel="noopener">
              <img class="ma-3" :src="item.img">
            </a>
          </v-col>
        </template>
      </v-row>

    </v-container>
  </v-content>
</template>

<style>
h2{
  border-left: solid 4px #008080;
  border-bottom: solid 1px #008080;
  padding: 5px 10px;
}

h3{
  border-left: solid 3px #B4186E;
  padding: 0 10px;
}

.divider{
  background-color: #B4186E;
}

.kikaku_parent{
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
}

.kikaku_child{
  display: inline-block;
  vertical-align: middle;
}

.border-bottom{
  border-bottom: solid 1px #B4186E;
}

.rink{
  border-bottom: solid 2px #B4186E;
}

img:hover {
	opacity: 0.7;
}
</style>

<script>
  export default {
    head() {
      return {
        title: 'トップページ'
      }
    },
    data: () => ({
      tab:null,
      items_1: [
        {
          title: '脳科学班',
          img: require('@/assets/img/kikaku/noukagaku.jpg'),
          icon: require('@/assets/img/kikaku/logo-brain-touka.png')
        },
        {
          title: 'コンピューターの頭脳班',
          img: require('@/assets/img/kikaku/cpu.JPG'),
          icon: require('@/assets/img/kikaku/logo-cpu-touka.png')
        },
        {
          title: 'vision班',
          img: require('@/assets/img/kikaku/vision.png'),
          icon: require('@/assets/img/kikaku/logo-vision-touka.png')
        },
        {
          title: '芸術表現班',
          img: require('@/assets/img/kikaku/art2.jpg'),
          icon: require('@/assets/img/kikaku/logo-art-v2-touka.png')
        },
        {
          title: '光班',
          img: require('@/assets/img/kikaku/hikari.jpeg'),
          icon: require('@/assets/img/kikaku/logo-hikari-touka.png')
        },
        {
          title: '物性班',
          img: require('@/assets/img/kikaku/bussei.jpg'),
          icon: require('@/assets/img/kikaku/logo-bussei-touka.png')
        }
      ],

      items_3: [
        {
          img: require('@/assets/img/banner/ba-na-_butuko.png'),
          url: "http://www.ap.t.u-tokyo.ac.jp/"
        },
        {
          img: require('@/assets/img/banner/ba-na-_keisu.png'),
          url: "https://www.keisu.t.u-tokyo.ac.jp/"
        },
        {
          img: require('@/assets/img/banner/ba-na-_iinkai.png'),
          url: "https://gogatsusai.jp/93/visitor/"
        }

      ],
      news: [
        {
          date: '2020-5-26',
          text: '工学博覧会2020HPを公開しました。'
        },
        {
          date: '2020-9-2',
          text: '企画紹介を更新しました。'
        }
      ]
    })
  }
</script>
