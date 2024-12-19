import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const missconLogo = '/images/MissconLogo.png';
  const emailIcon = '/images/EmailIcon.png';
  const facebookIcon = '/images/FacebookIcon.png';
  const instagramIcon = '/images/InstagramIcon.png';
  const bg = '/images/BG.png';
  const wbbg2 = '/images/BG-WB-2.png';
  const bgGrunge = '/images/BG-Grunge.png';
  return (
    <>
      <div
        className="relative flex flex-col justify-between border border-black w-full 2xl:h-[632px] font-gill_sans text-dark-violet"
        style={{
          backgroundImage: `url(${wbbg2})`,
          backgroundSize: '130%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 opacity-60 "
          style={{
            backgroundImage: `url(${bgGrunge})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="h-min mt-16 flex justify-center items-center px-10 gap-x-16">
          <div className="relative w-72 h-72">
            <Image
              draggable={false}
              fill
              src={missconLogo}
              className="absolute object-cover object-center"
              alt="/"
            />
          </div>
          <div className="h-full w-max flex items-center">
            <div className="h-max w-max flex flex-col z-50">
              <div className=" font-medium text-3xl mb-4 z-50">CONTACT</div>

              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2">
                  <div className="flex items-center">
                    <div className="relative w-6 h-6">
                      <Image
                        draggable={false}
                        fill
                        src={emailIcon}
                        className="absolute object-cover object-center"
                        alt="/"
                      />
                    </div>
                  </div>

                  <a
                    href="mailto:misscon2025@gmail.com"
                    className="underline text-xl translate-y-[1px] z-100"
                  >
                    misscon2025@gmail.com
                  </a>
                </div>

                <div className="flex gap-x-2">
                  <div className="flex items-center justify-center w-6 h-6">
                    <div className="relative w-[22px] h-[22px]">
                      <Image
                        draggable={false}
                        fill
                        src={instagramIcon}
                        className="absolute object-cover object-center"
                        alt="/"
                      />
                    </div>
                  </div>

                  <div className="underline text-xl z-50">
                    <a
                      href="https://www.instagram.com/misscon_2025/"
                      className=""
                    >
                      @misscon_2025
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <div className="flex items-center">
                    <div className="relative w-6 h-6">
                      <Image
                        draggable={false}
                        fill
                        src={facebookIcon}
                        className="absolute object-cover object-center"
                        alt="/"
                      />
                    </div>
                  </div>
                  <div className="text-xl translate-y-1">
                    <p>
                      Mindanao International Studies Society Convention 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[3px] 2xl:w-[561px] bg-violet my-7 "></div>
              <div className="text-xl z-50">
                <p>6/F Community Center of the First Companions, </p>
                <p>Ateneo de Davao University,</p>
                <p>
                  Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ml-20 font-medium text-3xl">
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                About
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                Program Flow
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                Speakers
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                House Rules
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                FAQs
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                The Team
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-50">
                Meet the Developers
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            draggable={false}
            fill
            src={bg}
            className="absolute object-cover object-top opacity-40 scale-150 mt-7"
            alt="/"
          />
          <div
            className="absolute inset-0 opacity-75"
            style={{
              background:
                'linear-gradient(to top, rgb(111,97,192) 1%, transparent)',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
