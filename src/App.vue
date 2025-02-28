<template>
  <!-- <div class="sign contentContainer">
    <div class="">This page is working in progress.</div>
    <div class="">Please wait for a while.</div>
    <div class="inProgress"></div>
  </div> -->
  <div class="articleTitleContainer contentContainer">
    <div class="articleTitle">
      <span class="colorStress">CLEA:</span>
    </div>
    <div class="articleTitle subTitle">
      <span class="colorStress">C</span>losed-<span class="colorStress">L</span
      >oop <span class="colorStress">E</span>mbodied
      <span class="colorStress">A</span>gent for Enhancing Task Execution in
      Dynamic Environments
    </div>

    <div class="arthorNameLine">
      <div class="arthorNameContainer">
        <span class="arthorName">Mingcong Lei</span><span class="sup">*</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Ge Wang</span>
        <span class="sup">*</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yiming Zhao, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Zhixin Mai, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Qing Zhao, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Shuguang Cui, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yatong Han</span
        ><span class="sup">&dagger;</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">and Jinke Ren</span
        ><span class="sup">&dagger;</span>
      </div>
    </div>
    <div class="expression">
      <div class="expressionItem">
        <span class="sup"> * </span
        ><span class="expressionText">Equal Contribution, </span>
      </div>
      <div class="expressionItem">
        <span class="sup"> &dagger; </span
        ><span class="expressionText">Corresponding Author</span>
      </div>
    </div>

    <!-- <div class="university">
      <div class="universityContainer">
        <span class="sup"> 1 </span
        ><span class="universityName">universityName.universityName1, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 2 </span
        ><span class="universityName">universityName.universityName2, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 3 </span
        ><span class="universityName">universityName.universityName3, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 4 </span
        ><span class="universityName">universityName.universityName4, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 5 </span
        ><span class="universityName">universityName.universityName5, </span>
      </div>
    </div> -->
    <!-- <div class="buttonGroup">
      <button class="button">
        <div class="pdfIcon"></div>
        buttonGroup.pdfButton
      </button>
      <button class="button">
        <div class="gitHubIcon"></div>
        buttonGroup.gitHubButton
      </button>
      <button class="button">
        <div class="huggingFaceIcon"></div>
        buttonGroup.huggingFaceButton
      </button>
    </div> -->
  </div>
  <!-- <div class="videoDisplayContainer contentContainer">
    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="./assets/mp4/test.mp4" type="video/mp4" />
    </video>

    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="./assets/mp4/test1.mp4" type="video/mp4" />
    </video>

    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="./assets/mp4/test2.mp4" type="video/mp4" />
    </video>
  </div> -->
  <!-- <div class="articleMainBodyContainer contentContainer">
    <div class="contentMainTitle">BlockTitle</div>
    <div class="contentSubTitle">BlockSubtitle</div>
    <div class="content">
      We xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:
      (1) xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx, (2)
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      (3)
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </div>
    <div class="codeSpace">
      <pre>
        
        <code>
@article{ xxxxxxxxxxx, 
  title={titleCodeMode},
  author={ {authore} name list of all authors}, 
  journal = {arXiv preprint arXiv:arxivCODE}, year={2025}, 
}
        </code>
      </pre>
    </div>
  </div> -->
  <div class="forecast contentContainer">
    The body of paper is comming soon...
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  /* word setting */
  font-family: "Alibaba-puhui-regular";
}
* {
  word-break: normal;
  word-wrap: break-word;
}
/* font */
@font-face {
  font-family: "Alibaba-puhui-regular";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-medium";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-light";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Light.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-heavy";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Heavy.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-bold";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Bold.ttf") format("truetype");
}

.contentContainer {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 960px;
  height: fit-content;
  padding: 5vmax 0;
}
.contentContainer:nth-child(even) {
  background-color: #f0f0f0;
}
.contentContainer:nth-child(odd) {
  background-color: #ffffff;
}

.forecast {
  display: flex;
  height: 50vmax;
  font-family: "Alibaba-puhui-heavy";
  font-size: 3vmax;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
}
.inProgress {
  display: flex;
  width: 15vmax;
  height: 15vmax;
  background-image: url("@/assets/icon/component/road.png");
  background-size: contain;
  margin-left: 1vmax;
}

.articleTitleContainer {
  padding-top: 5vmax;
}
.articleTitle {
  /* display: flex; */
  /* flex-direction: column; */
  box-sizing: border-box;
  font-family: "Alibaba-puhui-bold";
  font-size: 5vmax;
  color: #363636;
  justify-content: center;
  line-height: 1.5;
  text-align: center;
  padding: 0 15%;
}
.subTitle {
  font-size: 3vmax;
}

.colorStress {
  display: inline;
  color: #209cee;
}

.arthorNameLine {
  display: flex;
  width: 100%;
  font-family: "Alibaba-puhui-medium";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 25%;
  margin: 2.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.5vmax;
  justify-content: center;
}
.arthorNameContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 0.5vmax;
}
.arthorName {
  color: #209cee;
}
.sup {
  display: flex;
  vertical-align: top;
  flex-shrink: 0;
  font-size: 75%;
}
.expression {
  display: flex;
  margin: 1vmax 0 0;
  justify-content: center;
}
.expressionItem {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0 0.25vmax;
}
.expressionText {
  font-size: 1vmax;
  font-family: "Alibaba-puhui-regular";
}
.university {
  display: flex;
  width: 100%;
  font-family: "Alibaba-puhui-regular";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 25%;
  margin: 1.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.2vmax;
  justify-content: center;
}
.universityContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 1vmax;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  margin: 1.5vmax 0 2.5vmax;
}
.button {
  display: flex;
  height: 2vmax;
  justify-content: center;
  align-items: center;
  border-radius: 1.5vmax;
  border: #363636 solid 0px;
  background-color: #363636;
  color: #ffffff;
  padding: 1.5vmax;
  margin: 0.5vmax;
  font-size: 1vmax;
}
.pdfIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/pdf.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
.gitHubIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/github.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
.huggingFaceIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/huggingface.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
.videoDisplayContainer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
}
.videoDisplayContainer video {
  height: 15vmax;
  aspect-ratio: 16/9;
  margin: 0 0.5vmax;
}

.articleMainBodyContainer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 5vmax 25%;
}
.contentMainTitle {
  font-family: "Alibaba-puhui-bold";
  font-size: 2vmax;
  color: #363636;
  margin: 0 0 1vmax;
}
.contentSubTitle {
  font-family: "Alibaba-puhui-bold";
  font-size: 1.25vmax;
  color: #363636;
  margin: 0 0 1.5vmax;
}
.content {
  display: flex;
  width: 100%;
  font-family: "Alibaba-puhui-regular";
  font-size: 1vmax;
  color: #363636;
  line-height: 1.5;
  margin: 0 0 1vmax;
}
.codeSpace {
  display: flex;
  width: 100%;
  /* justify-content: center; */
  overflow-x: scroll;
}
pre {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: #d6d6d6;
  padding: 1vmax 0;
}
code {
  display: flex;
  width: 100%;
  font-family: NSimSun;
  font-size: 0.8vmax;
  color: #363636;
  line-height: 1.5;
  padding: 0.5vmax 3vmax;
}
</style>
