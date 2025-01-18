import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        className="relative lg:hidden flex flex-col justify-between w-full 2xl:h-[632px] font-gill_sans text-dark-violet"
        style={{
          backgroundImage: `url(${wbbg2})`,
          backgroundSize: '1300%',
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
            <Link
              href="/#about"
              className="hover:underline hover:cursor-pointer z-40"
            >
              About
            </Link>
            <Link
              href="program-flow"
              className="hover:underline hover:cursor-pointer z-40"
            >
              Program Flow
            </Link>
            <Link
              href="program-flow/#speakers"
              className="hover:underline hover:cursor-pointer z-40"
            >
              Speakers
            </Link>
            <Link
              href="house-rules"
              className="hover:underline hover:cursor-pointer z-40"
            >
              House Rules
            </Link>
            <Link
              href="frequently-asked-questions"
              className="hover:underline hover:cursor-pointer z-40"
            >
              FAQs
            </Link>
            <Link
              href="the-team"
              className="hover:underline hover:cursor-pointer z-40"
            >
              The Team
            </Link>
            <Link
              href="meet-the-developers"
              className="hover:underline hover:cursor-pointer z-40"
            >
              Meet the Developers
            </Link>
          </div>

          <div className="h-[2px] w-72 bg-violet my-9 "></div>

          <div className="font-medium text-xl mb-2">SOCIALS</div>
          <div className="z-40 flex  items-center gap-x-4 mb-16">
            <Link href="mailto:misscon2025@gmail.com" className="w-min">
              <div className="flex gap-x-2">
                <div className="flex items-center justify-center w-[26px] h-[26px]">
                  <div className="relative w-[26px] h-[26px]">
                    <Image
                      draggable={false}
                      fill
                      src={emailIcon}
                      className="absolute object-cover object-center"
                      alt="/"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="_blank"
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
              </div>
            </Link>
            <Link
              target="_blank"
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
            </Link>
          </div>
          <div className="font-medium text-xl mb-2">ADDRESS</div>
          <div className="text-sm z-40 flex flex-col items-center w-40 text-center mb-32">
            <p>Student Office 7, Arrupe Hall, Ateneo de Davao University,</p>
            <p>E. Jacinto St., Poblacion, Davao City, Philippines 8000</p>
          </div>

          <div className="z-40">
            <p className="text-center">
              <span className="font-semibold text-center">Organized by: </span>
              <Link href="the-team">
                <span className="hover:underline">
                  Ateneo International Studies Students Organization
                </span>
              </Link>
            </p>
          </div>

          <div className="mb-12 z-40">
            <p className="text-center">
              <span className="font-semibold">Developed by: </span>
              <Link href="meet-the-developers">
                <span className="hover:underline">
                  SAMAHAN Systems Development
                </span>
              </Link>
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
        className="relative hidden lg:flex flex-col justify-between w-full 2xl:h-[632px] font-gill_sans text-dark-violet"
        style={{
          backgroundImage: `url(${wbbg2})`,
          backgroundSize: '150%',
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
        <div className="h-min mt-16 flex justify-center items-center px-10 gap-x-12 xl:gap-x-16 2xl:gap-x-28 ">
          <div className="relative w-56 h-56 xl:w-72 xl:h-72">
            <Image
              draggable={false}
              fill
              src={missconLogo}
              className="absolute object-cover object-center"
              alt="/"
            />
          </div>
          <div className="h-full w-max flex items-center gap-x-14 2xl:gap-x-10">
            <div className="h-max w-max flex flex-col z-40">
              <div className=" font-medium text-2xl xl:text-3xl mb-4 z-40">
                CONTACT
              </div>

              <div className="flex flex-col gap-y-3">
                <Link href="mailto:misscon2025@gmail.com" className="w-min">
                  <div className="flex gap-x-2">
                    <div className="flex items-center justify-center w-5 h-5 xl:w-6 xl:h-6">
                      <div className="relative w-5 h-5 xl:w-6 xl:h-6">
                        <Image
                          draggable={false}
                          fill
                          src={emailIcon}
                          className="absolute object-cover object-center"
                          alt="/"
                        />
                      </div>
                    </div>
                    <div className="flex items-center leading-none mb-0 pb-0 hover:underline text-lg xl:text-xl z-40">
                      misscon2025@gmail.com
                    </div>
                  </div>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.instagram.com/misscon_2025/"
                  className="w-min"
                >
                  <div className="flex gap-x-2">
                    <div className="flex items-center justify-center w-5 h-5 xl:w-6 xl:h-6">
                      <div className="relative w-5 h-5 xl:w-6 xl:h-6">
                        <Image
                          draggable={false}
                          fill
                          src={instagramIcon}
                          className="absolute object-cover object-center scale-90"
                          alt="/"
                        />
                      </div>
                    </div>

                    <div className="flex items-center leading-none mb-0 pb-0 hover:underline text-lg xl:text-xl z-40">
                      @misscon_2025
                    </div>
                  </div>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61568212792268"
                  className="w-max"
                >
                  <div className="flex gap-x-2">
                    <div className="flex items-center justify-center w-5 h-5 xl:w-6 xl:h-6">
                      <div className="relative w-5 h-5 xl:w-6 xl:h-6">
                        <Image
                          draggable={false}
                          fill
                          src={facebookIcon}
                          className="absolute object-cover object-center scale-110"
                          alt="/"
                        />
                      </div>
                    </div>
                    <div className="flex items-center leading-none mb-0 pb-0 text-lg xl:text-xl hover:underline">
                      Mindanao International Studies Society Convention 2025
                    </div>
                  </div>
                </Link>
              </div>
              <div className="h-[3px] 2xl:w-[500px] bg-violet lg:my-5 xl:my-7 "></div>
              <div className="text-lg xl:text-xl z-40">
                <p>
                  Student Office 7, Arrupe Hall, Ateneo de Davao University,
                </p>
                <p>E. Jacinto St., Poblacion, Davao City, Philippines 8000</p>
              </div>
            </div>
            <div className="flex flex-col w-[130px] xl:w-[173px] gap-y-4 xl:gap-y-5 xl:ml-20 2xl:ml-20 font-medium text-xl xl:text-2xl">
              <Link
                href="/#about"
                className="hover:underline hover:cursor-pointer z-40"
              >
                About
              </Link>
              <Link
                href="program-flow"
                className="hover:underline hover:cursor-pointer z-40"
              >
                Program Flow
              </Link>
              <Link
                href="program-flow/#speakers"
                className="hover:underline hover:cursor-pointer z-40"
              >
                Speakers
              </Link>
              <Link
                href="house-rules"
                className="hover:underline hover:cursor-pointer z-40"
              >
                House Rules
              </Link>
              <Link
                href="frequently-asked-questions"
                className="hover:underline hover:cursor-pointer z-40"
              >
                FAQs
              </Link>
              <Link
                href="the-team"
                className="hover:underline hover:cursor-pointer z-40"
              >
                The Team
              </Link>
              <Link
                href="meet-the-developers"
                className="hover:underline hover:cursor-pointer z-40"
              >
                Meet the Developers
              </Link>
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

          <div className="absolute bottom-5 left-5 text-white font-gill_sans">
            <p>
              Organized by:{' '}
              <span className="font-bold">
                <Link href="the-team">
                  <span className="hover:underline">
                    Ateneo International Studies Students Organization
                  </span>
                </Link>
              </span>
            </p>
          </div>

          <div className="absolute bottom-5 right-5 text-white font-gill_sans">
            <p>
              Developed by:{' '}
              <span className="font-bold hover:underline">
                <Link href="meet-the-developers">
                  SAMAHAN Systems Development
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
