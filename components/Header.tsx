import React, { useEffect, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
    { href: '#celular', label: '🧠 Celular' },
    { href: '#emocional', label: '❤️ Emocional' },
    { href: '#simbolica', label: '🫂 Simbólica' },
    { href: '#arcaica', label: '🛡️ Arcaica' },
    { href: '#solucion', label: '🌱 Solución' },
    { href: '/servicios', label: '💼 Servicios Centrobioenergetica' },
    { href: '/productos', label: '🛒 Productos' },
];

const mobileNavItems = [
    { value: '#inicio', label: 'Menú' },
    { value: '#celular', label: 'Hambre Celular' },
    { value: '#emocional', label: 'Hambre Emocional' },
    { value: '#simbolica', label: 'Hambre Simbólica' },
    { value: '#arcaica', label: 'Hambre Arcaica' },
    { value: '#solucion', label: 'Solución Integrada' },
    { value: '/servicios', label: 'Servicios Centrobioenergetica' },
    { value: '/productos', label: 'Productos' },
]

const Header: React.FC = () => {
    const sectionIds = navItems.map(item => item.href.substring(1));
    const activeId = useScrollSpy(sectionIds, { rootMargin: '0px 0px -50% 0px' });

    const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const targetId = e.target.value;
        if (targetId) {
            if (targetId.startsWith('/')) {
                window.location.href = targetId;
            } else {
                const element = document.querySelector(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };
    
    return (
        <header id="inicio" className="bg-amber-100/50 sticky top-0 z-50 backdrop-blur-sm shadow-sm transition-colors duration-300">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-orange-900">Los 4 Tipos de Hambre</h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(item => (
                                <a 
                                    key={item.href} 
                                    href={item.href} 
                                    className={`px-3 py-2 rounded-md text-sm font-medium border-b-2 transition-colors duration-300 ${
                                        (item.href === '/servicios' || item.href === '/productos')
                                            ? 'bg-orange-100 text-orange-900 border-orange-400 font-bold shadow hover:bg-orange-200 hover:text-orange-800'
                                            : activeId === item.href.substring(1)
                                                ? 'text-orange-700 border-orange-700'
                                                : 'text-stone-700 border-transparent hover:text-orange-700 hover:border-orange-700'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center gap-2">
                        <select 
                            id="mobile-nav" 
                            onChange={handleMobileNavChange}
                            className="bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-stone-700"
                        >
                           {mobileNavItems.map(item => (
                               <option key={item.value} value={item.value}>{item.label}</option>
                           ))}
                        </select>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
