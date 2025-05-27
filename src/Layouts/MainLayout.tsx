import { Header, MenuBar } from "@/Components/Main";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const MainLayout = ({ children, title, description }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <div className="layout">
        {title && (
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            {description && <p className="text-sm font-light">{description}</p>}
          </div>
        )}
        <div className="pb-40">{children}</div>
      </div>
      <MenuBar />
    </>
  );
};
export default MainLayout;
