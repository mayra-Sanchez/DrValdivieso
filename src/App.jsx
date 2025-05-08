import React from 'react';
import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/services/services';
import Turism from './pages/turism/turism';
import BeforeAfter from './pages/before_after/before_after';
import CasosExito from './pages/casos_exito/casos_exito';
import Footer from './pages/components/footer/footer';
import Navbar from './pages/components/navbar/navbar';
import '../src/pages/i18n';
import Elegirnos from './pages/porqueElegirnos/elegirnos';

function App() {
    // const [selectedLanguage, setSelectedLanguage] = useState(
    //     localStorage.getItem('selectedLanguage') || 'en'
    // );

    // // Actualizar el idioma en todos los componentes
    // const handleLanguageChange = (languageCode) => {
    //     setSelectedLanguage(languageCode);
    //     localStorage.setItem('selectedLanguage', languageCode);
    // };

    // // Verificar el idioma al cargar la aplicación
    // useEffect(() => {
    //     const savedLanguage = localStorage.getItem('selectedLanguage');
    //     if (savedLanguage) {
    //         setSelectedLanguage(savedLanguage);
    //     }
    // }, []);

    return (
        <div className="App">
            <Navbar></Navbar>

            <section id="home" className="section">
                <Home></Home>
            </section>

            <section id="about" className="section">
                <About></About>
            </section>

            <section id="services" className="section">
                <Services></Services>
            </section>

            <section id="turismo" className="section">
                <Turism></Turism>
            </section>

            <section id="antes_y_despues" className="section">
                <BeforeAfter></BeforeAfter>
            </section>

            <section id="caos_estudio" className="section">
                <CasosExito></CasosExito>
            </section>

            <section id="elegirnos" className="section">
                <Elegirnos></Elegirnos>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default App;