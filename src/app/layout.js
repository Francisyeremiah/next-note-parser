import Link from "next/link";
import "doodle.css/doodle.css";
import "./globals.css";

// meta data we write in this way
export const metadata = {
  title: "Next Note Parser",
  description: "Example Next.js App From Microskills",
}

export default async function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="doodle">
        <nav>
          <h1>
            <Link href="/">Note Parser</Link>
          </h1>
        </nav>
        {children}
      </body>
    </html>
  )
}