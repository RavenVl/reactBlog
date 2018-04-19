import React from 'react';
function Foto(props) {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.sunhome.ru/i/wallpapers/190/kartinka-zastavka.orig.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="http://www.wallpixa.com/wp-content/uploads/2018/03/Download-Nature-4K-Image-HD-Wallpaper-Desktop-Background-purple_sunset-wide.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img1.goodfon.ru/wallpaper/big/a/69/kartinka-3d-dikaya-koshka.jpg"  alt="Third slide" />
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
};
export default Foto;

