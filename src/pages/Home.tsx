import { useEffect, useState } from "react"
import { api } from "../api";

//types
import { Album } from "../types/Album";
//components 
import {Albumitem} from "../components/Albumitem";


export const Home = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=> {
    callAlbums();
  },[]);

  const callAlbums = async () => {
    setLoading(true);

    const AlbumsData = await api.getAlbums();
    setAlbums(AlbumsData);

    setLoading(false);
  }

  return (
    <div>
      {loading && "Carregando..."}
      <ul>
        {albums.map(value => (
          <Albumitem key={value.id} data={value}/>
        ))}
      </ul>
    </div>
  )
}
