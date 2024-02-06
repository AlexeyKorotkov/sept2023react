const baseURL='https://jsonplaceholder.typicode.com'

const indexes='/indexes'
const posts='/posts'

const urls={
    indexes:{
        base:indexes,
        byId:(id)=>`${posts}/${id}`
    },
    posts:{
        base: posts,
        byId:(id)=>`${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}