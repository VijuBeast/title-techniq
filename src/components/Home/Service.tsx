import React from "react";
import search from "../../assets/Icon/search.svg";
import Image from "next/image";
const Service = () => {
  return (
    <div className="p-20  bg-[#FCF5FF]">
      <div className="flex flex-col items-center  gap-4  max-w-[768px] mx-auto">
        <div className="text-xl text-[#4E4E4E] font-semibold leading-[150%] tracking-[4px]  ">
          OUR SERVICES
        </div>
        <div className="text-4xl  text-black text-center font-league-spartan font-semibold leading-9  ">
          We Work with ambitious people to deliver exceptional services
        </div>
        <div className="text-gray-700 text-center  text-base font-normal leading-[150%]">
          Our experienced team combines cutting-edge technology with meticulous
          attention to detail, providing you with comprehensive title search
          services that are efficient, reliable, and tailored to your specific
          needs.
        </div>
      </div>
      <div className="mt-12">
        <div className="flex flex-wrap  ">
          {/* card-1 */}
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className=" flex flex-col items-center">
              <div className="bg-[#003F7C] h-20 w-20 rounded-full mb-5 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <mask
                    id="mask0_1013_185"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                  >
                    <rect width="40" height="40" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1013_185)">
                    <path
                      d="M18.75 22.5C19.8056 22.5 20.6944 22.1389 21.4167 21.4167C22.1389 20.6944 22.5 19.8056 22.5 18.75C22.5 17.6944 22.1389 16.8056 21.4167 16.0833C20.6944 15.3611 19.8056 15 18.75 15C17.6944 15 16.8056 15.3611 16.0833 16.0833C15.3611 16.8056 15 17.6944 15 18.75C15 19.8056 15.3611 20.6944 16.0833 21.4167C16.8056 22.1389 17.6944 22.5 18.75 22.5ZM18.75 25.8333C16.7778 25.8333 15.1042 25.1458 13.7292 23.7708C12.3542 22.3958 11.6667 20.7222 11.6667 18.75C11.6667 16.7778 12.3542 15.1042 13.7292 13.7292C15.1042 12.3542 16.7778 11.6667 18.75 11.6667C20.7222 11.6667 22.3958 12.3542 23.7708 13.7292C25.1458 15.1042 25.8333 16.7778 25.8333 18.75C25.8333 19.3889 25.7431 20.0208 25.5625 20.6458C25.3819 21.2708 25.1111 21.8611 24.75 22.4167L28 25.6667C28.3333 26 28.4931 26.3889 28.4792 26.8333C28.4653 27.2778 28.2917 27.6667 27.9583 28C27.625 28.3056 27.2361 28.4653 26.7917 28.4792C26.3472 28.4931 25.9583 28.3333 25.625 28L22.4167 24.7917C21.8611 25.1528 21.2708 25.4167 20.6458 25.5833C20.0208 25.75 19.3889 25.8333 18.75 25.8333ZM8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V26.6667C5 26.1944 5.15972 25.7986 5.47917 25.4792C5.79861 25.1597 6.19444 25 6.66667 25C7.13889 25 7.53472 25.1597 7.85417 25.4792C8.17361 25.7986 8.33333 26.1944 8.33333 26.6667V31.6667H13.3333C13.8056 31.6667 14.2014 31.8264 14.5208 32.1458C14.8403 32.4653 15 32.8611 15 33.3333C15 33.8056 14.8403 34.2014 14.5208 34.5208C14.2014 34.8403 13.8056 35 13.3333 35H8.33333ZM31.6667 35H26.6667C26.1944 35 25.7986 34.8403 25.4792 34.5208C25.1597 34.2014 25 33.8056 25 33.3333C25 32.8611 25.1597 32.4653 25.4792 32.1458C25.7986 31.8264 26.1944 31.6667 26.6667 31.6667H31.6667V26.6667C31.6667 26.1944 31.8264 25.7986 32.1458 25.4792C32.4653 25.1597 32.8611 25 33.3333 25C33.8056 25 34.2014 25.1597 34.5208 25.4792C34.8403 25.7986 35 26.1944 35 26.6667V31.6667C35 32.5833 34.6736 33.3681 34.0208 34.0208C33.3681 34.6736 32.5833 35 31.6667 35ZM5 13.3333V8.33333C5 7.41667 5.32639 6.63194 5.97917 5.97917C6.63194 5.32639 7.41667 5 8.33333 5H13.3333C13.8056 5 14.2014 5.15972 14.5208 5.47917C14.8403 5.79861 15 6.19444 15 6.66667C15 7.13889 14.8403 7.53472 14.5208 7.85417C14.2014 8.17361 13.8056 8.33333 13.3333 8.33333H8.33333V13.3333C8.33333 13.8056 8.17361 14.2014 7.85417 14.5208C7.53472 14.8403 7.13889 15 6.66667 15C6.19444 15 5.79861 14.8403 5.47917 14.5208C5.15972 14.2014 5 13.8056 5 13.3333ZM31.6667 13.3333V8.33333H26.6667C26.1944 8.33333 25.7986 8.17361 25.4792 7.85417C25.1597 7.53472 25 7.13889 25 6.66667C25 6.19444 25.1597 5.79861 25.4792 5.47917C25.7986 5.15972 26.1944 5 26.6667 5H31.6667C32.5833 5 33.3681 5.32639 34.0208 5.97917C34.6736 6.63194 35 7.41667 35 8.33333V13.3333C35 13.8056 34.8403 14.2014 34.5208 14.5208C34.2014 14.8403 33.8056 15 33.3333 15C32.8611 15 32.4653 14.8403 32.1458 14.5208C31.8264 14.2014 31.6667 13.8056 31.6667 13.3333Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Title Search
              </div>
              <div className="text-center text-base font-normal leading-[150%] self-stretch">
                A Title Search for a residential mortgage in the United States
                is a critical step in the home-buying process
              </div>
            </div>
            <div className=" mt-6">
              <div className="flex justify-center items-center">
                <div className="text-base font-semibold">Read More</div>{" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_1013_197"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1013_197)">
                      <path
                        d="M10.7846 8.66674H3.33464C3.14575 8.66674 2.98741 8.60285 2.85964 8.47507C2.73186 8.3473 2.66797 8.18896 2.66797 8.00007C2.66797 7.81118 2.73186 7.65285 2.85964 7.52507C2.98741 7.39729 3.14575 7.33341 3.33464 7.33341H10.7846L7.51797 4.06674C7.38464 3.93341 7.32075 3.77785 7.3263 3.60007C7.33186 3.4223 7.4013 3.26674 7.53464 3.13341C7.66797 3.01118 7.82352 2.9473 8.0013 2.94174C8.17908 2.93618 8.33464 3.00007 8.46797 3.13341L12.868 7.53341C12.9346 7.60007 12.9819 7.6723 13.0096 7.75007C13.0374 7.82785 13.0513 7.91118 13.0513 8.00007C13.0513 8.08896 13.0374 8.1723 13.0096 8.25007C12.9819 8.32785 12.9346 8.40007 12.868 8.46674L8.46797 12.8667C8.34575 12.989 8.19297 13.0501 8.00964 13.0501C7.8263 13.0501 7.66797 12.989 7.53464 12.8667C7.4013 12.7334 7.33464 12.5751 7.33464 12.3917C7.33464 12.2084 7.4013 12.0501 7.53464 11.9167L10.7846 8.66674Z"
                        fill="#262626"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className=" flex flex-col items-center">
              <div className="bg-[#003F7C] h-20 w-20 rounded-full mb-5 flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1053_325"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                  >
                    <rect width="40" height="40" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1053_325)">
                    <path
                      d="M10 36.6667C8.61111 36.6667 7.43056 36.1805 6.45833 35.2083C5.48611 34.2361 5 33.0555 5 31.6667V30C5 29.0833 5.32639 28.2986 5.97917 27.6458C6.63194 26.9931 7.41667 26.6667 8.33333 26.6667H10V6.66666C10 5.74999 10.3264 4.96527 10.9792 4.31249C11.6319 3.65972 12.4167 3.33333 13.3333 3.33333H31.6667C32.5833 3.33333 33.3681 3.65972 34.0208 4.31249C34.6736 4.96527 35 5.74999 35 6.66666V31.6667C35 33.0555 34.5139 34.2361 33.5417 35.2083C32.5694 36.1805 31.3889 36.6667 30 36.6667H10ZM30 33.3333C30.4722 33.3333 30.8681 33.1736 31.1875 32.8542C31.5069 32.5347 31.6667 32.1389 31.6667 31.6667V6.66666H13.3333V26.6667H25C25.9167 26.6667 26.7014 26.9931 27.3542 27.6458C28.0069 28.2986 28.3333 29.0833 28.3333 30V31.6667C28.3333 32.1389 28.4931 32.5347 28.8125 32.8542C29.1319 33.1736 29.5278 33.3333 30 33.3333ZM16.6667 15C16.1944 15 15.7986 14.8403 15.4792 14.5208C15.1597 14.2014 15 13.8056 15 13.3333C15 12.8611 15.1597 12.4653 15.4792 12.1458C15.7986 11.8264 16.1944 11.6667 16.6667 11.6667H28.3333C28.8056 11.6667 29.2014 11.8264 29.5208 12.1458C29.8403 12.4653 30 12.8611 30 13.3333C30 13.8056 29.8403 14.2014 29.5208 14.5208C29.2014 14.8403 28.8056 15 28.3333 15H16.6667ZM16.6667 20C16.1944 20 15.7986 19.8403 15.4792 19.5208C15.1597 19.2014 15 18.8055 15 18.3333C15 17.8611 15.1597 17.4653 15.4792 17.1458C15.7986 16.8264 16.1944 16.6667 16.6667 16.6667H28.3333C28.8056 16.6667 29.2014 16.8264 29.5208 17.1458C29.8403 17.4653 30 17.8611 30 18.3333C30 18.8055 29.8403 19.2014 29.5208 19.5208C29.2014 19.8403 28.8056 20 28.3333 20H16.6667Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Document Retrieval
              </div>
              <div className="text-center text-base font-normal leading-[150%] self-stretch">
                We can procure documents that are public and related to a
                residential property transaction, below are a few examples.
              </div>
            </div>
            <div className=" mt-6">
              <div className="flex justify-center items-center">
                <div className="text-base font-semibold">Read More</div>{" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_1013_197"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1013_197)">
                      <path
                        d="M10.7846 8.66674H3.33464C3.14575 8.66674 2.98741 8.60285 2.85964 8.47507C2.73186 8.3473 2.66797 8.18896 2.66797 8.00007C2.66797 7.81118 2.73186 7.65285 2.85964 7.52507C2.98741 7.39729 3.14575 7.33341 3.33464 7.33341H10.7846L7.51797 4.06674C7.38464 3.93341 7.32075 3.77785 7.3263 3.60007C7.33186 3.4223 7.4013 3.26674 7.53464 3.13341C7.66797 3.01118 7.82352 2.9473 8.0013 2.94174C8.17908 2.93618 8.33464 3.00007 8.46797 3.13341L12.868 7.53341C12.9346 7.60007 12.9819 7.6723 13.0096 7.75007C13.0374 7.82785 13.0513 7.91118 13.0513 8.00007C13.0513 8.08896 13.0374 8.1723 13.0096 8.25007C12.9819 8.32785 12.9346 8.40007 12.868 8.46674L8.46797 12.8667C8.34575 12.989 8.19297 13.0501 8.00964 13.0501C7.8263 13.0501 7.66797 12.989 7.53464 12.8667C7.4013 12.7334 7.33464 12.5751 7.33464 12.3917C7.33464 12.2084 7.4013 12.0501 7.53464 11.9167L10.7846 8.66674Z"
                        fill="#262626"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className=" flex flex-col items-center">
              <div className="bg-[#003F7C] h-20 w-20 rounded-full mb-5 flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1053_26"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                  >
                    <rect width="40" height="40" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1053_26)">
                    <path
                      d="M15.0013 31.6667H25.0013C25.4735 31.6667 25.8694 31.5069 26.1888 31.1875C26.5082 30.868 26.668 30.4722 26.668 30C26.668 29.5278 26.5082 29.1319 26.1888 28.8125C25.8694 28.493 25.4735 28.3333 25.0013 28.3333H15.0013C14.5291 28.3333 14.1332 28.493 13.8138 28.8125C13.4944 29.1319 13.3346 29.5278 13.3346 30C13.3346 30.4722 13.4944 30.868 13.8138 31.1875C14.1332 31.5069 14.5291 31.6667 15.0013 31.6667ZM15.0013 26.6667H25.0013C25.4735 26.6667 25.8694 26.5069 26.1888 26.1875C26.5082 25.8681 26.668 25.4722 26.668 25C26.668 24.5278 26.5082 24.1319 26.1888 23.8125C25.8694 23.4931 25.4735 23.3333 25.0013 23.3333H15.0013C14.5291 23.3333 14.1332 23.4931 13.8138 23.8125C13.4944 24.1319 13.3346 24.5278 13.3346 25C13.3346 25.4722 13.4944 25.8681 13.8138 26.1875C14.1332 26.5069 14.5291 26.6667 15.0013 26.6667ZM20.0013 9.66666C19.668 9.24999 19.2305 8.92361 18.6888 8.68749C18.1471 8.45138 17.5846 8.33333 17.0013 8.33333C16.0013 8.33333 15.1402 8.69444 14.418 9.41666C13.6957 10.1389 13.3346 11 13.3346 12C13.3346 13.4722 14.0152 14.8681 15.3763 16.1875C16.7374 17.5069 17.9041 18.6111 18.8763 19.5C19.1819 19.8055 19.5569 19.9583 20.0013 19.9583C20.4457 19.9583 20.8207 19.8055 21.1263 19.5C22.0985 18.6111 23.2652 17.5069 24.6263 16.1875C25.9874 14.8681 26.668 13.4722 26.668 12C26.668 11 26.3069 10.1389 25.5846 9.41666C24.8624 8.69444 24.0013 8.33333 23.0013 8.33333C22.418 8.33333 21.8555 8.45138 21.3138 8.68749C20.7721 8.92361 20.3346 9.24999 20.0013 9.66666ZM30.0013 36.6667H10.0013C9.08464 36.6667 8.29991 36.3403 7.64714 35.6875C6.99436 35.0347 6.66797 34.25 6.66797 33.3333V6.66666C6.66797 5.74999 6.99436 4.96527 7.64714 4.31249C8.29991 3.65972 9.08464 3.33333 10.0013 3.33333H30.0013C30.918 3.33333 31.7027 3.65972 32.3555 4.31249C33.0082 4.96527 33.3346 5.74999 33.3346 6.66666V33.3333C33.3346 34.25 33.0082 35.0347 32.3555 35.6875C31.7027 36.3403 30.918 36.6667 30.0013 36.6667Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Commitment Report
              </div>
              <div className="text-center text-base font-normal leading-[150%] self-stretch">
                A Commitment Report, in the context of a Residential Title
                search, is a crucial document provided by a title company or a
                title ,,,
              </div>
            </div>
            <div className=" mt-6">
              <div className="flex justify-center items-center">
                <div className="text-base font-semibold">Read More</div>{" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_1013_197"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1013_197)">
                      <path
                        d="M10.7846 8.66674H3.33464C3.14575 8.66674 2.98741 8.60285 2.85964 8.47507C2.73186 8.3473 2.66797 8.18896 2.66797 8.00007C2.66797 7.81118 2.73186 7.65285 2.85964 7.52507C2.98741 7.39729 3.14575 7.33341 3.33464 7.33341H10.7846L7.51797 4.06674C7.38464 3.93341 7.32075 3.77785 7.3263 3.60007C7.33186 3.4223 7.4013 3.26674 7.53464 3.13341C7.66797 3.01118 7.82352 2.9473 8.0013 2.94174C8.17908 2.93618 8.33464 3.00007 8.46797 3.13341L12.868 7.53341C12.9346 7.60007 12.9819 7.6723 13.0096 7.75007C13.0374 7.82785 13.0513 7.91118 13.0513 8.00007C13.0513 8.08896 13.0374 8.1723 13.0096 8.25007C12.9819 8.32785 12.9346 8.40007 12.868 8.46674L8.46797 12.8667C8.34575 12.989 8.19297 13.0501 8.00964 13.0501C7.8263 13.0501 7.66797 12.989 7.53464 12.8667C7.4013 12.7334 7.33464 12.5751 7.33464 12.3917C7.33464 12.2084 7.4013 12.0501 7.53464 11.9167L10.7846 8.66674Z"
                        fill="#262626"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className="flex flex-col items-center">
              <div className="bg-[#003F7C] h-20 w-20 rounded-full mb-5 flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1053_452"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                  >
                    <rect width="40" height="40" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1053_452)">
                    <path
                      d="M18.3346 28.3333V29.1667C18.3346 29.3889 18.418 29.5833 18.5846 29.75C18.7513 29.9167 18.9457 30 19.168 30H20.8346C21.0569 30 21.2513 29.9167 21.418 29.75C21.5846 29.5833 21.668 29.3889 21.668 29.1667V28.3333H23.3346C23.8069 28.3333 24.2027 28.1736 24.5221 27.8542C24.8416 27.5347 25.0013 27.1389 25.0013 26.6667V21.6667C25.0013 21.1944 24.8416 20.7986 24.5221 20.4792C24.2027 20.1597 23.8069 20 23.3346 20H18.3346V18.3333H23.3346C23.8069 18.3333 24.2027 18.1736 24.5221 17.8542C24.8416 17.5347 25.0013 17.1389 25.0013 16.6667C25.0013 16.1944 24.8416 15.7986 24.5221 15.4792C24.2027 15.1597 23.8069 15 23.3346 15H21.668V14.1667C21.668 13.9444 21.5846 13.75 21.418 13.5833C21.2513 13.4167 21.0569 13.3333 20.8346 13.3333H19.168C18.9457 13.3333 18.7513 13.4167 18.5846 13.5833C18.418 13.75 18.3346 13.9444 18.3346 14.1667V15H16.668C16.1957 15 15.7999 15.1597 15.4805 15.4792C15.161 15.7986 15.0013 16.1944 15.0013 16.6667V21.6667C15.0013 22.1389 15.161 22.5347 15.4805 22.8542C15.7999 23.1736 16.1957 23.3333 16.668 23.3333H21.668V25H16.668C16.1957 25 15.7999 25.1597 15.4805 25.4792C15.161 25.7986 15.0013 26.1944 15.0013 26.6667C15.0013 27.1389 15.161 27.5347 15.4805 27.8542C15.7999 28.1736 16.1957 28.3333 16.668 28.3333H18.3346ZM10.0013 36.6667C9.08464 36.6667 8.29991 36.3403 7.64714 35.6875C6.99436 35.0347 6.66797 34.25 6.66797 33.3333V6.66666C6.66797 5.74999 6.99436 4.96527 7.64714 4.31249C8.29991 3.65972 9.08464 3.33333 10.0013 3.33333H21.9596C22.4041 3.33333 22.8277 3.41666 23.2305 3.58333C23.6332 3.74999 23.9874 3.98611 24.293 4.29166L32.3763 12.375C32.6819 12.6806 32.918 13.0347 33.0846 13.4375C33.2513 13.8403 33.3346 14.2639 33.3346 14.7083V33.3333C33.3346 34.25 33.0082 35.0347 32.3555 35.6875C31.7027 36.3403 30.918 36.6667 30.0013 36.6667H10.0013Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Tax Certification
              </div>
              <div className="text-center text-base font-normal leading-[150%] self-stretch">
                Our skilled team conducts efficient title searches in real
                estate transactions, safeguarding you from in-house challenges.
              </div>
            </div>
            <div className=" mt-6">
              <div className="flex justify-center items-center">
                <div className="text-base font-semibold">Read More</div>{" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_1013_197"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1013_197)">
                      <path
                        d="M10.7846 8.66674H3.33464C3.14575 8.66674 2.98741 8.60285 2.85964 8.47507C2.73186 8.3473 2.66797 8.18896 2.66797 8.00007C2.66797 7.81118 2.73186 7.65285 2.85964 7.52507C2.98741 7.39729 3.14575 7.33341 3.33464 7.33341H10.7846L7.51797 4.06674C7.38464 3.93341 7.32075 3.77785 7.3263 3.60007C7.33186 3.4223 7.4013 3.26674 7.53464 3.13341C7.66797 3.01118 7.82352 2.9473 8.0013 2.94174C8.17908 2.93618 8.33464 3.00007 8.46797 3.13341L12.868 7.53341C12.9346 7.60007 12.9819 7.6723 13.0096 7.75007C13.0374 7.82785 13.0513 7.91118 13.0513 8.00007C13.0513 8.08896 13.0374 8.1723 13.0096 8.25007C12.9819 8.32785 12.9346 8.40007 12.868 8.46674L8.46797 12.8667C8.34575 12.989 8.19297 13.0501 8.00964 13.0501C7.8263 13.0501 7.66797 12.989 7.53464 12.8667C7.4013 12.7334 7.33464 12.5751 7.33464 12.3917C7.33464 12.2084 7.4013 12.0501 7.53464 11.9167L10.7846 8.66674Z"
                        fill="#262626"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center gap-2">
        {/* <div className="text-[#003F7C] text-base">Explore All</div> */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <mask
              id="mask0_568_2374"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="16"
            >
              <rect x="0.5" width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_568_2374)">
              <path
                d="M11.2846 8.66674H3.83464C3.64575 8.66674 3.48741 8.60285 3.35964 8.47507C3.23186 8.3473 3.16797 8.18896 3.16797 8.00007C3.16797 7.81118 3.23186 7.65285 3.35964 7.52507C3.48741 7.39729 3.64575 7.33341 3.83464 7.33341H11.2846L8.01797 4.06674C7.88464 3.93341 7.82075 3.77785 7.8263 3.60007C7.83186 3.4223 7.9013 3.26674 8.03464 3.13341C8.16797 3.01118 8.32352 2.9473 8.5013 2.94174C8.67908 2.93618 8.83464 3.00007 8.96797 3.13341L13.368 7.53341C13.4346 7.60007 13.4819 7.6723 13.5096 7.75007C13.5374 7.82785 13.5513 7.91118 13.5513 8.00007C13.5513 8.08896 13.5374 8.1723 13.5096 8.25007C13.4819 8.32785 13.4346 8.40007 13.368 8.46674L8.96797 12.8667C8.84575 12.989 8.69297 13.0501 8.50964 13.0501C8.3263 13.0501 8.16797 12.989 8.03464 12.8667C7.9013 12.7334 7.83464 12.5751 7.83464 12.3917C7.83464 12.2084 7.9013 12.0501 8.03464 11.9167L11.2846 8.66674Z"
                fill="#003F7C"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Service;
