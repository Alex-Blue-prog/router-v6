import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import { Photo as Phototype } from '../types/Photo';

export const Photo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<Phototype>()

  useEffect(() => {
    getPhoto();
  },[]);

  const getPhoto = async () => {
    if(params?.id) {
      setLoading(true);

      const photoData = await api.getPhoto(params.id);
      setPhoto(photoData);

      setLoading(false);
    }
  }

  return (
    <div>
      {loading && "Carregando..." || 
      <>
        <button onClick={()=> navigate(-1)} style={btn}>Voltar</button>
        <h1 style={h1}>{photo?.title}</h1>
        
        <img src={photo?.url} style={{marginLeft: "20px"}}/>
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