<template>
    <v-content class="py-0">
        <v-container class="py-0"> 
            <p class="sub-tenji-art font-weight-bold"><nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link-art">展示</nuxt-link>＞</p>
            <h1 class="my-12 title-art">芸術表現</h1>

            <p class="contents font-weight-bold" @click="$vuetify.goTo('#pulse')">- <span class="underline">パルスと音高</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#piano')">- <span class="underline">Sparta Piano</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#pm')">- <span class="underline">プロジェクションマッピング</span></p>

            <a href="https://youtu.be/HQftPTCIqUo" class="btn-flat-border mr-8 mb-4 ml-4" ontouchstart=""><span class="font-weight-bold">ライブ実験</span>(@YouTube Live)</a>
            <div class="live-date mt-2 ml-4">
                <p class="live-date-letter font-weight-bold">20日 13:30-14:00</p>
                <p class="live-date-letter font-weight-bold">21日 14:30-15:00</p>
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
                       どんどんと空が暗くなり，雨が降り始めました．<br>
メイプちゃんは急いで近くにあった古びた洋館に駆け込みました．<br>
洋館内には不思議な音楽が鳴り響いていて，とても不気味です．<br>
外の雨の音も，最初は「ぽつん，ぽつん」と言う音だったのですが，それが段々とテンポが速くなり，ついには，機械音のような高音へと変化していきました．

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/art-1.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <h2 class="my-8 jikken-heading" id="pulse">パルスと音高</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">音を配置した作品です．あなたの音楽体験に深みを．</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/芸術表現班_1_パルスと音高.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/芸術表現班_1_パルスと音高.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/B9k-69BFIiE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
とある部屋に入ると，そこにはピアノが一台置いてありました．<br>
すると，ピアノがメイプちゃんに話しかけてきたのです．<br>
「ねえねえ，あなた．ピアノを弾くのは上手かしら？」<br>
メイプちゃんはピアノを弾いたことがありませんでした．<br>
せっかくなら私を弾いてみない？<br>
外は雨だし，少しくらいならいいかなと思いピアノを弾こうとしました．<br>
しかし，音が出ません．<br>
「ダメねえ．あなた，素人でしょ？私は，上手に弾ける人にしか音を出さないのよ．」<br>
なんて意地悪なピアノだろうとメイプちゃんは思いました．<br>
「いいわ．私が特訓してあげる．いい，言う通りに弾くのよ．」

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/art-2.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="piano">Sparta Piano</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">ピアノを演奏するときの筋電を計測して，演奏しているときのあなたの腕の状態に応じて音出力が変化します．同じ曲を弾いていても，人によって結果が異なったり，同じ人でも昨日と今日とでは反応が違うかもしれません．普段演奏しながら主観的には気づきにくい身体の情報を拾うためのピアノです.</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/芸術表現班_2_sparta_piano.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/芸術表現班_2_sparta_piano.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/kN6IMtTmDhI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
それから数時間ほどメイプちゃんは特訓を受けると，次第にピアノの音が出るようになりました．<br>
「あら，上手になったじゃない？じゃあ私が何も言うことはないわね．」<br>
そう言い残すと，ピアノは全く喋らなくなってしまいました．<br>
<br>
窓の外を見ると明かりが差していました．どうやら雨が止んだようです．<br>
部屋から出ようとして，メイプちゃんは気になるものを見つけました．<br>
「あら？あれはなにかしら？」<br>
そこには本らしきものがありました．<br>
しかしながら，その本らしきものはただの板で，ページをめくることなんてできません．<br>
「なあんだ．めくれない本なんて本とは呼べないわ．」<br>
がっかりしたメイプちゃんがおもむろに手をふると<br>
なんとページをめくることができました．<br>


                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/art-3.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="pm">プロジェクションマッピング </h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">立てかけたノートの前に立ち，ページをめくる動作をすると，本物の絵本のように映像が変化します.実際のノートを用いながら，そこに現れる絵は動いたり光ったり，実際の絵本ではありえない動きをします．</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/芸術表現班_3_プロジェクションマッピング.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/芸術表現班_3_プロジェクションマッピング.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/70wPUaz3Otk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </v-col>
                </template>
            </v-row>

            
            
     
   
   
   
   
                <v-row justify="center" class="ehon3 my-12">
                <template>
                    <v-col
                        cols="12"
                        
                        class="sentence-div pa-0"
                        align-self="center"
                    >
                    <p class="sentence mb-0">  
                        ページをめくり続けていると応物の世界の地図が出てきました．<br>
「やった．これを見ながら探検すれば出口が見つかるかも！」<br>
地図の写真を撮ってメイプちゃんは館を後にしました．

                    </p>

                    </v-col>
                </template>
            </v-row>

            <p class="back">＞＞<nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link">実験一覧ページ</nuxt-link>へもどる</p>
           


        </v-container>
    </v-content>
</template>

<style>
.title-art {
  position: relative;
  padding: 0px 5px 4px 60px;
  font-size: 36px;
  color: #FF4588;
  line-height: 50px;
  margin-left: 0.5em;
  border-bottom: black double 4px;
}

.title-art:before {
  content: "";
  display: inline-block;
  position: absolute;
  padding: 0em;
  background: #FF4588;
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
  background-image: url('../assets/img/icon/icon-art.png');
  background-size: 120%;
  background-position: center;
}

.sub-tenji-art{
    font-size: 0.8em;
    color: #FF4588;
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

.live-jikken-art{
    border-left: solid 6px#FF4588;
    padding: 0 10px;
    color: #FF4588;
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

.back-link-art{
    color: #FF4588;
}

.back-link-art:link,
.back-link-art:active,
.back-link-art:visited,
.back-link-art:hover{
    color: #FF4588;
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