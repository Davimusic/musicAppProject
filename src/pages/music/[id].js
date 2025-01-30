"use client"
import Audio from "@/components/simple/audio";
import Image from "@/components/simple/image";
import Text from "@/components/simple/text";

export default function Music() {
    return (
      <div style={{ height: '100vh', background: 'red', display: 'flex', flexDirection: 'column' }}>
        {/* Contenedor del contenido superior con scroll */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
              <Image
                onClick={() => alert('si')}
                className={[]}
                style={{ backgroundColor: 'transparent' }}
                alt={'sis'}
                width={50}
                height={50}
                id={'ima'}
                src={'https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png'}
              />
              <Text id={'textau'} text={`hola ${index + 1}`} />
            </div>
          ))}
        </div>
  
        {/* Contenedor fijo en la parte inferior */}
        <div style={{ backgroundColor: '#1e1e1e', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Image
              onClick={() => alert('si')}
              className={[]}
              style={{ backgroundColor: 'transparent' }}
              alt={'sis'}
              width={50}
              height={50}
              id={'ima'}
              src={'https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png'}
            />
            <Text id={'textau'} text={'hola'} />
          </div>
          <Audio
            id={'1'}
            src={'https://res.cloudinary.com/dplncudbq/video/upload/v1692977795/mias/relax7_orxvbj.mp3'}
            autoPlay={true}
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