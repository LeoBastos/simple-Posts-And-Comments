import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

  const[likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    //setLikeCount(likeCount + 1);
    setLikeCount((state) => {
      return state +1
    })
  }

  return (
    <div className={styles.comment}>
      
      <Avatar 
        hasBorder={false} 
        src='https://avatars.githubusercontent.com/u/57710891?v=4'
      />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Bastos</strong>
              <time title="10 de Agosto às 18:30" dateTime='2022-08-10 18:30:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}