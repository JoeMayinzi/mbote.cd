"use client";
import { useState } from "react";
import Search from "../searchComponent/Search";
import OutsideClickHandler from "react-outside-click-handler";

const SearchIcon = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleSearchModal = () => {
    setShowModal(!showModal);
  };

  const handleOutsideClick = () => {
    setShowModal(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <>
        <svg
          onClick={toggleSearchModal}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0036 18.7494L16.2976 15.0434C17.4752 13.6138 18.0674 11.8598 18.0662 10.1102C18.0674 8.12277 17.3054 6.12877 15.7888 4.61217C14.2726 3.09517 12.2784 2.33357 10.2918 2.33476C8.30418 2.33357 6.31037 3.09515 4.79418 4.61217C3.27758 6.12836 2.51559 8.12277 2.51639 10.1096C2.51559 12.097 3.27758 14.091 4.79418 15.6064C6.31037 17.1228 8.30438 17.8848 10.2918 17.8836C12.0412 17.8848 13.7956 17.2928 15.225 16.116L18.9308 19.8222L20.0036 18.7494ZM5.86697 14.5336C4.64297 13.3098 4.03418 11.7134 4.03377 10.1096C4.03416 8.50617 4.64297 6.90937 5.86697 5.68496C7.09098 4.46156 8.68777 3.85275 10.2918 3.85217C11.895 3.85277 13.4918 4.46156 14.7158 5.68496C15.9392 6.90877 16.548 8.50615 16.5484 10.1102C16.548 11.7136 15.9392 13.3102 14.7158 14.5336C13.4918 15.7568 11.8954 16.3655 10.2918 16.3662C8.68777 16.3658 7.09098 15.757 5.86697 14.5336Z"
            fill="white"
          />
        </svg>
        {showModal && <Search />}
      </>
    </OutsideClickHandler>
  );
};

export default SearchIcon;
