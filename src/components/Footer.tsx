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
        className="relative xl:hidden flex flex-col justify-between w-full 2xl:h-[632px] font-gill_sans text-dark-violet"
        style={{
          backgroundImage: `url(${wbbg2})`,
          backgroundSize: '1000%',
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
        <div className="h-min mt-16 flex flex-col justify-center items-center px-10">
          <div className="relative w-44 h-44 mb-10">
            <Image
              draggable={false}
              fill
              src={missconLogo}
              className="absolute object-cover object-center"
              alt="/"
            />
          </div>
          <div className="font-medium text-xl mb-4">QUICK LINKS</div>
          <div className="flex flex-col justify-center items-center text-center gap-y-2 font-medium text-base">
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              About
            </a>
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              Program Flow
            </a>
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              Speakers
            </a>
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              House Rules
            </a>
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              FAQs
            </a>
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              The Team
            </a>
            <a href="" className="hover:underline hover:cursor-pointer z-40">
              Meet the Developers
            </a>
          </div>
          <div className="h-[2px] w-72 bg-violet my-9 "></div>
          <div className="font-medium text-xl mb-4">ADDRESS</div>
          <div className="text-sm z-40 flex flex-col items-center w-40 text-center mb-9">
            <p>6/F Community Center of the First Companions, </p>
            <p>Ateneo de Davao University,</p>
            <p>Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur</p>
          </div>

          <div className="font-medium text-xl mb-2">Telephone</div>
          <div className="text-sm z-40 flex flex-col items-center w-40 text-center mb-7">
            <p>+63 921 392 4001</p>
          </div>

          <div className="font-medium text-xl mb-2">Email</div>
          <div className="text-sm z-40 flex flex-col items-center w-40 text-center mb-7">
            <a href="mailto:misscon2025@gmail.com" className="w-min">
              <p>misscon2025@gmail.com</p>
            </a>
          </div>

          <div className="font-medium text-xl mb-2">Socials</div>
          <div className="z-40 flex  items-center mb-32 gap-x-4">
            <a href="https://www.instagram.com/misscon_2025/" className="w-min">
              <div className="flex gap-x-2">
                <div className="flex items-center justify-center w-6 h-6">
                  <div className="relative w-6 h-6">
                    <Image
                      draggable={false}
                      fill
                      src={instagramIcon}
                      className="absolute object-cover object-center scale-90"
                      alt="/"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61568212792268"
              className="w-max"
            >
              <div className="flex gap-x-2">
                <div className="flex items-center">
                  <div className="relative w-6 h-6">
                    <Image
                      draggable={false}
                      fill
                      src={facebookIcon}
                      className="absolute object-cover object-center scale-110"
                      alt="/"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <p>
              <span className="font-semibold">Organized by: </span>Lorem Ipsum
              Dolor
            </p>
          </div>

          <div className="mb-12">
            <p>
              <span className="font-semibold">Developed by: </span>SAMAHAN
              Systems Development
            </p>
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
                'linear-gradient(to top, rgb(88,71,186) 1%, transparent)',
            }}
          ></div>
        </div>
      </div>

      <div
        className="relative hidden xl:flex flex-col justify-between w-full 2xl:h-[632px] font-gill_sans text-dark-violet"
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
        <div className="h-min mt-16 flex justify-center items-center px-10 xl:gap-x-16 2xl:gap-x-16 ">
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
            <div className="h-max w-max flex flex-col z-40">
              <div className=" font-medium text-3xl mb-4 z-40">CONTACT</div>

              <div className="flex flex-col gap-y-3">
                <a href="mailto:misscon2025@gmail.com" className="w-min">
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
                    <div className="flex items-center leading-none mb-0 pb-0 underline text-xl z-40">
                      misscon2025@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/misscon_2025/"
                  className="w-min"
                >
                  <div className="flex gap-x-2">
                    <div className="flex items-center justify-center w-6 h-6">
                      <div className="relative w-6 h-6">
                        <Image
                          draggable={false}
                          fill
                          src={instagramIcon}
                          className="absolute object-cover object-center scale-90"
                          alt="/"
                        />
                      </div>
                    </div>

                    <div className="flex items-center leading-none mb-0 pb-0 underline text-xl z-40">
                      @misscon_2025
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61568212792268"
                  className="w-max"
                >
                  <div className="flex gap-x-2">
                    <div className="flex items-center">
                      <div className="relative w-6 h-6">
                        <Image
                          draggable={false}
                          fill
                          src={facebookIcon}
                          className="absolute object-cover object-center scale-110"
                          alt="/"
                        />
                      </div>
                    </div>
                    <div className="flex items-center leading-none mb-0 pb-0 text-xl">
                      Mindanao International Studies Society Convention 2025
                    </div>
                  </div>
                </a>
              </div>
              <div className="h-[3px] 2xl:w-[500px] bg-violet my-7 "></div>
              <div className="text-xl z-40">
                <p>6/F Community Center of the First Companions, </p>
                <p>Ateneo de Davao University,</p>
                <p>
                  Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 xl:ml-20 2xl:ml-20 font-medium text-2xl">
              <a href="" className="hover:underline hover:cursor-pointer z-40">
                About
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-40">
                Program Flow
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-40">
                Speakers
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-40">
                House Rules
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-40">
                FAQs
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-40">
                The Team
              </a>
              <a href="" className="hover:underline hover:cursor-pointer z-40">
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
            className="absolute object-cover object-top opacity-40 scale-150 mt-7 xl:mt-20 2xl:mt-7"
            alt="/"
          />
          <div
            className="absolute inset-0 opacity-75"
            style={{
              background:
                'linear-gradient(to top, rgb(88,71,186) 1%, transparent)',
            }}
          ></div>

          {/* Bottom-left text */}
          <div className="absolute bottom-5 left-5 text-white font-gill_sans">
            <p>
              Organized by: <span className="font-bold">Lorem Ipsum Dolor</span>
            </p>
          </div>

          {/* Bottom-right text */}
          <div className="absolute bottom-5 right-5 text-white font-gill_sans">
            <p>
              Developed by:{' '}
              <span className="font-bold">SAMAHAN Systems Development</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
