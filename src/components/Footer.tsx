import { Image } from '@mantine/core';
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandWhatsappFilled,
  IconBrandYoutubeFilled,
  IconMail,
  IconPhoneCall,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <div className="w-full bg-[url('/images/core/footer-bg.svg')] bg-cover bg-center bg-no-repeat p-8 md:p-12 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 !justify-between !items-start">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-white">EZYMART.LK</p>
            <div className="grid grid-cols-2 items-center !gap-2 mt-2">
              <Image
                src="/images/core/google-play.svg"
                alt="Google Play"
                className="!w-32 lg:w-32 !h-auto"
              />
              <Image
                src="/images/core/app-store.svg"
                alt="App Store"
                className="!w-32 lg:w-32 !h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-primary">Instructions</h3>
            <a href="#" className="text-white">
              For Business Owners
            </a>
            <a href="#" className="text-white">
              For Customers
            </a>
            <a href="#" className="text-white">
              For Employees
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-primary">Services</h3>
            <a href="#" className="text-white">
              POS System
            </a>
            <a href="#" className="text-white">
              Mobile Application{' '}
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-primary">Get In Touch</h3>
            <a href="#" className="text-white flex items-center">
              <IconPhoneCall size={20} className="mr-2" />
              071-8959403
            </a>
            <a href="#" className="text-white flex items-center">
              <IconMail size={20} className="mr-2" />
              service@ezymart.lk
            </a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 !justify-between items-center ">
          <div className="flex items-center justify-evenly">
            <IconBrandFacebookFilled size={40} className="text-white" />
            <IconBrandWhatsappFilled size={40} className="text-white" />
            <IconBrandInstagramFilled size={40} className="text-white" />
            <IconBrandYoutubeFilled size={40} className="text-white" />
          </div>
          <div className="grid grid-cols-4 gap-4 justify-items-center mt-4 lg:mt-0">
            <p className="text-white text-xs md:text-sm">Home</p>
            <p className="text-white text-xs md:text-sm">About Us</p>
            <p className="text-white text-xs md:text-sm">Privacy Policy</p>
            <p className="text-white text-xs md:text-sm">Contact Us</p>
          </div>
          <div className="justify-items-center mt-4 lg:mt-0 items-center w-full">
            <p className="text-white text-xs md:text-sm !text-center">
              Copyright © 2025 EZYMART.LK | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
