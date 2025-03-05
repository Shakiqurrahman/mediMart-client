import Header from "@/components/shared/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
