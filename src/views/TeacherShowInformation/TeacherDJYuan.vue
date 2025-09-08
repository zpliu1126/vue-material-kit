<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfodjyuan.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from "@/assets/img/teachers/djyuan.jpg";
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-6"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Profile :image="PersonImg" :name="'袁道军'" :position="'教授'" :title="'博士生导师'" :description="`
    新疆自治区杰青获得者，张献龙院士工作站（新疆）成员，作物遗传改良全国重点实验室研究人员，中组部、团中央第23和24批博士服务团援疆成员。
研究方向为海岛棉组学与遗传改良，长期从事棉花基因组及生物信息学方面工作，利用组学大数据，开展棉花的比较基因组学研究，揭示棉花基因组进化与驯化的奥秘，为棉花的遗传改良和从头驯化提供理论基础；创制棉花新种质，选育优质耐逆新品种。
以第一作者、通讯作者和共同作者在Nature Genetics、Advanced Science、Nature Communication、Nucleic Acids Research、Plant Biotechnology Journal和Scientific Reports等学术杂志上发表论文50余篇，Google Scholar统计总引用次数超过4700次，H指数32，I10指数43。主持国家自然科学基金、新疆自治区自然科学基金、新疆自治区重点研发课题、国家科技重大专项子课题和国家重点研发计划子课题等项目。参编英文专著2部，参编国家规划教材4本，获得省部级奖励5项，获批国家发明专利3项和软件著作权3个。

    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
