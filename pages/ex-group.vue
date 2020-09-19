<template>
    <v-content class="py-0">
      
        <v-container class="py-0"> 
            <h2 class="my-8 exhibition">展示</h2>

            <template>
              <v-expansion-panels class="my-4" light>
                <v-expansion-panel>
                  <div class="panel">
                  <v-expansion-panel-header class="font-weight-bold panel_title">プロローグ</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row justify="center">
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        メイプちゃんの家族は代々有名な研究者ぞろい．ご先祖様にはノーベル物理学者もいるとか，いないとか．でもメイプちゃんは勉強より外で遊ぶ方が好き．今もどうやら学校の宿題に飽きてしまったようです．
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/op-1.png"><br>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                     そこへお姉ちゃんがやってきます．<br>
                    「宿題は終わった？」<br>
                    「全然．数学とか物理なんていや！つまんないわ！」<br>
                    「クッキーあげるから頑張って」<br>
                    お姉ちゃんがくれたクッキーはいつものにんじんクッキー．

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/op-2.png"><br>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                    >
                    <p class="sentence mb-0">  
                    「うげ〜」<br>
                    にんじんが苦手なメイプちゃんはちっとも嬉しくありません．<br>
                    「そんなに嫌な顔しないで，身体に良いしきっと役に立つわよ」<br>
                    そうは言ってもにんじん味．メイプちゃんの機嫌は治りません．<br>
                    「じゃあいいものがあるわ！」<br>
                    何か企んでいるお姉ちゃん．<br>
                    「後ろを向いて！」<br>
                    お姉ちゃんに言われる通りメイプちゃんが後ろを向くと，，<br>
                    「うわあ！」<br>
                    メイプちゃんの視界は急に真っ暗．<br>
                    だんだん明るくなってきたと思ったら，さっきまでとは別の世界のようです．<br>
                    「ここはどこかしら？」<br>
                    周囲をきょろきょろしていると，何やら大急ぎのウサギが目の前を走りすぎて行きます．<br>
                    逃げるものは追いたくなるのが人間というもの．<br>
                    メイプちゃんはウサギを追いかけることにしました．<br>
                    <br>
                    さて，それでは皆さんもメイプちゃんと一緒に不思議な応物の国を探検することにしましょう！
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        align-self="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/op-3.png"><br>
                    </v-col>
                   </v-row>    
                  </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>

            <h3 class="ex_subtitle my-12 pl-6">応物の国へのとびら</h3>

            <v-row no-gutters>
              <template>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                  align="center"
                >
                <nuxt-link :to="{ name: 'ai', params: {id: id} }">
                <div class="door-box" ontouchstart="">
                  <img src="../assets/img/door/door-ai.png">
                  <img src="../assets/img/door/door-open-ai.png" class="active">
                </div>
                </nuxt-link>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                  align="center"
                >
                <nuxt-link :to="{ name: 'noukagaku', params: {id: id} }">
                <div class="door-box" ontouchstart="">
                  <img src="../assets/img/door/door-noukagaku.png">
                  <img src="../assets/img/door/door-open-brain.png" class="active">
                </div>
                </nuxt-link>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                  align="center"
                >
                <nuxt-link :to="{ name: 'bussei', params: {id: id} }">
                <div class="door-box" ontouchstart="">
                <img src="../assets/img/door/door-bussei.png">
                <img src="../assets/img/door/door-open-bussei.png" class="active">
                </div>
                </nuxt-link>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                  align="center"
                >
                <nuxt-link :to="{ name: 'hikari', params: {id: id} }">
                <div class="door-box" ontouchstart="">
                <img src="../assets/img/door/door-hikari.png">
                <img src="../assets/img/door/door-open-hikari.png" class="active">
                </div>
                </nuxt-link>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                  align="center"
                >
                <nuxt-link :to="{ name: 'cpu', params: {id: id} }">
                <div class="door-box" ontouchstart="">
                <img src="../assets/img/door/door-cpu.png">
                <img src="../assets/img/door/door-open-cpu.png" class="active">
                </div>
                </nuxt-link>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                  align="center"
                >
                <nuxt-link :to="{ name: 'art', params: {id: id} }">
                <div class="door-box" ontouchstart="">
                <img src="../assets/img/door/door-art.png">
                <img src="../assets/img/door/door-open-art.png" class="active">
                </div>
                </nuxt-link>
                </v-col>
              </template>
            </v-row>

            <a href="https://discord.gg/HxZcdX8">
            <div class="door-box discord my-12" ontouchstart="">
                <img src="../assets/img/door/door-discord.png">
                <img src="../assets/img/door/door-open-discord.png" class="active">
            </div>
            </a>

            <template>
              <v-expansion-panels class="my-4" light>
                <v-expansion-panel>
                  <div class="panel">
                  <v-expansion-panel-header class="font-weight-bold panel_title">エピローグ</v-expansion-panel-header>
                  <v-expansion-panel-content>
                                       <v-row justify="center">
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        不思議な応物の国を思う存分楽しんだめいぷちゃん．<br>
                        思い返せばいろいろなことがありました．<br>
                        「数学と物理のこと，少しだけ楽しく思えたかも」<br>
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/ed-1.png"><br>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                       「そうだわ，ウサギ！」
                        メイプちゃんは初心に戻りました．<br>
                        「でもあんなに足が速いウサギ，どうやって捕まえたら良いのかしら」<br>
                        頭を抱えていると，メイプちゃんはポケットににんじんクッキーが入っていることに気付きます．<br>
                        「これだわ！」<br>
                        メイプちゃんはにんじんクッキーでウサギを誘い出します．<br>
                        「美味しいにんじんクッキー，美味しいにんじんクッキーはいかがですか〜？」<br>

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/ed-2.png"><br>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                    >
                    <p class="sentence mb-0">  
                     どこからともなく現れたウサギをメイプちゃんはえいっと捕まえます．
                    「やったわ！ねえウサギさん，そんなに急いでどこへ，，ってあれ？？」<br>
                    ウサギを捕まえて喜ぶのも束の間，メイプちゃんの目の前には<br>
                    「GAME COMPLETE」<br>
                    の文字．<br>
                    「メイプったら，すっかり夢中だったわね！」<br>
                    今度は目の前にお姉ちゃんがいると思ったら，どうやら元のお部屋に戻ってきたようです．<br>
                    「私，夢でも見ていたのかしら？」<br>
                    メイプちゃんがぽかんとしていると，お姉ちゃんが<br>
                    「何言ってるの！夢じゃなくてVRよ！」<br>
                    と教えてくれました．<br>
                    メイプちゃんの机の上にはやりかけの宿題とVRゴーグル，そして少しかじったにんじんクッキーが置いてありました．
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        align-self="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/ed-3.png"><br>
                    </v-col>
                   </v-row>    








                  </v-expansion-panel-content>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>

             <template>
        <v-card
          class="px-12 my-6 card"
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

            <p class="back mt-12">＞＞<nuxt-link :to="{ name: 'index', params: {id: id} }" class="back-link">トップページ</nuxt-link>へもどる</p>


        </v-container>
    </v-content>
</template>

<style>
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

.panel{
  background-color: #F7F6E8;
  border: 8px double black;
}

.panel_title{
  font-size: 1.3em;
}

.ex_subtitle{
  border-left: solid 2px #F7F6E8;
  border-bottom: solid 1px #F7F6E8;
  padding: 5px 10px;
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

.sentence-div{
    background-color: #F7F6E8;
    display: inline-block;
}

.sentence{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

.img-div{
    background-color: #F7F6E8;
    display: inline-block;
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

.discord{
  float: right;
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
    layout: 'jikken'
}
</script>