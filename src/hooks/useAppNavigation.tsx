import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { RootStackParamList } from '~/navigations/@types';

interface AppNavigateProps {
  screen: keyof RootStackParamList;
  params?: any;
}

const useAppNavigation = () => {
  const navigation = useNavigation();

  const navigate = useCallback(({ screen, params }: AppNavigateProps) => {
    navigation.navigate(screen, params);
  }, []);

  return {
    navigate,
  };
};

export default useAppNavigation;
