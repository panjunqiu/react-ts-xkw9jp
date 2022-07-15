export default [
  {
    path: '/',
    // '@/layouts', 可以，路径是相对pages的
    component: '../layouts',
    name: 'root',
    routes: [
      {
        path: '/docs',
        component: 'Docs',
        name: 'Docs',
      },
      {
        path: '/home',
        component: 'Home',
        name: 'Home',
      },
      {
        path: '/template_page_dva',
        component: 'template/page_dva',
        name: 'Template',
      },
      {
        path: '/template_page_normal',
        component: 'template/page_normal',
        name: 'Template',
      },
    ],
  },
];
