<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorsxJin.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from "@/assets/img/teachers/sxjin.png";
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
    <Profile :image="PersonImg" :name="'金双侠'" :position="'教授'" :title="'博士生导师'" :description="`
    国家杰出青年基金获得者、教育部青长学者，长期从事棉花生物技术和抗虫基因工程研究。以通讯作者（含共同）发表论文100多篇，其中包括：Nature Genetics、Nature Communications、iMeta、Genome Biology （5篇）、Advanced Science（4篇）、Trends in Plant Science（3篇）、Cell Reports、Plant Biotechnology Journal （8篇）、Plant Communications（3篇）、Plant Journal（3篇）、Plant Physiology（2篇）等主流学术期刊，12篇论文入选高被引、热点论文，被引用8000多次。
申报/获批了20项棉花基因编辑、抗虫基因工程相关专利，其中棉花高效遗传转化专利以80万元转让，利用该技术已经为国内50多家棉花科研机构完成超过400多个基因的超表达、基因编辑突变体的创制，有效地推动我国棉花生物技术的发展。2021年获得棉花基础研究领域国际权威奖项-Cotton Biotechnology Award。
担任Plant Biotechnology Journal（影响因子：11.2）执行主编、Genome Biology（影响因子：10.1）编辑、iMeta副主编（影响因子：23.7）、Crop Journal（影响因子：6.0）副主编。2017-2021年被遴选为棉花基础研究权威机构国际棉花基因组协会（ICGI）共同主席。先后在ICGI年会、动植物基因组大会（PAG）、中国作物学会年会、中国植物生理与植物分子生物学学会年会、中国遗传学会年会等国内外学术会议中作报告20余场；应邀到中科院遗传发育所、中科院分子植物科学卓越创新中心、中国农科院棉花所、作物所、生物技术所、深圳基因组所、中国林科院、中国热科院、武汉大学、四川大学、中山大学、兰州大学、山东大学等单位作报告20余场。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
