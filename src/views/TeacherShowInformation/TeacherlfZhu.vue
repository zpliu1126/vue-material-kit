<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_lfzhu.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";
import zlfu from '../../assets/img/teachers/lfzhu.jpg'

// image
import image from "@/assets/img/city-profile.jpg";
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
    <Profile :image="zlfu" :name="'朱龙付'" :position="'教授'" :title="'博士生导师'" :description="`
    2004年毕业于华中农业大学作物遗传育种专业，获农学博士学位；2014年获聘华中农业大学教授、博士生导师。2007和2014年分别在美国德州理工大学、荷兰瓦赫宁根大学与研究中心访学合作。2014-2017年作为中央组织部第八批援疆干部在石河子大学农学院挂职。现为作物遗传改良国家重点实验室副主任，兼任中国农学会棉花分会副主任、湖北省棉麻学会理事长。2016年入选国际黄萎病咨询委员会，2022年入选ICGI棉花功能基因组共同主席。主要研究方向为棉花与病原分子互作及早熟多抗分子育种，已在Advanced Science, Nature Commmunications, Plant Physiology等学术期刊发表研究论文100多篇，申请或获得国家发明专利20多项。相关研究成果获得国家科技进步二等奖一项（2013）、教育部自然科学奖一等奖（2021）、神农科技创新团队奖（2021）、新疆自治区科技进步奖一等奖（2023）、湖北省科技进步一等奖一项（2012）、湖北省技术发明二等奖一项（2008）等多项。2016年获得湖北省杰出青年基金资助，入选科技部中青年科技创新领军人才推进计划，2018年入选国家级人才项目计划。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
