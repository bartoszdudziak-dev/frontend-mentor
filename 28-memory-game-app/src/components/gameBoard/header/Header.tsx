import Button from '../../ui/Button';
import Logo from '../../ui/Logo';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo className="max-w-24 md:max-w-36" />
      <Button size="small" variant="primary" className="max-w-20 md:hidden">
        Menu
      </Button>
      <div className="hidden md:flex md:gap-4">
        <Button size="small" variant="primary" className="max-w-fit">
          Restart
        </Button>
        <Button size="small" variant="secondary" className="max-w-fit">
          New Game
        </Button>
      </div>
    </header>
  );
}

export default Header;
