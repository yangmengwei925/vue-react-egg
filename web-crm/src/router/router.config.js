import React from 'react'
import Home  from '@/view/home'
import Login from '@/view/login'

const routerConfig = [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/main',
                component:()=><div>main</div>
            },
            {
                to:'/home/main',
                from:'/home'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        to:'/login',
        from:'/'
    }
]
export default routerConfig