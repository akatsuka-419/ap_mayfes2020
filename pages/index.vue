<template>
  <v-content class="py-0">
    <v-container class="py-0">

      <h2>新着情報</h2>
        <v-card
          class="overflow-y-auto my-6 px-4 py-2"
          height="200"
        >
          <div
            v-for="(item,i) in news"
            :key="i"
          >
            <span class="caption font-weight-light">{{ item.date }}</span><br>
            {{ item.text }}
            <v-divider class="divider my-2"></v-divider>
          </div>
        </v-card>

      <h2 id="covid-19">COVID-19に関する対応について</h2>
      <p class="ma-4">COVID-19の感染拡大に伴い五月祭が当初日程での開催を断念したことを受け、工学博覧会は以下の方針で開催準備を進めています。</p>
      <h3>工学博覧会ONLINEの開催(10月中を予定)</h3>
      <p class="ma-4">参加者間で今後の方針について検討を行った結果、本HPやYouTube Live、Clusterなどを活用したオンライン上での開催を目標とすることに決定いたしました。現在、１０月中の開催に向け準備を進めています。日程が近づきましたら本HPおよびTwitterなどで詳細をお知らせします。</p>
      <h3>五月祭への参加(開催が確定した場合)</h3>
      <p class="ma-4">五月祭の延期開催が決定した場合は、上記のオンライン開催と併せて五月祭への参加も予定しております。</p>

      <h2 class="mt-6">企画紹介</h2>
      <h3 class="mt-4">実験班</h3>
      <p class="ma-4">計数工学科・物理工学科の学生達が、それぞれの興味関心に応じて制作した実験を展示しています。</p>
      <v-row>
        <template v-for="(item, i) in items_1">
          <v-col
            :key="i"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                class="my-4"
                color="black"
              >
                <v-img :src="item.img" height="200px"></v-img>
                <div class="kikaku_parent">
                  <img :src="item.icon" width="40" height="40" class="kikaku_child">
                  <h4 class="kikaku_child">{{ item.title }}</h4>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
      <h3 class="mt-4">企画班</h3>
      <p class="ma-4 headline">Coming soon…</p>



      <h2 class="mt-6">アクセス</h2>
      <v-row>
        <v-col cols="12" lg="8">
          <v-img :src="require('@/assets/img/map/campasmap-1.jpg')"></v-img>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card class="px-4 py-1" height="100%">
            <h4 class="pb-2 my-4 border-bottom">会場</h4>
            <p>東京大学 本郷キャンパス工学部6号館</p>
            <h4 class="pb-2 my-4 border-bottom">最寄駅</h4>
            <p>東大前駅(南北線)　徒歩8分</p>
            <p>本郷三丁目駅(丸の内線)　徒歩12分</p>
            <p>根津駅(千代田線)　徒歩12分</p>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-6"></v-divider>

      <p class="text-center headline font-weight-bold"><span class="rink">リンク</span></p>
      <v-row justify="center">
        <template v-for="(item, i) in items_3">
          <v-col
            :key="i"
            cols="12"
            sm="6"
            md="4"
            align="center"
          >
            <a v-bind:href="item.url">
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
          date: '2020-5-16',
          text: '工学博覧会2020HPを公開しました。'
        },
        {
          date: '2020-5−17',
          text: '工学博覧会2020HPを公開しました'
        },
        {
          date: '2020-5-18',
          text: '工学博覧会2020HPを公開しました'
        },
        {
          date: '2020-5-19',
          text: '工学博覧会2020HPを公開しました'
        },
      ]
    })
  }
</script>
