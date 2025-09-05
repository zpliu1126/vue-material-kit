<script setup>

import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import xlzhang_review2 from "@/assets/img/teachers/xlzhang_review2.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
defineProps(
  {
    image: {
      type: String,
      default: () => xlzhang_review2
    },
    name: {
      type: String,
      default: "张献龙"
    },
    position: {
      type: String,
      default: "教授"
    }, title: {
      type: String,
      default: "博士生导师"
    }, email: {
      type: String,
      default: "XXX@XXX.hzau.edu.com"
    },
    description: {
      type: String,
      default: `中国工程院院士，华中农业大学教授，中国作物学会棉花专业委员会会长，中国农学会遗传资源分会副主任委员，国际棉花基因组计划主席，国家教学名师，国务院特贴专家，国家领军人才，湖北省特级专家。长期开展棉花生物工程与育种研究，培育出高产、优质、多抗的棉花品种25个，其中国审品种6个。在棉花细胞工程、遗传工程、基因编辑等方面建立系列创新性技术。以第一完成人获国家科技进步二等奖1项，省部级科技奖励一等奖8项。获何梁何利科学与技术进步奖、全国创新争先奖状、全国先进工作者等荣誉。在Nature
                Genetics（5篇）、Nature Plants、Plant Cell等IF˃10的杂志发表论文80多篇，H指数78。2014年以来连续入选“中国高被引学者”，2020年以来连续入选“全球高被引科学家”。`
    }
  }
)
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar size="xxl" class="shadow-xl position-relative z-index-2" :image="image" alt="Avatar" />
            </div>
          </div>
          <div class="row py-7">
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="mb-0">{{ name }}</h3>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <div class="row mb-4">
                <div class="col-auto">
                  <span class="h6 me-1">{{ title }}</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">{{ position }}</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">{{ email }}</span>
                </div>
              </div>
              <p class="text-lg mb-0">
                {{ description }}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
