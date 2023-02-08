import { Link } from "react-router-dom";
import { Photo } from "../../types/Photo";
import styles from "./styles.module.css";

type Props = {
  data: Photo
}

export const Photoitem = ({data}:Props) => {

  // const navigate = useNavigate();
  // const go = () => {
  //   navigate({
  //     pathname: `/photo/${data.id}`, 
  //     search: `${createSearchParams(JSON.stringify(data))}`
  //   })
  // }

  return (
    <div className={styles.photoContainer}>
      <Link to={`/photo/${data.id}`}>
        <img src={data.thumbnailUrl} />  
      </Link>
    </div>
  )
}
