<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_lltu.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";

import PersonImg from '../../assets/img/teachers/lilitu.jpg'
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
    <Profile :image="PersonImg" :name="'涂礼莉'" :position="'教授'" :title="'博士生导师'" :description="`
    湖北省杰青，农业农村部神农优秀创新团队骨干成员，张献龙院士工作站（新疆）成员，新疆农科院经济作物研究所柔性高层次人才，新疆农垦科学院“天池英才”特聘教授，作物遗传改良全国重点实验室棉花遗传改良团队PI。研究方向为棉花纤维发育机制解析及优质纤维材料创制，以品质优良的海岛棉为切入点，验证了100多个纤维发育相关基因的功能，优质纤维基因GbEXPATR获批转基因安全环境释放；绘制了海岛棉和陆地棉的参考因组；结合单细胞测序及CRISPR突变体库，阐明了纤维起始分化调控网络；通过棉花自然群体及遗传群体重测序，鉴定了纤维品质相关的QTL位点，全基因组水平阐述了优质纤维形成机理，为全基因组分子设计改良纤维品质奠定了基础。在Nature Genetics 等期刊发表论文40多篇，授权专利6项，参与审定品种3个。作为主要完成人获国家科技进步奖二等奖1项、省部级一等奖5项。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
