<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";
import ORCID from "@/assets/img/logos/ORCID.svg";
import Email from "@/assets/img/logos/email.svg";
import Github from "@/assets/img/logos/github.svg";
import WeiChat from "@/assets/img/logos/weichat.svg";

defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "张献龙院士工作站",
      logo: logoDark,
      route: "/"
    })
  },
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="footer-info">
            <a href="#" target="_blank">
              <img :src="ORCID" alt="down-arrow" class="arrow" :style="'width: 40px; height: 40px;'" />
              <p>ORCID</p>
            </a>
          </div>
          <div>
            <div class="footer-info">
              <a href="#" target="_blank">
                <img :src="Github" alt="down-arrow" class="arrow" :style="'width: 40px; height: 40px;'" />
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="footer-info">
            <a href="#" target="_blank">
              <img :src="Email" alt="down-arrow" class="arrow" :style="'width: 40px; height: 40px;'" />
              <p>电子邮件</p>
            </a>
          </div>
          <div class="footer-info">
            <a href="#" target="_blank">
              <img :src="WeiChat" alt="down-arrow" class="arrow" :style="'width: 40px; height: 40px;'" />
              <p>公众号</p>
            </a>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div>
            <h4>详细地址:</h4>
            <p>新疆石河子市北五路，北苑新区，农学院316A</p>
            <h4>联系电话：</h4>
            <p>027-87283955</p>
          </div>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              Cotton-shzu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
