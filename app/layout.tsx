export const metadata = {
  title: 'FleetJobs',
  description: 'Plateforme de mise en relation DSP & livreurs auto-entrepreneurs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
