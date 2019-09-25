const base = [
    {
        path: '/ClassManage',
        name: 'ClassManage',
        component: () => import('@/views/base/ClassManage')
      },
     {
       path: '/ModifyPassword',
       name: 'ModifyPassword',
       component: () => import('@/views/base/ModifyPassword')
     },
     {
       path: '/StudentManage',
       name: 'StudentManage',
       component: () => import('@/views/base/StudentManage')
     },
     {
      path: '/role',
      name: 'role',
      component: () => import('@/views/base/role')
    },
    {
        path:"/TeacherManage",
        name:"TeacherManage",
        component:() => import('@/views/base/TeacherManage')
    }
]
   
export default base;