import './Nav.css'
import { useState, useEffect } from 'react';
import logoImg from '../assets/resorent.png';
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
    { label: 'Home', path: '/' },
    { label: 'Explore Food', path: '/Explore_food' },
    { label: 'Review', path: '/Review' },
    { label: 'About Us', path: '/About Us' },
    { label: 'FAQ', path: '/FAQ' },
];

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const activeTab = (path) => location.pathname === path;

    const goTo = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    // Let Escape close the mobile menu
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    return (
        <nav className="resto-nav">
            <div className="resto-logo">
                <img src={logoImg} className="resto-img" alt="Restaurant logo" />
            </div>

            <button
                type="button"
                className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="primary-menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>

            <div id="primary-menu" className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        type="button"
                        className={`tab-item ${activeTab(tab.path) ? 'active' : ''}`}
                        aria-current={activeTab(tab.path) ? 'page' : undefined}
                        onClick={() => goTo(tab.path)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
