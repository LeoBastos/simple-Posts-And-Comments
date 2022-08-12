import  { PencilLine } from 'phosphor-react';
import {Avatar} from '../avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1660235075177-07a019c999ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
      />
      
      <div className={styles.profile}>
        <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQEci8AsSAKF3g/profile-displayphoto-shrink_200_200/0/1563378826657?e=1665619200&v=beta&t=hVTSzghJh8B6cibQj3dAgJ3oK1s4g4CCl9yJhgriWc0' />
        <strong>Leonardo Bastos</strong>
        <span>Developer</span>
      </div>
      
      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar Perfil
        </a>
      </footer>

    </aside>
  );
}