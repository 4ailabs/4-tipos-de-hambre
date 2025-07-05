import React from 'react';

const LiveStreamBanner: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 shadow-lg animate-pulse">
            <div className="container mx-auto flex items-center justify-center space-x-3">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                    <span className="text-sm font-semibold">EN VIVO</span>
                </div>
                <span className="text-sm md:text-base">¡No te pierdas nuestra transmisión especial!</span>
                <a 
                    href="https://www.youtube.com/live/hSnnUxg-F04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center space-x-1"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Ver Ahora</span>
                </a>
            </div>
        </div>
    );
};

export default LiveStreamBanner; 