import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const navListMenuItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
  },
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a
      href="#"
      key={key}>
      <MenuItem className="flex items-center ">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500">
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        className="left-[25%]">
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              Каталог
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block left-[25%]">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/">Главная</Link>
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/trade">Оптовая продажа</Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/order">О нас</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function MegaMenuDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="p-0 shadow-none ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}></IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
