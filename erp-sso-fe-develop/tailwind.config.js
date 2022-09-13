/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    colors: {

      yellowButton:'#FFB400',
      color_Blue:'#00477D',
      textYellow:'#E6A100',


      white: '#ffffff',
      black: '#000000',
      blue: '#00508C',
      blue09C2EB: '#09C2EB',
      blue3B82F6: '#3B82F6',
      blue5399D0:'#5399D0',
      bluefocus: '#004171',
      blue00C4CC:'#00C4CC',
      buttonBlueDisabled:'#00508C',
      buttonYellow: '#FFB100',
      YellowFEBC27: '#FEBC27',
      Yellowebe209:'#ebe209',
      buttonYellowFocused:'#FFB100',
      buttonYellowDisabled:'#FED373',
      
      textblue001446:'#001446',
      trans: "#00000000",
      whitef: '#f8f8fa',
      blue00c0ff: '#00c0ff',
      brown: '#AB9D9D',
      green09EB3B: '#09EB3B',
      green09EB7E: '#09EB7E',
      greenCBEB09:'#CBEB09',
      orFFB79A: '#FFB79A',
      orFE5D03:'#FE5D03',
      redE2574C: '#E2574C',
      brownC58585: '#C58585',
      grayB0AB99: '#B0AB99',
      red: '#EB0909',
      greenactive: "#CAEDCB",
      textgre: '#00a307',
      reddeactive: "#FFD3D3",
      textred: '#DE0000',
      linegray: '#BFBFBF',
      textgray: '#858585',
      inactive: '#e9e9e9',
      gray: '#ffffff',
      redbuttonremove: '#fee8e7',
      buttongray: '#DADADA',
      primarygray: '#E2E7F1',
      blueBADCEE: '#BADCEE',
      primaryblue: '#badcee',
      primarygreen: '#dcfbea',
      scgray: '#A3A3A3',
      textblue: '#00477d',
      bluepage: '#0066ff',
      primaryYellowe:'#FFB400'
    },
    fontFamily: {},
    screens: {
      // default: 0 <-> 479 // portrait mobile // fluid width
      sm: '320px', // landscape mobile // fixed width // same design as portrait mobile
      md: '467px', // tablet // fixed width
      lg: '767px', // laptop // fixed width
      xl: '1024px', // desktop // fixed width
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '30px',
        md: '30px',
        lg: '30px',
        xl: '30px',
      },
    },
  },
  plugins: [],
}
