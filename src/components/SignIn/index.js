import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './signinElements';
const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>Prosperify</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Entre na sua conta</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Esqueci a Senha</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default  SignIn;
