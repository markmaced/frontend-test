import React, { Component } from 'react';
import axios from 'axios';
import Image from 'next/image';
import loading from '../../public/resources/json/98288-loading.json'

interface CardData {
  id: string;
  premium: boolean;
  details: {
    name: string;
    description: string;
  };
}

class Catalogo extends Component {
  state = {
    cards: [] as CardData[],
    cardsPerPage: 10,
    loadedCards: 0,
  };

  componentDidMount() {
    const { cardsPerPage } = this.state;

    axios
      .get(`https://test-candidaturas-front-end.onrender.com/families?skip=0&take=${cardsPerPage}`)
      .then(response => {
        this.setState({ cards: response.data, loadedCards: response.data.length });
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  loadMoreCards = () => {
    const { cards, cardsPerPage, loadedCards } = this.state;
    const nextSkip = loadedCards;

    axios
      .get(`https://test-candidaturas-front-end.onrender.com/families?skip=${nextSkip}&take=${cardsPerPage}`)
      .then(response => {
        const newCards = [...cards, ...response.data];
        this.setState({ cards: newCards, loadedCards: newCards.length });
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  };

  handleScroll = () => {
    const { cards, loadedCards } = this.state;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && cards.length === loadedCards) {
      this.loadMoreCards();
    }
  };

  render() {
    const { cards, loadedCards } = this.state;
    const isLoading = cards.length !== loadedCards;
    const imageBaseUrl = 'https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/';
    const extension = '.jpg';

    return (
      <div className='catalogo mb-10'>
        <div className='w-full border-t-2 border-purple-300 shadow-md px-3 sm:px-0'>
          <div className='container py-7 mx-auto'>
            <h2 className='font-sans text-black font-bold text-3xl relative'>
              Catálogo
              <div
                className='w-9 h-1 rounded-md'
                style={{
                  background: 'linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%)',
                }}
              ></div>
            </h2>
          </div>
        </div>
        <div className='w-full'>
          <div className='container mx-auto py-8 px-3 sm:px-0'>
            <h2 className='font-sans text-black font-semibold text-3xl relative mb-5'>Resultados</h2>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4'>
              {cards.map(card => (
                <div className='card sm:m-0' key={card.id}>
                  <div className='card-body border border-solid border-gray-300 rounded-md flex flex-col justify-center items-center bg-white'>
                    <div className='p-6'>
                      <Image
                        src={`${imageBaseUrl}${card.id}${extension}`}
                        alt=''
                        width={200}
                        height={200}
                        className='h-40 sm:h-56 object-cover'
                        unoptimized
                      />
                    </div>
                    <div className='w-full border-t-2 p-2'>
                      <div className='w-full flex justify-between items-center'>
                        <p className='font-sans text-black font-semibold text-xs mr-5 line-clamp-2'>
                          {card.details.description}
                        </p>
                        <div className='border-l border-gray-300 py-2 px-3'>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 10 10'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M2.63868 1.72043L8.32001 1.72035M8.32001 1.72035L8.32001 7.32088M8.32001 1.72035L1.72035 8.32001'
                              stroke='#474747'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isLoading && <p>Loading more cards...</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalogo;