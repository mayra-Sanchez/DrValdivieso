import React from 'react';
import { useTranslation } from 'react-i18next';
import './casos_exito.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import mujer1 from '../../assets/casos_exitos/IMG_0852.JPG';
import hombre from '../../assets/casos_exitos/hombre.png';
import mujer2 from '../../assets/casos_exitos/IMG_1745.JPG';
import mujer3 from '../../assets/casos_exitos/IMG_1055.JPG';
import mujer4 from '../../assets/casos_exitos/IMG_1639.JPG';

const CasosExito = () => {
  const { t } = useTranslation();

  const pacientes = [
    { img: mujer1, descripcion: t('caso1') },
    { img: hombre, descripcion: t('caso2') },
    { img: mujer2, descripcion: t('caso3') },
    { img: mujer3, descripcion: t('caso4') },
    { img: mujer4, descripcion: t('caso5') },
  ];

  // Lógica para mostrar flechas solo si hay más de 3 pacientes
  const showNavigation = pacientes.length > 3;

  return (
    <section id="casos-exito" className="casos-exito">
      <div className="title-container">
        <h2 className="titulo">{t('casos-exito')}</h2>
        <p className="subtitulo">{t('testimonios-subtitulo')}</p>
      </div>

      <div className="carousel-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={showNavigation}
          centeredSlides
          modules={[Pagination, Navigation]}
          className="swiper-container"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {pacientes.map((paciente, index) => (
            <SwiperSlide key={index}>
              <div className="tarjeta">
                {paciente.img && (
                  <img src={paciente.img} alt={`Paciente ${index + 1}`} />
                )}
                <p className="descripcion">{paciente.descripcion}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CasosExito;
