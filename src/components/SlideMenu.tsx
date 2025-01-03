'use client';
import MenuButton from '@/components/ui/MenuButton';
import MenuNavButtons from '@/components/ui/MenuNavButtons';
import React, { useState } from 'react';

export default function SlideMenu() {
  const [openSlideMenu, setOpenSlideMenu] = useState(false);

  function onMenuButtonClick() {
    if (openSlideMenu) {
      setOpenSlideMenu(false);
    } else {
      setOpenSlideMenu(true);
    }
  }
  return (
    <>
      <div
        className={`w-max h-screen transition-all duration-300 fixed top-0 left-0 z-50 ${openSlideMenu ? 'bg-custom-gradient-45% lg:bg-custom-gradient-15%' : ''}`}
      >
        <div className="pt-12 pl-10 mb-5 z-50">
          <MenuButton
            active={openSlideMenu}
            onClick={onMenuButtonClick}
          ></MenuButton>
        </div>

        {openSlideMenu && (
          <div className={`flex w-screen ${openSlideMenu ? '' : 'hidden'}`}>
            <div className="w-4/5">
              <MenuNavButtons
                href="/#about"
                text="About"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
              <MenuNavButtons
                href="/#register"
                text="Registration"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
              <MenuNavButtons
                href="program-flow"
                text="Program Flow"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
              <MenuNavButtons
                href="program-flow/#speakers"
                text="Speakers"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
              <MenuNavButtons
                href="house-rules"
                text="House Rules"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
              <MenuNavButtons
                href="faqs"
                text="FAQs"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
              <MenuNavButtons
                href="the-team"
                text="The Team"
                onClick={onMenuButtonClick}
              ></MenuNavButtons>
            </div>
            <div onClick={onMenuButtonClick} className="w-1/5"></div>
          </div>
        )}
      </div>
    </>
  );
}
