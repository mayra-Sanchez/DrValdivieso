import React from 'react';
import { useTranslation } from 'react-i18next';
import './home.css';

const Home = () => {
    const { t } = useTranslation();

    const scrollToServices = () => {
        const section = document.getElementById('nuestros-servicios');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="inicio" className="home-container">
            {/* <video className="video-bg" autoPlay muted loop>
                <source src="tu_video.mp4" type="video/mp4" />
            </video> */}
            
            <div className="overlay">
                <div className="text-box">
                    <h3>{t('nos-encantan-sonrisas')}</h3>
                    <h1>{t('salud-dental-prioridad')}</h1>
                    <button className="home-button" onClick={scrollToServices}>
                        {t('nuestros-servicios')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
