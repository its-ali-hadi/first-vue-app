import { createRouter, createWebHistory } from 'vue-router';


function isAdmin(next) {
    const isAdmin = true; // Replace with real auth check
        if (isAdmin) {
            next();
        } else {
            next({ name: "NotFound"});
        } 
}

function isAuthenticated(to, from, next) {
    const isAuthenticated = true; // Replace with real auth check
    if (to.path === '/contact' && !isAuthenticated || to.path === '/products' && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/Home/HomePage.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../components/Home/Contact.vue')
        },
        {
            path: '/contact-us',
            redirect: '/contact'
        },
        {
            path: '/products',
            name: 'ProductList',
            component: () => import('../components/Product/ProductList.vue'),
            beforeEnter: (to, from, next) => {
                isAdmin(next);
            }
        },
        {
            path: '/products/:id',
            name: 'ProductDetails',
            component: () => import('../components/Product/ProductDetail.vue')
        },
        {
            path: '/:catchAll(.*)*',
            name: 'NotFound',
            component: () => import('../components/layout/404.vue')
        }
    ],
    linkActiveClass: 'active hello'
})



router.beforeEach((to, from, next) => {
    isAuthenticated(to, from, next);
});

export default router;