import React, { useCallback } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-native';
import * as Yup from 'yup';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '~/elements/CustomInput';
import {
  Container,
  ContainerInputs,
  GoBackContainer,
  GoBackButton,
} from './styles';
import { normalizePixel } from '~/utils/normalizePixel';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email obrigatório')
    .trim(),
  password: Yup.string()
    .min(6, 'Senha deve ter pelo menos 6 digitos')
    .required('Senha obrigatória')
    .trim(),
});

const CreateAccount = () => {
  const formProps = useForm({ resolver: yupResolver(schema) });
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleCreateAccount = useCallback((values: FieldValues) => {
    // criar conta
  }, []);

  return (
    <Container>
      <GoBackContainer>
        <GoBackButton onPress={handleBackPress}>
          <Feather name="chevron-left" size={normalizePixel(40)} />
        </GoBackButton>
      </GoBackContainer>
      <ContainerInputs>
        <FormProvider {...formProps}>
          <CustomInput label="Email" placeholder="Email" name="email" />
          <CustomInput
            label="Senha"
            placeholder="Senha"
            name="password"
            isSecurity
          />
        </FormProvider>
      </ContainerInputs>
      <Button
        title="Criar sua conta"
        onPress={formProps.handleSubmit(handleCreateAccount)}
      />
    </Container>
  );
};

export default CreateAccount;
