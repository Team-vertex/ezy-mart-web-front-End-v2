import { routes } from '@/constants/route';
import { Button, Menu, Popover, ScrollArea } from '@mantine/core';
import {
  IconCategory,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleDropdown = (key: any) =>
    setDropdownOpen((prev: any) => ({ ...prev, [key]: !prev[key] }));

  const NAV_LINKS = [
    { label: 'Home', path: routes.home },
    {
      label: 'Services',
      dropdown: [
        {
          label: 'For Business Owners',
          description: 'Services for business owners',
          icon: <IconCategory size={24} />,
        },
        {
          label: 'For Customers',
          description: 'Services for customers',
          icon: <IconCategory size={24} />,
        },
      ],
    },
    {
      label: 'Instruction',
      dropdown: [
        {
          label: 'For Business Owners',
          description: 'Instruction for business owners',
          icon: <IconCategory size={24} />,
        },
        {
          label: 'For Customers',
          description: 'Instruction for customers',
          icon: <IconCategory size={24} />,
        },
        {
          label: 'For Employees',
          description: 'Instruction for employees',
          icon: <IconCategory size={24} />,
        },
      ],
    },
    {
      label: 'More',
      dropdown: [
        {
          label: 'Privacy Policy',
          description: 'Read our privacy policy',
          icon: <IconCategory size={24} />,
        },
        {
          label: 'About Us',
          description: 'Know more about us',
          icon: <IconCategory size={24} />,
        },
      ],
    },
    { label: 'Contact Us', path: '#' },
  ];

  const renderDropdownItems = (items: any) =>
    items.map((item: any, index: any) => (
      <div
        key={index}
        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
      >
        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          {item.icon}
        </div>
        <div className="flex-auto">
          <a href="#" className="block font-semibold text-gray-900">
            {item.label}
            <span className="absolute inset-0"></span>
          </a>
          <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
      </div>
    ));

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            onClick={() => navigate(routes.home)}
            className="-m-4 cursor-pointer"
          >
            <img
              className="h-16 w-auto"
              src={'/images/core/logo-light.svg'}
              alt="Logo"
            />
          </a>
        </div>

        {/* MARK:Desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          {NAV_LINKS.map((link, index) =>
            link.dropdown ? (
              <div key={index} className="relative">
                <Popover width="lg" position="bottom" withArrow shadow="md">
                  <Popover.Target>
                    <button
                      type="button"
                      className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
                    >
                      {link.label}
                      <IconChevronDown className="h-5 w-5 text-gray-400" />
                    </button>
                  </Popover.Target>
                  <Popover.Dropdown className="!bg-white !shadow-md !rounded-lg">
                    <div className="p-4">
                      {renderDropdownItems(link.dropdown)}
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </div>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="text-sm font-semibold text-gray-900"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Menu shadow="md">
            <Menu.Target>
              <Button className="!border-blue-700 !text-blue-700 !bg-white !rounded-full !px-8">
                Login
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Login as a Business Owner</Menu.Item>
              <Menu.Item>Login as a Customer</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md">
            <Menu.Target>
              <Button className="!bg-blue-600 !text-white !rounded-full !px-8">
                Register
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Register as a Business Owner</Menu.Item>
              <Menu.Item>Register as a Customer</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        {/* MARK:Mobile */}
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-10 flex justify-end bg-black bg-opacity-25 transform transition-transform !ease-in-out !duration-500"
          role="dialog"
          aria-modal="true"
        >
          <ScrollArea className="w-10/12 bg-white p-4 transform transition-transform ease-in-out duration-300">
            <button
              type="button"
              className="mb-4 inline-flex items-center justify-center rounded-md p-2 text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-4">
              {NAV_LINKS.map((link: any, index: any) =>
                link.dropdown ? (
                  <li key={index}>
                    <button
                      type="button"
                      className="flex w-full justify-between rounded-lg p-2 text-gray-900 font-semibold"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      {dropdownOpen[link.label] ? (
                        <IconChevronUp className="h-4 w-4" />
                      ) : (
                        <IconChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {dropdownOpen[link.label] && (
                      <div className="mt-2 pl-4">
                        {renderDropdownItems(link.dropdown)}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="block text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md p-2"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-row lg:justify-end gap-4 mt-4">
              <Menu shadow="md">
                <Menu.Target>
                  <Button className="!border-blue-700 !text-blue-700 !bg-white !rounded-full !px-8">
                    Login
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Login as a Business Owner</Menu.Item>
                  <Menu.Item>Login as a Customer</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md">
                <Menu.Target>
                  <Button className="!bg-blue-600 !text-white !rounded-full !px-8">
                    Register
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Register as a Business Owner</Menu.Item>
                  <Menu.Item>Register as a Customer</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </ScrollArea>
        </div>
      )}
    </header>
  );
}
