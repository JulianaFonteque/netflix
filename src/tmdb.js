const API_KEY = '6216305fdaac980a4b39fa5d17407ef6';
const API_BASE= 'http://api.themoviedb.org/3';


const basicFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default{
    getHomeList: async() =>{
        return[
            {
                slug: "originals",
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all//week?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?witch_genres=28&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?witch_genres=35&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?witch_genres=27&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?witch_genres=10749&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?witch_genres=99&language=pt-BRapi_key=${API_KEY}`)
            },
               
            
        ];
    }
}