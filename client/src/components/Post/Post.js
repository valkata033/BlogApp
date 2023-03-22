import styles from './Post.module.css';

export const Post = () => {
    return(
        <>
        <article className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.profileImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlKTQYBUDeQNnmkSUcouNCWLXHCpSy2qjvQ&usqp=CAU" />
                <p className={styles.profileName}>Peter Petrov</p>
            </div>

            <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU" />

            <div className={styles.postFooter}>
                <button className={styles.likeBtn}>Like</button>
                <button className={styles.commentBtn}>Comment</button>
            </div>
        </article>
        
        <article className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.profileImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlKTQYBUDeQNnmkSUcouNCWLXHCpSy2qjvQ&usqp=CAU" />
                <p className={styles.profileName}>Peter Petrov</p>
            </div>

            <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU" />

            <div className={styles.postFooter}>
                <button className={styles.likeBtn}>Like</button>
                <button className={styles.commentBtn}>Comment</button>
            </div>
        </article>

        <article className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.profileImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlKTQYBUDeQNnmkSUcouNCWLXHCpSy2qjvQ&usqp=CAU" />
                <p className={styles.profileName}>Peter Petrov</p>
            </div>

            <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU" />

            <div className={styles.postFooter}>
                <button className={styles.likeBtn}>Like</button>
                <button className={styles.commentBtn}>Comment</button>
            </div>
        </article>

        <article className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.profileImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlKTQYBUDeQNnmkSUcouNCWLXHCpSy2qjvQ&usqp=CAU" />
                <p className={styles.profileName}>Peter Petrov</p>
            </div>

            <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU" />

            <div className={styles.postFooter}>
                <button className={styles.likeBtn}>Like</button>
                <button className={styles.commentBtn}>Comment</button>
            </div>
        </article>

        </>
    );
};