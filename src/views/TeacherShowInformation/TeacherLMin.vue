<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_mLin.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from '../../assets/img/teachers/lmi.jpg'
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
    <Profile :image="PersonImg" :name="'闵玲'" :position="'教授'" :title="'博士生导师'" :description="`
    湖北省杰青，新疆“天池英才”和“天山创新团队”特聘专家。长期从事棉花响应高温胁迫生物学机制解析和耐高温棉花种质创新工作。主持生物育种、重点研发计划、国家自然科学基金、湖北省杰青、湖北省洪山实验室重大项目、新疆揭榜挂帅等课题或子课题18项，其中国家级9项。以第一/通讯作者在Adv Sci、Plant Cell、New Phytol、PBJ、Plant Commun、Plant Physiol、Plant J等期刊发表研究论文30余篇，以第一完成人获国家发明专利授权13件，软件著作权3项。立项湖北省地方标准1项，制定新疆自治区地方标准1项，获植物新品种权1项，获新疆维吾尔自治区自然科学奖一等奖（序3）、教育部自然科学一等奖（序3）、大北农科技奖一等奖（序9）、神农中华农业科技奖优秀创新团队（序11）。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
