import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

const posts = [{
    id: 1,
    title: 'Hello World',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2
  },
  {
    id: 2,
    title: 'Hello Earth',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2
  },
  {
    id: 3,
    title: 'Hello America',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2

  },
  {
    id: 4,
    title: 'Hello Brasil',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2

  },
  {
    id: 5,
    title: 'Hello Rio',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2
  }
]

const comments = [
  [{
    id: 1,
    postId: 1,
    author: 'João1',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 1,
    author: 'Maria1',
    content: 'Como faz pra dar palmas?'
  }],
  [{
    id: 1,
    postId: 2,
    author: 'João2',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 2,
    author: 'Maria2',
    content: 'Como faz pra dar palmas?'
  }],
  [{
    id: 1,
    postId: 3,
    author: 'João3',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 3,
    author: 'Maria3',
    content: 'Como faz pra dar palmas?'
  }],
  [{
    id: 1,
    postId: 4,
    author: 'João4',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 4,
    author: 'Maria4',
    content: 'Como faz pra dar palmas?'
  }],
  [{
    id: 1,
    postId: 5,
    author: 'João5',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 5,
    author: 'Maria5',
    content: 'Como faz pra dar palmas?'
  }],
]

app.get("/posts", (req, res) => {
    res.send(posts)
})


app.get("/posts/:idDoUsuario", (req, res) => {
  const id = req.params.idDoUsuario;
  res.send(posts[id-1])
})

app.get("/posts/:idDoUsuario/comments", (req, res) => {
  const id = req.params.idDoUsuario;
  res.send([comments[id-1]])
})

app.listen(4000)