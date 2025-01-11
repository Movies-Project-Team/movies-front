import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';

export const Theme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff9e6', // Nhạt
      100: '#fff3cc',
      200: '#ffe999',
      300: '#ffdf66',
      400: '#ffc107', // Vàng đậm
      500: '#e6ac06',
      600: '#cc9805',
      700: '#b38604',
      800: '#997303',
      900: '#805f02'
    }
  }
});
