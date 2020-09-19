<template>
    <v-content class="py-0">
        <v-container class="py-0"> 
            <p class="sub-tenji-bussei font-weight-bold"><nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link-bussei">展示</nuxt-link>＞</p>
            <h1 class="my-12 title-bussei">物性</h1>

            <p class="contents font-weight-bold" @click="$vuetify.goTo('#linear')">- <span class="underline">超伝導リニア</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#nitrogen')">- <span class="underline">液体酸素</span></p>

            <v-row justify="center" class="ehon1 mt-12">
                <template>
                    <v-col
                        cols="12"
                        md="8"
                       
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        メイプちゃんは気づくと，駅にいました．<br>
駅には電車が停まっていますが，車掌はいません．<br>
しばらくすると，空から白い煙が降りてきました．<br>
するとなんと、電車が浮き上がったではありませんか！<br>
ふと気づくとメイプちゃんの服装は車掌さんの制服になっていました．<br>
「これって私に乗れってことなの？」<br>
メイプちゃんが戸惑っていると、<br>
「間も無く発車します」<br>
とアナウンスが入ったので，急いでこの不思議な電車に入ると<br>
発車ベルが鳴り響き，ぐんと後ろから電車を押されて，発車しました．

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/bussei-1.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <h2 class="my-8 jikken-heading" id="linear">超伝導リニア</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">超伝導体物質を液体窒素で冷やし超伝導状態にすることで，磁石で作られたレールの上を浮上しながら走らせることができます．これは超伝導特有の性質であるマイスナー効果とピン止め効果による現象です．現在開発中のリニアモーターカーと原理は違うのですが，簡易なモデルとしてお楽しみください．</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>
                    <a href="../assets/PDF/物性班_1_超伝導リニア.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/物性班_1_超伝導リニア.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    <a href="../assets/PDF/物性班_1_超伝導.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/物性班_1_超伝導.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/Mkc8t94tklk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                       ふわふわ浮かぶ電車はしばらくすると，海に出ました．<br>
「この海は，液体酸素です．磁石を近づけると引きつけることができます．」<br>
アナウンスが入った．<br>
「酸素って，空気中にあるものじゃないの？液体なんて初めて見た！」<br>
メイプちゃんはアナウンスで言われた通り，床に落ちていた磁石を海に向けた．<br>
すると，大きな波のように電車に向かってきました！<br>
「あら，大変！」

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/bussei-2.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="Brutus">液体酸素</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">
                        磁石を鉄に近づけてみると，くっつきます．では，磁石を液体酸素（気体の酸素を十分に冷やして液体にしたもの）に近づけてみると，どのようになるでしょうか？<br>
                        この展示では，常磁性というものに注目してみたいと思います．
                    </p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/物性班_2_常磁性.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/物性班_2_常磁性.png" ontouchstart="" class="img_rink mr-4">
                    </a>
                    <a href="../assets/PDF/物性班_2_磁性.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/物性班_2_磁性.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/sAXD89vyzq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        そのあとすぐに電車はトンネルに入りました．そのおかげでメイプちゃんは無事に終点まで着くことができるのでした．<br>
<br>
「この浮かぶ電車とても速いのね．私の世界でも作れないかしら．．」<br>
明日物理の先生に聞いてみようと思うメイプちゃんなのでした．

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/bussei-3.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <p class="back">＞＞<nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link">実験一覧ページ</nuxt-link>へもどる</p>
           


        </v-container>
    </v-content>
</template>

<style>
.title-bussei {
  position: relative;
  padding: 0px 5px 4px 60px;
  font-size: 36px;
  color: #5AFF8C;
  line-height: 50px;
  margin-left: 0.5em;
  border-bottom: black double 4px;
}

.title-bussei:before {
  content: "";
  display: inline-block;
  position: absolute;
  padding: 0em;
  background: #5AFF8C;
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
  background-image: url('../assets/img/icon/icon-bussei.png');
  background-size: 120%;
  background-position: center;
}

.sub-tenji-bussei{
    font-size: 0.8em;
    color: #5AFF8C;
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

.live-jikken-bussei{
    border-left: solid 6px #5AFF8C;
    padding: 0 10px;
    color: #5AFF8C;
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

.back-link-bussei{
    color: #5AFF8C;
}

.back-link-bussei:link,
.back-link-bussei:active,
.back-link-bussei:visited,
.back-link-bussei:hover{
    color: #5AFF8C;
}

.underline {
    border-bottom: solid 2px;
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