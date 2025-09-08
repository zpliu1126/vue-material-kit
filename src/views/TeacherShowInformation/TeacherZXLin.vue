<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_zxLin.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from "@/assets/img/teachers/zxlin.png";
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
    <Profile :image="PersonImg" :name="'林中旭'" :position="'教授'" :title="'博士生导师'" :description="`
    2013年入选湖北省杰青，2023年入选农业农村部神龙青年英才和新疆天池英才特聘专家，入选中国科学院、教育部人事司、湖北省科技厅、山东省科技厅、黑龙江省科技厅、江西省科技厅、武汉市科学技术局专家库。长期从事棉花种质资源创制与产量生物学研究。通过基因组学和遗传学系统解析了我国棉花遗传改良机制。通过远缘杂交创制了近2000份陆地棉背景的渐渗系，已利用海岛棉、黄褐棉、毛棉和达尔文棉渐渗系鉴定了棉花重要性状的QTL，发掘了优异种质资源，并图位克隆了多个棉花产量相关的基因。主持国家自然科学基金8项（2007-2023年）、十三五转基因专项课题1项、十四五重点研发课题1项，参加省部级科技项目10余项。以第一或通讯作者在Nature Genetics、Journal of Advanced Research、Plant Physiology、Plant Journal、Plant Biotechnology Journal等植物领域主流期刊发表论文90余篇；获中国产学研合作创新奖（个人）、国家科技进步二等奖（第7）、湖北省科技进步一等奖（第4）、湖北省自然科学一等奖2项（第3和第4）、湖北省技术发明二等奖（第2）等科技奖励10项。主持育成棉花新品种3个、合作审定9个；授权发明专利7件。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
