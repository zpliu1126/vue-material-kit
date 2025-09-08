<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_ycYuan.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from "@/assets/img/teachers/cyyou.jpg";
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
    <Profile :image="PersonImg" :name="'尤春源'" :position="'研究员'" :title="'博士生导师'" :description="`
    湖北省“楚天学者”新疆生产建设“兵团英才”、“兵团中青年领军人才”及“石河子市拔尖人才”等人才称号；张献龙院士工作站（新疆）成员；围绕“早熟、优质、多抗”开展适宜机采的棉花种质资源创新及新品种培育研究，近十年参与及主持国家重点研发计划、国家生物育种重大专项、省部级、地市级重点攻关课题等20多项；以第一选育人培育出适宜机械采收的白棉及彩色棉新品种13个（其中国审3个，省审10个），到2024年底还有2份棉花新品种已完成区试，待审定，参与选育棉花新品种2个，新彩棉13、庄稼汉902。在 Nature Genetics 、Plant Biotechnology Journal、The Plant Journal、The Crop Journal、中国农业科学等期刊发表文章40多篇。获省部级科技进步壹等奖1项（序3），贰等奖2项（序3、序9）及地市级科技壹、贰、叁等奖各2项。授权国家发明专利1项，软件著作权4项，参编专著1部。同时对培育出的新品种开展成果转化及示范推广工作，累计示范推广自育棉花新品种1500余万亩，新增经济效益30亿元以上。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
