import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { FormProvider } from './contexts/FormContext';
import { Router } from './router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <FormProvider>
          <Router />
        </FormProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
