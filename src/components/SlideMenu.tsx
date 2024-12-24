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
        className="w-max h-screen transition-all duration-300 fixed top-0 left-0 z-50"
        style={
          openSlideMenu
            ? {
                background:
                  'linear-gradient(to right, rgb(111,97,192) 15%, transparent)',
              }
            : undefined
        }
      >
        <div className="pt-12 pl-10 mb-5 z-50">
          <MenuButton
            active={openSlideMenu}
            onClick={onMenuButtonClick}
          ></MenuButton>
        </div>

        {openSlideMenu && (
          <div className="flex w-screen">
            <div className="w-4/5">
              <MenuNavButtons href="" text="About"></MenuNavButtons>
              <MenuNavButtons href="" text="Registration"></MenuNavButtons>
              <MenuNavButtons href="" text="Program Flow"></MenuNavButtons>
              <MenuNavButtons href="" text="Speakers"></MenuNavButtons>
              <MenuNavButtons href="" text="House Rules"></MenuNavButtons>
              <MenuNavButtons href="" text="FAQs"></MenuNavButtons>
              <MenuNavButtons href="" text="The Team"></MenuNavButtons>
            </div>
            <div onClick={onMenuButtonClick} className="w-1/5"></div>
          </div>
        )}
      </div>
    </>
  );
}
