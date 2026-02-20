import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                success: 'oklch(var(--success))',
                warning: 'oklch(var(--warning))',
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif'
                ],
                display: [
                    'Inter',
                    'system-ui',
                    'sans-serif'
                ]
            },
            fontSize: {
                'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
                'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
                'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '0', fontWeight: '600' }],
            },
            letterSpacing: {
                'tighter': '-0.04em',
                'tight': '-0.02em',
                'wide': '0.02em',
                'wider': '0.04em',
                'widest': '0.08em',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                'xs': '0 1px 2px 0 rgba(0,0,0,0.05)',
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'glow': '0 0 30px -5px oklch(var(--primary) / 0.3)',
                'glow-lg': '0 0 50px -10px oklch(var(--primary) / 0.4)',
                'glow-accent': '0 0 30px -5px oklch(var(--accent) / 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, oklch(var(--gradient-start)), oklch(var(--gradient-mid)), oklch(var(--gradient-end)))',
                'gradient-accent': 'linear-gradient(135deg, oklch(var(--gradient-accent-start)), oklch(var(--gradient-accent-end)))',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px oklch(var(--primary) / 0.3)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 40px oklch(var(--primary) / 0.5)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
