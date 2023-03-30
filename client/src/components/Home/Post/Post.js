import styles from './Post.module.css';

export const Post = ({
    profileImage,
    firstName,
    lastName,
    image,
    description,
}) => {
    return (
        <>
            <article className={styles.post}>
                <div className={styles.postHeader}>
                    <img className={styles.profileImg} src={profileImage} />
                    <p className={styles.profileName}>{`${firstName} ${lastName}`}</p>
                </div>

                <p className={styles.description}>{description}</p>

                <img className={styles.image} src={image} />

                <div className={styles.postFooter}>
                    <button className={styles.likeBtn}>Like</button>
                    <button className={styles.commentBtn}>Comment</button>
                </div>

                <div hidden className={styles.comments}>
                    <p className={styles.comment}>Hallo form there!</p>
                    <p className={styles.comment}>Second comment</p>
                    <p className={styles.comment}>Are be mama ti da eba idiot</p>
                </div>

            </article>

        </>
    );
};