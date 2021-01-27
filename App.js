
import * as React from 'react';
// import 'react-native-gesture-handler';
import 'expo-splash-screen';

// import gstyles from '@vl/gstyles';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import Providers from '@uz/components/Providers';
import StyleManager from '@vl/gstyles/StyleManager';
import AuthProvider from '@uz/components/AuthProvider';
// import IAPProvider from '@na/components/IAPProvider';


// import Routes from './src/routes';
import NSApp from "@uz/unitz-app";


// const App = () => (
//   <AuthProvider>
//     <IAPProvider>
//     <StyleManager>
//       <SafeAreaProvider>
//         <NSApp />
//       </SafeAreaProvider>
//     </StyleManager>
//     </IAPProvider>
//   </AuthProvider>
// );

const App = () => (
  <Providers providers={[
    AuthProvider,
    StyleManager,
    SafeAreaProvider,
  ]}>
    <NSApp />
  </Providers>
);

export default App;
