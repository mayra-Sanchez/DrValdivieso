import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt, FaWhatsapp, FaTimes, FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './navbar.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
    const [whatsappMessage, setWhatsappMessage] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon2x,
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
        });
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleWhatsappSubmit = () => {
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        setWhatsappMessage('');
        setIsWhatsappModalOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <FaMapMarkerAlt 
                        className="icon" 
                        onClick={() => setIsMapModalOpen(true)} 
                        title={t('office-location')}
                    />
                    <FaWhatsapp 
                        className="icon" 
                        onClick={() => setIsWhatsappModalOpen(true)} 
                        title={t('whatsapp-message')}
                    />
                </div>

                <button className={`hamburger ${isMenuOpen ? 'menu-open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FaBars />
                </button>

                <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
                    <button className="nav-link" onClick={() => scrollToSection('dr-valdivieso')}>{t('dr-valdivieso')}</button>
                    <button className="nav-link" onClick={() => scrollToSection('inicio')}>{t('inicio')}</button>
                    <button className="nav-link" onClick={() => scrollToSection('casos-exito')}>{t('casos-exito')}</button>
                </div>

                <div className="navbar-right">
                    <button className="lang-button" onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
                        {i18n.language === 'es' ? t('english') : t('spanish')}
                    </button>
                </div>
            </div>

            {/* Modal Ubicación */}
            <Modal
                isOpen={isMapModalOpen}
                onRequestClose={() => setIsMapModalOpen(false)}
                contentLabel={t('office-location')}
                className="modal"
                overlayClassName="overlay"
                ariaHideApp={false}
            >
                <div className="modal-header">
                    <h2>{t('office-location')}</h2>
                    <button className="close-modal" onClick={() => setIsMapModalOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <div className="modal-content">
                    <MapContainer 
                        center={[40.748817, -73.985428]} 
                        zoom={15} 
                        style={{ height: '400px', width: '100%' }}
                        className="map-container"
                    >
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[40.748817, -73.985428]}>
                            <Popup>
                                <h3>{t('oficina-principal')}</h3>
                                <p>{t('direccion')}</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <button className="modal-close-button" onClick={() => setIsMapModalOpen(false)}>
                        {t('cerrar')}
                    </button>
                </div>
            </Modal>

            {/* Modal WhatsApp */}
            <Modal
                isOpen={isWhatsappModalOpen}
                onRequestClose={() => setIsWhatsappModalOpen(false)}
                contentLabel={t('send-whatsapp-message')}
                className="modal"
                overlayClassName="overlay"
                ariaHideApp={false}
            >
                <div className="modal-header">
                    <h2>{t('send-whatsapp-message')}</h2>
                    <button className="close-modal" onClick={() => setIsWhatsappModalOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <div className="modal-content">
                    <textarea
                        placeholder={t('type-your-message')}
                        value={whatsappMessage}
                        onChange={(e) => setWhatsappMessage(e.target.value)}
                        rows="5"
                        className="whatsapp-textarea"
                    />
                    <div className="modal-actions">
                        <button className="modal-submit-button" onClick={handleWhatsappSubmit}>
                            {t('send')}
                        </button>
                        <button className="modal-cancel-button" onClick={() => setIsWhatsappModalOpen(false)}>
                            {t('cancel')}
                        </button>
                    </div>
                </div>
            </Modal>
        </nav>
    );
};

export default Navbar;
