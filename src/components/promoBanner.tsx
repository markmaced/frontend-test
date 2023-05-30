import React, { Component } from 'react';

interface PromoBannerState {
  isMobile: boolean;
  isOpen: boolean;
}

class PromoBanner extends Component<{}, PromoBannerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMobile: false,
      isOpen: true,
    };
  }

  componentDidMount() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  }

  checkIfMobile = () => {
    const isMobile = window.innerWidth <= 768;
    this.setState({ isMobile });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isMobile, isOpen } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <div
        className={`${
          isMobile ? 'bottom-0' : 'top-0'
        } fixed left-0 w-full p-5 sm:p-3 bg-gray-900 backdrop-filter backdrop-blur-lg text-center z-10`}
      >
        <div className="text-white flex gap-3 sm:gap-5 items-center justify-center sm:flex-row flex-col">
          {isMobile && (
            <button
              className="p-2 mt-2 bg-transparent text-white flex justify-center items-center gap-2"
              onClick={this.handleClose}
            >
              Fechar
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1667 1.33335L1.83337 10.6667M11.1667 10.6667L1.83337 1.33334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
          <span className="font-sans font-thin">
            Não limite sua criatividade, junte-se à família Blocks por apenas
            <span className="font-bold"> BRL 19,99</span>
          </span>
          <button className="relative py-2 px-4 bg-gradient-to-r from-custom-purple to-custom-pink text-white flex gap-4 items-center rounded-lg hover:bg-gradient-to-tr hover:from-custom-pink-hover hover:border-2 hover:border-custom-purple">
            Quero ser premium
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16715 1.5L15.0005 7.5M15.0005 7.5L9.16715 13.5M15.0005 7.5L1.00049 7.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default PromoBanner;