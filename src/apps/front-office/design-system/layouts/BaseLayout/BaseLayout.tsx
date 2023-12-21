import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="mt-10">{children}</main>
      <Footer />
    </div>
  );
}
