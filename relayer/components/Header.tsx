export interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>🐉 Central Finite Curve Dragoons</strong>
          </li>
        </ul>
        <ul>
          <li>{children}</li>
        </ul>
      </nav>
    </header>
  );
};
