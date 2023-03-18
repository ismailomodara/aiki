import { AiHead } from "@/components/Global/AiHead";
import { AiButton } from '@/components/Ai/AiButton';

import { Stack, HStack, FormControl, FormLabel, PinInput, PinInputField } from '@chakra-ui/react';

const VerifyToken = () => {

  return (
    <>
      <AiHead title="Aiki - Reset Password" description="Complete account recovery process"/>
      <div>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Token</FormLabel>
            <HStack justify="space-evenly">
              <PinInput size="lg" otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </FormControl>
          <AiButton text="Verify" type="primary" size='lg'/>
        </Stack>
      </div>
    </>
  )
}

VerifyToken.layout = "OnboardingLayout"

export default VerifyToken
