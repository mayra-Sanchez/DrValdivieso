import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaHandHoldingUsd, FaCashRegister } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="footer-container">
            <section className="payment-methods">
                <h2>{t("medios-pago") || "MEDIOS DE PAGO"}</h2>
                <div className="payment-icons">
                    <div className="payment-item" title="Pago con tarjeta">
                        <MdPayment className="payment-icon" />
                        <span>{t("tarjeta") || "Tarjeta"}</span>
                    </div>
                    <div className="payment-item" title="Pago en efectivo">
                        <FaHandHoldingUsd className="payment-icon" />
                        <span>{t("efectivo") || "Efectivo"}</span>
                    </div>
                    <div className="payment-item" title="Transferencia bancaria">
                        <FaCashRegister className="payment-icon" />
                        <span>{t("transferencia") || "Transferencia"}</span>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="contact">
                    <h2>{t("contactame")}</h2>
                    <p>maria@gmail.com</p>
                    <p>321 624 4439</p>
                </div>

                <div className="footer-right">
                    <div className="social-icons">
                        <a href="https://www.facebook.com/Dr.mariafdavaldivieso?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=573216244439&text=Hola+estoy+interesad%40" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="icon" />
                        </a>
                        <a href="https://www.instagram.com/dra.mariavaldivies/?igshid=NzZlODBkYWE4Ng%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://www.tiktok.com/@dra.mariafvaldivieso?_t=8lkggp4lh1s&_r=1" target="_blank" rel="noopener noreferrer">
                            <SiTiktok className="icon" />
                        </a>
                    </div>

                    {/* <div className="language-selector">
                        <label htmlFor="language">🌐 {t("traducir") || "Traducir"}:</label>
                        <select id="language" name="language" onChange={handleLanguageChange} value={i18n.language}>
                            <option value="es">{t("spanish")}</option>
                            <option value="en">{t("english")}</option>
                        </select>
                    </div> */}
                </div>
            </footer>
        </div>
    );
};

export default Footer;
