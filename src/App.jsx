import { Header } from './components/header/Header';
import {Post} from './components/post/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/sidebar/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQEci8AsSAKF3g/profile-displayphoto-shrink_200_200/0/1563378826657?e=1665619200&v=beta&t=hVTSzghJh8B6cibQj3dAgJ3oK1s4g4CCl9yJhgriWc0',
      name: 'Leonardo Bastos',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},    
    ],
    publishedAt: new Date('2022-08-04 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.insider.com/61f14a0ce996470011907119?width=600&format=jpeg&auto=webp',
      name: 'Reilly',
      role: 'Writer'
    },
    content: [
      { type: 'paragraph', content: 'Hi Guys 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},    
    ],
    publishedAt: new Date('2022-08-08 14:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
          { posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
          </main>          
        </div>
    </div>
    
  )
}

export default App;

