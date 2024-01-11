'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (<>
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MY Page</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

        <Navbar.Collapse >
            <li>
              <Link
                className={`${pathname === '/' ? 'text-blue-700' : 'text-gray-900'}
                block py-2 px-3 md:bg-transparent md:hover:text-blue-700 md:p-0
                `}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === '/verify' ? 'text-blue-700' : 'text-gray-900'}
                block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-700 md:p-0
                `}
                href="/verify"
              >
                Veriry
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === '/Mypage' ? 'text-blue-700' : 'text-gray-900'}
                block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-700 md:p-0
                `}
                href="/Mypage"
              >
                Your Page
              </Link>
            </li>
        </Navbar.Collapse>
    </Navbar>
  </>
  )
}
