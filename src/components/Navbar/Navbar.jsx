import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ikon hamburger
import { AiOutlineClose } from 'react-icons/ai'; // Ikon silang
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <button onClick={toggleMenu} className={styles.hamburger}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      <div className={`${styles.overlayMenu} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="hero" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="work" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              Work
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
