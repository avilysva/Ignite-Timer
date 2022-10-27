import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes/default';
import { GlobalStyles } from './themes/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ignite Timer</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}
