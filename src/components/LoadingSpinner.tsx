import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-[9999]">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    {/* Ring */}
                    <div className="absolute inset-0 border-4 border-gold/20 rounded-full"></div>
                    {/* Spinning part */}
                    <div className="absolute inset-0 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-chocolate font-playfair font-bold text-xl animate-pulse">
                    Choco Ice...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
