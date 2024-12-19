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
        className="w-full h-[787px] transition-all duration-300"
        style={
          openSlideMenu
            ? {
                background:
                  'linear-gradient(to right, rgb(111,97,192) 15%, transparent)',
              }
            : undefined
        }
      >
        <div className="pt-12 pl-10 mb-5">
          <MenuButton
            active={openSlideMenu}
            onClick={onMenuButtonClick}
          ></MenuButton>
        </div>

        {openSlideMenu && (
          <div>
            <MenuNavButtons href="" text="About"></MenuNavButtons>
            <MenuNavButtons href="" text="Registration"></MenuNavButtons>
            <MenuNavButtons href="" text="Program Flow"></MenuNavButtons>
            <MenuNavButtons href="" text="Speakers"></MenuNavButtons>
            <MenuNavButtons href="" text="House Rules"></MenuNavButtons>
            <MenuNavButtons href="" text="FAQs"></MenuNavButtons>
            <MenuNavButtons href="" text="The Team"></MenuNavButtons>
          </div>
        )}
      </div>
    </>
  );
}
