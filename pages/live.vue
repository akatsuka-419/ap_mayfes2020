<template>
    <v-content class="py-0">
      
        <v-container class="py-0"> 
            <h2 class="my-8 exhibition">ライブ企画</h2>

            <a href="#" class="btn-flat-border mr-8 mb-4 ml-4 font-weight-bold" ontouchstart="" target="_blank" rel="noopener">YouTubeライブへ</a>
            <p class="ml-6 explanation">実験や座談会を生配信します！（URLは当日公開します。）</p>

            <a href="#" class="btn-flat-border-blue mr-8 mb-4 ml-4 font-weight-bold" ontouchstart="" target="_blank" rel="noopener">Discordへ</a>
            <p class="ml-6 explanation">
              テキストチャットとボイスチャットで学生達とゆる~い交流が楽しめます。<br>
              質問・感想・相談など気軽にお寄せください。(ブラウザからはアカウントを登録せずにご参加いただけます)<br>
              ※招待リンクの期限:五月祭終了(9月21日18時)まで<br>
              （URLは当日公開します。）
            </p>

            <h3 class="live_subtitle my-6 pl-6">YouTubeライブ　タイムスケジュール</h3>
            <v-row justify="center">
                <template>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">9月20日(日)</th>
                                        <th class="text-left"></th>
                                        <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in schedule1" :key="item.time">
                                        <td>{{ item.time }}</td>
                                        <td v-bind:class="{ 'live': item.isLive, 'interview': item.isInterview, 'symposium': item.isSymposium }">{{ item.event }}</td>
                                        <td>{{ item.detail }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">9月21日(月)</th>
                                        <th class="text-left"></th>
                                        <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in schedule2" :key="item.time">
                                        <td>{{ item.time }}</td>
                                        <td v-bind:class="{ 'live': item.isLive, 'interview': item.isInterview, 'symposium': item.isSymposium }">{{ item.event }}</td>
                                        <td>{{ item.detail }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                </template>
            </v-row>

             <h3 class="live_subtitle my-6 pl-6">企画紹介</h3>

             <h3 class="live_subsubtitle my-6 ml-2">先生インタビュー</h3>
             <p class="ml-4 kikaku_sentence">
                 計数工学科・物理工学科の先生方にさまざまな質問をなげかけます!<br>
                 質問はTwitterにて随時募集中!ハッシュタグ「<span class="font-weight-bold">#教えて応物</span>」をつけてツイートしてください。<br>
                 配信中に先生が答えてくれるかも?
             </p>
             <p class="ml-4 kikaku_sentence font-weight-bold">ゲスト紹介</p>

             <v-row justify="center">
                <template>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-card
                            class="mx-auto py-3"
                            max-width="500"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="pt-0">
                                    <div class="overline font-weight-bold">21日15:00-</div>
                                    <div class="overline mb-0 font-weight-bold suri">計数工学科　数理情報工学コース</div>
                                    <v-list-item-title class="professor font-weight-bold suri mb-2">郡 宏 <span class="degree">教授</span></v-list-item-title>
                                    <v-list-item-subtitle class="text--primary introduction">非線形物理学研究室</v-list-item-subtitle>
                                </v-list-item-content>  
                            </v-list-item>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-card
                            class="mx-auto py-3"
                            max-width="500"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="pt-0">
                                    <div class="overline font-weight-bold">20日13:00-</div>
                                    <div class="overline mb-0 font-weight-bold suri">計数工学科　数理情報工学コース</div>
                                    <v-list-item-title class="professor font-weight-bold suri mb-2">清 智也 <span class="degree">准教授</span></v-list-item-title>
                                    <v-list-item-subtitle class="text--primary introduction">統計情報学研究室</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </template>
            </v-row>

            <v-row justify="center">
                <template>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-card
                            class="mx-auto py-3"
                            max-width="500"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="pt-0">
                                    <div class="overline font-weight-bold">20日11:00-</div>
                                    <div class="overline mb-0 font-weight-bold system">計数工学科　システム情報工学コース</div>
                                    <v-list-item-title class="professor font-weight-bold system mb-2">川嶋 健嗣 <span class="degree">教授</span></v-list-item-title>
                                    <v-list-item-subtitle class="text--primary introduction">生体機械システム研究室</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-card
                            class="mx-auto py-3"
                            max-width="500"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="pt-0">
                                    <div class="overline font-weight-bold">21日11:00-</div>
                                    <div class="overline mb-0 font-weight-bold system">計数工学科　システム情報工学コース</div>
                                    <v-list-item-title class="professor font-weight-bold system mb-2">成瀬 誠 <span class="degree">教授</span></v-list-item-title>
                                    <v-list-item-subtitle class="text--primary introduction">情報物理・光システム研究室</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </template>
            </v-row>

            <v-row justify="center">
                <template>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-card
                            class="mx-auto py-3"
                            max-width="500"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="pt-0">
                                    <div class="overline font-weight-bold">21日13:00-</div>
                                    <div class="overline mb-0 font-weight-bold butsuko">物理工学科</div>
                                    <v-list-item-title class="professor font-weight-bold butsuko mb-2">石坂 香子 <span class="degree">教授</span></v-list-item-title>
                                    <v-list-item-subtitle class="text--primary introduction">＜研究テーマ＞光で拓く物質科学</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <v-card
                            class="mx-auto py-3"
                            max-width="500"
                            outlined
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="pt-0">
                                    <div class="overline font-weight-bold">20日15:00-</div>
                                    <div class="overline mb-0 font-weight-bold butsuko">物理工学科</div>
                                    <v-list-item-title class="professor font-weight-bold butsuko mb-2">沙川 貴大 <span class="degree">准教授</span></v-list-item-title>
                                    <v-list-item-subtitle class="text--primary introduction">＜研究テーマ＞情報と非平衡の物理学</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </template>
            </v-row>

            <h3 class="live_subsubtitle my-6 ml-2">学生座談会</h3>
            <p class="ml-4 kikaku_sentence">
                「計数工学科って何をする学科なの？」<br>
                というあるあるな疑問にこたえるべく、近い分野を学ぶ他学科の学生をまねき座談会を開きます。
            </p>
            <p class="ml-4 kikaku_sentence font-weight-bold">登壇者紹介</p>
            <p class="ml-4 mb-2 kikaku_sentence">・20日16:15- (計数数理コースに似た学科)</p>
            <div class="speaker ml-8 mb-8">
                工学部計数工学科　数理コース　三澤颯大<br>
                理学部情報科学科 津留﨑堅章<br>
                理学部数学科　中山裕大
            </div>
            <p class="ml-4 mb-2 kikaku_sentence">・21日16:15- (計数システムコースに似た学科)</p>
            <div class="speaker ml-8">
                工学部計数工学科　システムコース　美間亮太<br>
                工学部電子情報学科　澤田悠太朗<br>
                工学部システム創成学科Cコース　山下優樹<br>
                工学部機械情報工学科　村上恵太郎
            </div>

            <p class="back mt-12">＞＞<nuxt-link :to="{ name: 'index', params: {id: id} }" class="back-link">トップページ</nuxt-link>へもどる</p>

        </v-container>
    </v-content>
</template>

<style>
p{
    letter-spacing: 0.05em;
}

.exhibition{
  padding:5px 10px;
  border-bottom: double 10px black;
}

.exhibition:before{
  content: url("@/assets/logo/point.png");
  position: relative;
  top: 7px;
  margin: 0 30px 0 0;
}

.live_subtitle{
  color: #f9bcbc;
  border-left: solid 2px #f9bcbc;
  border-bottom: solid 1px #f9bcbc;
  padding: 5px 10px;
}

.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: black;
  border: solid 3px black;
  border-radius: 3px;
  transition: .4s;
  background-color: #ff8080;
  vertical-align: top;
}

a.btn-flat-border:link,
a.btn-flat-border:visited,
a.btn-flat-border:active{
    color: black;
}

.btn-flat-border-blue:hover {
  opacity: 0.7;
  color: black;
}

.btn-flat-border-blue {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: black;
  border: solid 3px black;
  border-radius: 3px;
  transition: .4s;
  background-color: #83a9ff;
  vertical-align: top;
}

a.btn-flat-border-blue:link,
a.btn-flat-border-blue:visited,
a.btn-flat-border-blue:active{
    color: black;
}

.btn-flat-border:hover {
  opacity: 0.7;
  color: black;
}

.live{
    color: #d0fecc;
}

.interview{
    color: #fbd3fe;
}

.symposium{
    color: #bff5fe;
}

.live_subsubtitle{
    border-left: solid 6px #f9bcbc;
    padding: 0 10px;
}

.professor{
    font-size: 1.3em;
}

.degree{
    font-size: 0.7em;
}

.back{
    color: greenyellow;
}

.back-link{
    color: greenyellow;
}

.back-link:link,
.back-link:active,
.back-link:visited,
.back-link:hover{
    color: greenyellow;
}

.suri{
  color: #FFF7D4;
}

.system{
  color: #EDD9FF;
}

.butsuko{
  color: #D7FFE7;
}

.speaker{
  font-size: 0.9em;
  letter-spacing: 0.05em;
}

.introduction{
  letter-spacing: 0.05em;
}
</style>
 
<script>
export default {
    layout: 'jikken',
    data: () => ({
      schedule1: [
          {
            time: '10:00-',
            event: '閉会式',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false,
          },
          {
            time: '10:30-',
            event: 'ライブ実験',
            detail: '光',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '11:00-',
            event: 'インタビュー',
            detail: '計数・川嶋先生',
            isLive: false,
            isInterview: true,
            isSymposium: false
          },
          {
            time: '11:30-',
            event: 'ライブ実験',
            detail: 'CPU',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '12:30-',
            event: 'ライブ実験',
            detail: '脳科学',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '13:00-',
            event: 'インタビュー',
            detail: '計数・清先生',
            isLive: false,
            isInterview: true,
            isSymposium: false
          },
          {
            time: '13:30-',
            event: 'ライブ実験',
            detail: '芸術表現',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '14:30-',
            event: 'ライブ実験',
            detail: '機械学習 ブルータスAI',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '15:00-',
            event: 'インタビュー',
            detail: '物工・沙川先生',
            isLive: false,
            isInterview: true,
            isSymposium: false
          },
          {
            time: '15:30-',
            event: 'ライブ実験',
            detail: '機械学習 顔追跡ゲーム',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '16:15-',
            event: '学生座談会',
            detail: '数理情報系３学科',
            isLive: false,
            isInterview: false,
            isSymposium: true
          },
          {
            time: '',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '17:00-',
            event: '閉会式',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '17:15',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          }
        ],
        schedule2: [
          {
            time: '10:00-',
            event: '閉会式',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false,
          },
          {
            time: '10:30-',
            event: 'ライブ実験',
            detail: '機械学習 顔追跡ゲーム',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '11:00-',
            event: 'インタビュー',
            detail: '計数・成瀬先生',
            isLive: false,
            isInterview: true,
            isSymposium: false
          },
          {
            time: '11:30-',
            event: 'ライブ実験',
            detail: '脳科学',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '12:30-',
            event: 'ライブ実験',
            detail: 'CPU',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '13:00-',
            event: 'インタビュー',
            detail: '物工・石坂先生',
            isLive: false,
            isInterview: true,
            isSymposium: false
          },
          {
            time: '13:30-',
            event: 'ライブ実験',
            detail: '機械学習 ブルータスAI',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '14:30-',
            event: 'ライブ実験',
            detail: '芸術表現',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '15:00-',
            event: 'インタビュー',
            detail: '計数・郡先生',
            isLive: false,
            isInterview: true,
            isSymposium: false
          },
          {
            time: '15:30-',
            event: 'ライブ実験',
            detail: '光',
            isLive: true,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '16:15-',
            event: '学生座談会',
            detail: 'システム情報系３学科',
            isLive: false,
            isInterview: false,
            isSymposium: true
          },
          {
            time: '',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '17:00-',
            event: '閉会式',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          },
          {
            time: '17:15',
            event: '',
            detail: '',
            isLive: false,
            isInterview: false,
            isSymposium: false
          }
        ]
    })
}
</script>