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
          <div className="my-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            {description && (
              <p className="text-xl font-light text-primary">{description}</p>
            )}
          </div>
        )}
        <div className="pb-40">{children}</div>
      </div>
      <MenuBar />
    </>
  );
};
export default MainLayout;
