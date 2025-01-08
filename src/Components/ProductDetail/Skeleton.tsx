import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeletonBox}>
      <div className={styles.skeletonLoading}></div>
    </div>
  );
}
