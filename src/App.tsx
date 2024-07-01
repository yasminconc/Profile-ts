import Header from './Components/Header'
import styles from './App.module.css'
import Post, { PostType } from './Components/Post'
import './global.css'
import Sidebar from './Components/Sidebar'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yasminconc.png',
      name: 'yasmin',
      role: 'Desenvolvedora de software'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},  
    ],
    publishedAt: new Date('2024-05-05 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/paulolopest.png',
      name: 'Paulo Lopes',
      role: 'Desenvolvedora de software'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},  
    ],
    publishedAt: new Date('2024-05-05 10:00:00')
  },
]
const App = () => {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

