// Insere título do site
const nomeDoBlog = document.querySelector('#nome-do-blog')
nomeDoBlog.innerText=NOME_BLOG

// Criar listagem de posts

const listagemDePosts = document.querySelector("#listagem-de-posts")

posts.forEach(post => {
    const liPost = document.createElement('li')
    liPost.innerHTML = `
        <a href="${post.url}">${post.titulo}</a>
    `
    listagemDePosts.appendChild(liPost)
})
