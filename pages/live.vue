<template>
    <v-content class="py-0">
      
        <v-container class="py-0"> 
            <h2 class="my-8 exhibition">ライブ企画</h2>

            <a href="https://youtu.be/95lwxVRp7Cc" class="btn-flat-border mr-8 mb-4 ml-4 font-weight-bold" ontouchstart="">YouTubeライブへ</a>
            <p class="ml-6 explanation">
              実験や座談会を生配信します！<br>
              配信の不具合により万が一YoutubeLiveが切断された場合は、こちらのリンク( <a href="https://youtu.be/WSAdxdST47Q">https://youtu.be/WSAdxdST47Q</a> )から配信いたします。
            </p>

            <a href="https://discord.gg/HxZcdX8" class="btn-flat-border-blue mr-8 mb-4 ml-4 font-weight-bold" ontouchstart="">Discordへ</a>
            <p class="ml-6 explanation">
              テキストチャットとボイスチャットで学生達とゆる~い交流が楽しめます。<br>
              質問・感想・相談など気軽にお寄せください。(ブラウザからはアカウントを登録せずにご参加いただけます)<br>
              ※招待リンクの期限:五月祭終了(9月21日18時)まで
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

            <template>
        <v-card
          class="card my-6"
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

             <h3 class="live_subtitle my-6 pl-6">企画紹介</h3>

             <h3 class="live_subsubtitle my-6 ml-2">教えて応物！！先生インタビュー</h3>
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
                                <img src="../assets/img/portrait/sys8.png" width="100px"> 
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
                                <img src="../assets/img/portrait/suri4.png" width="100px">
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
                                <img src="../assets/img/portrait/sys2.png" width="100px">
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
                                <img src="../assets/img/portrait/sys7.png" width="100px">
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
                                <img src="../assets/img/portrait/butsuko-i.png" width="100px">
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
                                <img src="../assets/img/portrait/butsuko-s.png" width="100px">
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


            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >

                  <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="misawa overline font-weight-bold">工学部計数工学科数理コース<br>
                    <span class="name font-weight-bold mt-2">三澤 颯大</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            数学・深層学習・音声処理全部やりたくて探していたら計数があった<br>
                            <br>
                            ・趣味・サークル<br>
                            ギター<br>
                            <br>
                            ・好きな定理<br>
                            複素解析のLiouvilleの定理
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/misawa.png" width="100px">

                        
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="tsurusaki overline font-weight-bold">理学部情報科学科<br>
                    <span class="name font-weight-bold mt-2">津留﨑 堅章</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            中学の頃から細々とやっていたプログラミングをはじめ、パソコンを使うのは好きだったし成り立ちにも興味があった<br>
                            形式言語など抽象的な理論をやってみたかった<br>
                            <br>
                            ・学科エピソード<br>
                            控室にある立体迷路をクリアするスピードだけは学科の誰にも負けないはず<br>
                            <br>
                            ・本郷でおすすめの昼ごはん<br>
                            第二食堂は目の前にあるし、100円ローソンや生協で買って控室で食べるもよし 理情は便利です<br>
                            <br>
                            ・卒論や研究に関して<br>
                            数学やプログラミング言語など形式的なものが、いかに自然言語と接続できるかを研究したいと思ってます（空想）<br>
                            <br>
                            ・尊敬するもの<br>
                            フレーゲはすごいらしい<br>
                            <br>
                            ・趣味・サークル<br>
                            オーケストラサークルでヴァイオリンを弾いています<br>
                            <br>
                            ・好きな言葉<br>
                            「我思う故に我あり」は確かにその通りだと最近思います<br>
                            <br>
                            なんか偉そうに書いちゃってますが、成績とかそういうのはあんまり強くないです、思想よりも弱いのはあんまり強くないです、思想よりも弱い
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/tsurusaki.png" width="100px" class="img-speaker">
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                </template>
            </v-row>





            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >

                  <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="nakayama overline font-weight-bold">理学部数学科<br>
                    <span class="name font-weight-bold mt-2">中山 裕大</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            高校生の頃の現代数学の勉強に影響され同学科に進学するも、授業はさぼりがちだった。<br>
                            <br>
                            ・卒論・研究に関して<br>
予備知識の多さで悪名高い整数論を目指して勉強中、楕円曲線などが好き。<br>
                            <br>
                            座談会ではよろしくお願いします!
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/nakayama.png" width="100px">

                        
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="mima overline font-weight-bold">モデレーター<br>
                    <span class="name font-weight-bold mt-2">美間 亮太<span class="course font-weight-medium">(計数工学科システムコース)</span></span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            もともと数オリなどが好きで計数数理に入るために東大に入学したとか．学科に入ってから学科同期にVRゴーグルを被せられ(?)，いつの間にかシステムコースを選択，院の研究室もシステムの身体情報学@drinami 研へ．<br>
                            <br>
                            ・推しのムーミンキャラ<br>
ニンニ
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/mima.png" width="100px" class="img-speaker">
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                </template>
            </v-row>






            <p class="ml-4 mb-2 kikaku_sentence">・21日16:15- (計数システムコースに似た学科)</p>


            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
<v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="mima overline font-weight-bold">工学部計数工学科システムコース<br>
                    <span class="name font-weight-bold mt-2">美間 亮太</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            もともと数オリなどが好きで計数数理に入るために東大に入学したとか．学科に入ってから学科同期にVRゴーグルを被せられ(?)，いつの間にかシステムコースを選択，院の研究室もシステムの身体情報学@drinami 研へ．<br>
                            <br>
                            ・推しのムーミンキャラ<br>
ニンニ
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/mima.png" width="100px" class="img-speaker">
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                  
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                 <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="sawada overline font-weight-bold">工学部電子情報学科<br>
                    <span class="name font-weight-bold mt-2">澤田 悠太郎</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            高校・大学入学時は文系で、高校時代には1年間アメリカに留学したりしていました。教養時代のエンジニアインターンや、IT技術の多分野にまたがる可能性を感じて2年生の進振り時に現在の学科への進学を決めました。
<br>
                            <br>
                            学科の控室での雑談やスマブラ、麻雀などを息抜きに学科での授業をなんとかこなしてきました。<br>
                            <br>
                            進学の例としてはレアなほうだと思うので、参考になればうれしいです! 
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/sawada.png" width="100px">

                        
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                </template>
            </v-row>




              <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
 <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="yamashita overline font-weight-bold">工学部システム創成学科Cコース<br>
                    <span class="name font-weight-bold mt-2">山下 優樹</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            数理モデル、統計学やアルゴリズムを学びたかったが、経済学や経営学にも興味がありました。<br>
                            <br>
                            ・卒論や研究に関して<br>
卒業研究では、SNS上の推薦システムに取り組んでいます。<br>
<br>
・趣味・サークル<br>
奇術愛好会(手品)でハトを出したりしていました。<br>
<br>
何をやっているのかよくわからないと言われるシステム創成学科について、自分なりの視点で語ります。
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/yamashita.png" width="100px" class="img-speaker">
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                 
                  <v-expansion-panels class="my-4">
                  <v-expansion-panel class="zadankai">
                  <v-expansion-panel-header>
                    <p class="murakami overline font-weight-bold">工学部機械情報工学科<br>
                    <span class="name font-weight-bold mt-2">村上 恵太郎</span></p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item three-line class="v-list">
                        <v-list-item-content class="pt-0 mr-6">
                          <div class="text--primary speaker">
                            ・学科志望動機<br>
                            実践的なものづくりを学べると思って進学<br>
                            <br>
                            ・卒論や研究に関して<br>
現在は同学科の深尾・山本研究室で自動運転の研究を行う。<br>
                            <br>
                            昨年UC Berkeleyに留学していたことで若干アメリカにかぶれているが、本人は大和魂を大事にしているらしい。スヌーピーが大好き。
                          </div>
                        </v-list-item-content>
                        <img src="../assets/img/portrait/murakami.png" width="100px">

                        
                    </v-list-item>

                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                </template>
            </v-row>
            



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
  content: url("../assets/img/logo/point.png");
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
  line-height: 1.5em;
}

.introduction{
  letter-spacing: 0.05em;
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

.zadankai{
  max-width: 500px;
}

.name{
  font-size: 2em;
  display: block;
}

.misawa{
  color: #EAD683;
}

.tsurusaki{
  color: #7CDDA3;
}

.nakayama{
  color: #7DD7FF;
}

.mima{
  color: #EDB4EF;
}

.sawada{
  color: #F7AF9F;
}

.yamashita{
  color: #AECBFF;
}

.murakami{
  color: #8DFAFF;
}

.v-list{
  padding: 0;
}

.img-speader{
  vertical-align: top;
}

.course{
  font-size: 0.7em;
}
</style>
 
<script>
export default {
    layout: 'jikken',
    data: () => ({
      show: false,
      schedule1: [
          {
            time: '10:00-',
            event: '開会式',
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
            detail: '計数数理に似た学科',
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
            event: '開会式',
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
            detail: '計数システムに似た学科',
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
            event: '懇親会',
            detail: '@Discord',
            isLive: false,
            isInterview: false,
            isSymposium: false
          }
        ]
    })
}
</script>