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

export const GoBackContainer = styled.View`
  position: absolute;
  top: ${normalizePixel(40)}px;
  left: ${normalizePixel(24)}px;
  border-radius: ${normalizePixel(20)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const GoBackButton = styled.TouchableWithoutFeedback``;
