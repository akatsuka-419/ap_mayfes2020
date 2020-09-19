<template>
    <v-content class="py-0">
        <v-container class="py-0"> 
            <p class="sub-tenji-hikari font-weight-bold"><nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link-hikari">展示</nuxt-link>＞</p>
            <h1 class="my-12 title-hikari">光</h1>

            <p class="contents font-weight-bold" @click="$vuetify.goTo('#corridor')">- <span class="underline">無限回廊</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#polarizer')">- <span class="underline">偏光板アート</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#spectroscopy')">- <span class="underline">CD分光</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#laser')">- <span class="underline">レーザー通信</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#ghost')">- <span class="underline">Pepper’s Ghost</span></p>
            
            <a href="https://youtu.be/HQftPTCIqUo" class="btn-flat-border mr-8 mb-4 ml-4" ontouchstart=""><span class="font-weight-bold">ライブ実験</span>(@YouTube Live)</a>
            <div class="live-date mt-2 ml-4">
                <p class="live-date-letter font-weight-bold">20日 10:30-11:00</p>
                <p class="live-date-letter font-weight-bold">21日 15:30-16:00</p>
            </div>

            <v-row justify="center" class="ehon1 mt-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        メイプちゃんは長い長い廊下を歩き続けていました．<br>
「全く，いつまで歩けばいいの．．」<br>
その廊下はどこまでも無限に続いているように見えます．
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/hikari-1.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <h2 class="my-8 jikken-heading" id="corridor">無限回廊</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        鏡は光を反射します．鏡が一枚のとき，鏡に向かっていった光は反射されて遠くに飛んでいきます．では，2枚の鏡を向かい合わせてみるとどうなるでしょうか？
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="光班_1_無限回廊.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/光班_1_無限回廊.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                <iframe src="https://www.youtube.com/embed/Q5WFwB4kIik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

           
            
                <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
「ちょっと，そこのあなた止まりなさい！」<br>
どこからともなく声が聞こえたかと思うと突然廊下の扉から手が出て，引きずり込まれました．<br>
その扉の先は薄暗いアトリエになっていました．<br>
そこらにある作品を眺めていると<br>
「ここは私のアトリエよ。光を使った作品が私のテーマ。素敵でしょう。」<br>
それはそれは派手な衣装のクジャクがそこにいました。<br>
<br>
<br>
「さて、キャンパスに絵を書いていくわ。」<br>
「絵の具が見当たらないけど・・」<br>
「大丈夫、大丈夫。絵の具の代わりに光を使って絵を描くの」<br>
すると、あっという間にカラフルな光で描かれた絵画が完成しました。

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/hikari-2.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="polarizer">偏光板アート</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        アクリル板にただセロハンテープを貼っても，色がついて見えたりはしませんよね．しかし，このアクリル版を，偏光板という特殊なシートで挟んであげると，不思議なことに色づいて見えます．この現象の鍵を握っているのが，光の「偏光」です．
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="光班_2_セロハンお絵かき.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/光班_2_セロハンお絵かき.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    <a href="光班_2_理論.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/光班_2_理論.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/vJjkFpbms60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

           





               <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
「すごい！」<br>
「他にも，白い光から色んな色の光を作ることもできるのよ．」<br>
「そんなことできるわけないじゃない！」<br>
「じゃあ見てなさいよ．それ」

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/hikari-3.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="spectroscopy">CD分光</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        CDを用いると，光を色ごとに分解することができます．このように光を色ごとに分解することを「分光」といいます．
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="光班_3_CD分光.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/光班_3_CD分光.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                <iframe src="https://www.youtube.com/embed/9-CSM0ZDl1Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

           



               <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
「ああ、あなたを見ていたら音楽のアイデアも浮かんできたわ。今演奏してあげるわね。えい！」<br>
言うやいなやクジャクは輝きはじめました。すると、離れた位置にあるスピーカーが音楽を奏で始めたではありませんか。<br>
「私はね、頭の中のアイデアを光に変化することができるの。その光を受け取ってスピーカーは演奏し始めたのよ。」<br>


                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/hikari-4.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="laser">レーザー通信</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        「光」で「音」を伝えます
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="光班_4_レーザー通信.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/光班_4_レーザー通信.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/reK-Ddv668U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

          






 <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
「これも何かの縁ですし、私のアシスタントにならない？」<br>
「いえいえ、私元の世界に戻らなきゃいけないの。あれ、このスイッチは何かしら？」<br>
そこにあったスイッチを押して見ると突然あたりが暗くなりました。


                    </p>

                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="ghost">Pepper’s Ghost</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        ディズニーランドのホーンテッドマンションでも用いられている，Pepper’s Ghostという擬似ホログラフィについて解説しています．
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="光班_5_peppers_ghost.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/光班_5_peppers_ghost.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                
                </v-col>
                </template>
            </v-row>

           




                <v-row justify="center" class="ehon3 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        align="center"
                        class="sentence-div"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        さっきまでそこにいたはずのクジャクもいなくなっていました。スイッチをもう一度見ると、そこには「消灯ボタン、押すべからず。私も消えてしまいます。」と書いてありました。
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/hikari-5.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <p class="back">＞＞<nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link">実験一覧ページ</nuxt-link>へもどる</p>
           


        </v-container>
    </v-content>
</template>

<style>
.title-hikari {
  position: relative;
  padding: 0px 5px 4px 60px;
  font-size: 36px;
  color: #00FFEE;
  line-height: 50px;
  margin-left: 0.5em;
  border-bottom: black double 4px;
}

.title-hikari:before {
  content: "";
  display: inline-block;
  position: absolute;
  padding: 0em;
  background: #00FFEE;
  font-weight: 900;
  width: 84px;
  text-align: center;
  height: 84px;
  left: -1em;
  top: 30%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border: solid 2px black; 
  border-radius: 50%;
  background-image: url('../assets/img/icon/icon-hikari.png');
  background-size: 120%;
  background-position: center;
}

.sub-tenji-hikari{
    font-size: 0.8em;
    color: #00FFEE;
    position: absolute;
    top: 2em;
    left: 7.2em;
}

.contents{
    font-size: 30px;
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

.btn-flat-border:hover {
  opacity: 0.7;
  color: black;
}

.live-date{
    display: inline-block;
}

.live-date-letter{
    color: #ff8080;
    font-size: 1.5em;
    line-height: 0.9em;
    letter-spacing: 0.15em;
}

.ehon1{
    border-style: solid;
    border-image: url('../assets/img/ehon/ehon-ue.png') 15.5% 6% / 70px repeat;
    font-size: 1.3em;
    color: black;
    background-color: #F7F6E8;
}

.sentence-div{
    background-color: #F7F6E8;
    display: inline-block;
}

.sentence{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 0.8em;
}

.img-div{
    background-color: #F7F6E8;
    display: inline-block;
}

.jikken-heading{
  font-size: 2em;
  padding:5px 10px;
}

.jikken-heading:before{
  content: url("../assets/img/logo/point.png");
  position: relative;
  top: 5px;
  margin: 0 30px 0 0;
}

.junbityu{
    width: 100%;
}

.live-jikken-hikari{
    border-left: solid 6px #00FFEE;
    padding: 0 10px;
    color: #00FFEE;
}

.live-jikken-date{
    letter-spacing: 0.1em;
    font-size: 1.2em;
}

.ehon2{
    border-style: solid;
    border-image: url('../assets/img/ehon/ehon-body.png') 13% 6% / 70px repeat;
    font-size: 1.3em;
    color: black;
    background-color: #F7F6E8;
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

.back-link-hikari{
    color: #00FFEE;
}

.back-link-hikari:link,
.back-link-hikari:active,
.back-link-hikari:visited,
.back-link-hikari:hover{
    color: #00FFEE;
}

.underline {
    border-bottom: solid 2px;
}

.ehon3{
    border-style: solid;
    border-image: url('../assets/img/ehon/ehon-shita.png') 15.5% 6% / 70px repeat;
    font-size: 1.3em;
    color: black;
    background-color: #F7F6E8;
}


.url{
    letter-spacing: 0.1em;
    font-size: 1.2em;
    display: block;
}
.url:link,
.url:active,
.url:visited,
.url:hover{
    color: white;
}
.yt-wrapper {
  position: relative;
  width: 100%;
}
.yt-wrapper:before {
  content:"";
  display: block;
  padding-top: 56.25%;
}
.yt-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
 
<script>
export default {
    layout: 'jikken'
}
</script>