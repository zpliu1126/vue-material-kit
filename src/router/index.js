import { createRouter, createWebHashHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";

//self component
import LoseSite from "@/components_myself/404.vue";
import testView from "@/components_myself/test.vue";
import EquipmentView from "../views/equipment/equipment.vue";
import achievementView from "../views/achievement/achievement.vue";
import peopleView from "../views/people/people.vue";
import TeacherView from '../views/TeacherShowInformation/TeacherShow.vue'
import TeacherView_lfz from '../views/TeacherShowInformation/TeacherlfZhu.vue'
import TeacherView_ycy from '../views/TeacherShowInformation/TeacherCYYou.vue'
import TeacherView_ydj from '../views/TeacherShowInformation/TeacherDJYuan.vue'
import TeacherView_ml from '../views/TeacherShowInformation/TeacherLMin.vue'
import TeacherView_wmj from '../views/TeacherShowInformation/TeacherMJWang.vue'
import TeacherView_jsx from '../views/TeacherShowInformation/TeacherSXJin.vue'
import TeacherView_yxy from '../views/TeacherShowInformation/TeacherXYYang.vue'
import TeacherView_lzx from '../views/TeacherShowInformation/TeacherZXLin.vue'
import TeacherView_tll from '../views/TeacherShowInformation/TeacherllTu.vue'



const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/teacher",
      name: "theacher",
      component: TeacherView,
    },
    {
      path: "/pages/teacher/zlf",
      name: "theacher_zlf",
      component: TeacherView_lfz,
    },
    {
      path: "/pages/teacher/ycy",
      name: "theacher_ycy",
      component: TeacherView_ycy,
    },
    {
      path: "/pages/teacher/ydj",
      name: "theacher_ydj",
      component: TeacherView_ydj,
    },
    {
      path: "/pages/teacher/ml",
      name: "theacher_ml",
      component: TeacherView_ml,
    },
    {
      path: "/pages/teacher/wmj",
      name: "theacher_wmj",
      component: TeacherView_wmj,
    },
    {
      path: "/pages/teacher/jsx",
      name: "theacher_jsx",
      component: TeacherView_jsx,
    },
    {
      path: "/pages/teacher/yxy",
      name: "theacher_yxy",
      component: TeacherView_yxy,
    },
    {
      path: "/pages/teacher/lzx",
      name: "theacher_lzx",
      component: TeacherView_lzx,
    },
    {
      path: "/pages/teacher/tll",
      name: "theacher_tll",
      component: TeacherView_tll,
    },
    {
      path: "/pages/equipment",
      name: "equipment",
      component: EquipmentView,
    },
    {
      path: "/pages/achievements",
      name: "achievements",
      component: achievementView,
    },
    {
      path: "/pages/peoples",
      name: "peoples",
      component: peopleView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
    {
      path: "/test",
      name: "test",
      component: testView,
    },
    // 404 路由
    {
      path: "/404",
      name: "404",
      component: LoseSite,
    },
    {
      path: "/:catchAll(.*)",
      redirect: '/404'
    }
  ],
});

export default router;
