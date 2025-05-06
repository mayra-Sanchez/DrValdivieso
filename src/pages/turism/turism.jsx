import React from 'react';
import { useTranslation } from 'react-i18next';
import './turism.css';
import hospedajeImg from '../../assets/turismo/hospedaje.png';
import transporteImg from '../../assets/turismo/transporte.png';
import tratamientoImg from '../../assets/turismo/tratamiento.png';

const Turism = () => {
    const { t } = useTranslation();

    return (
        <section className="turism-section" id="turismo">
            <div className="turism-title">{t('turismo-titulo')}</div>
            
            <div className="turism-cards">
                <div className="turism-card">
                    <div className="image-wrapper">
                        <img src={hospedajeImg} alt={t('hospedaje')} />
                        <div className="overlay"></div>
                        <p className="image-text">{t('hospedaje')}</p>
                    </div>
                </div>
                <div className="turism-card">
                    <div className="image-wrapper">
                        <img src={transporteImg} alt={t('transporte')} />
                        <div className="overlay"></div>
                        <p className="image-text">{t('transporte')}</p>
                    </div>
                </div>
                <div className="turism-card">
                    <div className="image-wrapper">
                        <img src={tratamientoImg} alt={t('tratamiento')} />
                        <div className="overlay"></div>
                        <p className="image-text">{t('tratamiento')}</p>
                    </div>
                </div>
            </div>

            <div className="turism-footer">
                <h3>{t('turismo-subtitulo')}</h3>
                <p>
                    {t('turismo-descripcion')}<br />
                    <strong>{t('turismo-agenda')}</strong>
                </p>
            </div>
        </section>
    );
};

export default Turism;
