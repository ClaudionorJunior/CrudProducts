import styled from 'styled-components/native';
import { normalizePixel } from '~/utils/normalizePixel';

export const Container = styled.View`
  flex: 1;
  padding-left: ${normalizePixel(24)}px;
  padding-right: ${normalizePixel(24)}px;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  justify-content: center;
  align-items: center;
`;

export const ContainerInputs = styled.View`
  width: 100%;
`;

export const ContainerCreateAccount = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${normalizePixel(24)}px;
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountLabel = styled.Text`
  ${({ theme }) => theme.fonts.medium(16, 24, 'primary')}
  color: ${({ theme }) => theme.colors.primary};
`;
