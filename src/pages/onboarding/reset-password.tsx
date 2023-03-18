import { AiHead } from "@/components/Global/AiHead";
import { AiButton } from '@/components/Ai/AiButton';

import { Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ResetPassword = () => {

  return (
    <>
      <AiHead title="Aiki - Reset Password" description="Complete account recovery process"/>
      <div>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='*****' size='lg' variant='filled' />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <Input type='password' placeholder='*****' size='lg' variant='filled' />
          </FormControl>
          <AiButton text="Reset password" type="primary" size='lg'/>
        </Stack>
      </div>
    </>
  )
}

ResetPassword.layout = "OnboardingLayout"

export default ResetPassword
