import React from "react";
import Trustcard from "./Trustcard";

const Trust = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto my-20 flex flex-col gap-12">
        <div className="w-[768px] mx-auto">
          <div className="text-center text-[36px] font-semibold leading-[150%]">
            Why Trust Us
          </div>
          <div className="text-center text-base text-noraml text-[#4E4E4E] leading-[150%]">
            Our experienced team combines cutting-edge technology with
            meticulous attention to detail, providing you with comprehensive
            title search services that are efficient, reliable, and tailored to
            your specific needs.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
        <Trustcard 
        svg={ <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#003F7C" />
            <g clip-path="url(#clip0_791_12375)">
              <path
                d="M24.0013 10.6667C24.5013 10.6667 24.9946 10.6934 25.4813 10.748C25.6553 10.7673 25.8239 10.8206 25.9773 10.905C26.1307 10.9894 26.266 11.1032 26.3755 11.2399C26.4849 11.3766 26.5664 11.5335 26.6152 11.7017C26.664 11.8698 26.6792 12.046 26.66 12.22C26.6407 12.3941 26.5874 12.5626 26.503 12.716C26.4186 12.8695 26.3048 13.0048 26.1681 13.1142C26.0314 13.2237 25.8745 13.3051 25.7063 13.3539C25.5381 13.4027 25.362 13.4179 25.188 13.3987C22.9907 13.1529 20.7713 13.5959 18.8369 14.6666C16.9024 15.7372 15.3484 17.3825 14.3899 19.3749C13.4314 21.3674 13.1157 23.6084 13.4865 25.788C13.8573 27.9677 14.8962 29.9783 16.4596 31.5417C18.023 33.1051 20.0336 34.144 22.2133 34.5148C24.3929 34.8856 26.634 34.5699 28.6264 33.6114C30.6188 32.6529 32.2641 31.0989 33.3347 29.1645C34.4054 27.23 34.8484 25.0106 34.6026 22.8134C34.5834 22.6393 34.5986 22.4632 34.6474 22.295C34.6962 22.1268 34.7777 21.9699 34.8871 21.8332C35.1082 21.5572 35.4298 21.3803 35.7813 21.3414C36.1328 21.3025 36.4854 21.4048 36.7614 21.6258C36.8981 21.7353 37.0119 21.8706 37.0963 22.024C37.1807 22.1774 37.234 22.346 37.2533 22.52C37.3066 23.0067 37.3346 23.5 37.3346 24C37.3346 31.364 31.3653 37.3334 24.0013 37.3334C16.6373 37.3334 10.668 31.364 10.668 24C10.668 16.636 16.6373 10.6667 24.0013 10.6667ZM23.9586 18.5027C24.0465 18.845 23.9949 19.2082 23.8151 19.5124C23.6354 19.8167 23.3422 20.0371 23 20.1254C22.0598 20.3716 21.2414 20.9516 20.6974 21.757C20.1534 22.5624 19.921 23.5382 20.0436 24.5023C20.1662 25.4664 20.6354 26.353 21.3636 26.9966C22.0919 27.6402 23.0294 27.9969 24.0013 28C24.888 27.9996 25.7495 27.7048 26.4506 27.1618C27.1516 26.6189 27.6525 25.8585 27.8746 25C27.963 24.6575 28.1839 24.3642 28.4886 24.1845C28.7932 24.0049 29.1568 23.9536 29.4993 24.042C29.8418 24.1304 30.1351 24.3513 30.3148 24.6559C30.4944 24.9606 30.5457 25.3242 30.4573 25.6667C30.0483 27.2346 29.0824 28.6 27.7402 29.5077C26.3979 30.4155 24.7711 30.8035 23.1636 30.5994C21.5562 30.3952 20.078 29.6128 19.0053 28.3983C17.9326 27.1839 17.3387 25.6204 17.3346 24C17.3349 22.522 17.8261 21.0859 18.7311 19.9173C19.6361 18.7488 20.9037 17.914 22.3346 17.544C22.5042 17.5003 22.6807 17.4904 22.8541 17.515C23.0275 17.5395 23.1944 17.5979 23.3452 17.687C23.496 17.776 23.6278 17.8938 23.7331 18.0338C23.8383 18.1738 23.915 18.3331 23.9586 18.5027ZM32.6733 10.836C32.9167 10.9369 33.1247 11.1077 33.2711 11.3267C33.4175 11.5457 33.4958 11.8032 33.496 12.0667V14.5067H35.9346C36.1983 14.5067 36.456 14.585 36.6752 14.7315C36.8945 14.878 37.0653 15.0862 37.1662 15.3298C37.2671 15.5734 37.2935 15.8415 37.2421 16.1001C37.1907 16.3587 37.0637 16.5962 36.8773 16.7827L32.1613 21.4934C31.9113 21.7434 31.5722 21.8839 31.2186 21.884H28.0013L25.564 24.3227C25.3138 24.5729 24.9745 24.7134 24.6206 24.7134C24.2668 24.7134 23.9275 24.5729 23.6773 24.3227C23.4271 24.0725 23.2866 23.7332 23.2866 23.3794C23.2866 23.0255 23.4271 22.6862 23.6773 22.436L26.116 20V16.7814C26.116 16.4278 26.2566 16.0887 26.5066 15.8387L31.22 11.124C31.4064 10.9374 31.644 10.8104 31.9027 10.7589C32.1614 10.7074 32.4296 10.7337 32.6733 10.8347V10.836ZM30.8293 15.2854L28.7826 17.3334V19.2187H30.668L32.716 17.172H32.1626C31.809 17.172 31.4699 17.0315 31.2198 16.7815C30.9698 16.5314 30.8293 16.1923 30.8293 15.8387V15.2854Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_791_12375">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg>}
          label="Accuracy & Reliability"
          text="Our expert Abstractors are highly skilled and experienced in searching actual records on-site, ensuring that the information provided is precise and dependable."
          />
        <Trustcard
        svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="#003F7C"/>
        <path d="M20.6918 37.3334C20.0385 35.2034 19.0531 33.6147 17.7351 32.5687C15.7585 31 12.6178 31.9754 11.4578 30.3567C10.2978 28.738 12.2705 25.762 12.9625 24.006C13.6551 22.25 10.3091 21.6294 10.6998 21.1307C10.9598 20.798 12.6511 19.8394 15.7725 18.2534C16.6591 13.196 19.9345 10.6667 25.5998 10.6667C34.0971 10.6667 37.3345 17.8707 37.3345 22.4534C37.3345 27.0347 33.4145 31.9707 27.8305 33.0354C27.3311 33.762 28.0511 35.1954 29.9905 37.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.0022 17.6667C20.5662 19.356 20.6955 20.5427 21.3908 21.226C22.0855 21.9087 23.2695 22.356 24.9428 22.566C24.5628 24.7454 25.0262 25.7674 26.3315 25.6327C27.6368 25.4987 28.4215 24.956 28.6848 24.006C30.7248 24.5794 31.8308 24.0994 32.0022 22.566C32.2588 20.266 31.0188 18.432 30.5102 18.432C30.0022 18.432 28.6848 18.37 28.6848 17.6667C28.6848 16.9634 27.1462 16.5667 25.7575 16.5667C24.3688 16.5667 25.2042 15.63 23.2975 16C22.0262 16.2467 21.2608 16.802 21.0022 17.6667Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
        <path d="M28.3334 25C27.6554 25.4207 26.7254 26.12 26.3334 26.6667C25.3541 28.0333 24.5601 28.8653 24.3867 29.7387" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        }
        label="In-Depth Knowledge and Expertise"
        text="Our Abstractors master the unique intricacies of local county records, understand the nuances, formats and procedures unique to each County, expertly navigating complexities for efficient record searches."/>
        <Trustcard
          svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="#003F7C"/>
          <g clip-path="url(#clip0_791_12395)">
          <path d="M25.03 10.038C24.6873 10.0127 24.3437 10 24 10V8C24.3931 8.00019 24.786 8.01487 25.178 8.044L25.03 10.038ZM29.038 10.938C28.3969 10.6906 27.7384 10.4907 27.068 10.34L27.506 8.388C28.272 8.56 29.026 8.788 29.758 9.072L29.038 10.938ZM31.778 12.358C31.4921 12.1673 31.1992 11.9872 30.9 11.818L31.886 10.078C32.5698 10.4655 33.2242 10.9026 33.844 11.386L32.614 12.964C32.3429 12.7525 32.064 12.551 31.778 12.36V12.358ZM35.446 15.938C35.0504 15.376 34.6139 14.8438 34.14 14.346L35.588 12.966C36.128 13.536 36.628 14.146 37.082 14.786L35.446 15.938ZM36.934 18.642C36.8027 18.3249 36.66 18.0127 36.506 17.706L38.292 16.806C38.6452 17.5082 38.946 18.2355 39.192 18.982L37.292 19.608C37.1845 19.2817 37.0651 18.9595 36.934 18.642ZM37.994 23.656C37.9778 22.9687 37.911 22.2835 37.794 21.606L39.764 21.266C39.898 22.038 39.976 22.822 39.996 23.606L37.996 23.656H37.994ZM37.732 26.732C37.798 26.392 37.852 26.054 37.894 25.712L39.88 25.958C39.7839 26.7383 39.6302 27.5104 39.42 28.268L37.492 27.734C37.584 27.404 37.664 27.07 37.732 26.732ZM35.828 31.49C36.196 30.91 36.52 30.302 36.8 29.674L38.628 30.484C38.308 31.204 37.938 31.896 37.518 32.56L35.828 31.49ZM33.9 33.9C34.144 33.656 34.378 33.404 34.6 33.144L36.116 34.45C35.8593 34.7477 35.5918 35.0359 35.314 35.314L33.9 33.9Z" fill="white"/>
          <path d="M23.9984 10C21.6962 10.0002 19.4295 10.5681 17.3992 11.6535C15.3689 12.7389 13.6375 14.3082 12.3585 16.2225C11.0796 18.1368 10.2924 20.337 10.0668 22.6281C9.84122 24.9193 10.1841 27.2307 11.0652 29.3577C11.9462 31.4847 13.3382 33.3616 15.1179 34.8221C16.8975 36.2826 19.0099 37.2817 21.2679 37.7309C23.5259 38.1801 25.8598 38.0655 28.063 37.3973C30.2661 36.7291 32.2704 35.5278 33.8984 33.9L35.3124 35.314C33.4519 37.1756 31.1609 38.5495 28.6425 39.314C26.1241 40.0785 23.456 40.2101 20.8746 39.697C18.2932 39.1839 15.8781 38.042 13.8435 36.3725C11.8089 34.7029 10.2175 32.5573 9.2103 30.1258C8.2031 27.6942 7.81121 25.0518 8.06934 22.4325C8.32748 19.8133 9.22767 17.2982 10.6902 15.11C12.1527 12.9219 14.1323 11.1282 16.4537 9.88801C18.7751 8.64779 21.3665 7.9993 23.9984 8V10Z" fill="white"/>
          <path d="M23 14C23.2652 14 23.5196 14.1054 23.7071 14.2929C23.8946 14.4804 24 14.7348 24 15V25.42L30.496 29.132C30.7196 29.2669 30.8815 29.4839 30.9473 29.7366C31.013 29.9893 30.9772 30.2577 30.8477 30.4844C30.7181 30.7111 30.5051 30.8782 30.254 30.9498C30.0029 31.0215 29.7337 30.9921 29.504 30.868L22.504 26.868C22.3509 26.7806 22.2237 26.6542 22.1352 26.5018C22.0467 26.3494 22.0001 26.1763 22 26V15C22 14.7348 22.1054 14.4804 22.2929 14.2929C22.4804 14.1054 22.7348 14 23 14Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_791_12395">
          <rect width="32" height="32" fill="white" transform="translate(8 8)"/>
          </clipPath>
          </defs>
          </svg>
          }
          label="Streamlined Process for Title Searches"
          text="We save you time and effort in finding the right professionals for your property transactions"
        />
        <Trustcard
          svg={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="#003F7C"/>
          <path d="M24.0013 10.6667C16.6493 10.6667 10.668 16.648 10.668 24V29.524C10.668 30.8894 11.864 32 13.3346 32H14.668C15.0216 32 15.3607 31.8595 15.6108 31.6095C15.8608 31.3594 16.0013 31.0203 16.0013 30.6667V23.8094C16.0013 23.4557 15.8608 23.1166 15.6108 22.8665C15.3607 22.6165 15.0216 22.476 14.668 22.476H13.4573C14.1986 17.316 18.6386 13.3334 24.0013 13.3334C29.364 13.3334 33.804 17.316 34.5453 22.476H33.3346C32.981 22.476 32.6419 22.6165 32.3918 22.8665C32.1418 23.1166 32.0013 23.4557 32.0013 23.8094V32C32.0013 33.4707 30.8053 34.6667 29.3346 34.6667H26.668V33.3334H21.3346V37.3334H29.3346C32.276 37.3334 34.668 34.9414 34.668 32C36.1386 32 37.3346 30.8894 37.3346 29.524V24C37.3346 16.648 31.3533 10.6667 24.0013 10.6667Z" fill="white"/>
          </svg>
          }
          label="Unparalleled Client Support"
          text="We're dedicated to providing outstanding client support, offering prompt assistance, clear communication, and transparent updates throughout the abstracting process."
        />
        </div>
      </div>
    </div>
  );
};

export default Trust;