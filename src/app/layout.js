import "./globals.css";
import AdminHeader from './components/AdminHeader';
import Ad302 from "./pages/ad301/Ad302";

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <AdminHeader />
        <Ad302 />


      </body>
    </html>
  );
}