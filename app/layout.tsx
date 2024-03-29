/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            {/* Header */}
            <header className={styles.header}>
            </header>

            <main className={styles.main}>{props.children}</main>

            {/* Footer */}
            <footer className={styles.footer}>
              Footer
            </footer>
          </section>
        </body>
      </html>
    </Providers>
  )
}
