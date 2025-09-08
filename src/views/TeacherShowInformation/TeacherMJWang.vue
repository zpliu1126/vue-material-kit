<script setup>
// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Information from './Sections/information/AuthorInfo_mjwang.vue'


// myself component
import DefaultFooter from "@/components_myself/footer/FooterDefault.vue";


// image
import image from "@/assets/img/city-profile.jpg";
import PersonImg from "@/assets/img/teachers/mjwang.jpg";
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
    <Profile :image="PersonImg" :name="'王茂军'" :position="'教授'" :title="'博士生导师'" :description="`
    国家自然科学基金“优青”获得者、农业农村部“神农青年英才”、新疆“天池英才”计划特聘教授、美国康奈尔大学“唐氏“学者。面向国家优质棉花纤维短缺这一产业问题，运用基因组学、生物信息学、分子生物学、基因编辑和人工智能等多学科手段解析棉花纤维发育和品质形成的遗传调控机理，揭示染色质高级结构对性状形成的调控机制，回答多倍体作物基因组演化相关的基础科学问题。在棉花基因组演化和驯化、纤维发育和品质形成生物学等方面取得多个创新性成果，为优质棉基因组育种提供了理论基础和技术手段。以第一或通讯作者在Nature Genetics（5篇）、Nature Plants、Nature Communications、Genome Biology、Advanced Science、Molecular Biology and Evolution、Nucleic Acids Research、Trends in Plant Science、Briefings in Bioinformatics等国际知名期刊发表论文30余篇，其中10篇入选期刊封面论文、ESI高被引论文或被F1000推荐，申请/获国家发明专利/软件著作权5件。担任The Innovation、BMC Biology等刊物编委，担任棉花基础研究权威机构国际棉花基因组协会（ICGI）比较基因组与生物信息学分会共同主席、中国农学会棉花分会副秘书长、湖北省青联第十四届常委及界别副主任委员等职务。获湖北省自然科学一等奖（2项）、神农中华农业科技奖优秀创新团队奖、中国农学会青年科技奖、中国作物学会科学技术成就奖（青年奖）、湖北向上向善好青年等荣誉。
    `" />
    <Information />
  </div>
  <DefaultFooter />
</template>
