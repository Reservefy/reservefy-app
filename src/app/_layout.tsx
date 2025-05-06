import '@/styles/globals.css';
import 'react-native-reanimated';

import RootProvider from '@/providers/root';
import App from './app';

const IndexLayout = () => {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
};
export default IndexLayout;
