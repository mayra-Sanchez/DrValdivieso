import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';
import doctorImage from '../../assets/doctora/doctora.jpg';

const About = () => {
    const { t } = useTranslation();

    const handleWhatsAppClick = () => {
        const phoneNumber = "+573000000000"; // Reemplaza con el número real
        const message = t('whatsapp-message');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div id="dr-valdivieso" className="about-container">
            <h1 className="main-title">{t('dra-valdivieso')}</h1>
            
            <div className="profile-content">
                <div className="image-container">
                    <img src={doctorImage} alt="Dra. María Fernanda Valdivieso" className="doctor-image" />
                </div>
                
                <div className="text-content">
                    <h2 className="section-title">{t('conoceme')}</h2>
                    <p className="highlight-text"><strong>{t('experta-sonrisas')}</strong></p>
                    <p className="location">{t('ubicacion')}</p>
                    
                    <div className="description">
                        <p>{t('about-descripcion-1')}</p>
                        <p>{t('about-descripcion-2')}</p>
                        <p>{t('about-descripcion-3')}</p>
                    </div>
                    
                    <div className="divider"></div>
                    
                    <div className="contact-section">
                        <h2 className="section-title">{t('contactame')}</h2>
                        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                            {t('contactame')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
