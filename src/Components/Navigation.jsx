import './Nav.css'
import logoImg from '../assets/resorent.png';

import { useNavigate,useLocation } from "react-router-dom";
export default function navigate(){
    const navigate=useNavigate();
    const location=useLocation();
    const activeTab=(path)=> location.pathname===path;
    
   
    return(
        <>
        <nav className="resto-nav">
                    <div className="resto-logo">
                        <img src={logoImg} className="resto-img" alt="Restaurent-Image"/>
                    </div>
                    <div className="nav-tabs">
                        <button
                        className={`tab-item ${activeTab('/') ?'active':'' }`}
                        onClick={()=> 
                        navigate('/')}>Home</button>
                        <button
                        className={`tab-item ${activeTab('/Explore_food') ? 'active':''}`}
                        onClick={()=> 
                        navigate('/Explore_food')}>Explore Food</button>
                        <button
                        className={`tab-item ${activeTab('/Review') ? 'active':''}`}
                        onClick={()=>navigate('/Review')}>Review</button>
                        <button
                        className={`tab-item ${activeTab('About Us') ? 'active':''}`}
                        onClick={()=>navigate('/About Us')}>About Us</button>
                        <button
                        className={`tab-item ${activeTab('FAQ') ? 'active' : ''}`}
                        onClick={()=>navigate('/FAQ')}>FAQ</button>
                    </div>
                </nav>
        </>
    );
}