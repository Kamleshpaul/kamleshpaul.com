import Link from "next/link";
import styles from "../styles/links.module.css"

function links() {
  return (
    <>
      <Link href="/">
        <a className={styles.home}>Home</a>
      </Link>
      <Link href="/work">
        <a className={styles.work}>Work</a>
      </Link>
      <Link href="/skill">
        <a className={styles.skill}>Skill</a>
      </Link>
      <Link href="/hire-me">
        <a className={styles.hire}>Hire Me</a>
      </Link>
    </>
  )
}

export default links