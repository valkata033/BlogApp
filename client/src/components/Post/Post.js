import styles from './Post.module.css';

export const Post = ({
    profileImage,
    profileName,
    image
}) => {
    return (
        <>
            <article className={styles.post}>
                <div className={styles.postHeader}>
                    <img className={styles.profileImg} src={profileImage} />
                    <p className={styles.profileName}>{profileName}</p>
                </div>

                <img className={styles.image} src={image} />

                <div className={styles.postFooter}>
                    <button className={styles.likeBtn}>Like</button>
                    <button className={styles.commentBtn}>Comment</button>
                </div>
            </article>

        </>
    );
};