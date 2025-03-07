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
        <span class="arthorName">Mingcong Lei</span
        ><span class="sup">*, 1, 2, 5</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Ge Wang</span>
        <span class="sup">*, 1, 2, 5</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yiming Zhao</span>
        <span class="sup">1, 3, 5</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Zhixin Mai</span>
        <span class="sup">1, 2, 5</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Qing Zhao</span>
        <span class="sup">1</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yao Guo</span>
        <span class="sup">4</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Zhen Li</span>
        <span class="sup">1, 2</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Shuguang Cui</span>
        <span class="sup">1, 2</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yatong Han</span
        ><span class="sup">†, 1, 2, 5</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">and Jinke Ren</span
        ><span class="sup">†, 1 ,2</span>
      </div>
    </div>
    <div class="expression">
      <div class="expressionItem">
        <span class="sup"> * </span
        ><span class="expressionText">Equal Contribution, </span>
      </div>
      <div class="expressionItem">
        <span class="sup"> † </span
        ><span class="expressionText">Corresponding Author</span>
      </div>
    </div>

    <div class="university">
      <div class="universityContainer">
        <span class="sup"> 1 </span
        ><span class="universityName"
          >Future Network of Intelligence Institute, Shenzhen,
        </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 2 </span
        ><span class="universityName"
          >The Chinese University of Hong Kong, Shenzhen,
        </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 3 </span
        ><span class="universityName">Harbin Engineering University, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 4 </span
        ><span class="universityName">Shanghai Jiao Tong University, </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 5 </span
        ><span class="universityName"
          >Infused Synapse AI, www.isai.net.cn
        </span>
      </div>
    </div>
    <div class="buttonGroup">
      <button
        class="button"
        onclick="window.open('https://arxiv.org/abs/2503.00729')"
        type="button"
      >
        <div class="arxivIcon"></div>
        arXiv
      </button>
      <button
        class="button"
        onclick="window.open('https://github.com/SP4595/CLEA-Closed-Loop-Embodied-Agent')"
        type="button"
      >
        <div class="gitHubIcon"></div>
        Code
      </button>
      <!-- <button class="button">
        <div class="huggingFaceIcon"></div>
        buttonGroup.huggingFaceButton
      </button> -->
    </div>
  </div>
  <div class="videoDisplayContainer contentContainer coverVideo">
    <video muted playsinline loop controls disable-picture-in-picture="true">
      <source src="./assets/mp4/cover_demo.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentMainTitle">Abstract</div>
    <div class="content">
      Large Language Models (LLMs) exhibit remarkable capabilities in the
      hierarchical decomposition of complex tasks through semantic reasoning.
      However, their application in embodied systems faces challenges in
      ensuring reliable execution of subtask sequences and achieving one-shot
      success in long-term task completion. To address these limitations in
      dynamic environments, we propose Closed-Loop Embodied Agent (CLEA)—a novel
      architecture incorporating four specialized open-source LLMs with
      functional decoupling for closed-loop task management. The framework
      features two core innovations: (1) Interactive task planner that
      dynamically generates executable subtasks based on the environmental
      memory, and (2) Multimodal execution critic employing an evaluation
      framework to conduct a probabilistic assessment of action feasibility,
      triggering hierarchical re-planning mechanisms when environmental
      perturbations exceed preset thresholds. To validate CLEA’s effectiveness,
      we conduct experiments in a real environment with manipulable objects,
      using two heterogeneous robots for object search, manipulation, and
      search-manipulation integration tasks. Across 12 task trials, CLEA
      outperforms the baseline model, achieving a 67.3% improvement in success
      rate and a 52.8% increase in task completion rate. These results
      demonstrate that CLEA significantly enhances the robustness of task
      planning and execution in dynamic environments. Our code is available at
      <a href="https://sp4595.github.io/CLEA/">https://sp4595.github.io/CLEA/</a
      >.
    </div>

    <!-- <div class="codeSpace">
      <pre>
        
        <code>
@article{ xxxxxxxxxxx, 
  title={titleCodeMode},
  author={ {authore} name list of all authors}, 
  journal = {arXiv preprint arXiv:arxivCODE}, year={2025}, 
}
        </code>
      </pre>
    </div> -->
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentImg contentImg1">
      <img src="./assets/pic/begining.png" alt="image" />
      <div class="introText">
        Fig. 1. <span class="bold">Task execution processes of CLEA.</span> (1)
        Search task: CLEA facilitates adaptive strategy adjustments in partially
        observable environments. By analyzing visual inputs from robot 2, which
        remains stationary on the table, CLEA directs robot 1, the mobile unit,
        to explore alternative locations—such as the interior of the
        refrigerator—in search of water. (2) Manipulation task: CLEA evaluates
        the feasibility of each action and dynamically refines its strategy.
        Upon opening the oven, it determines that placing the apple directly
        inside is infeasible. Consequently, CLEA adjusts the next step to a more
        appropriate action: pulling out the grill to create sufficient space,
        thereby successfully completing the manipulation task.
      </div>
    </div>
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentImg contentImg2">
      <img src="./assets/pic/AC+.jpg" alt="image" />
      <div class="introText">
        Fig. 2. <span class="bold">Overview of CLEA.</span> The observer (VLM)
        provides environmental data, which the summarizer (LLM) processes into
        memory. The planner (LLM) generates an initial action sequence based on
        the robot’s skill pool and memory, while the critic (VLM) evaluates
        action feasibility and offers re-plan recommendations in response to
        environmental dynamics.
      </div>
    </div>
  </div>
  <!-- <div class="forecast contentContainer">
    The rest of paper is comming soon...
  </div> -->
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  /* word setting */
  font-family: "Alibaba-puhui-regular";
}
* {
  /* word-break: normal;
  word-wrap: break-word; */
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
  font-family: "Alibaba-puhui-heavy";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Heavy.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-bold";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Bold.ttf") format("truetype");
}
a,
a:active,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.bold {
  font-family: "Alibaba-puhui-bold";
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
  margin-right: 0.5vmax;
}
.arthorName {
  color: #209cee;
}
.sup {
  display: flex;
  vertical-align: top;
  flex-shrink: 0;
  font-size: 60%;
  margin-right: 0.25vmax;
  font-family: "Alibaba-puhui-regular";
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
.universityName {
  font-family: "Alibaba-puhui-medium";
  color: #535353;
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
  font-family: "Alibaba-puhui-regular";
  border-radius: 1.5vmax;
  border: #363636 solid 0px;
  background-color: #363636;
  color: #ffffff;
  padding: 1.5vmax;
  margin: 0.5vmax;
  font-size: 1vmax;
  cursor: pointer;
}
.button:hover {
  background-color: #474747;
}
.arxivIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/arxiv.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 1vmax;
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
.videoDisplayContainer.coverVideo {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
}
.videoDisplayContainer.coverVideo video {
  height: 30vmax;
  aspect-ratio: 16/9;
  margin: 0 0.5vmax;
}

.articleMainBodyContainer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 4vmax 25%;
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
  /* display: flex; */
  width: 100%;
  font-family: "Alibaba-puhui-regular";
  font-size: 0.9vmax;
  color: #363636;
  line-height: 1.5;
  margin: 0 0 1vmax;
  /* word-wrap: normal;
  word-break: normal; */
  text-align: justify;
}
.content a {
  color: #209cee;
}
.content a:hover {
  color: #1978b8;
}

.contentImg {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
.contentImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1.5vmax;
}
.contentImg .introText {
  font-family: "Alibaba-puhui-regular";
  font-size: 0.85vmax;
  color: #363636;
  line-height: 1.5;
  text-align: justify;
  padding: 0 7.5%;
  margin-bottom: 1.5vmax;
}

.contentImg2 {
  flex-direction: row;
}
.contentImg2 img {
  width: 60%;
}

/* .contentImg2 .introText {
  text-align: justify;
  padding: 0 4vmax;
} */

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
