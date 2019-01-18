import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
const components = {
  index: () => import("@/view/Index/index"),
  person: () => import("@/view/Person/index"), //个人中心
  info: () => import("@/view/Person/info"), //人员列表
  position: () => import("@/view/position/index"), //职位
  recruit: () => import("@/view/position/details"), //职位详情
  train: () => import("@/view/Train/index"), //培训
  news: () => import("@/view/News/index"), //新闻列表
  newsDetail: () => import("@/view/News/newsDetail"), //新闻详情
  policy: () => import("@/view/policy/list"), //政策解读
  setting: () => import("@/view/Setting/index"), //设置
  login: () => import("@/view/Login/index"), //
  photo: () => import("@/view/verify/photo"), //
  course: () => import("@/view/Course/index"), //课程详情
  list: () => import("@/view/Train/list") //培训分类列表
};
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "",
      meta: {
        title: "智慧扶贫"
      },
      component: components.login
    },
    {
      path: "/index",
      name: "index",
      meta: {
        title: "智慧扶贫"
      },
      component: components.index
    },
    {
      path: "/position",
      name: "position",
      meta: {
        title: "职位"
      },
      component: components.position
    },
    // {
    //   path: "/recruit",
    //   name: "recruit",
    //   meta: {
    //     title: "职位详情"
    //   },
    //   component: components.recruit
    // },
    {
      path: "/train",
      name: "train",
      meta: {
        title: "培训报名"
      },
      component: components.train
    },
    {
      path: "/list",
      name: "list",
      meta: {
        title: "培训分类"
      },
      component: components.list
    },
    {
      path: "/person",
      name: "person",
      meta: {
        title: "个人中心"
      },
      component: components.person
    },
    {
      path: "/info",
      name: "info",
      meta: {
        title: "人员列表"
      },
      component: components.info
    },
    {
      path: "/news",
      name: "newsList",
      meta: {
        title: "新闻"
      },
      component: components.news
    },
    {
      path: "/newsDetail",
      name: "newsDetail",
      meta: {
        title: "新闻详情"
      },
      component: components.newsDetail
    },
    {
      path: "/policy",
      name: "policy",
      meta: {
        title: "政策解读"
      },
      component: components.policy
    },
    {
      path: "/recruit",
      name: "recruit",
      meta: {
        title: "职位详情"
      },
      component: components.recruit
    },
    {
      path: "/setting",
      name: "setting",
      meta: {
        title: "设置"
      },
      component: components.setting
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录"
      },
      component: components.login
    },
    {
      path: "/photo",
      name: "photo",
      meta: {
        title: "身份验证"
      },
      component: components.photo
    },
    {
      path: "/course",
      name: "course",
      meta: {
        title: "课程详情"
      },
      component: components.course
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
