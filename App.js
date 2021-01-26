
import * as React from 'react';
// import 'react-native-gesture-handler';
import 'expo-splash-screen';

import { ThemeProvider, ThemeContext } from 'react-native-elements';
import gstyles from '@vl/gstyles';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { useColorScheme } from 'react-native-appearance';
import { useLocalStorage } from '@vl/hooks/useLocalStorage';
import AuthProvider from '@na/components/AuthProvider';
// import IAPProvider from '@na/components/IAPProvider';


// import Routes from './src/routes';
import NSApp from "@uz/unitz-app";

const getTheme = () => {
  const theme = {
    Button: {
      titleStyle: {
        ...gstyles.colors.black,
      },
    },
    colors: {
      black: gstyles.textColors.black.color,
      divider: gstyles.textColors.divider.color,
    },
  };
  return theme;
};

const ThemeManager = ({ children }) => {
  const { updateTheme } = React.useContext(ThemeContext);
  React.useEffect(() => {
    updateTheme(getTheme());
    return gstyles.onChange(() => updateTheme(getTheme()));
  }, []);
  return children;
};

const StyleManager = ({ children }) => {
  const colorSchema = useColorScheme();
  const [useDark, $useDark, useDark_] = useLocalStorage('@NA::settings::darkTheme', (colorSchema === 'dark'));

  React.useEffect(() => {
    gstyles.changeDarkTheme(useDark);
    return gstyles.onChange(() => {
      if (useDark !== gstyles.themeConfig.darkTheme) { $useDark(gstyles.themeConfig.darkTheme); }
    });
  }, [useDark]);

  if (useDark_) return null;

  return (
    <ThemeProvider theme={getTheme()} useDark={useDark}>
      <ThemeManager>
        {children}
      </ThemeManager>
    </ThemeProvider>
  );
};


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
  <AuthProvider>
    <StyleManager>
      <SafeAreaProvider>
        <NSApp />
      </SafeAreaProvider>
    </StyleManager>
  </AuthProvider>
);

export default App;
