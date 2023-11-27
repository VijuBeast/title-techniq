import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const handleButtonClick = () => {
    // Specify the URL you want to navigate to
    const linkUrl = "https://www.linkedin.com/company/title-techniq/";

    // Use the router to navigate to the specified URL
    window.open(linkUrl, "_blank");
  };
  const handlemapclick = () => {
    // Specify the URL you want to navigate to
    const linkUrl = "https://maps.app.goo.gl/DimEFfjd3m6QueH39";

    // Use the router to navigate to the specified URL
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="bg-[#003F7C] p-20 flex flex-col gap-12">
      <div className="flex justify-between ">
        <div>
          <svg
            width="155"
            height="54"
            viewBox="0 0 155 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0802 6.15771H4.70042L0 34.3935H6.37981L11.0802 6.15771Z"
              fill="white"
            />
            <path
              d="M22.2385 34.3926V29.2588H1.16873V34.3926H22.2385Z"
              fill="white"
            />
            <path
              d="M22.238 11.2915H4.26672V16.4253H22.238V11.2915Z"
              fill="white"
            />
            <path
              d="M25.8945 48.3691H32.2743L36.9748 20.1333H30.595L25.8945 48.3691Z"
              fill="white"
            />
            <path
              d="M14.8019 20.1328V25.2666H35.8717V20.1328H14.8019Z"
              fill="white"
            />
            <path
              d="M14.8019 43.2349H32.7732V38.1011H14.8019V43.2349Z"
              fill="white"
            />
            <path
              d="M57.7046 21.5303H54.1409C53.8622 21.5303 53.6569 21.4716 53.5249 21.3543C53.4076 21.2223 53.3489 21.017 53.3489 20.7383V9.93715H50.1152C49.8365 9.93715 49.6312 9.87849 49.4992 9.76116C49.3819 9.62917 49.3232 9.42385 49.3232 9.14521V6.48341C49.3232 6.20477 49.3819 6.00678 49.4992 5.88946C49.6312 5.75747 49.8365 5.69147 50.1152 5.69147H61.7303C62.0089 5.69147 62.2069 5.75747 62.3242 5.88946C62.4562 6.00678 62.5222 6.20477 62.5222 6.48341V9.14521C62.5222 9.42385 62.4562 9.62917 62.3242 9.76116C62.2069 9.87849 62.0089 9.93715 61.7303 9.93715H58.4965V20.7383C58.4965 21.017 58.4305 21.2223 58.2986 21.3543C58.1812 21.4716 57.9832 21.5303 57.7046 21.5303ZM65.1015 21.5303C64.8229 21.5303 64.6176 21.4716 64.4856 21.3543C64.3683 21.2223 64.3096 21.017 64.3096 20.7383V18.1205C64.3096 17.8419 64.3683 17.6439 64.4856 17.5266C64.6176 17.3946 64.8229 17.3286 65.1015 17.3286H67.2794V9.93715H65.1015C64.8229 9.93715 64.6176 9.87849 64.4856 9.76116C64.3683 9.62917 64.3096 9.42385 64.3096 9.14521V6.48341C64.3096 6.20477 64.3683 6.00678 64.4856 5.88946C64.6176 5.75747 64.8229 5.69147 65.1015 5.69147H74.4728C74.7515 5.69147 74.9495 5.75747 75.0668 5.88946C75.1988 6.00678 75.2648 6.20477 75.2648 6.48341V9.14521C75.2648 9.42385 75.1988 9.62917 75.0668 9.76116C74.9495 9.87849 74.7515 9.93715 74.4728 9.93715H72.339V17.3286H74.4728C74.7515 17.3286 74.9495 17.3946 75.0668 17.5266C75.1988 17.6439 75.2648 17.8419 75.2648 18.1205V20.7383C75.2648 21.017 75.1988 21.2223 75.0668 21.3543C74.9495 21.4716 74.7515 21.5303 74.4728 21.5303H65.1015ZM85.4603 21.5303H81.8966C81.6179 21.5303 81.4126 21.4716 81.2806 21.3543C81.1633 21.2223 81.1046 21.017 81.1046 20.7383V9.93715H77.8709C77.5922 9.93715 77.3869 9.87849 77.2549 9.76116C77.1376 9.62917 77.0789 9.42385 77.0789 9.14521V6.48341C77.0789 6.20477 77.1376 6.00678 77.2549 5.88946C77.3869 5.75747 77.5922 5.69147 77.8709 5.69147H89.486C89.7647 5.69147 89.9626 5.75747 90.08 5.88946C90.212 6.00678 90.2779 6.20477 90.2779 6.48341V9.14521C90.2779 9.42385 90.212 9.62917 90.08 9.76116C89.9626 9.87849 89.7647 9.93715 89.486 9.93715H86.2523V20.7383C86.2523 21.017 86.1863 21.2223 86.0543 21.3543C85.9369 21.4716 85.739 21.5303 85.4603 21.5303ZM104.406 21.5303H93.2092C92.9306 21.5303 92.7253 21.4716 92.5933 21.3543C92.4759 21.2223 92.4173 21.017 92.4173 20.7383V6.48341C92.4173 6.20477 92.4759 6.00678 92.5933 5.88946C92.7253 5.75747 92.9306 5.69147 93.2092 5.69147H96.619C96.8976 5.69147 97.0956 5.75747 97.2129 5.88946C97.3449 6.00678 97.4109 6.20477 97.4109 6.48341V17.3726H100.425V13.8089C100.425 13.5302 100.483 13.3322 100.601 13.2149C100.733 13.0829 100.938 13.0169 101.217 13.0169H104.406C104.685 13.0169 104.883 13.0829 105 13.2149C105.132 13.3322 105.198 13.5302 105.198 13.8089V20.7383C105.198 21.017 105.132 21.2223 105 21.3543C104.883 21.4716 104.685 21.5303 104.406 21.5303ZM118.712 21.5303H108.505C108.226 21.5303 108.021 21.4716 107.889 21.3543C107.772 21.2223 107.713 21.017 107.713 20.7383V6.48341C107.713 6.20477 107.772 6.00678 107.889 5.88946C108.021 5.75747 108.226 5.69147 108.505 5.69147H118.712C118.991 5.69147 119.189 5.75747 119.306 5.88946C119.438 6.00678 119.504 6.20477 119.504 6.48341V9.05722C119.504 9.33586 119.438 9.54118 119.306 9.67317C119.189 9.79049 118.991 9.84916 118.712 9.84916H112.641V11.543H116.93C117.209 11.543 117.407 11.609 117.524 11.741C117.656 11.8583 117.722 12.0563 117.722 12.335V14.6888C117.722 14.9674 117.656 15.1728 117.524 15.3047C117.407 15.4221 117.209 15.4807 116.93 15.4807H112.641V17.3726H118.712C118.991 17.3726 119.189 17.4386 119.306 17.5706C119.438 17.6879 119.504 17.8859 119.504 18.1645V20.7383C119.504 21.017 119.438 21.2223 119.306 21.3543C119.189 21.4716 118.991 21.5303 118.712 21.5303Z"
              fill="white"
            />
            <path
              d="M57.7046 48.9971H54.1409C53.8622 48.9971 53.6569 48.9384 53.5249 48.8211C53.4076 48.6891 53.3489 48.4838 53.3489 48.2051V37.4039H50.1152C49.8365 37.4039 49.6312 37.3453 49.4992 37.228C49.3819 37.096 49.3232 36.8907 49.3232 36.612V33.9502C49.3232 33.6716 49.3819 33.4736 49.4992 33.3563C49.6312 33.2243 49.8365 33.1583 50.1152 33.1583H61.7303C62.0089 33.1583 62.2069 33.2243 62.3242 33.3563C62.4562 33.4736 62.5222 33.6716 62.5222 33.9502V36.612C62.5222 36.8907 62.4562 37.096 62.3242 37.228C62.2069 37.3453 62.0089 37.4039 61.7303 37.4039H58.4965V48.2051C58.4965 48.4838 58.4305 48.6891 58.2986 48.8211C58.1812 48.9384 57.9832 48.9971 57.7046 48.9971ZM75.6607 48.9971H65.4535C65.1749 48.9971 64.9695 48.9384 64.8376 48.8211C64.7202 48.6891 64.6616 48.4838 64.6616 48.2051V33.9502C64.6616 33.6716 64.7202 33.4736 64.8376 33.3563C64.9695 33.2243 65.1749 33.1583 65.4535 33.1583H75.6607C75.9394 33.1583 76.1374 33.2243 76.2547 33.3563C76.3867 33.4736 76.4527 33.6716 76.4527 33.9502V36.524C76.4527 36.8027 76.3867 37.008 76.2547 37.14C76.1374 37.2573 75.9394 37.316 75.6607 37.316H69.5892V39.0098H73.8789C74.1575 39.0098 74.3555 39.0758 74.4728 39.2078C74.6048 39.3251 74.6708 39.5231 74.6708 39.8018V42.1556C74.6708 42.4342 74.6048 42.6396 74.4728 42.7715C74.3555 42.8889 74.1575 42.9475 73.8789 42.9475H69.5892V44.8394H75.6607C75.9394 44.8394 76.1374 44.9054 76.2547 45.0374C76.3867 45.1547 76.4527 45.3527 76.4527 45.6313V48.2051C76.4527 48.4838 76.3867 48.6891 76.2547 48.8211C76.1374 48.9384 75.9394 48.9971 75.6607 48.9971ZM89.4848 48.9971H84.1172C82.284 48.9971 80.9201 48.6304 80.0255 47.8972C79.1456 47.1639 78.7056 46.0346 78.7056 44.5094V37.6679C78.7056 36.1427 79.1456 35.0135 80.0255 34.2802C80.9201 33.5322 82.284 33.1583 84.1172 33.1583H89.4848C89.7634 33.1583 89.9614 33.2243 90.0788 33.3563C90.2107 33.4736 90.2767 33.6716 90.2767 33.9502V36.612C90.2767 36.8907 90.2107 37.096 90.0788 37.228C89.9614 37.3453 89.7634 37.4039 89.4848 37.4039H85.0631C84.6085 37.4039 84.2712 37.4993 84.0512 37.6899C83.8312 37.8659 83.7212 38.1372 83.7212 38.5039V43.7395C83.7212 44.1061 83.8312 44.3774 84.0512 44.5534C84.2712 44.7147 84.6085 44.7954 85.0631 44.7954H89.4848C89.7634 44.7954 89.9614 44.8614 90.0788 44.9934C90.2107 45.1107 90.2767 45.3087 90.2767 45.5873V48.2051C90.2767 48.4838 90.2107 48.6891 90.0788 48.8211C89.9614 48.9384 89.7634 48.9971 89.4848 48.9971ZM96.9627 48.9971H93.5529C93.2743 48.9971 93.069 48.9384 92.937 48.8211C92.8197 48.6891 92.761 48.4838 92.761 48.2051V33.9502C92.761 33.6716 92.8197 33.4736 92.937 33.3563C93.069 33.2243 93.2743 33.1583 93.5529 33.1583H96.9627C97.2413 33.1583 97.4393 33.2243 97.5566 33.3563C97.6886 33.4736 97.7546 33.6716 97.7546 33.9502V38.7238H101.428V33.9502C101.428 33.6716 101.487 33.4736 101.604 33.3563C101.736 33.2243 101.942 33.1583 102.22 33.1583H105.63C105.909 33.1583 106.107 33.2243 106.224 33.3563C106.356 33.4736 106.422 33.6716 106.422 33.9502V48.2051C106.422 48.4838 106.356 48.6891 106.224 48.8211C106.107 48.9384 105.909 48.9971 105.63 48.9971H102.22C101.942 48.9971 101.736 48.9384 101.604 48.8211C101.487 48.6891 101.428 48.4838 101.428 48.2051V43.3215H97.7546V48.2051C97.7546 48.4838 97.6886 48.6891 97.5566 48.8211C97.4393 48.9384 97.2413 48.9971 96.9627 48.9971ZM113.545 48.9971H110.245C109.966 48.9971 109.761 48.9384 109.629 48.8211C109.512 48.6891 109.453 48.4838 109.453 48.2051V33.9502C109.453 33.6716 109.512 33.4736 109.629 33.3563C109.761 33.2243 109.966 33.1583 110.245 33.1583H112.533C112.812 33.1583 113.046 33.2023 113.237 33.2903C113.442 33.3783 113.64 33.5322 113.831 33.7522L118.098 38.6359V33.9502C118.098 33.6716 118.157 33.4736 118.274 33.3563C118.406 33.2243 118.612 33.1583 118.89 33.1583H122.19C122.469 33.1583 122.667 33.2243 122.784 33.3563C122.916 33.4736 122.982 33.6716 122.982 33.9502V48.2051C122.982 48.4838 122.916 48.6891 122.784 48.8211C122.667 48.9384 122.469 48.9971 122.19 48.9971H118.89C118.612 48.9971 118.406 48.9384 118.274 48.8211C118.157 48.6891 118.098 48.4838 118.098 48.2051V45.4993L114.337 40.9457V48.2051C114.337 48.4838 114.271 48.6891 114.139 48.8211C114.021 48.9384 113.823 48.9971 113.545 48.9971ZM126.456 48.9971C126.178 48.9971 125.972 48.9384 125.84 48.8211C125.723 48.6891 125.664 48.4838 125.664 48.2051V45.5873C125.664 45.3087 125.723 45.1107 125.84 44.9934C125.972 44.8614 126.178 44.7954 126.456 44.7954H128.634V37.4039H126.456C126.178 37.4039 125.972 37.3453 125.84 37.228C125.723 37.096 125.664 36.8907 125.664 36.612V33.9502C125.664 33.6716 125.723 33.4736 125.84 33.3563C125.972 33.2243 126.178 33.1583 126.456 33.1583H135.828C136.106 33.1583 136.304 33.2243 136.422 33.3563C136.554 33.4736 136.62 33.6716 136.62 33.9502V36.612C136.62 36.8907 136.554 37.096 136.422 37.228C136.304 37.3453 136.106 37.4039 135.828 37.4039H133.694V44.7954H135.828C136.106 44.7954 136.304 44.8614 136.422 44.9934C136.554 45.1107 136.62 45.3087 136.62 45.5873V48.2051C136.62 48.4838 136.554 48.6891 136.422 48.8211C136.304 48.9384 136.106 48.9971 135.828 48.9971H126.456ZM147.607 50.9769H144.219C143.941 50.9769 143.735 50.9109 143.603 50.7789C143.486 50.6616 143.427 50.4636 143.427 50.185V48.9751C141.726 48.7258 140.575 48.2198 139.974 47.4572C139.387 46.6799 139.094 45.7413 139.094 44.6414V37.338C139.094 36.6633 139.189 36.0547 139.38 35.5121C139.585 34.9548 139.937 34.4782 140.436 34.0822C140.949 33.6862 141.653 33.3783 142.547 33.1583C143.442 32.9383 144.571 32.8283 145.935 32.8283C147.299 32.8283 148.421 32.9383 149.301 33.1583C150.195 33.3783 150.892 33.6862 151.391 34.0822C151.904 34.4782 152.256 34.9548 152.447 35.5121C152.652 36.0547 152.755 36.6633 152.755 37.338V44.6414C152.755 45.1987 152.689 45.7193 152.557 46.2033C152.425 46.6726 152.197 47.0905 151.875 47.4572C151.552 47.8238 151.105 48.1391 150.533 48.4031C149.975 48.6671 149.264 48.8577 148.399 48.9751V50.185C148.399 50.4636 148.333 50.6616 148.201 50.7789C148.084 50.9109 147.886 50.9769 147.607 50.9769ZM144.087 44.1574C144.087 44.4507 144.197 44.7001 144.417 44.9054C144.637 45.096 145.143 45.1914 145.935 45.1914C146.727 45.1914 147.233 45.096 147.453 44.9054C147.673 44.7001 147.783 44.4507 147.783 44.1574V38.1519C147.783 37.8732 147.673 37.6386 147.453 37.4479C147.233 37.2426 146.727 37.14 145.935 37.14C145.143 37.14 144.637 37.2426 144.417 37.4479C144.197 37.6386 144.087 37.8732 144.087 38.1519V44.1574Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <Button
            className="bg-white gap-2 py-2 px-4 "
            onClick={handleButtonClick}
          >
            <span className="text-[#003F7C] leading-6 text-base font-semibold">
              Connect with us on
            </span>
            <span>
              <svg
                width="80"
                height="21"
                viewBox="0 0 80 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_618_11375)">
                  <path
                    d="M31.5714 11.9779L35.9858 17.4065H32.5L28.5714 12.4209V17.4065H25.7142V3.12086H28.5714V11.5209L32.2 7.40648H35.8428L31.5714 11.9779ZM20.1428 7.12086C19.5172 7.13023 18.9032 7.29107 18.3534 7.58961C17.8036 7.88816 17.3343 8.31551 16.9858 8.83508V7.40648H14.2858V17.4065H17.1428V12.7351C17.1053 12.396 17.138 12.0528 17.2388 11.727C17.3396 11.4011 17.5065 11.0994 17.7289 10.8408C17.9514 10.5821 18.2247 10.3721 18.5318 10.2236C18.8389 10.0752 19.1734 9.99152 19.5142 9.97789C21.1714 9.97789 21.4286 11.6065 21.4286 12.7351V17.4065H24.2858V12.1065C24.2858 8.96367 23.2428 7.12086 20.2 7.12086H20.1428ZM45.7142 12.6351C45.7252 12.8445 45.7252 13.0543 45.7142 13.2637H38.2142V13.3637C38.336 13.9594 38.666 14.4922 39.1451 14.8666C39.6243 15.241 40.2211 15.4324 40.8286 15.4065C41.3105 15.4274 41.7917 15.351 42.2434 15.1816C42.695 15.0122 43.1079 14.7535 43.4572 14.4209L45.3572 15.8495C44.755 16.464 44.0307 16.9455 43.231 17.2629C42.4313 17.5803 41.5739 17.7265 40.7142 17.6923C40.0023 17.7373 39.2889 17.6289 38.6224 17.3746C37.9559 17.1203 37.3517 16.7259 36.8507 16.2181C36.3496 15.7103 35.9634 15.1009 35.7181 14.431C35.4727 13.7611 35.374 13.0464 35.4286 12.3351C35.414 11.6329 35.5441 10.9352 35.8109 10.2856C36.0778 9.6359 36.4756 9.04815 36.9795 8.55896C37.4834 8.06976 38.0827 7.68961 38.74 7.44219C39.3973 7.19477 40.0986 7.08539 40.8 7.12086C43.4858 7.12086 45.7142 9.02086 45.7142 12.6351ZM43.0572 11.4065C43.0467 11.1235 42.9787 10.8457 42.8573 10.5898C42.7359 10.334 42.5637 10.1056 42.3512 9.91843C42.1387 9.73131 41.8903 9.58941 41.6212 9.5014C41.352 9.41338 41.0678 9.38109 40.7858 9.40648C39.5295 9.2707 38.3919 10.1555 38.2142 11.4065H43.0572ZM2.85719 3.12086H0V17.4065H8.57141V14.5496H2.85719V3.12086ZM54.2858 3.12086H57.1428V17.4065H54.4428V16.4065C54.1 16.8289 53.663 17.1652 53.1669 17.3884C52.6708 17.6117 52.1293 17.7158 51.5858 17.6923C50.9217 17.6752 50.2682 17.5225 49.6654 17.2436C49.0625 16.9647 48.523 16.5655 48.0802 16.0704C47.6373 15.5753 47.3003 14.9949 47.09 14.3648C46.8797 13.7347 46.8005 13.0683 46.8572 12.4065C46.7897 11.7437 46.861 11.0742 47.0664 10.4404C47.2718 9.80672 47.6069 9.22269 48.0503 8.72551C48.4937 8.22834 49.0358 7.82892 49.642 7.55265C50.2482 7.27639 50.9053 7.12934 51.5714 7.12086C52.0676 7.09912 52.5631 7.17634 53.0291 7.34803C53.4951 7.51971 53.9223 7.78243 54.2858 8.12086V3.12086ZM54.5 12.4065C54.5449 12.0766 54.5186 11.7409 54.4228 11.4221C54.327 11.1033 54.1639 10.8087 53.9446 10.5582C53.7252 10.3077 53.4548 10.1072 53.1514 9.97015C52.848 9.83309 52.5187 9.76268 52.1858 9.76367C50.8191 9.86289 49.7834 11.0382 49.8572 12.4065C49.7834 13.7748 50.8191 14.9502 52.1858 15.0495C52.5187 15.0504 52.848 14.98 53.1514 14.843C53.4548 14.7059 53.7253 14.5054 53.9446 14.2549C54.164 14.0044 54.327 13.7098 54.4228 13.3909C54.5186 13.0721 54.5449 12.7364 54.5 12.4065ZM11.4286 2.83508C10.9691 2.84159 10.5293 3.02219 10.1978 3.34043C9.86637 3.65866 9.66801 4.09081 9.64281 4.54961C9.64281 5.5357 10.4423 6.33523 11.4286 6.33523C12.4148 6.33523 13.2141 5.53555 13.2141 4.54961C13.1888 4.09086 12.9905 3.65877 12.6591 3.34058C12.3276 3.02238 11.8878 2.84178 11.4284 2.83523L11.4286 2.83508ZM10 17.4065H12.8572V7.40648H10V17.4065ZM80 1.69227V18.8351C80 19.214 79.8495 19.5773 79.5816 19.8452C79.3137 20.1132 78.9503 20.2637 78.5714 20.2637H61.4286C61.0497 20.2637 60.6863 20.1132 60.4184 19.8452C60.1505 19.5773 60 19.214 60 18.8351V1.69227C60 1.31338 60.1505 0.950011 60.4184 0.682097C60.6863 0.414184 61.0497 0.263672 61.4286 0.263672L78.5714 0.263672C78.9503 0.263672 79.3137 0.414184 79.5816 0.682097C79.8495 0.950011 80 1.31338 80 1.69227ZM65.7142 7.40648H62.8572V17.4065H65.7142V7.40648ZM66.0714 4.54945C66.0714 3.5632 65.2719 2.76367 64.2858 2.76367C63.2995 2.76367 62.5 3.5632 62.5 4.54945C62.5 5.53555 63.2995 6.33508 64.2858 6.33508C65.2719 6.33508 66.0714 5.53555 66.0714 4.54945ZM77.1428 12.1065C77.1428 8.96367 76.1 7.12086 73.0572 7.12086C72.4219 7.12091 71.7963 7.27732 71.2358 7.57627C70.6752 7.87522 70.1968 8.30754 69.8428 8.83508V7.40648H67.1428V17.4065H70V12.7351C69.9625 12.396 69.9952 12.0528 70.096 11.727C70.1968 11.4011 70.3636 11.0994 70.5861 10.8408C70.8085 10.5821 71.0818 10.3721 71.389 10.2236C71.6961 10.0752 72.0305 9.99152 72.3714 9.97789C74.0286 9.97789 74.2858 11.6065 74.2858 12.7351V17.4065H77.1428V12.1065Z"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_618_11375">
                    <rect
                      width="80"
                      height="20"
                      fill="white"
                      transform="translate(0 0.263672)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Button>
        </div>
      </div>
      <div>
        <div className="flex-grow flex flex-wrap justify-between ">
          <div className=" ">
            <h2 className="text-white font-semibold text-xl leading-6 text-left mb-[17px]">
              Important Links
            </h2>
            <nav className="list-none space-y-3">
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  FAQ'S
                </a>
              </li>
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  Join Our Abstractor Network
                </a>
              </li>
            </nav>
          </div>
          <div className=" ">
            <h2 className="text-white font-semibold text-xl leading-6 text-left mb-[17px]">
              Our Services
            </h2>
            <nav className="list-none space-y-3">
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  Title Search
                </a>
              </li>
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  Document Retrieval
                </a>
              </li>
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  Tax Certification
                </a>
              </li>
              <li>
                <a className="text-white leading-[29px] text-base font-normal opacity-75">
                  Commitment Report
                </a>
              </li>
            </nav>
          </div>
          <div className=" ">
            <h2 className="text-white font-semibold text-xl leading-6 text-left mb-[17px]">
              Contact Us
            </h2>
            <nav className="list-none space-y-3">
              <li className="flex  gap-2 cus ">
                <div onClick={handlemapclick}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 7.4541C7.16421 7.4541 7.5 7.11832 7.5 6.7041C7.5 6.28989 7.16421 5.9541 6.75 5.9541C6.33579 5.9541 6 6.28989 6 6.7041C6 7.11832 6.33579 7.4541 6.75 7.4541ZM7.5 9.7041C7.5 10.1183 7.16421 10.4541 6.75 10.4541C6.33579 10.4541 6 10.1183 6 9.7041C6 9.28989 6.33579 8.9541 6.75 8.9541C7.16421 8.9541 7.5 9.28989 7.5 9.7041ZM6.75 13.4541C7.16421 13.4541 7.5 13.1183 7.5 12.7041C7.5 12.2899 7.16421 11.9541 6.75 11.9541C6.33579 11.9541 6 12.2899 6 12.7041C6 13.1183 6.33579 13.4541 6.75 13.4541ZM10.5 6.7041C10.5 7.11832 10.1642 7.4541 9.75 7.4541C9.33579 7.4541 9 7.11832 9 6.7041C9 6.28989 9.33579 5.9541 9.75 5.9541C10.1642 5.9541 10.5 6.28989 10.5 6.7041ZM9.75 10.4541C10.1642 10.4541 10.5 10.1183 10.5 9.7041C10.5 9.28989 10.1642 8.9541 9.75 8.9541C9.33579 8.9541 9 9.28989 9 9.7041C9 10.1183 9.33579 10.4541 9.75 10.4541ZM10.5 12.7041C10.5 13.1183 10.1642 13.4541 9.75 13.4541C9.33579 13.4541 9 13.1183 9 12.7041C9 12.2899 9.33579 11.9541 9.75 11.9541C10.1642 11.9541 10.5 12.2899 10.5 12.7041ZM12.75 13.4541C13.1642 13.4541 13.5 13.1183 13.5 12.7041C13.5 12.2899 13.1642 11.9541 12.75 11.9541C12.3358 11.9541 12 12.2899 12 12.7041C12 13.1183 12.3358 13.4541 12.75 13.4541ZM4.5 18.9541C4.22386 18.9541 4 18.7302 4 18.4541V4.4541C4 3.62567 4.67157 2.9541 5.5 2.9541H11.5C12.3284 2.9541 13 3.62567 13 4.4541V8.9541H14.5C15.3284 8.9541 16 9.62567 16 10.4541V18.4541C16 18.7302 15.7761 18.9541 15.5 18.9541H4.5ZM5 4.4541V17.9541H7V15.4541C7 15.178 7.22386 14.9541 7.5 14.9541H12.5C12.7761 14.9541 13 15.178 13 15.4541V17.9541H15V10.4541C15 10.178 14.7761 9.9541 14.5 9.9541H12.5C12.2239 9.9541 12 9.73024 12 9.4541V4.4541C12 4.17796 11.7761 3.9541 11.5 3.9541H5.5C5.22386 3.9541 5 4.17796 5 4.4541ZM12 15.9541H10.5V17.9541H12V15.9541ZM9.5 15.9541H8V17.9541H9.5V15.9541Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-base font-normal text-[#fff] opacity-75">
                  G-09, street name , City , Country , pincode.
                </div>
              </li>
              <li className="flex  gap-2 ">
                <div>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53642 2.76036C5.49504 2.49655 4.40592 2.60877 3.55198 3.08655C2.68282 3.57285 2.07264 4.43406 2.04253 5.58798C1.99554 7.38932 2.41305 9.80686 4.06913 12.6458C5.70395 15.4484 7.50929 17.1281 9.00658 18.1269C9.95257 18.758 10.9983 18.7747 11.8913 18.3631C12.7703 17.9581 13.4848 17.1495 13.8557 16.1465C14.0425 15.6417 13.9985 15.0804 13.7355 14.6107L12.782 12.908C12.1756 11.8252 10.8667 11.3511 9.70759 11.7945L9.0419 12.0492C8.71932 12.1726 8.42261 12.1157 8.25402 11.9501C7.68881 11.395 7.28504 10.6412 7.10187 9.82913C7.04427 9.57378 7.16127 9.27184 7.44397 9.0585L8.04509 8.60485C9.05032 7.84625 9.33435 6.45837 8.70796 5.36585L7.7361 3.67077C7.47609 3.21728 7.04316 2.88873 6.53642 2.76036ZM3.04219 5.61406C3.06236 4.84099 3.45351 4.28753 4.04026 3.95924C4.64223 3.62244 5.4636 3.52017 6.29084 3.72974C6.53487 3.79156 6.74336 3.94977 6.86858 4.16816L7.84044 5.86324C8.21627 6.51875 8.04585 7.35148 7.44272 7.80664L6.84159 8.26029C6.32238 8.65211 5.96292 9.32452 6.12638 10.0492C6.34806 11.0319 6.83926 11.9622 7.5533 12.6635C8.07468 13.1756 8.81847 13.2053 9.39917 12.9832L10.0649 12.7285C10.7603 12.4625 11.5457 12.7469 11.9095 13.3966L12.863 15.0993C12.9829 15.3135 13.003 15.5694 12.9178 15.7996C12.6276 16.5842 12.0835 17.1735 11.4728 17.4549C10.8762 17.7299 10.2011 17.7217 9.56152 17.295C8.19073 16.3806 6.49105 14.813 4.9329 12.1419C3.36949 9.46184 3.0001 7.22756 3.04219 5.61406ZM12.7438 2.70677C12.5024 2.57266 12.198 2.65963 12.0639 2.90102C11.9298 3.14242 12.0167 3.44682 12.2581 3.58093L12.6421 3.79424C15.0771 5.14703 16.6948 7.60706 16.972 10.3788L17.0034 10.6936C17.0309 10.9684 17.2759 11.1688 17.5507 11.1414C17.8255 11.1139 18.026 10.8689 17.9985 10.5941L17.967 10.2793C17.6572 7.18147 15.8492 4.43202 13.1277 2.92008L12.7438 2.70677ZM11.5723 5.38661C11.7143 5.14982 12.0215 5.07304 12.2583 5.21511L12.3824 5.28958C14.0154 6.26942 15.1366 7.91615 15.4497 9.79469L15.4942 10.0617C15.5396 10.334 15.3556 10.5917 15.0832 10.6371C14.8108 10.6825 14.5532 10.4984 14.5078 10.2261L14.4633 9.95909C14.1984 8.36956 13.2497 6.97617 11.8679 6.14708L11.7438 6.07261C11.507 5.93053 11.4302 5.6234 11.5723 5.38661Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-base font-normal text-[#fff] opacity-75">
                  +1 78903200
                </div>
              </li>
              <li className="flex  gap-2">
                <div>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 3.64404C11.1193 3.64404 10 4.76333 10 6.14404C10 7.52475 11.1193 8.64404 12.5 8.64404H13C13.2761 8.64404 13.5 8.42019 13.5 8.14404C13.5 7.8679 13.2761 7.64404 13 7.64404H12.5C11.6716 7.64404 11 6.97247 11 6.14404C11 5.31562 11.6716 4.64404 12.5 4.64404H13C13.2761 4.64404 13.5 4.42019 13.5 4.14404C13.5 3.8679 13.2761 3.64404 13 3.64404H12.5ZM16 3.64404C15.7239 3.64404 15.5 3.8679 15.5 4.14404C15.5 4.42019 15.7239 4.64404 16 4.64404H16.5C17.3284 4.64404 18 5.31562 18 6.14404C18 6.97247 17.3284 7.64404 16.5 7.64404H16C15.7239 7.64404 15.5 7.8679 15.5 8.14404C15.5 8.42019 15.7239 8.64404 16 8.64404H16.5C17.8807 8.64404 19 7.52475 19 6.14404C19 4.76333 17.8807 3.64404 16.5 3.64404H16ZM12 6.14404C12 5.8679 12.2239 5.64404 12.5 5.64404H16.5C16.7761 5.64404 17 5.8679 17 6.14404C17 6.42019 16.7761 6.64404 16.5 6.64404H12.5C12.2239 6.64404 12 6.42019 12 6.14404ZM10 11.5639L13.2628 9.64404H15.2344L10.2535 12.575C10.1231 12.6517 9.96661 12.6645 9.82751 12.6133L9.74649 12.575L3 8.60704V15.144C3 15.9724 3.67157 16.644 4.5 16.644H15.5C16.3284 16.644 17 15.9724 17 15.144V9.6086C17.3531 9.5581 17.6891 9.4549 18 9.30723V15.144C18 16.5247 16.8807 17.644 15.5 17.644H4.5C3.11929 17.644 2 16.5247 2 15.144V7.14404C2 5.76333 3.11929 4.64404 4.5 4.64404H9.33682C9.18915 4.9549 9.08595 5.29097 9.03544 5.64404H4.5C3.67157 5.64404 3 6.31561 3 7.14404V7.44604L10 11.5639Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-base font-normal text-[#fff] opacity-75">
                  titletechnique@gmail.com
                </div>
              </li>
              <li className="flex  gap-2">
                <div>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.875 2.98389C5.83947 2.98389 5 3.82335 5 4.85889V7.98389C3.61929 7.98389 2.5 9.10318 2.5 10.4839V16.1089C2.5 17.1444 3.33947 17.9839 4.375 17.9839H11.8748C11.6018 17.6205 11.4063 17.1957 11.3125 16.7339H4.375C4.02982 16.7339 3.75 16.4541 3.75 16.1089V10.4839C3.75 9.79353 4.30964 9.23389 5 9.23389H11.3125C11.4063 8.77209 11.6018 8.34727 11.8748 7.98389H6.25V4.85889C6.25 4.51371 6.52982 4.23389 6.875 4.23389H13.125C13.4702 4.23389 13.75 4.51371 13.75 4.85889V6.7964C13.9519 6.75541 14.161 6.73389 14.375 6.73389H15V4.85889C15 3.82335 14.1605 2.98389 13.125 2.98389H6.875ZM14.375 7.98389C13.3395 7.98389 12.5 8.82335 12.5 9.85889V16.1089C12.5 17.1444 13.3395 17.9839 14.375 17.9839H15.625C16.6605 17.9839 17.5 17.1444 17.5 16.1089V9.85889C17.5 8.82335 16.6605 7.98389 15.625 7.98389H14.375ZM13.75 9.85889C13.75 9.51371 14.0298 9.23389 14.375 9.23389H15.625C15.9702 9.23389 16.25 9.51371 16.25 9.85889V16.1089C16.25 16.4541 15.9702 16.7339 15.625 16.7339H14.375C14.0298 16.7339 13.75 16.4541 13.75 16.1089V9.85889ZM6.25 11.1089C6.25 11.4541 5.97018 11.7339 5.625 11.7339C5.27982 11.7339 5 11.4541 5 11.1089C5 10.7637 5.27982 10.4839 5.625 10.4839C5.97018 10.4839 6.25 10.7637 6.25 11.1089ZM5.625 14.2339C5.97018 14.2339 6.25 13.9541 6.25 13.6089C6.25 13.2637 5.97018 12.9839 5.625 12.9839C5.27982 12.9839 5 13.2637 5 13.6089C5 13.9541 5.27982 14.2339 5.625 14.2339ZM8.75 11.1089C8.75 11.4541 8.47018 11.7339 8.125 11.7339C7.77982 11.7339 7.5 11.4541 7.5 11.1089C7.5 10.7637 7.77982 10.4839 8.125 10.4839C8.47018 10.4839 8.75 10.7637 8.75 11.1089ZM8.125 14.2339C8.47018 14.2339 8.75 13.9541 8.75 13.6089C8.75 13.2637 8.47018 12.9839 8.125 12.9839C7.77982 12.9839 7.5 13.2637 7.5 13.6089C7.5 13.9541 7.77982 14.2339 8.125 14.2339Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-base font-normal text-[#fff] opacity-75">
                  +91-456-7890
                </div>
              </li>
             
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" text-white text-sm font-normal leading-5">
          © 2020 All right reserved to Title Techniq
        </div>
        <div className="flex justify-between gap-12 text-white text-base font-medium leading-6">
          <div>Privacy policy </div>
          <div> Terms of use</div>
        </div>
      </div>
    </div>
  );
};

export default Index;