import { Outfit, Lexend, Manrope, Plus_Jakarta_Sans } from "next/font/google";

export const outfit = Outfit({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

export const lexend = Lexend({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

export const plusjakartasans = Plus_Jakarta_Sans({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

export const manrope = Manrope({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    variable: "--font-manrope",
});