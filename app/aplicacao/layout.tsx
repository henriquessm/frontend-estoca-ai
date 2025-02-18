import Footer from '@/frontend-estoca-ai/app/ui/footer/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <main>{children}</main>
        <Footer></Footer>
    </>
  );
}