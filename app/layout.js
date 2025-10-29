import './globals.css'

export const metadata = {
  title: 'Creator-AI',
  description: 'Futuristic AI toolkit for creators'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
