import React, { useCallback } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-native';
import * as Yup from 'yup';
import CustomInput from '~/elements/CustomInput';
import {
  Container,
  ContainerInputs,
  ContainerCreateAccount,
  CreateAccountButton,
  CreateAccountLabel,
} from './styles';
import useAppNavigation from '~/hooks/useAppNavigation';

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

const Login = () => {
  const formProps = useForm({ resolver: yupResolver(schema) });
  const { navigate } = useAppNavigation();

  const handleCreateAccount = useCallback(() => {
    navigate({ screen: 'CreateAccount' });
  }, []);

  const handleLogin = useCallback((values: FieldValues) => {
    // logar
  }, []);

  return (
    <Container>
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
      <ContainerCreateAccount>
        <CreateAccountButton onPress={handleCreateAccount}>
          <CreateAccountLabel>Criar conta</CreateAccountLabel>
        </CreateAccountButton>
      </ContainerCreateAccount>
      <Button
        title="Fazer login"
        onPress={formProps.handleSubmit(handleLogin)}
      />
    </Container>
  );
};

export default Login;
