import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#14252D] text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col w-96 ">
          <h2 className="font-semibold text-2xl mb-4">MoneyHub</h2>
          <div>
            <div className="mb-4 max-w-xs">
              <p className="font-semibold mb-3 text-base">Subscribe</p>
              <p className="text-sm font-normal text-gray-400 ">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
            <form className="flex items-center bg-[#1B3641] rounded-full overflow-hidden w-full py-1.5 px-3 ">
              <span className="text-lg">
                <div className="p-2 bg-[#0F2028] rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                {/* <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-gray-400 bg-[#0F2028] p-1.5 rounded-full "
                >
                  <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.5.5v.217l7 5.25 7-5.25V4a.5.5 0 0 0-.5-.5H4zm14 2.383l-5.803 4.351a2.5 2.5 0 0 1-3.394 0L2 5.883V16a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V5.883z" />
                </svg> */}
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent py-2 px-2 flex-1 outline-none text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-[#0F2028] rounded-full text-white py-2 px-4 font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-5">
              By subscribing you agree to with our{" "}
              <span className="underline cursor-pointer text-white">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap w-[50%]  justify-between sm:justify-center md:justify-between gap-10 sm:gap-16 md:gap-20 text-left">
          <div className="">
            <p className="font-semibold mb-4 text-lg text-white">Quick Links</p>
            <ul className="space-y-2 text-base font-medium text-gray-400 hover:[&>li]:text-white transition-colors">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="">
            <p className="font-semibold mb-4 text-lg text-white">Products</p>
            <ul className="space-y-2 text-base font-medium text-gray-400 hover:[&>li]:text-white transition-colors">
              <li>Ai Assistant</li>
              <li>Mobile App</li>
              <li>Account</li>
              <li>Credit Card</li>
            </ul>
          </div>

          <div className="">
            <p className="font-semibold mb-4 text-lg text-white">Company</p>
            <ul className="space-y-2 text-base font-medium text-gray-400 hover:[&>li]:text-white transition-colors">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-10 flex flex-col md:flex-row items-center justify-between border-t border-[#1B3641] pt-5">
        <p className="text-sm text-gray-500">
          Copyright © 2025 MoneyHub. All Rights Reserved
        </p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="p-2 bg-[#203542] rounded-full text-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-current"
            >
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" />
            </svg>
          </div>
          <div className="p-2 bg-[#203542] rounded-full text-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-current"
            >
              <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z" />
            </svg>
          </div>
          <div className="p-2 bg-[#203542] rounded-full text-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-current"
            >
              <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z" />
            </svg>
          </div>
          <div className="p-2 bg-[#203542] rounded-full text-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-current"
            >
              <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
