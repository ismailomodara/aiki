import { AiHead } from "@/components/Global/AiHead";
import Image from "next/image";
import styles from "@/styles/Pages/home.module.scss";
import illustration from "../../public/images/error.svg";
import {AiButton} from "@/components/Ai/AiButton";

const Error = () => {
  return (
    <>
      <AiHead title="Error404 - Page Not Found" description="Page you're looking for does not exist"/>
      <div className={styles["ai-error"]}>
        <Image src={illustration} alt="404" width="500" height="500" />
        <div className={styles["ai-error-text"]}>
          <h1>Error404</h1>
          <p>Page Not Found</p>
          <AiButton text="Go Home" type="primary" size={"lg"} />
        </div>
      </div>
    </>
  )
}
Error.layout = "DefaultLayout"

export default Error
