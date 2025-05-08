import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './elegirnos.css';
import img1 from '../../assets/porqueElegirnos/13.png';
import img2 from '../../assets/porqueElegirnos/15.png';
import img3 from '../../assets/porqueElegirnos/14.png';

const Elegirnos = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: img1,
            text: t("porque-elegirnos-1")
        },
        {
            image: img2,
            text: t("porque-elegirnos-2")
        },
        {
            image: img3,
            text: t("porque-elegirnos-3")
        }
    ];


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="porque-elegirnos" className="porqueElegirnos-container">
            <h2 className="section-title">{t("porque-elegirnos-titulo")}</h2>
            <div className="slider-container">
                <button className="slider-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
                <div className="slider">
                    {slides.map((slide, index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                            <img src={slide.image} alt={`Slide ${index}`} className="slide-icon" />
                            <p>{slide.text}</p>
                        </div>
                    ))}
                </div>
                <button className="slider-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default Elegirnos;