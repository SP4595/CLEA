<template>
  <div class="sign contentContainer">
    <div class="">This page is working in progress.</div>
    <div class="">Please wait for a while.</div>
    <div class="inProgress"></div>
  </div>
  <div class="articleTitleContainer contentContainer">
    <div class="articleTitle">
      <div>Title</div>
    </div>
    <div class="articleTitle subTitle">
      <div>Subtitle</div>
    </div>

    <div class="arthorNameLine">
      <div class="arthorNameContainer">
        <span class="arthorName">authorList.author01</span
        ><span class="sup"> *, 1</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">authorList.author02</span>
        <span class="sup"> *, 1, 2</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">authorList.author03"</span>
        <span class="sup">*, 1, 2, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName"> authorList.author04</span
        ><span class="sup"> 2, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">authorList.author05</span
        ><span class="sup"> 1, 2</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">authorList.author06</span
        ><span class="sup"> 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">authorList.author07</span
        ><span class="sup"> 1, 3, 4</span><span class="arthorName">. </span>
      </div>
    </div>
    <div class="expression">
      <span class="sup"> * </span
      ><span class="expressionText">Equal Contribution</span>
    </div>
    <div class="university">
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
    </div>
    <div class="buttonGroup">
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
    </div>
  </div>
  <div class="videoDisplayContainer contentContainer">
    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="./assets/mp4/test.mp4" type="video/mp4" />
    </video>

    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="./assets/mp4/test1.mp4" type="video/mp4" />
    </video>

    <video autoplay muted playsinline loop disable-picture-in-picture="true">
      <source src="./assets/mp4/test2.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="articleMainBodyContainer contentContainer">
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
        <!-- prettier-ignore -->
        <code>
@article{ xxxxxxxxxxx, 
  title={titleCodeMode},
  author={ {authore} name list of all authors}, 
  journal = {arXiv preprint arXiv:arxivCODE}, year={2025}, 
}
        </code>
      </pre>
    </div>
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

.sign {
  display: flex;
  height: 50vmax;
  font-family: "Alibaba-puhui-heavy";
  font-size: 5vmax;
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
  display: flex;
  box-sizing: border-box;
  font-family: "Alibaba-puhui-bold";
  font-size: 5vmax;
  color: #363636;
  justify-content: center;
  line-height: 1;
}
.subTitle {
  font-size: 4.5vmax;
}
.arthorNameLine {
  display: flex;
  width: 100%;
  font-family: "Alibaba-puhui-regular";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 20%;
  margin: 2.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.5vmax;
  justify-content: center;
}
.arthorNameContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
}
.arthorName {
  color: #209cee;
}
.sup {
  display: flex;
  vertical-align: top;
  flex-shrink: 0;
  font-size: 50%;
}
.expression {
  display: flex;
  margin: 1vmax 0 0;
  justify-content: center;
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
  font-family: "Alibaba-puhui-regular";
  font-size: 1vmax;
  color: #363636;
  line-height: 1.5;
  margin: 0 0 1vmax;
}
.codeSpace {
  display: flex;
  /* justify-content: center; */
  overflow-x: scroll;
}
pre {
  display: flex;
  box-sizing: border-box;
  background-color: #d6d6d6;
  width: auto;
  padding: 1vmax 0;
}
code {
  font-family: NSimSun;
  font-size: 0.8vmax;
  color: #363636;
  line-height: 1.5;
  padding: 0.5vmax 3vmax;
}
</style>
