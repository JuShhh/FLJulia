import Image from 'next/image';
import Slider from 'react-slick';
import onepartner from '../../images/templates/partner.jpg';
import twopartner from '../../images/templates/1partnergrow.png';
import PartnersButtonNext from './PartnersButtonNext';
import PartnersButtonPrev from './PartnersButtonPrev';
import { useEffect, useRef, useState } from 'react';

const Partners = () => {
  const [kolichestvo, setKolichestvo] = useState(1);

  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PartnersButtonPrev />,
    nextArrow: <PartnersButtonNext />,
    appendDots: (dots) => {
      setKolichestvo(dots.length);
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 10,
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '54px',
              padding: '15px',
              paddingInline: '40px',
              width: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ul
              style={{
                margin: '0px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              {dots}
            </ul>
          </div>
        </div>
      );
    },
    customPaging: (i) => (
      <div
        style={{
          background: '#E5E6E4',
          width: 25,
          height: 3,
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1505,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <PartnersButtonPrev kolichestvo={kolichestvo} />,
          nextArrow: <PartnersButtonNext kolichestvo={kolichestvo} />,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="absolute -left-0 ..6x2:w-32 ..6x2:h-32">
        <Image
          className="object-cover "
          src={twopartner}
          width={277}
          height={277}
          alt="specialOffersImg"
        />
      </div>
      <section className="container__special relative pb-10">
        <svg
          className="absolute ..6x2:h-36 ..6x2:mt-5 left-1/2 ability top-0 "
          width="184"
          height="183"
          viewBox="0 0 184 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.4961L71.0828 73.3172"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.496L91.1736 116.337"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-36 absolute left-1/2 -top-16 ability text-3xl italic mb-40">
          ПАРТНЕРАМ
        </p>
        <button className="text-primary border-2 absolute ..6x5:text-sm left-1/2 ability top-40  ..7x2:px-2  z-10 border-primary mb-8 py-4 px-10 transition-all hover:bg-primary hover:text-white ..6x6:text-xs ..7x2:text-10px ..7x2:py-2">
          Бизнес-возможности
        </button>

        <Slider {...settings} className="pt-64 ..7x2:pt-52 partners">
          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative ..5x3:w-full">
                <Image
                  className="object-cover"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>
              <div className="p-10 ..6x6:px-3  relative font-montserrat font-medium text-26px ..6x03:mb-10">
                <p className="text-2xl mb-4 ..6x04:text-xl ..7x2:text-base whitespace-nowrap ..6x4:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-4 ..6x04:text-xl ..7x1:text-base whitespace-nowrap hidden ..6x4:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white hover:bg-white hover:text-primary transition-all text-xs bg-primary py-4 px-10 absolute bottom-5 right-7 ..5x01:right-3 ..6x03:-bottom-5">
                  Подробнее
                </button>
              </div>
            </div>
          </section>

          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative ..5x3:w-full">
                <Image
                  className="object-cover"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>
              <div className="p-10 ..6x6:px-3  relative font-montserrat font-medium text-26px ..6x03:mb-10">
                <p className="text-2xl mb-4 ..6x04:text-xl ..7x2:text-base whitespace-nowrap ..6x4:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-4 ..6x04:text-xl ..7x1:text-base whitespace-nowrap hidden ..6x4:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white hover:bg-white hover:text-primary transition-all text-xs bg-primary py-4 px-10 absolute bottom-5 right-7 ..5x01:right-3 ..6x03:-bottom-5">
                  Подробнее
                </button>
              </div>
            </div>
          </section>

          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative ..5x3:w-full">
                <Image
                  className="object-cover"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>
              <div className="p-10 ..6x6:px-3  relative font-montserrat font-medium text-26px ..6x03:mb-10">
                <p className="text-2xl mb-4 ..6x04:text-xl ..7x2:text-base whitespace-nowrap ..6x4:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-4 ..6x04:text-xl ..7x1:text-base whitespace-nowrap hidden ..6x4:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white hover:bg-white hover:text-primary transition-all text-xs bg-primary py-4 px-10 absolute bottom-5 right-7 ..5x01:right-3 ..6x03:-bottom-5">
                  Подробнее
                </button>
              </div>
            </div>
          </section>

          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative ..5x3:w-full">
                <Image
                  className="object-cover"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>
              <div className="p-10 ..6x6:px-3  relative font-montserrat font-medium text-26px ..6x03:mb-10">
                <p className="text-2xl mb-4 ..6x04:text-xl ..7x2:text-base whitespace-nowrap ..6x4:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-4 ..6x04:text-xl ..7x1:text-base whitespace-nowrap hidden ..6x4:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white hover:bg-white hover:text-primary transition-all text-xs bg-primary py-4 px-10 absolute bottom-5 right-7 ..5x01:right-3 ..6x03:-bottom-5">
                  Подробнее
                </button>
              </div>
            </div>
          </section>
        </Slider>
      </section>
    </div>
  );
};
export default Partners;
