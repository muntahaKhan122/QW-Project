import React, {useEffect, useState} from 'react';
import '../../css/signup.css';
import OpenModal from '../Modal/modal';

const Wallppr = () =>{
  const [photos, setPhotos]=useState([]);
  const [viewModal, setViewModal]=useState(false);
  const [Url, setUrl]=useState('');

  const fetchData=()=>{
    fetch('https://api.thedogapi.com/v1/images/search?limit=20')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setPhotos(data);
        });
  };

  useEffect(() => {
    fetchData();
  }, [] );


  const openModal=(URL)=>{
    console.log('open mdoal');
    setUrl(URL);
    setViewModal(true);
  };
  const closeModal=()=>{
    setViewModal(false);
  };

  return (
    <div className="container" style={{marginLeft: '170px'}}>
      {photos?photos.map((photo)=>{
        return (

          <>
            <button onClick={()=>openModal(photo.url)}>
              <img src={photo.url} width="200" height="200"
                style={{marginLeft: '5px', marginRight: '5px',
                  marginTop: '5px', marginBottom: '5px'}} />
            </button>
            <OpenModal url={Url} open={viewModal} setOpen={closeModal}/>
          </>
        );
      }):'..Loading'


      }


    </div>

  );
};
export default Wallppr;
