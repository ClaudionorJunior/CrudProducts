import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import globalStyles, { GlobalStyles } from '~/styles';

interface ContextProviderProps {
  children: React.ReactElement;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [styles] = useState<GlobalStyles>(globalStyles);
  return <ThemeProvider theme={styles}>{children}</ThemeProvider>;
};

export default ContextProvider;
