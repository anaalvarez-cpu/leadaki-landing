import React from 'react'; // React import is needed if legacy build, but safely included
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SpringButton({ children, className, onClick, variant = 'primary' }) {
    const variants = {
        primary: "bg-white text-primary font-bold hover:bg-gray-100",
        secondary: "bg-transparent border border-white/20 text-white hover:bg-white/10",
        accent: "bg-accent text-white font-bold hover:bg-accent-hover",
        outline: "border border-white/30 text-white hover:bg-white/5 backdrop-blur-sm"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(
                "px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2",
                variants[variant] || variants.primary,
                className
            )}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}
