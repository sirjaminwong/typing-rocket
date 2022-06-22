import { useRouter } from 'next/router'
import * as styles from './lesson.css'

const Lesson = () => {
  const router = useRouter()
  console.log(router);

  const { id } = router.query

  return <div className={styles.lessonHeader}>Lesson: {id}</div>
}

export default Lesson