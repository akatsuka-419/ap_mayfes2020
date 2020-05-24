<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="black"
    >
      <img
        src="@/assets/img/logo/logo2020-dark-toka.png"
        width="40"
        height="40"
        @click="$vuetify.goTo(0)"
      >
      <v-spacer/>
      <v-toolbar-title
        @click="$vuetify.goTo(0)"
        v-text="title"
        class="font-weight-medium"
      />
      <v-spacer/>
      <v-btn icon href="https://twitter.com/apmayfes?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>

      <v-img
        class="hidden-xs-only"
        height="620px"
        :src="require('@/assets/img/chirashi/chirashi-yokonaga4.png')"
      >
        <v-row
          align="end"
          class="lightbox pa-2 fill-height"
          justify="center"
        >
          <v-col cols="12" lg="11" md="11">
            <v-card class="mx-4">
              <v-card-title class="font-weight-bold text-center justify-center pt-4 display-1 font-weight-medium heading">
                  工学博覧会ONLINE 開催予定
              </v-card-title>
              <v-card-text class="text-center text--primary body-1">
                詳しくはこちら　
                <span
                style="text-decoration: underline"
                @click="$vuetify.goTo('#covid-19')"
                >
                COVID-19に関する対応について
                </span>
              </v-card-text>
              <v-tabs
                v-model="tab"
                color="#B4186E"
                grow
              >
                <v-tab
                  v-for="(item,i) in items"
                  :key="i"
                  class="font-weight-bold white--text"
                >
                  {{ item.title }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item
                  v-for="item in items"
                  :key="item"
                >
                  <v-card flat>
                    <v-card-text class="text--primary">
                      {{ item.text1 }}<br>
                      {{ item.text2 }}<br>
                      {{ item.text3 }}
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </v-img>

      <v-img
       class="hidden-sm-and-up"
       :src="require('@/assets/img/chirashi/chirashi_sns.png')"
      >
        <v-row
          align="end"
          class="lightbox pa-2 fill-height"
          justify="center"
        >
          <v-col cols="12" lg="11" md="11">
            <v-card class="mx-4">
              <v-card-title class="font-weight-bold text-center justify-center py-4 headline heading">
                  工学博覧会ONLINE 開催予定
              </v-card-title>
              <v-card-text class="text-center text--primary body-1">
                <span
                style="text-decoration: underline"
                @click="$vuetify.goTo('#covid-19')"
                >
                COVID-19に関する対応について
                </span>
              </v-card-text>
              <v-expansion-panels accordion>
                <v-expansion-panel
                  v-for="(item,i) in items"
                  :key="i"
                >
                  <v-expansion-panel-header>
                    {{ item.title }}
                    <template v-slot:actions>
                      <v-icon color="#B4186E">$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="caption">
                    {{ item.text1 }}<br>
                    {{ item.text2 }}<br>
                    {{ item.text3 }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </v-img>

      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="black">&copy; 2020東大工学部応用物理系学科有志</v-footer>
  </v-app>
</template>

<style>
*{
  font-family:
    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    sans-serif;
}

.heading{
  color: #FFCCFF;
}
</style>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      tab: null,
      title: '工学博覧会2020',
      items: [
        {
          title:'工学博覧会とは',
          text1:'工学博覧会は物理工学科と計数工学科の学生有志が、日頃学んでいる学問や学生生活を紹介する展示企画です。皆さんが中学や高校で学ぶ数学や物理は工学に用いられ、生活の役に立ったり時には人を感動させる作品を作り上げます。',
          text2:'見て、触って、話して、美しき工学の世界を一緒に楽しみませんか？',
          text3:''
        },
        {
          title:'代表者あいさつ',
          text1:'工学博覧会のホームページを訪れてくださり、ありがとうございます。今年は皆様を『応物の世界に引き込む』ことをテーマに、去年までの展示デザインを刷新し、より学科の魅力の詰まった企画を学生一丸となって準備しております。新しく生まれ変わった工学博覧会で皆様とお会いできることを学生一同楽しみにお待ちしております。',
          text2:'',
          text3:'工学博覧会代表　藤田尚輝'
        },
        {
          title:'今年度の展示コンセプト',
          text1:'ーーーーようこそ、応物の世界へーーーー',
          text2:'今年の工学博覧会では「工学」と「絵本」の融合した新たな学科展示のカタチを作りました。絵本のタイトルは『応物の国のメイプ』。この絵本の主人公、メイプちゃんと共にあらゆる工学の集まった応物の世界であなたは不思議な体験をすることになるでしょう。',
          text3:'さあ、１ページ目を開いてみましょう。'
        }
      ]
    }
  }
}
</script>
