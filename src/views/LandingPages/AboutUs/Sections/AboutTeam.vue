<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";

import cyyou from "@/assets/img/teachers/cyyou.jpg";
import djyuan from "@/assets/img/teachers/djyuan.jpg";
import lfzhu from "@/assets/img/teachers/lfzhu.jpg";
import lilitu from "@/assets/img/teachers/lilitu.jpg";
import lmi from "@/assets/img/teachers/lmi.jpg";
import mjwang from "@/assets/img/teachers/mjwang.jpg";
import sxjin from "@/assets/img/teachers/sxjin.png";
import zxlin from "@/assets/img/teachers/zxlin.png";


</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            教师队伍
          </h3>
          <!-- <p class="text-white opacity-8 mb-0">
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill.
          </p> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-4" :image="lfzhu" :profile="{ name: '朱龙付', link: 'javascript:;' }"
            :position="{ label: 'UI Designer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-4" :image="zxlin"
            :profile="{ name: '林中旭', link: 'javascript:;' }" :position="{ label: 'Boss', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-4 z-index-2" :image="sxjin"
            :profile="{ name: '金双侠', link: 'javascript:;' }" :position="{ label: 'Athlete', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-4 z-index-2" :image="lilitu"
            :profile="{ name: '涂礼莉', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-5 z-index-2" :image="lilitu"
            :profile="{ name: '杨细燕', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-5 z-index-2" :image="mjwang"
            :profile="{ name: '王茂军', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-5 z-index-2" :image="lmi"
            :profile="{ name: '闵玲', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-5 z-index-2" :image="djyuan"
            :profile="{ name: '袁道军', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
        <div class="col-lg-6 col-12 mt-5">
          <HorizontalTeamCard class="mt-lg-4 mt-5 z-index-2" :image="cyyou"
            :profile="{ name: '尤春源', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }" description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div>
      </div>
    </div>
  </section>
</template>
