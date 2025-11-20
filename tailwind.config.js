/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{liquid,js}", '!assets/theme.css*', '!node_modules/**'],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '3xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    letterSpacing: {
      tightest: '-.05rem',
      tighter: '-0.025rem',
      tight: '0.009rem',
      normal: '0rem',
      wide: '0.025rem',
      wider: '0.05rem',
      widest: '0.1rem',
    },
    extend: {
      width: {
        "img-width": "min(40vw, 480px)"
      },
      margin: {
        "img-margin": "min(8vw, 96px)"
      },
      minHeight: {
        'auto': 'auto',
      }, animation: {
        "fade-in": "fadeIn 0.6s ease-in-out"
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }),
      colors: {
        grey: {
          main: "#474747",
          dark: "#222222",
          light: "#747373",
          separator: "#D9D9D9",
          background: "#F2F2F2",
          white: "#FFFFFF",
        },
        primary: {
          main: "#337576",
          dark: "#005254",
          light: "#F0F5F5",
          deactivated: "#98B9BA",
        },
        secondary: {
          main: "#FB7053",
        },
        tertiary: {
          clementine: "#FFA04C",
          sage: "#4BAC74",
          sandy: "#F2F0EC",
        },
        error: {
          main: "#C23E29",
          light: "#FFECEE",
        },
        success: {
          main: "#0C7C48",
          light: "#E6F5EC",
        },
      },
      boxShadow: {
        // Elevation 2px = (shadow-x & rounded-2xl)
        'x': '0px 2px 4px rgba(0, 82, 84, 0.12), 0px 0px 1px rgba(0, 82, 84, 0.1);',
        // Elevation 4px = (shadow-2x & rounded-2xl)
        '2x': '0px 2px 2px rgba(0, 82, 84, 0.04), 0px 4px 8px rgba(0, 82, 84, 0.08), 0px 0px 1px rgba(0, 82, 84, 0.12);',
        // Elevation 8px = (shadow-3x & rounded-2xl)
        '3x': '0px 4px 4px rgba(0, 82, 84, 0.04), 0px 8px 12px rgba(0, 82, 84, 0.08), 0px 0px 1px rgba(0, 82, 84, 0.1);',
        // Elevation 16px = (shadow-4x & rounded-2xl)
        '4x': '0px 12px 16px -2px rgba(0, 82, 84, 0.12), 0px 0px 1px rgba(0, 82, 84, 0.04);',
        // Elevation 24px = (shadow-5x & rounded-2xl)
        '5x': '0px 16px 15px -12px rgba(0, 82, 84, 0.05), 0px 24px 40px -2px rgba(0, 82, 84, 0.1), 0px 0px 1px rgba(0, 82, 84, 0.02);',

        'mobile': '2px 7px 15px 0px rgba(0, 55, 56, 0.15), 8px 26px 28px 0px rgba(0, 55, 56, 0.13), 19px 60px 37px 0px rgba(0, 55, 56, 0.08), 33px 106px 44px 0px rgba(0, 55, 56, 0.02);'
      },
      padding: {
        default: "5%"
      },
      borderRadius: {
        //border-radius: 2rem; /* 32 px */
        "4xl": "2rem",
      },
      fontSize: {
        'body-1':
          ['1.0rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '400',
          }],

        'body-2':
          ['0.75rem', {
            lineHeight: '1.0rem',
            letterSpacing: '0.009rem',
            fontWeight: '700',
          }],

        'body-3':
          ['0.75rem', {
            lineHeight: '1.0rem',
            letterSpacing: '0.009rem',
            fontWeight: '400',
          }],

        'price-lg':
          ['1.375rem', {
            lineHeight: '2.0rem',
            letterSpacing: '0rem',
            fontWeight: '700',
          }],

        'price-sm':
          ['1.0rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '700',
          }],

        'compare-price-lg':
          ['1.375rem', {
            fontWeight: '400',
            lineHeight: '2.0rem',
            letterSpacing: '0rem',
          }],

        'compare-price-sm':
          ['1.0rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '400',
          }],

        'primary-button':
          ['1.0rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '700',
          }],

        'secondary-button':
          ['1.0rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '700',
          }],

        'h1': ['2.0rem', {
          lineHeight: '2.5rem',
          letterSpacing: '0rem',
          fontWeight: '700',
        }],

        'h2': ['1.75rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0rem',
          fontWeight: '700',
        }],

        'h3': ['1.0rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.009rem',
          fontWeight: '700',
        }],

      },
      aspectRatio: {
        '6/1': '6 / 1',
        '3/1': '3 / 1',
        '3/2': '3 / 2',
        '4/1': '4 / 1',
      },
      gridTemplateColumns: {
        'usp': 'repeat(auto-fit,minmax(128px, 1fr))',
        'collection-page': '260px, 1fr',
      },
      height: {
        "menu-height": "72px"
      },
      spacing: {
        'menu-height': '72px',
        'products-grid': "min(5vw, 28px)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out"
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      })
    },
  },
  plugins: [],
}
