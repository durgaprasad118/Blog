'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/util';

export default function BuyMeCoffee() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="fixed right-4 bottom-20 z-40 pointer-events-auto"
            initial={{ y: '-100vh', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 2.5
            }}
        >
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <Link
                    href="https://buymeacoffee.com/iam_walterwhite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        'group relative flex flex-col items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 transition-all duration-300 hover:scale-110 hover:shadow-xl',
                        'hover:bg-white/95'
                    )}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => playSound('/theme-audio.wav')}
                >
                    <div className="relative w-8 h-8">
                        <img
                            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                            alt="Buy me a coffee"
                            className="w-full h-full "
                        />
                    </div>

                    {/* Tooltip */}
                    <div
                        className={cn(
                            'absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 opacity-0 pointer-events-none',
                            'group-hover:opacity-100 group-hover:translate-x-0',
                            'transform translate-x-2'
                        )}
                    >
                        <div className="text-center">
                            <div className="font-medium">Enjoyed this?</div>
                            <div className="text-xs text-gray-300">
                                Buy me a coffee ☕
                            </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>

                    {/* Subtle floating animation */}
                    <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/10 animate-pulse"
                        style={{ animationDuration: '3s' }}
                    ></div>

                    {/* Gentle sparkle effects */}
                    <div
                        className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-pulse"
                        style={{
                            animationDuration: '4s',
                            animationDelay: '0ms'
                        }}
                    ></div>
                    <div
                        className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"
                        style={{
                            animationDuration: '4s',
                            animationDelay: '2s'
                        }}
                    ></div>

                    {/* Coffee steam effect */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div
                            className="w-0.5 h-2 bg-gray-400/40 rounded-full animate-pulse"
                            style={{
                                animationDuration: '2s',
                                animationDelay: '0ms'
                            }}
                        ></div>
                        <div
                            className="w-0.5 h-1.5 bg-gray-400/30 rounded-full animate-pulse absolute -top-1 -left-0.5"
                            style={{
                                animationDuration: '2.5s',
                                animationDelay: '0.5s'
                            }}
                        ></div>
                        <div
                            className="w-0.5 h-1.5 bg-gray-400/30 rounded-full animate-pulse absolute -top-1 -right-0.5"
                            style={{
                                animationDuration: '2.5s',
                                animationDelay: '1s'
                            }}
                        ></div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/20 group-hover:to-orange-400/20 transition-all duration-500"></div>

                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-300 group-hover:scale-125"></div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
