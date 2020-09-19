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

      <h2 class="mt-6 heading2">企画紹介</h2>

      <v-row justify="center">
        <template>
          <v-col
            cols="12"
            sm="6"
            align="center"
          >
          <nuxt-link :to="{ name: 'ex-group', params: {id: id} }">
            <div class="door-box" ontouchstart="">
            <img src="@/assets/img/door/door_open1_jikken.png">
            <img src="@/assets/img/door/door_open2_jikken.png" class="active">
            </div>
          </nuxt-link>
            <p class="text-door">計数工学科・物理工学科の学生達が、それぞれの興味関心に応じて制作した実験を展示しています。</p>
            <p class="text-door">実験にはそれぞれ物語がそえられており、読み進めることで不思議な世界をめぐりながら実験を楽しむことができます。</p>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            align="center"
          >
            <nuxt-link :to="{ name: 'live', params: {id: id} }">
              <div class="door-box" ontouchstart="">
                <img src="@/assets/img/door/door_open1_live.png">
                <img src="@/assets/img/door/door_open2_live.png" class="active">
              </div>
            </nuxt-link>
            <p class="text-door">実験や講演企画を五月祭当日に生配信します。</p>
            <p class="text_door">学生や先生との交流も企画しています。</p>
          </v-col>
        </template>
      </v-row>

      <template>
        <v-card
          class="my-6 card"
        >
        <v-card-title class="font-weight-bold">五月祭総選挙 -May Fes. Awards- へ投票お願いします</v-card-title>
        <v-card-text class="body-1 text--primary">
          - 投票方法 -<br>
          五月祭公式 HP の投票ページ (<a href="https://gogatsusai.jp/93/visitor/awards?id=352" class="touhyou">https://gogatsusai.jp/93/visitor/awards?id=352</a>) へアクセス<br>
          工学博覧会に投票<br>
          <br>
          企画 ID：352
        </v-card-text>
    
        </v-card>
      </template>

      <v-divider class="my-6"></v-divider>

      <p class="text-center headline font-weight-bold"><span class="rink">リンク</span></p>
      <v-row justify="center">
        <template v-for="(item, i) in items_1">
          <v-col
            :key="`link-${i}`"
            cols="12"
            sm="6"
            md="4"
            align="center"
          >
            <a v-bind:href="item.url" target="_blank" rel="noopener">
              <img class="ma-3 img_link" ontouchstart="" :src="item.img">
            </a>
          </v-col>
        </template>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <p class="text-center headline font-weight-bold pt-6"><span class="rink">五月祭おすすめ企画</span></p>
      <v-row justify="center">
        <template v-for="(item, i) in items_2">
          <v-col
            :key="`link-${i}`"
            cols="12"
            sm="6"
            md="4"
            align="center"
          >
            <a v-bind:href="item.url" target="_blank" rel="noopener">
              <img class="ma-3 img_rink" ontouchstart="" :src="item.img">
            </a>
          </v-col>
        </template>
      </v-row>

    </v-container>
  </v-content>
</template>

<style>
.heading2{
  border-left: solid 4px #008080;
  border-bottom: solid 1px #008080;
  padding: 5px 10px;
}

.divider{
  background-color: #B4186E;
}

.rink{
  border-bottom: solid 2px #B4186E;
}

.img_rink:hover {
	opacity: 0.7;
}

.text_door{
  font-size: 0.9em;
  text-align: center;
}

.door-box{
  position: relative;
  display: inline-block;
}

.door-box .active{
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.door-box:hover .active {
  opacity: 1;
}

.card{
  background-image: url("../assets/img/back/mayfes-back.png");
  background-size: cover;
}

.touhyou:link,
.touhyou:active,
.touhyou:visited,
.touhyou:hover{
    color: white;
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

      items_2: [
        {
          img: require('@/assets/img/banner/ba-na-_phys.png'),
          url: "https://event.phys.s.u-tokyo.ac.jp/physlab2020/"
        },
        {
          img: require('@/assets/img/banner/ba-na-_cast.png'),
          url: "https://ut-cast.net/mayfes2020/"
        },
        {
          img: require('@/assets/img/banner/ba-na-_medical.png'),
          url: "https://note.com/utmedical2020"
        },
        {
          img: require('@/assets/img/banner/ba-na-_mech.png'),
          url: "https://ut-mech.com/"
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
        },
        {
          date: '2020-9-18',
          text: 'ライブ配信を更新しました。'
        },
        {
          date: '2020-9-20',
          text: '展示を更新しました。'
        }
      ]
    })
  }
</script>
