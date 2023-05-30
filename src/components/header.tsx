import React, { Component } from 'react';
import Image from 'next/image';
import logo from '../../public/resources/image/logo.png';

class Header extends Component {
  render() {
    return (
      <header className={`w-full flex justify-center items-center p-3 sm:mt-16`}>
        <Image src={logo} alt='Blocks' unoptimized/>
      </header>
    );
  }
}

export default Header;