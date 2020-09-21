<template>
    <v-content class="py-0">
        <v-container class="py-0"> 
            <p class="sub-tenji-noukagaku font-weight-bold"><nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link-noukagaku">展示</nuxt-link>＞</p>
            <h1 class="my-12 title-noukagaku">脳科学</h1>

            <p class="contents font-weight-bold" @click="$vuetify.goTo('#IIT')">- <span class="underline">統合情報理論</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#shounou')">- <span class="underline">小脳実験</span></p>
            <p class="contents font-weight-bold pb-4" @click="$vuetify.goTo('#jiyu')">- <span class="underline">自由エネルギー原理</span></p>
            
            <a href="https://youtu.be/95lwxVRp7Cc" class="btn-flat-border mr-8 mb-4 ml-4" ontouchstart=""><span class="font-weight-bold">ライブ実験</span>(@YouTube Live)</a>
            <div class="live-date mt-2 ml-4">
                <p class="live-date-letter font-weight-bold">20日 12:30-13:00</p>
                <p class="live-date-letter font-weight-bold">21日 11:30-12:00</p>
            </div>

            <v-row justify="center" class="ehon1 mt-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        メイプちゃんは小さな街のなかにいました．<br>
家も，車も全部が小さな街で，まるでメイプちゃんが巨人になったかのような気分でした．<br>
すると，突然どこからともなく大量のねずみ達がやってきて，メイプちゃんは連れ去られてしまいました．<br>
気がつくとそこは裁判所．裁判官も全員ねずみ．<br>
「では，今から脳裁判を行う．」<br>
「我々ねずみ族では，脳についての研究が盛んに行われている．」<br>
「人間のお主なら，脳について我々よりも詳しいと思って呼んだ．」<br>
<br>
ねずみ裁判官A<br>
「ではさっそく質問だ．意識ってなんだ．」<br>
ねずみ裁判官B<br>
「例えば，うとうとしている時は意識があるのか？」<br>
ねずみ裁判官C<br>
「意識にはレベルがあるんじゃないのか．おい，意識のレベルってなんだ．証言しなさい．」<br>
メイプちゃんは思わずポカーンとしてしまいました．<br>
「まあ，確かにうとうとしてる時は意識がないような．．う〜んでも，やっぱり意識はあるのかなあ．意識のレベルって言われてもどうやってそんなのわかるのかしら．．」

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/brain-1.png"  width="200px">
                    </v-col>
                </template>
            </v-row>

            <h2 class="my-8 jikken-heading" id="IIT">統合情報理論</h2>
            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        統合情報理論（IIT）という，「意識」を数学的に扱った理論があります．IITによって，人間の脳を始めとするシステムがどのぐらい意識を持っているかを予想することができます．この展示では，IITにおいてそのシステムがどのぐらい意識を持っているかを表す統合情報量という量を計算します．
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="https://drive.google.com/file/d/17spKU8bDy__GLfBCdHqHwD9JLgC0eUK4/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/脳科学班_1_IIT実験.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    <a href="https://drive.google.com/file/d/10T16YyfsQkKJtedGDNIy1DqNVy-DTq6B/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/脳科学班_1_IIT理論.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/dSUhdMlYfc0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

            
            
                <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        ねずみ裁判官A<br>
「もういい．次の質問に移る．小脳って知ってるか．」<br>
ねずみ裁判官B<br>
「運動調整機能を担っておると言われておるな．」<br>
ねずみ裁判官C<br>
「小脳を模したニューラルネットワークを証言しなさい．」<br>
「そんなこと言われたって．．ニューラルネットワークって何？知らないわよ」<br>
メイプちゃんの頭は混乱してしまいました．

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/brain-2.png"  width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="shounou">小脳実験</h2>
            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        この実験では, 小脳疾患の有無を調べる試験である指鼻試験を, 小脳の構造と等価なニューラルネットワーク(LSM)と2-link-manipulatorのシュミュレーションを用いて実装することを目指しました．
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="https://drive.google.com/file/d/1SAArgtrvkDTNXLwPJ6fmGLmxMmwKcmA5/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/脳科学班_2_小脳実験.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    <a href="https://drive.google.com/file/d/1HEhDUQo1y1khhEfbCDI-HrFCMXd3tY6m/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/脳科学班_2_小脳理論.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/ulZXllorWa8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

         


            <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                       その様子を見ていた，年老いた裁判長と思われるねずみが怒り出し，<br>
「証言を拒否するのか！その娘を牢屋に閉じ込めろ！」<br>
と叫びました．<br>
すると，その呼び声に応じて大量のねずみたちがメイプちゃんに飛びかかりました．<br>
「そんな！なんてむちゃくちゃな裁判なの！」<br>
メイプちゃんは急いで逃げましたが，足元の床がぐらつきます<br>
「その床は脆くてな．ところどころ落ちてしまうことがある．諦めて捕まれ．」<br>
「嫌よ！何としても元の世界に帰るんだから！」<br>
メイプちゃんは無事に出口まで逃げられるのでしょうか．
                    </p>

                    </v-col>

                   
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="jiyu">自由エネルギー原理</h2>
            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        自由エネルギー原理という，認識と行動の統一原理に従って行動するCPUと「ぐらぐら迷路ゲーム」で対戦してみませんか？
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="https://drive.google.com/file/d/1d1syr-XWC7aUAvW0s1li8x09Maql8x4e/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/脳科学班_3_FEP実験.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    <a href="https://drive.google.com/file/d/1dfTpzQ94-EaKd3WhGDowUd8pwsdvbRCI/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/脳科学班_3_FEP理論.png" ontouchstart="" class="img_rink">
                    </a>

                    
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/38Ro8etiAPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

           


            
                <v-row justify="center" class="ehon3 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        ねずみたちが落ちる床をよく観察しながら，メイプちゃんは少しづつ歩を進めていきました．<br>
「頭を使えば簡単ね！」<br>
こうしてメイプちゃんは無事にねずみたちから逃げることができました．<br>
ちょっと得意気な顔のメイプちゃんなのでした．
                    </p>

                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/brain-3.png"  width="200px">
                    </v-col>
                  
                </template>
            </v-row>

            <p class="back">＞＞<nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link">実験一覧ページ</nuxt-link>へもどる</p>
           


        </v-container>
    </v-content>
</template>

<style>
.title-noukagaku {
  position: relative;
  padding: 0px 5px 4px 60px;
  font-size: 36px;
  color: #FFEE4D;
  line-height: 50px;
  margin-left: 0.5em;
  border-bottom: black double 4px;
}

.title-noukagaku:before {
  content: "";
  display: inline-block;
  position: absolute;
  padding: 0em;
  background: #FFEE4D;
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
  background-image: url('../assets/img/icon/icon-brain.png');
  background-size: 120%;
  background-position: center;
}

.sub-tenji-noukagaku{
    font-size: 0.8em;
    color: #FFEE4D;
    position: absolute;
    top: 2em;
    left: 7.2em;
}

.contents{
    font-size: 20px;
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
    line-height: 1.3em;
    letter-spacing: 0.15em;
}

.ehon1{
    border-style: solid;
    border-image: url('../assets/img/ehon/ehon-ue.png') 15.5% 6% / 40px repeat;
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
    font-size: 0.7em;
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

.live-jikken-noukagaku{
    border-left: solid 6px #FFEE4D;
    padding: 0 10px;
    color: #FFEE4D;
}

.live-jikken-date{
    letter-spacing: 0.1em;
    font-size: 1.2em;
}

.ehon2{
    border-style: solid;
    border-image: url('../assets/img/ehon/ehon-body.png') 13% 6% / 40px repeat;
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

.back-link-noukagaku{
    color: #FFEE4D;
}

.back-link-noukagaku:link,
.back-link-noukagaku:active,
.back-link-noukagaku:visited,
.back-link-noukagaku:hover{
    color: #FFEE4D;
}

.underline {
    border-bottom: solid 2px;
    font-size: 20px;
}

.ehon3{
    border-style: solid;
    border-image: url('../assets/img/ehon/ehon-shita.png') 15.5% 6% / 40px repeat;
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