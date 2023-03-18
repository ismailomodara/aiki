import { AiHead } from "@/components/Global/AiHead";
import { AiButton } from '@/components/Ai/AiButton';

import Link from "next/link";
import { Stack, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react';

const Login = () => {

  return (
    <>
      <AiHead title="Aiki - Welcome back" description="Login to continue"/>
      <div>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='john@doe.com' size='lg' variant='filled' />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='*****' size='lg' variant='filled' />
          </FormControl>
          <Flex justify={'flex-end'}>
            <Link href="/onboarding/forgot-password" >Forgot password?</Link>
          </Flex>
          <AiButton text="Login" type="primary" size='lg'/>
        </Stack>
      </div>
    </>
  )
}

Login.layout = "OnboardingLayout"

export default Login
