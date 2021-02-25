
import * as React from 'react';
// import 'react-native-gesture-handler';
import 'expo-splash-screen';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import Providers from '@uz/components/Providers';
import StyleManager from '@vl/gstyles/StyleManager';
import ContentProvider from '@uz/unitz-providers/ContentfulProvider';
import AuthProvider from '@uz/unitz-providers/AuthProvider';
import LayoutProvider from '@uz/unitz-providers/LayoutProvider';
import RefProvider from '@uz/unitz-providers/RefProvider';
import PNProvider from '@uz/unitz-providers/PNProvider';
import { LoadableProvider } from '@uz/components/Loadable';
import I18nProvider from '@uz/mod-translations/Provider';
// import IAPProvider from '@na/components/IAPProvider';

import NSApp from "@uz/unitz-app";


const App = () => (
  <Providers providers={[
    RefProvider,
    I18nProvider,
    LoadableProvider,
    AuthProvider,
    PNProvider,
    ContentProvider,
    StyleManager,
    SafeAreaProvider,
    LayoutProvider,
  ]}>
    <NSApp />
  </Providers>
);

export default App;
