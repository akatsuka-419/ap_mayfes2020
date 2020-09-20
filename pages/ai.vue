<template>
    <v-content class="py-0">
        <v-container class="py-0"> 
            <p class="sub-tenji-ai font-weight-bold"><nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link-ai">展示</nuxt-link>＞</p>
            <h1 class="my-12 title-ai">機械学習</h1>

            <p class="contents font-weight-bold" @click="$vuetify.goTo('#chase')">- <span class="underline">顔追跡ゲーム</span></p>
            <p class="contents font-weight-bold pb-4" @click="$vuetify.goTo('#Brutus')">- <span class="underline">ブルータスAI</span></p>
            
            <a href="https://youtu.be/95lwxVRp7Cc" class="btn-flat-border mr-8 mb-4 ml-4" ontouchstart=""><span class="font-weight-bold">ライブ実験</span>(@YouTube Live)</a>
            <div class="live-date mt-2 ml-4">
                <p class="live-date-letter font-weight-bold">20日 14:30-15:00, 15:30-16:00</p>
                <p class="live-date-letter font-weight-bold">21日 10:30-11:00, 13:30-14:00</p>
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
                        メイプちゃんは気づくとゲームセンターにいました．<br>
                        <br>
                        「あれ，コントローラーがないわね」<br>
                        「カオ ヲ ミセテクダサイ」<br>
                        「あれ，手で操作するんじゃないの？」<br>
                        「イイエ，イマデハ テ ヲ ツカウ ヒト イマセン」<br>
                        「リョウリモ ，キカイ 二 タノメバ ツクレマス．メール ダッテ メ ヲ ウゴカシテ カケマス．フツウ ノ コトデス．」<br>
                        「私の世界よりも時代が進んでるわね・・」<br>
                        「とりあえずこのゲームで遊んでみようかしら」<br>
                        メイプちゃんは，このゲームに夢中になってしまいました．
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/ai-1.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <h2 class="my-8 jikken-heading" id="chase">顔追跡ゲーム</h2>
            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">顔の動きに連動してキャラを操作するゲームを作りました. リンク先のGitHubページからダウンロードが可能です.</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    
                    <a href="https://drive.google.com/file/d/1nywJo5PktYJEZDPbsd_rdmqiS19HO0nQ/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/機械学習班_1_顔追跡ゲーム.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    
                    <a href="https://drive.google.com/file/d/1nfcnQs-8OBQ9Kvm-Qi6WgU0GTCstnWE4/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/機械学習班_1_顔のトラッキング.png" ontouchstart="" class="img_rink">
                    </a>

                    <a href="https://github.com/kougaku-hakurankai-vision/for_public" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">顔追跡ゲームをダウンロード</a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/Pzd8r3NxC8E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                </v-col>
                </template>
            </v-row>

            <h3 class="live-jikken-ai my-6">ライブ実験</h3>
            <p class="live-jikken-date-ai font-weight-bold">9月20日　15:30-16:00</p>
            <p class="live-jikken-date-ai font-weight-bold">9月21日　10:30-11:00</p>

            
            
                <v-row justify="center" class="ehon2 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        「ソコ ノ ニンゲン」<br>
                        メイプちゃんが振り向くともう一台のゲーム機がありました．<br>
                        「ワタシハ，ヒャクネン ニンゲン 二 マケタコト ナイ．モウ ダレモ ゲーム ヲ シテクレナイ．」<br>
                        「ズットズット ヒマ デ シカタガナイ．タタカエ．」<br>
                        「機械なのに暇だなんて思うの？悪いけど，私急いでるの．」<br>
                        メイプちゃんはその場から離れようとすると，どこからかアームが出てきて，捕まってしまいました．<br>
                        「ニガサナイ．ワタシ 二 カテル マデ カエサナイ．」<br>
                        「そんな・・」
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/ai-2.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="Brutus">ブルータスAI</h2>
            <v-row justify="center">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="fsubtitle-1">ブルータスというボードゲームを, AIに学習させました．あなたはこのAIに勝てますか？</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="https://drive.google.com/file/d/1HEQcLFDcaoNfb1PQLEtMiYnWcXAzLdbq/view?usp=sharing" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/機械学習班_2_ブルータスAI.png" ontouchstart="" class="img_rink">
                    </a>

                    <a href="https://brutus-mayfes.herokuapp.com" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">ブルータスAIと対戦する</a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/ZGVpPtTp63k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                </v-col>
                </template>
            </v-row>

            <h3 class="live-jikken-ai my-6">ライブ実験</h3>
            <p class="live-jikken-date-ai font-weight-bold">9月20日　14:30-15:00</p>
            <p class="live-jikken-date-ai font-weight-bold">9月21日　13:30-14:00</p>


                <v-row justify="center" class="ehon3 my-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                        
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        それから何十回対戦したのでしょう．メイプちゃんは一度も勝つことができません．<br>
                        「ああ，私ずっとこのままゲームをしてなきゃいけないのかしら・・」<br>
                        その時，ウサギが突然現れました．<br>
                        「あ，あのときのウサギだ！」<br>
                        走ってきたウサギはコードにつまずき, その拍子にコンセントが抜けてしまいました．<br>
                        「ア．．レ．，オカシ．．イ．．」<br>
                        とゲーム機の電源が落ちてしまいました．<br>
                        ウサギはそのままゲームセンターの外へ跳んでいきました．<br>
                        メイプちゃんはすぐに後を追いかけましたが，すぐに見失ってしまいました．
                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/ai-3.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <p class="back">＞＞<nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link">実験一覧ページ</nuxt-link>へもどる</p>
           


        </v-container>
    </v-content>
</template>

<style>
.title-ai {
  position: relative;
  padding: 0px 5px 4px 60px;
  font-size: 36px;
  color: #FB7BFF;
  line-height: 50px;
  margin-left: 0.5em;
  border-bottom: black double 4px;
}

.title-ai:before {
  content: "";
  display: inline-block;
  position: absolute;
  padding: 0em;
  background: #FB7BFF;
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
  background-image: url('../assets/img/icon/icon-vision.png');
  background-size: 120%;
  background-position: center;
}

.sub-tenji-ai{
    font-size: 0.8em;
    color: #FB7BFF;
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

.live-jikken-ai{
    border-left: solid 6px #FB7BFF;
    padding: 0 10px;
    color: #FB7BFF;
}

.live-jikken-date-ai{
    letter-spacing: 0.1em;
    font-size: 1.2em;
    color: #FB7BFF;
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

.back-link-ai{
    color: #FB7BFF;
}

.back-link-ai:link,
.back-link-ai:active,
.back-link-ai:visited,
.back-link-ai:hover{
    color: #FB7BFF;
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