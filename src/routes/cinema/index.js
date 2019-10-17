export default {
    path : '/cinema',
    component : ()=> import('@/views/Cinema'),
    children : [
        {
            path : 'allcity',
            component : ()=> import('@/components/allcity')
        },
        {
            path : 'brand',
            component : ()=> import('@/components/brand')
        },
        {
            path : 'feature',
            component : ()=> import('@/components/feature')
        },
        {
            path : '/cinema',
            redirect :'/cinema/allcity'
        }
    ]
}