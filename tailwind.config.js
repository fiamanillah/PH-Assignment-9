import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode using 'class' strategy
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            screens: {
                'desktop-xl': { max: '1535px' },
                'laptop-xl': { max: '1279px' },
                'tablet-lg': { max: '1023px' },
                'mobile-lg': { max: '767px' },
                'mobile-sm': { max: '639px' },
            },
            colors: {
                // Light Mode Colors
                background: '#f5f7fc', // Light Background
                primary: '#2c3a64', // Dark Purple-Blue (Primary)
                secondary: '#5a6a8c', // Muted Purple-Blue (Secondary)
                accent: '#5b5fe0', // Purplish Blue (Accent)
                info: '#7c83ed', // Light Purplish Blue (Info)
                success: '#22c55e', // Green (Success)
                warning: '#eab308', // Golden Yellow (Warning)
                danger: '#e94e60', // Coral Red (Danger)
                lightPrimaryText: '#1f2937', // Dark Gray (Primary Text)
                lightSecondaryText: '#4b5563', // Medium Gray (Secondary Text)
                lightCard: '#ffffff', // White (Card Background)
                lightCardSecondary: '#eceffd', // Light Purplish Blue (Card Secondary)
                lightCardHover: '#f2f4fc', // Very Light Purplish Blue (Card Hover)

                // Dark Mode Colors
                darkBackground: '#121b3a', // Very Dark Purple-Blue (Background)
                darkCard: '#1e2a50', // Dark Purple-Blue (Card Background)
                darkCardSecondary: '#2a3a5c', // Darker Purple-Blue (Card Secondary)
                darkCardHover: '#404b6e', // Muted Purplish Blue (Card Hover)
                darkPrimary: '#d4d9f3', // Light Grayish Blue (Primary Text)
                darkSecondary: '#a8b2d3', // Light Purple-Blue Gray (Secondary Text)
                darkAccent: '#7a7ffd', // Light Purplish Blue (Accent)
                darkInfo: '#9297f9', // Lighter Purplish Blue (Info)
                darkSuccess: '#34d399', // Light Green (Success)
                darkWarning: '#facc15', // Soft Yellow (Warning)
                darkDanger: '#fb7185', // Soft Red (Danger)
                darkPrimaryText: '#e2e8f0', // Light Gray (Primary Text)
                darkSecondaryText: '#cbd5e1', // Lighter Gray (Secondary Text)

                // Neutral Grays
                gray: {
                    50: '#f8fafc', // White Smoke
                    100: '#f1f5f9', // Light Gray
                    200: '#e2e8f0', // Very Light Gray
                    300: '#cbd5e1', // Light Gray
                    400: '#9ca3af', // Cool Gray
                    500: '#6b7280', // Gray
                    600: '#4b5563', // Dark Gray
                    700: '#374151', // Charcoal
                    800: '#1f2937', // Dark Charcoal
                    900: '#111827', // Almost Black
                },

                // Additional Colors for Career Consulting
                highlight: '#d75baf', // Pinkish Purple (Highlight)
                positive: '#10b981', // Emerald Green (Positive)
                neutral: '#eab3c3', // Soft Blush Pink (Neutral)
                link: '#5a4fcf', // Purplish Blue (Links)
                callToAction: '#e67c34', // Bright Orange (Call to Action)
                backdrop: '#f1f4fa', // Off White (Backdrop)
                lightShadow: '#e2e7f1', // Light Grayish Blue Shadow
                darkShadow: '#2a3550', // Darker Blue-Purple Shadow

                // Accent Shades
                softPurple: '#b794f4', // Light Purple (Accent)
                softTeal: '#4fd1c5', // Teal (Accent)
                softYellow: '#fcd34d', // Light Yellow (Highlight)
                darkPurple: '#6b21a8', // Deep Purple (Accent)
            },

            typography: {
                DEFAULT: {
                    css: {
                        // Remove default margin and padding for all elements
                        '*': {
                            margin: '0',
                            padding: '0',
                        },
                        // Light Mode typography
                        color: '#1e293b', // Light mode primary text color
                        '[class~="dark"] &': {
                            color: '#e2e8f0', // Dark mode primary text color
                        },
                        a: {
                            color: '#3b82f6',
                            '&:hover': {
                                color: '#60a5fa',
                            },
                        },
                        h1: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b', // Light mode heading color
                            '[class~="dark"] &': {
                                color: '#e2e8f0', // Dark mode heading color
                            },
                        },
                        h2: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        h3: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        h4: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        h5: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        h6: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        p: {
                            margin: '0',
                            padding: '0',
                            color: '#475569', // Light mode secondary text
                            '[class~="dark"] &': {
                                color: '#cbd5e1', // Dark mode secondary text
                            },
                        },
                        strong: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        span: {
                            // "font-size": "0.8rem",
                            margin: '0',
                            padding: '0',
                            color: '#475569', // Light mode secondary text
                            '[class~="dark"] &': {
                                color: '#cbd5e1', // Dark mode secondary text
                            },
                        },
                        ul: {
                            margin: '0',
                            padding: '0',
                            listStyleType: 'none', // Remove default list styling
                        },
                        ol: {
                            margin: '0',
                            padding: '0',
                            listStyleType: 'none',
                        },
                        li: {
                            margin: '0',
                            padding: '0',
                            color: '#475569', // Light mode secondary text
                            '[class~="dark"] &': {
                                color: '#cbd5e1', // Dark mode secondary text
                            },
                        },
                        label: {
                            margin: '0',
                            padding: '0',
                            color: '#475569', // Light mode secondary text
                            '[class~="dark"] &': {
                                color: '#cbd5e1', // Dark mode secondary text
                            },
                        },
                        input: {
                            margin: '0',
                            padding: '0',
                            color: '#475569', // Light mode secondary text
                            '[class~="dark"] &': {
                                color: '#cbd5e1', // Dark mode secondary text
                            },
                        },
                        blockquote: {
                            margin: '0',
                            padding: '0',
                            color: '#475569',
                            '[class~="dark"] &': {
                                color: '#cbd5e1',
                            },
                        },
                        code: {
                            margin: '0',
                            padding: '0',
                            color: '#3b82f6',
                        },
                        pre: {
                            margin: '0',
                            padding: '0',
                            backgroundColor: '#f3f4f6',
                            '[class~="dark"] &': {
                                backgroundColor: '#1f2937',
                            },
                        },
                        table: {
                            margin: '0',
                            padding: '0',
                            borderCollapse: 'collapse',
                        },
                        th: {
                            margin: '0',
                            padding: '0',
                            textAlign: 'left',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                        td: {
                            margin: '0',
                            padding: '0',
                            color: '#1e293b',
                            '[class~="dark"] &': {
                                color: '#e2e8f0',
                            },
                        },
                    },
                },
            },
        },
    },
    plugins: [typography],
}
