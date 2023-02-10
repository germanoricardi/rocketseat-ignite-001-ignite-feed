import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/germanoricardi.png',
        name: 'Germano Ricardi',
        role: 'Desenvolvedor Full Stack'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-02-09 20:48:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-02-09 08:48:00'),
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>

          {
            posts.map(post => {
              return (
                <Post
                  author      = {post.author}
                  content     = {post.content}
                  publishedAt = {post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
