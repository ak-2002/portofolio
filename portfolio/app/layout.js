import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

/*export default async function Layout({ children, about, contact }) {
  const userType = getCurrentUserType();
  return (
    <>
      {userType === 'user' ? about : contact}
      {children}
    </>
  );
}*/
export default function RootLayout({ children, about, contact }) {
  return (
	<html lang="en">
	  <body className={inter.className}>
		<div>
		  {about}
		</div>
		<div>
	  {contact}
		</div>
		{children}
	  </body>
	</html>
  );
}
