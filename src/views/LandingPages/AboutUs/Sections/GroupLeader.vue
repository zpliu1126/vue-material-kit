<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../components_myself/cards/CenteredBlogCard.vue";

//image
import xlongzhang from "@/assets/img/teachers/xlongzhang.png";

</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-6">团队负责人</h2>
        </div>
      </div>
      <div class="row aligin-item-around">
        <div class="col-lg-4 ">
          <CenteredBlogCard :image="xlongzhang" title="张献龙" description="
            中国工程院院士，华中农业大学教授，中国作物学会棉花专业委员会会长，中国农学会遗传资源分会副主任委员，国际棉花基因组计划主席，国家教学名师，国务院特贴专家，国家万人计划领军人才，湖北省特级专家。
            " />
        </div>
        <div class="col-lg-8 ms-auto mt-lg-0 mt-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="public" title="棉花细胞工程"
              description="在国际上率先实现从野生棉体细胞及原生质体再生植株，实现体细胞融合并再生植株。" />
            <DefaultInfoCard color="info" icon="payments" title="棉花基因组学"
              description="完成了陆地棉、海岛棉以及多个二倍体棉种参考基因组组装，揭示了棉花驯化、进化历程，为全基因组育种奠定基础。" />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard color="info" icon="apps" title="棉花产量与品质性状形成的机制解析"
              description="鉴定了一系列抗病、耐高温、及纤维发育相关的重要功能基因。" />
            <DefaultInfoCard color="info" icon="3p" title="植物高效基因编辑系统开发" description="建立了一套高通量的棉花转基因系统，以及10余套基因编辑系统。" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
