export default {
    path : '/movie',
    component : ()=> import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : ()=> import('@/components/city')
        },
        {
            path : 'nowplaying',
            component : ()=> import('@/components/nowplaying')
        },
        {
            path : 'comingsoon',
            component : ()=> import('@/components/comingsoon')
        },
        {
            path : 'search',
            component : ()=> import('@/components/search')
        }
    ]
}