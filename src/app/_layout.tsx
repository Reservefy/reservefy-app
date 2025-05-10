import '@/styles/globals.css';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import '../../i18n.config';
import '../../reanimated.config';

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
