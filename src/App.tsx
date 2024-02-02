import CLogo from './assets/images/Logo.png';
import facebook from './assets/images/fb.png';
import instagram from './assets/images/instagram.png';
import youtube from './assets/images/youtube.png';
import tiktok from './assets/images/tiktok.png'
import twitter from './assets/images/x.png'
import whatsapp from './assets/images/whatsapp.png'
import './App.css'

function App() {
    return (
        <>
            <div>
                <img src={CLogo} className="logo" alt='Club de Conquistadores "Las Águilas"' />
            </div>
            <h1>Club de Conquistadores "Las Águilas"</h1>
            <p className="read-the-docs">
                Estamos trabajando para que tengas una mejor experiencia.
            </p>
            <p className="read-the-docs">
                Encuentranos en nuestras redes sociales como: <strong>@cclasaguilasaqp</strong>.
            </p>

            <div className="container">
                <div className="redesSociales">
                    <h2>Redes Sociales</h2>
                </div>
                <div className="fb">
                    <a href='https://www.facebook.com/cclasaguilasaqp' target='_blank'>
                        <img src={facebook} className="logoRS logoFB" alt='Facebook' />
                    </a>
                </div>
                <div className="ins">
                    <a href='https://www.instagram.com/cclasaguilasaqp/' target='_blank'>
                        <img src={instagram} className="logoRS logoI" alt='Instagram' />
                    </a>
                </div>
                <div className="tt">
                    <a href='https://www.tiktok.com/@cclasaguilasaqp' target='_blank'>
                        <img src={tiktok} className="logoRS logoTT" alt='TikTok' />
                    </a>
                </div>
                <div className="yt">
                    <a href='https://www.youtube.com/@cclasaguilasaqp' target='_blank'>
                        <img src={youtube} className="logoRS logoYT" alt='YouTube' />
                    </a>
                </div>
                <div className="x">
                    <a href='https://twitter.com/cclasaguilasaqp' target='_blank'>
                        <img src={twitter} className="logoRS logoX" alt='X' />
                    </a>
                </div>
                <div className="contacto">
                    <h2>Contáctanos</h2>
                </div>
                <div className="d">
                    <a href="https://api.whatsapp.com/send?phone=51991598654&amp;text=Hola%2C%20quiero%20más%20información%20del%20club" target='_blank'>
                        <img src={whatsapp} className="logoRS logoWA" alt='Directora' />
                    </a>
                </div>
                <div className="dam">
                    <a href="https://api.whatsapp.com/send?phone=51914786862&amp;text=Hola%2C%20quiero%20más%20información%20del%20club" target='_blank'>
                        <img src={whatsapp} className="logoRS logoWA" alt='Director asociado' />
                    </a>
                </div>
                <div className="daf">
                    <a href="https://api.whatsapp.com/send?phone=51934655393&amp;text=Hola%2C%20quiero%20más%20información%20del%20club" target='_blank'>
                        <img src={whatsapp} className="logoRS logoWA" alt='Directora asociada' />
                    </a>
                </div>
                <div className="s">
                    <a href="https://api.whatsapp.com/send?phone=51920119483&amp;text=Hola%2C%20quiero%20más%20información%20del%20club" target='_blank'>
                        <img src={whatsapp} className="logoRS logoWA" alt='Secretaria' />
                    </a>
                </div>
                <div className="d-text">
                    <h3>Deysi (Directora)</h3>
                </div>
                <div className="dam-text">
                    <h3>Jordan (Director Asociado)</h3>
                </div>
                <div className="daf-text">
                    <h3>Miriam (Directora Asociada)</h3>
                </div>
                <div className="s-text">
                    <h3>Sadith (Secretaria)</h3>
                </div>
            </div>
        </>
    )
}

export default App
