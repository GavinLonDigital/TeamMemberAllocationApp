import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const getConfig = ({ command, mode }) => ({
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
    }
  },
  plugins: [
    react(),
    legacy(),
  ],
})

export default getConfig;