<template>
    <v-content class="py-0">
        <v-container class="py-0"> 
            <p class="sub-tenji-cpu font-weight-bold"><nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link-cpu">展示</nuxt-link>＞</p>
            <h1 class="my-12 title-cpu">CPU</h1>

            <p class="contents font-weight-bold" @click="$vuetify.goTo('#logic')">- <span class="underline">論理素子</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#switch')">- <span class="underline">スイッチング</span></p>
            <p class="contents font-weight-bold" @click="$vuetify.goTo('#cpu')">- <span class="underline">CPU</span></p>
            
            <a href="https://youtu.be/HQftPTCIqUo" class="btn-flat-border mr-8 mb-4 ml-4" ontouchstart=""><span class="font-weight-bold">ライブ実験</span>(@YouTube Live)</a>
            <div class="live-date mt-2 ml-4">
                <p class="live-date-letter font-weight-bold">20日 11:30-12:00</p>
                <p class="live-date-letter font-weight-bold">21日 12:30-13:00</p>
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
                        メイプちゃんは，広いホールに来ていました．<br>
ホールの真ん中には椅子がぽつんと１つだけ置いてあります<br>
(ビー)<br>
ブザーが鳴り響くと<br>
「ご来場のみなさまへお知らせです．間も無く論理素子たちによります，CPU劇場が始まります．ご覧になる方は席にお座りください．」<br>
とアナウンスが流れた．<br>
メイプちゃんはついつい席に座ってしまいました．なにせお客さんはメイプちゃんだけしかいないのですから．<br>
<br>
ステージ上が明るくなると，舞台袖からてくてくと明るい歌を歌いながら論理素子たちがやって来ました．<br>
「僕たちは〜♪論理素子〜♪」<br>
「僕の名前はAND素子♪」<br>
「私の名前はOR素子♪」<br>
「俺の名前はNOT素子♪」<br>
「よ〜ろしくね〜♪」<br>
論理素子たちは大きな声で歌い続ける．<br>
後からわらわらと奥から他の論理素子がやってきて，「NAND素子やXOR素子〜♪他の奴らも忘れちゃいけないぜ〜♪」<br>
と歌い始めました，ステージの上はまるで合唱団．<br>
すると，年老いた論理素子が<br>
「おっほん♪そう慌てるでない〜♪ワシが覚えておる♪」<br>
と歌い始めた．<br>
「フリップフロップさん♪あなたは〜♪決まった時間になると♪忘れてしまうじゃないか〜♪」<br>
「おほほ♪時には〜忘れることも〜♪大切なことなのじゃよ〜♪ところでお前さん誰じゃ♪」

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/cpu-1.png" width="200px">
                    </v-col>
                </template>
            </v-row>

            <h2 class="my-8 jikken-heading" id="logic">論理素子</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">論理素子について解説しています.</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/CPU班_1_論理素子.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/CPU班_1_論理素子.png" ontouchstart="" class="img_rink">
                    </a>

                    <a href="https://kazuhikoarase.github.io/simcirjs/#-MGCPN_6xtXRusOo9Ibk" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">2進数と10進数の対応</a>
                    <a href="https://kazuhikoarase.github.io/simcirjs/#-MGCP-qz7OpjPVFm_-7V" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">AND素子の振る舞い</a>
                    <a href="http://www.cs.shinshu-u.ac.jp/Lecture/LogicCirc/chap7/chap7.html" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">様々な素子の振る舞い</a>
                    <a href="https://kazuhikoarase.github.io/simcirjs/#-MGCOp6xoKtivc4A5J8Q" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">DFF(Delay flip-flop)</a>
                    <a href="https://kazuhikoarase.github.io/simcirjs/#-MGCPaJjul4wkugYyu6P" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">一桁の足し算の回路</a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                <iframe src="https://www.youtube.com/embed/9mcVDrscsMY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        その時です, 突然奥から三角の論理素子が出てきたかと思うと, 舞台上の「上演中」の札の横に「準備中」の札も出てきました. <br>
「こら！NOT素子！お前がいてくれないとスイッチにならんだろ！」<br>
スタッフの人が三角の素子を連れ戻すと再び「上演中」の札だけになりました. 

                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                    >
                    <img src="../assets/img/ehon/cpu-2.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="switch">スイッチング</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">論理回路を用いてスイッチングを行う方法について解説しています.</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/CPU班_2_スイッチング.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/CPU班_2_スイッチング.png" ontouchstart="" class="img_rink">
                    </a>

                    <a href="https://kazuhikoarase.github.io/simcirjs/#-MGCPifvxg7LhJoNXvVp" class="url font-weight-bold mt-6" target="_blank" rel="noopener" ontouchstart="">論理回路で実現したスイッチ</a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                    <iframe src="https://www.youtube.com/embed/2_T-cN3qHBs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                   ステージ上の論理素子たちは踊り続けます．<br>
「３人寄れば文殊の知恵，僕らが寄れば大天才！」<br>
「合体！」<br>
論理素子たちは合体して，一つの板になりました．<br>
「足し算，引き算なんでもござれ♪」<br>
「月の軌道だって計算できる♪データのやり取りもお任せあれ♪」


                    </p>

                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        align="center"
                        class="img-div"
                        align-self="center"
                    >
                    <img src="../assets/img/ehon/cpu-3.png" width="200px">
                    </v-col>
                </template>
            </v-row>


            <h2 class="mb-8 jikken-heading" id="cpu">CPU</h2>
            <v-row justify="center" class="ml-12">
                <template>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <p class="subtitle-1">CPUの動作について解説しています.</p>
                    <p class="mt-6 subtitle-2">詳しい解説はこちら</p>

                    <a href="../assets/PDF/CPU班_3_CPU.pdf" target="_blank" rel="noopener">
                    <img src="../assets/img/PDF_tmb/CPU班_3_CPU.png" ontouchstart="" class="img_rink">
                    </a>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    align="center"
                >
                <div class="yt-wrapper">
                <iframe src="https://www.youtube.com/embed/Qxpj5RU3dq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                       「ここは不思議な応物の国♪」<br>
「どうぞみんな楽しんでいってね♪」<br>
ちゃんちゃん！という音と共にステージの幕がおりた．<br>
「私のスマホの中でも論理素子たちが頑張ってるのかしら」<br>
そう思いながら，ついつい拍手してしまうメイプちゃんでした．<br>

                    </p>

                    </v-col>
                </template>
            </v-row>

            <p class="back">＞＞<nuxt-link :to="{ name: 'ex-group', params: {id: id} }" class="back-link">実験一覧ページ</nuxt-link>へもどる</p>
           


        </v-container>
    </v-content>
</template>

<style>
.title-cpu {
  position: relative;
  padding: 0px 5px 4px 60px;
  font-size: 36px;
  color: #A064FF;
  line-height: 50px;
  margin-left: 0.5em;
  border-bottom: black double 4px;
}

.title-cpu:before {
  content: "";
  display: inline-block;
  position: absolute;
  padding: 0em;
  background: #A064FF;
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
  background-image: url('../assets/img/icon/icon-cpu.png');
  background-size: 120%;
  background-position: center;
}

.sub-tenji-cpu{
    font-size: 0.8em;
    color: #A064FF;
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

.live-jikken-cpu{
    border-left: solid 6px #A064FF;
    padding: 0 10px;
    color: #A064FF;
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

.back-link-cpu{
    color: #A064FF;
}

.back-link-cpu:link,
.back-link-cpu:active,
.back-link-cpu:visited,
.back-link-cpu:hover{
    color: #A064FF;
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