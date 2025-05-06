import React from 'react';
import { useTranslation } from 'react-i18next';
import './services.css';
import diseño from '../../assets/nuestros_servicios/diseno-sonrisa.jpg';
import zirconio from '../../assets/nuestros_servicios/corona.png';
import blanqueamiento from '../../assets/nuestros_servicios/blanqueamiento.png';
import implantes from '../../assets/nuestros_servicios/implantes.png';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('diseno-sonrisa'),
            image: diseño,
        },
        {
            title: t('coronas-zirconio'),
            image: zirconio,
            highlighted: true,
        },
        {
            title: t('blanqueamiento'),
            image: blanqueamiento,
        },
        {
            title: t('implantes-dentales'),
            image: implantes,
        },
    ];

    return (
        <section id="nuestros-servicios" className="services-container">
            <h2 className="services-title">{t('nuestros-servicios')}</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${service.highlighted ? 'highlighted' : ''}`}
                    >
                        <img src={service.image} alt={service.title} className="service-image" />
                        <p className="service-title">{service.title}</p>
                    </div>
                ))}
            </div>
            <div className="remote-message">
                <h3>{t('fuera-cali-titulo')}</h3>
                <p>
                    {t('fuera-cali-descripcion')}<br />
                    <strong>{t('fuera-cali-resumen')}</strong>
                </p>
            </div>
        </section>
    );
};

export default Services;
