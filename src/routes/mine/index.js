export default {
    path: '/mine',
    component : ()=> import('@/views/Mine/index.vue'),
    children: [
        {
            path: 'login',
            component: () => import('@/components/login')
        },
        {
            path: 'register',
            component: () => import('@/components/register')
        },
        {
            path: 'findPassword',
            component: () => import('@/components/findPassword')
        }, 
        // {
        //     path: '/mine',
        //     redirect: '/mine/login',
        // }
        {
            path:'loginout',
            component : () => import('@/components/loginout')
        }
    ]
}