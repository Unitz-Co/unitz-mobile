import React from 'react';

/* polyfills */
/** URL polyfill */
import 'react-native-url-polyfill/auto';

// load native config
import '@vl/mod-config/native';

// import 'react-native-gesture-handler';
import 'expo-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Providers from '@uz/components/Providers';
import StyleManager from '@vl/gstyles/StyleManager';
import ContentProvider from '@uz/unitz-providers/ContentfulProvider';
import AppContentfulProvider from '@uz/unitz-providers/AppContentfulProvider';
import AuthProvider from '@uz/unitz-providers/AuthProvider';
import AppConfigProvider from '@uz/unitz-providers/AppConfigProvider';
import UserProvider from '@uz/unitz-providers/UserProvider';
import PresenceProvider from '@uz/unitz-providers/PresenceUserProvider';
import LayoutProvider from '@uz/unitz-providers/LayoutProvider';
import RefProvider from '@uz/unitz-providers/RefProvider';
import PNProvider from '@uz/unitz-providers/PNProvider';
import { LoadableProvider } from '@uz/components/Loadable';
import I18nProvider from '@uz/unitz-providers/I18nProvider';
import TestProvider from '@uz/unitz-providers/TestProvider';
// import IAPProvider from '@na/components/IAPProvider';

import NSApp from '@uz/unitz-app';
import ValidateProvider from '@uz/unitz-providers/ValidateProvider';
import PaymentProvider from '@uz/unitz-providers/PaymentProvider';

import CodePushProvider from '@uz/unitz-providers/CodePushProvider';
import AlertProvider from '@uz/unitz-providers/AlertProvider';
import MessageProvider from '@uz/unitz-providers/MessageProvider';
import LoadingProvider from '@uz/unitz-providers/LoadingProvider';
import AppStripeProvider from '@uz/unitz-providers/AppStripeProvider';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://5ad567dccfce417683b816c669c7eea2@o946942.ingest.sentry.io/5896068',
});

const App = CodePushProvider(
  () => (
    <Providers
      providers={[
        RefProvider,
        LoadingProvider,
        AlertProvider,
        MessageProvider,
        AppConfigProvider,
        TestProvider,
        ValidateProvider,
        I18nProvider,
        LoadableProvider,
        AuthProvider,
        PaymentProvider,
        PresenceProvider,
        PNProvider,
        ContentProvider,
        AppContentfulProvider,
        StyleManager,
        SafeAreaProvider,
        LayoutProvider,
        UserProvider,
        AppStripeProvider,
      ]}
    >
      <NSApp />
    </Providers>
  ),
  `${process.env.JSBUNDLE_NUMBER || ''}`
);

export default App;
