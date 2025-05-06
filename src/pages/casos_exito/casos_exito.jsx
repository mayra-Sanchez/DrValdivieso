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

const CasosExito = () => {
    const { t } = useTranslation();

    const pacientes = [
        {
            img: mujer1,
            descripcion: t('caso1'),
        },
        {
            img: hombre,
            descripcion: t('caso2'),
        },
        {
            img: mujer2,
            descripcion: t('caso3'),
        },
    ];

    return (
        <section id="casos-exito" className="casos-exito">
            <div className="title-container">
                <h2 className="titulo">{t('casos-exito')}</h2>
                <p className="subtitulo">{t('testimonios-subtitulo')}</p>
            </div>

            {/* Carrusel móvil */}
            <div className="carousel-container">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    centeredSlides
                    modules={[Pagination, Navigation]}
                    className="swiper-container"
                >
                    {pacientes.map((paciente, index) => (
                        <SwiperSlide key={index}>
                            <div className="tarjeta">
                                <img src={paciente.img} alt={`Paciente ${index + 1}`} />
                                <p className="descripcion">{paciente.descripcion}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid en desktop */}
            <div className="tarjetas grid-container">
                {pacientes.map((paciente, index) => (
                    <div className="tarjeta" key={index}>
                        <img src={paciente.img} alt={`Paciente ${index + 1}`} />
                        <p className="descripcion">{paciente.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CasosExito;
