import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    return (
      <footer className={`w-full flex sm:justify-center sm:items-center p-5 bg-gray-200 gap-3 sm:gap-8 flex-col sm:flex-row`}>
        <Link href={'/'} className={`font-sans text-base font-normal text-gray-800`}>Sobre</Link>
        <Link href={'/'} className={`font-sans text-base font-normal text-gray-800`}>FAQ</Link>
        <Link href={'/'} className={`font-sans text-base font-normal text-gray-800`}>Termos de uso</Link>
        <Link href={'/'} className={`font-sans text-base font-normal text-gray-800`}>Política de privacidade</Link>
      </footer>
    );
  }
}

export default Footer;