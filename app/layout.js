import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "./styles/theme";
import StyledComponentsRegistry from "../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Babajide Oyafemi | Backend, Full-Stack & AI Engineer",
  description:
    "Backend and full-stack engineer with 7+ years building production SaaS platforms and LLM-powered workflows. MSc Applied Artificial Intelligence, University of Chester.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
