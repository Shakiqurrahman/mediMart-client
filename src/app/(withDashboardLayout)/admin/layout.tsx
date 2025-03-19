import DashboardOutlet from "./DashboardOutlet";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen my-2">
      <DashboardOutlet>{children}</DashboardOutlet>
    </div>
  );
}
