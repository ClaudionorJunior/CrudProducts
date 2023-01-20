import styled from 'styled-components/native';
import { normalizePixel } from '~/utils/normalizePixel';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${normalizePixel(48)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: ${normalizePixel(16)}px;
  padding-right: ${normalizePixel(16)}px;
  border-width: ${normalizePixel(1)}px;
  border-radius: ${normalizePixel(8)}px;
  border-color: ${({ theme, isErrored, isFilled }) => {
    if (isErrored) {
      return theme.colors.danger;
    }
    if (isFilled && !isErrored) {
      return theme.colors.primary;
    }
    return theme.colors.neutral;
  }};
  margin-bottom: ${normalizePixel(32)}px;
`;

export const LabelTypograph = styled.Text`
  ${({ theme }) => theme.fonts.regular(16, 24, 'textColor')};
`;

export const CustomTextInput = styled.TextInput<{ isWeightInput?: boolean }>`
  flex: 1;
  height: ${normalizePixel(48)}px;
  ${({ theme }) => theme.fonts.regular(16, 24, 'textColor')};
  align-content: center;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const RightContainerActioned = styled.Pressable`
  padding-left: ${normalizePixel(8)}px;
`;

export const ErrorField = styled.View`
  position: absolute;
  justify-content: center;
  left: 0;
  bottom: -${normalizePixel(24)}px;
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: ${normalizePixel(8)}px;
  padding-left: ${normalizePixel(8)}px;
  padding-right: ${normalizePixel(8)}px;
`;

export const ErrorTypograph = styled.Text`
  ${({ theme }) => theme.fonts.medium(14, 18, 'white')};
`;
