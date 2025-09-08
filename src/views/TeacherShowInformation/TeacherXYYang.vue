<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_xyyang.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from "@/assets/img/teachers/xyyang.png";
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
    <Profile :image="PersonImg" :name="'杨细燕'" :position="'教授'" :title="'博士生导师'" :description="`
    国家青年人才计划入选者，张献龙院士工作站（新疆）成员，塔里木大学“兵团高层次人才讲座学者”，新疆农垦科学院“天池英才”特聘教授，作物遗传改良全国重点实验室棉花遗传改良团队PI，洪山实验室PI。研究方向为棉花抗逆生物学，围绕棉花抗旱和宜机采的遗传调控和分子基础，开展相关性状的遗传研究、关键基因的克隆和机理解析，并进行抗逆种质资源的创新与应用。以第一/通讯作者（含共同）在Nature Communications、Advanced Science、Plant Cell、Plant Biotechnol J、Plant Physiol等杂志发表论文50多篇，3篇高被引论文和1篇F1000创新点评论文。主持项目/课题17项，其中国家级8项，参编英文专著2部、教材5部（共同主编1部）。授权专利11项，获批中间试验材料41份，环境释放材料1份。获国家科技进步二等奖（序11）、教育部自然科学一等奖（序4）和二等奖（序2）、新疆生产建设兵团科技进步奖一等奖（序8）、大北农科技奖一等奖（序8）、神农中华农业科技奖优秀创新团队（序10）、中国技术市场协会金桥奖一等奖（序3）。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
