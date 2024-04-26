"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import {
  GlassMagnifier,
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";

export default function Home() {
  const [isToggleSideBar, setIsToggleSideBar] = useState(true);
  const [isToggleDetail, setIsToggleDetail] = useState(false);

  const handleToggleSideBar = () => {
    setIsToggleSideBar((prev) => !prev);
  };

  const handleToggleDetail = () => {
    setIsToggleDetail((prev) => !prev);
  };

  return (
    <div className={styles.fabric__container}>
      {isToggleSideBar && (
        <div className={styles.sidebar}>
          <div className={styles.sidebar__container}>
            <div className={styles.sidebar__toggleBtn}>
              <p className={styles.sidebar__toggleBtn__title}>
                333/1470 fabrics
              </p>
              <button
                onClick={handleToggleSideBar}
                className={styles.fabric__list__button}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"
                  ></path>
                </svg>
                hide
              </button>
            </div>
            <div>
              <p>Materials</p>
              <div className={styles.sidebar__checkBox}>
                <label for="Cotton"> Cotton</label>
                <input
                  id="Cotton"
                  name="Cotton"
                  value="Cotton"
                  type="checkbox"
                />
              </div>
              <div className={styles.sidebar__checkBox}>
                <label for="Cotton"> Cotton</label>
                <input
                  id="Cotton"
                  name="Cotton"
                  value="Cotton"
                  type="checkbox"
                />
              </div>{" "}
              <div className={styles.sidebar__checkBox}>
                <label for="Cotton"> Cotton</label>
                <input
                  id="Cotton"
                  name="Cotton"
                  value="Cotton"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.fabric__list}>
        <div className={styles.fabric__list__header}>
          <input
            className={styles.fabric__list__input}
            placeholder="Search for color or properties.."
          />
          {!isToggleSideBar && (
            <button
              className={styles.fabric__list__button}
              onClick={handleToggleSideBar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M18 4a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h12v1a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2zM4 11a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h12a1 1 0 1 0 0-2H8v-1a1 1 0 0 0-2 0v1zm-1 7a1 1 0 0 1 1-1h12v-1a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1-1-1"
                  ></path>
                </g>
              </svg>
              Filters
            </button>
          )}
        </div>
        <div className={styles.fabric__listImg}>
          <Image
            className={styles.fabric__img}
            src={"/anh1.png"}
            width={141.67}
            height={141.67}
          />

          <Image
            className={styles.fabric__img}
            src={"/anh1.png"}
            width={141.67}
            height={141.67}
          />
          <Image
            className={styles.fabric__img}
            src={"/anh1.png"}
            width={141.67}
            height={141.67}
          />
          <Image
            className={styles.fabric__img}
            src={"/anh1.png"}
            width={141.67}
            height={141.67}
          />
        </div>
      </div>
      <div className={styles.fabric__detail}>
        <div className={styles.fabric__detail__img}>
          {/* <Image
            src={"/anh2.png"}
            width={240}
            height={160}
            sizes="(min-width: 768px) 100vw,
            (min-width: 1200px) 50vw,
            33vh
            "
            style={{ height: "100vh", width: "100%" }} // optional
          /> */}

          <MagnifierContainer>
            <GlassMagnifier
              style={{ height: "100%", width: "100%", position: "relative" }}
              imageSrc="/anh2.png"
            />
          </MagnifierContainer>
        </div>
        {!isToggleDetail && (
          <div
            className={styles.fabric__detail__toggleBTN}
            onClick={handleToggleDetail}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47px"
              height="47px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0a9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47px"
              height="47px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 6.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm0 6a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm0 6a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Z"
              ></path>
            </svg>
          </div>
        )}
        {isToggleDetail && (
          <div
            onClick={handleToggleDetail}
            className={styles.fabric__detail__toggleDetail}
          >
            <div>
              <p>Fabric Color </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
