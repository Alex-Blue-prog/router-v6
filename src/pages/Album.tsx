import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api";
import { Photoitem } from "../components/Photoitem";
import { Album as Albumtype } from "../types/Album";
import { Photo } from "../types/Photo";

export const Album = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [album, setAlbum] = useState<Albumtype>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbum();
  },[])

  const getAlbum = async () => {
    if(params.id) {
      setLoading(true);

      const albumData = await api.getAlbum(params.id);
      const photosData = await api.getPhotos(params.id);
      setAlbum(albumData);
      setPhotos(photosData);


      setLoading(false);
    }
  }

  return (
    <div>
      {loading && "Carregando..." || 
      <>
        <button onClick={()=> navigate(-1)} style={btn}>Voltar</button>
        <h1 style={h1}>{album?.title}</h1>

        {photos.map(value => (
            <Photoitem key={value.id} data={value} />
        ))}
      </>
      }
    </div>
  )
}

//silly styles
const h1 = {
  marginLeft: "20px",
  marginBottom: "20px",
  fontWeight: 200,
  fontStyle: "italic"
}

const btn = {
  marginLeft: "20px",
  marginBottom: "10px",
  padding: "5px 15px",
  cursor: "pointer",
  display: "block"
}