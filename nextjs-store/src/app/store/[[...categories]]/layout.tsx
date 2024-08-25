export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
        <nav>
            <ul>
                <li>Sección Catogorías</li>
            </ul>
        </nav>
        {children}
    </main>
  );
}