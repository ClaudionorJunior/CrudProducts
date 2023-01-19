import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Colors } from '~/@types';
import { palletColors } from '~/styles';

interface ContextProviderProps {
  children: React.ReactElement;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [colors] = useState<Colors>(palletColors);
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export default ContextProvider;
