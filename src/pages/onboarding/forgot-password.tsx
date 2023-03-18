import { AiHead } from "@/components/Global/AiHead";
import { AiButton } from '@/components/Ai/AiButton';

import { Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ForgotPassword = () => {

  return (
    <>
      <AiHead title="Aiki - Forgot Password" description="Let's help recover your account"/>
      <div>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='john@doe.com' size='lg' variant='filled' />
          </FormControl>
          <AiButton text="Recover Account" type="primary" size='lg'/>
        </Stack>
      </div>
    </>
  )
}

ForgotPassword.layout = "OnboardingLayout"

export default ForgotPassword
