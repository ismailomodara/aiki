import {AiHead} from "@/components/Global/AiHead";
import AiFooter from "@/components/Onboarding/AiFooter";

import { Button } from '@chakra-ui/react'
import { Link } from "@chakra-ui/react";

import styles from "@/styles/Pages/home.module.scss";

const Home = () => {

  return (
    <>
      <AiHead title="Aiki" description="Easily manage your tasks."/>
      <div className={styles['ai-home']}>
        <div className={styles['ai-home-content']}>
          <h1>Aiki</h1>
          <p>An easy way to manage tasks and collaborators.</p>
          <Link href="/onboarding/login">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
      <AiFooter />
    </>
  )
}

Home.layout = "DefaultLayout"

export default Home
