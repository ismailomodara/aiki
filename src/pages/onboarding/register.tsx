import { AiHead } from "@/components/Global/AiHead";
import { AiButton } from '@/components/Ai/AiButton';

import { Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Register = () => {

  return (
    <>
      <AiHead title="Aiki - Welcome" description="Create your Aiki account"/>
      <div>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='Johnathan Smith' size='lg' variant='filled' />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='john@doe.com' size='lg' variant='filled' />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='*****' size='lg' variant='filled' />
          </FormControl>
          <AiButton text="Create account" type="primary" size='lg'/>
        </Stack>
      </div>
    </>
  )
}

Register.layout = "OnboardingLayout"

export default Register
