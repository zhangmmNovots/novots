import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 引入所有页面

  import login from "../views/login.vue"

  import addEmployee from "../views/addEmployee.vue"

  import layOut from "../views/layOut.vue"

  import apply from "../views/apply.vue"

  import default1DSne from "../views/default1DSne.vue"

  import default1tIZt from "../views/default1tIZt.vue"

  import default1fmmF from "../views/default1fmmF.vue"

  import default1 from "../views/default1.vue"

  import default1wpsc from "../views/default1wpsc.vue"

  import toExampleVisitPage from "../views/toExampleVisitPage.vue"


const routes = [
  
  
    
{
  path: "/login",
  name: "login",
  component: login,
  meta: {
    title: "登录界面",
  },
  children: [
    
  ]
},

  
    
{
  path: "/addEmployee",
  name: "addEmployee",
  component: addEmployee,
  meta: {
    title: "新增用户页面",
  },
  children: [
    
  ]
},

  
    
{
  path: "/layOut",
  name: "layOut",
  component: layOut,
  meta: {
    title: "布局页面",
  },
  children: [
    
      
        
{
  path: "/layOut/default1DSne",
  name: "default1DSne",
  component: default1DSne,
  meta: {
    title: "收入确认审批",
  },
  children: [
    
  ]
},

      
        
{
  path: "/layOut/default1tIZt",
  name: "default1tIZt",
  component: default1tIZt,
  meta: {
    title: "用户角色配置",
  },
  children: [
    
  ]
},

      
        
{
  path: "/layOut/default1fmmF",
  name: "default1fmmF",
  component: default1fmmF,
  meta: {
    title: "角色权限配置",
  },
  children: [
    
  ]
},

      
        
{
  path: "/layOut/default1",
  name: "default1",
  component: default1,
  meta: {
    title: "导出员工表",
  },
  children: [
    
  ]
},

      
        
{
  path: "/layOut/default1wpsc",
  name: "default1wpsc",
  component: default1wpsc,
  meta: {
    title: "默认页面1",
  },
  children: [
    
  ]
},

      
        
{
  path: "/layOut/toExampleVisitPage",
  name: "toExampleVisitPage",
  component: toExampleVisitPage,
  meta: {
    title: "查看所有用户页面",
  },
  children: [
    
  ]
},

      
    
  ]
},

  
    
{
  path: "/apply",
  name: "apply",
  component: apply,
  meta: {
    title: "收入确认申请",
  },
  children: [
    
  ]
},

  
  
  
     
  
     
  
     
  
     
  
     
  
     
  
     
  
     
  
     
  
     
      {
        path: "/",
        redirect: "/layOut/toExampleVisitPage",
      },
    
  
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

router.beforeEach((to,from,next)=>{
  // 导航列表
  /* uuid 唯一值
   * visitWord 页面名称
   * loginRequired 是否免登录
   * loginRegisterType 为登录页
  */
  const pageList = [
    
      {
        uuid: '62296682e4b0027f28d67802',
        visitWord: 'login',
        
        loginRequired:  true ,
        
        loginRegisterType:  true ,

        layoutPath: '/login'
      },
    
      {
        uuid: '622eb843e4b0027f28d67908',
        visitWord: 'addEmployee',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/addEmployee'
      },
    
      {
        uuid: '623966b4e4b0d56b50932e5f',
        visitWord: 'layOut',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut'
      },
    
      {
        uuid: '623969a7e4b05fd77008a06e',
        visitWord: 'apply',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/apply'
      },
    
      {
        uuid: '62396b69e4b05fd77008a06f',
        visitWord: 'default1DSne',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut/default1DSne'
      },
    
      {
        uuid: '623be14ae4b0d56b50933053',
        visitWord: 'default1tIZt',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut/default1tIZt'
      },
    
      {
        uuid: '623c1bdfe4b05fd77008a11b',
        visitWord: 'default1fmmF',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut/default1fmmF'
      },
    
      {
        uuid: '623d8089e4b05fd77008a232',
        visitWord: 'default1',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut/default1'
      },
    
      {
        uuid: '624e575ae4b05b1369e4c552',
        visitWord: 'default1wpsc',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut/default1wpsc'
      },
    
      {
        uuid: 'PQiuEJzW7dCSldgEf',
        visitWord: 'toExampleVisitPage',
        
        loginRequired:  false ,
        
        loginRegisterType:  false ,

        layoutPath: '/layOut/toExampleVisitPage'
      },
    
  ]
   // 截取前五位 /page 剩下的匹配id
  const str = to.path.substring(5, to.path.length);
  /* 如果是uuid的话 跳转页面过来的
   * 如果是path的话说明是转换过来或者手输入的
   * 
  */
  const pageInfo = pageList.find(
    (item) => item.uuid === str || item.layoutPath === to.path
  ) || {};
 
  const loginObj = pageList.find((item) => item.loginRegisterType) || {};
  // 如果是登录页的话直接跳转
  if (
     [loginObj.layoutPath].includes(to.path) 
  ) {
    next();
    return;
  } else if (
    !pageInfo.loginRequired &&
    !sessionStorage.getItem("token") &&
    loginObj
  ) {
    // 如果跳转页面不是免登录并且没有token 跳转登录页
    next({ name: loginObj.visitWord });
    return;
  } else if(pageInfo.uuid === str){
    // 如果是跳转页面过来的跳转到对应path去
    next({...to, name: pageInfo.visitWord });
    return 
  }
  next();
})
export default router;
