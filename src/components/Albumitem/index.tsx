import styles from "./styles.module.css";
import { Album } from "../../types/Album";
import { Link } from "react-router-dom";

type Props = {
  data: Album
}

export const Albumitem = ({data}:Props) => {

  return (
    <div className={styles.container}>
      
      <Link to={`album/${data.id}`}>
        <div>{data.title}</div>
      </Link>

    </div>
  )
}
