import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import WebHeader from "../../Components/WebHeader";
import { decryptUrlParams } from "../../utils/encryption";
import styles from "./MenuPage.module.css";
import deleteIcon from "../../Assets/Images/delete.svg";
import editIcon from "../../Assets/Images/edit.svg";
import pauseIcon from "../../Assets/Images/pause.svg";
import playIcon from "../../Assets/Images/play.svg";
import plusIcon from "../../Assets/Images/plus-white.svg";
//import dragIcon from "../../Assets/Images/drag.svg";

const MenuPage = () => {
  // Navigation and location utility from React Router
  const navigate = useNavigate();
  const location = useLocation();

  //Server address variable assignment
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

  // Initializing states
  const [menuData, setMenuData] = useState(null);
  const [eventCounter, setEventCounter] = useState(0);

  // If the state was passed in the route, use it, otherwise default to false
  const isHQUser = location.state ? location.state.isHQUser : false;
  const isBranchUser = location.state ? location.state.isBranchUser : false;

  // Extracting params from URL
  const { restaurant_id: encodedRestaurantId, branch_id: encodedBranchId } =
    useParams();

  // Decoding params
  const restaurantId = decryptUrlParams(encodedRestaurantId);
  const branchId = decryptUrlParams(encodedBranchId);
  const dummyTableNumber = 0;

  /** Event Handlers */

  // Function to handle click on button
  const onStatusButtonClick = async (id, state) => {
    const stateNum = state ? 0 : 1;
    const data = {
      menu_status_change: {
        menu_id: id,
        status: stateNum,
      },
    };
    try {
      const response = await fetch(
        `${serverAddress}/menu_w/${restaurantId}/${branchId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setEventCounter(eventCounter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  /** Effect Hooks */

  // Effect to redirect user if not logged in
  useEffect(() => {
    if (!isHQUser && !isBranchUser) {
      navigate(`/login_w`);
    }
  }, [navigate, isHQUser, isBranchUser, restaurantId, branchId]);

  // Effect to fetch menu data once the component mounts
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          `${serverAddress}/menu/${restaurantId}/${branchId}/${dummyTableNumber}`
        );
        const jsonData = await response.json();
        setMenuData(jsonData.data.menu);
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, [serverAddress, restaurantId, branchId, dummyTableNumber, eventCounter]);

  // Return null while data is loading
  if (!menuData) {
    return <div></div>;
  }

  return (
    <>
      <div className={styles.web}>
        <WebHeader
          isHQUser={isHQUser}
          isBranchUser={isBranchUser}
          restaurantId={restaurantId}
          branchId={branchId}
        />
        <div className={styles.contentWrapper} id="current_menu_body">
          <div className={styles.titleArea} id="title_div">
            <div className={styles.titleWrapper}>
              <h1 className={styles.titleLabel}>현재 메뉴</h1>
            </div>
            <button className={styles.buttonWrapper}>
              <div className={styles.buttonLabel}>메뉴 순서 변경</div>
            </button>
          </div>
          {menuData.map((menuCategory, index) => (
            <div key={index} className={styles.layout} id="category_card">
              <div
                className={styles.categoryTitleWrapper}
                id="category_card_title"
              >
                <h2 className={styles.categoryTitleLabel}>
                  {menuCategory.category_name}
                </h2>
                <button className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img alt="" src={deleteIcon} />
                  </div>
                </button>
              </div>
              <div className={styles.menuRow} id="menu_card_row">
                {menuCategory.main_menus.map((menuItem, index) => (
                  <div
                    className={
                      menuItem.menu_status
                        ? styles.menuCard
                        : styles.menuCardInactive
                    }
                    key={index}
                    id="menu_card_body"
                  >
                    <div
                      className={styles.menuCardLayout}
                      id="menu_card_buttons"
                    >
                      {!menuItem.menu_status && (
                        <div
                          className={styles.InactiveStatusBadge}
                          id="menu_stop"
                        >
                          <b className={styles.InactiveStatusLabel}>
                            메뉴 중지
                          </b>
                        </div>
                      )}
                      <div
                        className={
                          menuItem.menu_status
                            ? styles.iconGroupWrapper
                            : styles.iconGroupWrapperInactive
                        }
                      >
                        <button className={styles.iconWrapper}>
                          <div className={styles.icon}>
                            <img alt="" src={editIcon} />
                          </div>
                        </button>
                        <button className={styles.iconWrapper}>
                          <div
                            className={styles.icon}
                            onClick={() => {
                              const confirmMessage = menuItem.menu_status
                                ? "메뉴를 중지하시겠습니까?"
                                : "메뉴를 재개하시겠습니까?";

                              if (window.confirm(confirmMessage)) {
                                onStatusButtonClick(
                                  menuItem.id,
                                  menuItem.menu_status
                                );
                              }
                            }}
                          >
                            <img
                              alt=""
                              src={menuItem.menu_status ? pauseIcon : playIcon}
                            />
                          </div>
                        </button>
                        <button className={styles.iconWrapper}>
                          <div className={styles.icon}>
                            <img alt="" src={deleteIcon} />
                          </div>
                        </button>
                      </div>
                    </div>

                    <div
                      className={
                        menuItem.menu_status
                          ? styles.menuInfoLayout
                          : styles.menuInfoLayoutInactive
                      }
                      id="menu_card"
                    >
                      {menuItem.image_url && (
                        <img
                          className={
                            menuItem.menu_status
                              ? styles.menuImage
                              : styles.menuImageInactive
                          }
                          alt=""
                          src={menuItem.image_url}
                          loading="lazy"
                        />
                      )}

                      <div
                        className={
                          menuItem.menu_status
                            ? styles.menuContent
                            : styles.menuContentInactive
                        }
                        id="menu_card_text"
                      >
                        <div className={styles.menuInfo}>
                          <h1 className={styles.menuName} id="menu_name">
                            {menuItem.name}
                          </h1>

                          {menuItem.description && (
                            <h2
                              className={styles.menuDescription}
                              id="menu_explain"
                            >
                              {menuItem.description}
                            </h2>
                          )}
                        </div>

                        <h2 className={styles.menuPrice} id="menu_cost">
                          {menuItem.price.toLocaleString()}원
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.floatingButtonWrapper} id="current_menu_down">
          <button className={styles.floatingButton}>
            <div className={styles.floatingButtonChild} />
            <img className={styles.plusIcon} alt="" src={plusIcon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
