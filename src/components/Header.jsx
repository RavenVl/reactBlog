import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className="demo-ribbon">
            <div className="demo-header">
                <div>
                    <h3>Country News</h3>
                    <div>Top stories of my country</div>
                </div>
                <div className="left-header">
                    <div className="icon-container">
                        <i className="fas fa-user"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <i className="fab fa-vk"></i>
                    </div>
                    <div className="header-link">
                        <div class="btn btn-primary"><Link to='/'>Home</Link></div>
                        <div class="btn btn-primary"><Link to='/foto'>Foto</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;