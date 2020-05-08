import Vue from 'vue'
import Router from 'vue-router'

//mobile
import index from '../pages/mobile/index'
// import blog from '../pages/mobile/blog'
import resume from "../pages/mobile/resume"

//pcadmin
import adminIndex from "../pages/pcadmin/adminIndex"//路由页
import adminLogin from "../pages/pcadmin/adminLogin"//登录页
import adminHome from "../pages/pcadmin/homePages/adminHome"//首页
import addArticle from "../pages/pcadmin/homePages/addArticle"//文章发表页
import addArticleEditor from "../pages/pcadmin/homePages/addArticleEditor"//文章发表页-富文本
import tableUpload from "../pages/pcadmin/homePages/tableUpload"//表格上传页
import articlePage from "../pages/pcadmin/homePages/articlePage"//文章列表页
import articleDetails from "../pages/pcadmin/homePages/articleDetails"//文章详情页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect: "/index"
    },
    {
      path:"/index",
      redirect: "/index/resume",
      component:index,
      children:[
        // {
        //   path:"blog",
        //   component:blog
        // },
        {
          path:"resume",
          component:resume
        }
      ]
    },
    {
      path:"/admin",
      redirect: "/admin/adminHome",
      component:adminIndex,
      beforeEnter(to,from,next){
        if(localStorage.getItem('username')){
          next()
        }else{
          next("/adminLogin")
        }
      },
      children:[
        {
          path:"adminHome",
          component:adminHome
        },
        {
          path:"addArticle",
          component:addArticle
        },
        {
          path:"tableUpload",
          component:tableUpload
        },
        {
          path:"articlePage",
          component:articlePage
        },
        {
          path:"articleDetails",
          component:articleDetails
        },
        {
          path:"addArticleEditor",
          component:addArticleEditor
        }
      ]
    },
    {
      path:"/adminLogin",
      component:adminLogin
    }
  ]
})
