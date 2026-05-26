import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetlifyIdentity from "@/components/NetlifyIdentity";

export const metadata = {
  title: "Codexan — Cloud Consultancy & Managed Services",
  description:
    "Codexan helps startups and enterprises migrate, modernize, and operate on AWS, Azure, GCP, and private cloud — with 24/7 managed cloud services.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Codexan — Cloud Consultancy & Managed Services",
    description:
      "Cloud migration, modernization, and managed services across AWS, Azure, GCP, and private cloud.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans selection:bg-neon-violet/40">
        <NetlifyIdentity />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
