"use client"
import React, { useEffect, useState } from 'react';
import Audio from "@/components/simple/audio";
import ImageAndText from "@/components/complex/imageAndText ";

const test1 = [
    {
      "image": {
        "className": [],
        "style": { "backgroundColor": "transparent" },
        "alt": "Imagen 1",
        "width": 50,
        "height": 50,
        "id": "ima1",
        "src": "https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png"
      },
      "text": {
        "id": "text1",
        "text": "Texto 1",
        "style": {},
        "className": []
      }
    }
]



export default function Music() {

    return ('hi')

    const is = [
        {
          "image": {
            "onClick": () => setSong('https://res.cloudinary.com/dplncudbq/video/upload/v1699541461/n11_dcpomq.mp3'),
            "className": [],
            "style": { "backgroundColor": "transparent" },
            "alt": "Imagen 1",
            "width": 50,
            "height": 50,
            "id": "ima1",
            "src": "https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png"
          },
          "text": {
            "id": "text1",
            "text": "Texto 1",
            "style": {},
            "className": []
          }
        },
        {
          "image": {
            "className": [],
            "style": { "backgroundColor": "transparent" },
            "alt": "Imagen 2",
            "width": 50,
            "height": 50,
            "id": "ima2",
            "src": "https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png",
            "onClick": () => setSong('https://res.cloudinary.com/dplncudbq/video/upload/v1699541446/n12_sk8ytz.mp3'),
          },
          "text": {
            "id": "text2",
            "text": "Texto 2",
            "style": {},
            "className": []
          }
        },
    ]
    const [song, setSong] = useState('https://res.cloudinary.com/dplncudbq/video/upload/v1692977795/mias/relax7_orxvbj.mp3'); 
    

    return (
      <div style={{ height: '100vh', background: 'black', display: 'flex', flexDirection: 'column' }}>
        {/* Contenedor del contenido superior con scroll */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <ImageAndText content = {is}/>
        </div>
  
        {/* Contenedor fijo en la parte inferior */}
        <div style={{ backgroundColor: '#1e1e1e', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <ImageAndText content={test1}/>
          </div>
          <Audio
            id={'1'}
            src={song}
            autoPlay={false}
            loop={false}
            controlsList={true}
            backgroundColor="#1e1e1e" // Fondo oscuro
            buttonColor="#ffffff" // Botones blancos
            sliderEmptyColor="#444" // Línea vacía gris
            sliderFilledColor="#1db954" // Línea rellena verde
            showPlayButton={true} // Mostrar botón de play/pause
            showVolumeButton={true} // Mostrar botón de volumen
            playIcon="https://res.cloudinary.com/dplncudbq/image/upload/v1738190812/play_slnrjf.png" // Icono de play
            pauseIcon="https://res.cloudinary.com/dplncudbq/image/upload/v1738190812/pause_h2cozi.png" // Icono de pause
            volumeIcon="https://res.cloudinary.com/dplncudbq/image/upload/v1738190812/volumeup_qodl3n.png" // Icono de volumen
            width="100%" // Ocupar el 100% del ancho
          />
        </div>
      </div>
    );
  }