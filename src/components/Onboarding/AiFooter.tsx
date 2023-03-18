import Link from "next/link";
import styles from "@/styles/Pages/home.module.scss";

export default function AiFooter(props) {
  const { theme } = props
  const links = [
    {
      name: 'terms',
      label: "Terms",
      route: ''
    },
    {
      name: 'plans',
      label: "Plans",
      route: ''
    },
    {
      name: 'contact',
      label: "Contact",
      route: ''
    }
  ]

  return (
    <div className={styles['ai-footer']}>
      <ul className={styles['ai-footer-links']}>
        {
          links.map(link => {
           return (
             <li className={theme === 'light' ? 'text-grey-primary' : ''} key={link.name}>
               <Link href={link.route}>{link.label}</Link>
             </li>
           )
          })
        }
      </ul>
    </div>
  )
}
