import React from 'react';
import { useTranslation } from 'react-i18next';
import './before_after.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import caso1 from '../../assets/antesdespues/caso1.png';
import caso2 from '../../assets/antesdespues/caso2.png';
import caso3 from '../../assets/antesdespues/caso3.png';

const BeforeAfter = () => {
    const { t } = useTranslation();

    const casos = [
        {
            img: caso1,
            descripcion: t('carillas'),
        },
        {
            img: caso2,
            descripcion: t('carillas'),
        },
        {
            img: caso3,
            descripcion: t('carillas'),
        },
    ];

    return (
        <section id="before-after" className="before-after-section">
            <div className="before-after-title">{t('antes-despues')}</div>

            {/* Carrusel para pantallas pequeñas */}
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
                    {casos.map((caso, index) => (
                        <SwiperSlide key={index}>
                            <div className="before-after-card">
                                <img src={caso.img} alt={`Caso ${index + 1} - ${t('antes-despues')}`} />
                                <p>{caso.descripcion}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid para pantallas grandes */}
            <div className="before-after-gallery">
                {casos.map((caso, index) => (
                    <div className="before-after-card" key={index}>
                        <img src={caso.img} alt={`Caso ${index + 1} - ${t('antes-despues')}`} />
                        <p>{caso.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BeforeAfter;
