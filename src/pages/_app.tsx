import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/ai-main.scss'
import '@/styles/globals.css'

import DefaultLayout from "@/layouts/DefaultLayout";
import OnboardingLayout from "@/layouts/OnboardingLayout";
import AppLayout from "@/layouts/AppLayout";

const Layouts = {
  DefaultLayout,
  OnboardingLayout,
  AppLayout
};

type AppPropsWithLayout = AppProps & {
  Component: NextPage<P, IP> & {
    layout?: string
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  let Layout = Layouts[Component.layout || 'DefaultLayout'];

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
