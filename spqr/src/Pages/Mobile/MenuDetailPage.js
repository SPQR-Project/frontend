import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuDetailPage.module.css";
import cartIcon from "../../Assets/Images/cart-black.svg";
import minusIcon from "../../Assets/Images/minus.svg";
import plusIcon from "../../Assets/Images/plus.svg";
import arrowIcon from "../../Assets/Images/arrow-back.svg";

const MenuDetailPage = () => {
  const navigate = useNavigate();
  const [menuDetailData, setMenuDetailData] = useState(null);

  const currentPath = window.location.pathname;
  const pathList = currentPath.split("/");
  const restaurantId = pathList[2];
  const branchId = pathList[3];
  const tableNumber = pathList[4];
  const menuID = pathList[5];

  useEffect(() => {
    const fetchMenuDetailData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/menu_m/${restaurantId}/${branchId}/${tableNumber}/${menuID}`
        );
        const jsonData = await response.json();
        setMenuDetailData(jsonData.data["menu details"]);
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };
    fetchMenuDetailData();
  }, [restaurantId, branchId, tableNumber, menuID]);

  const onButton2Click = useCallback(() => {
    navigate("/mobile");
  }, [navigate]);

  const onArrowIconClick = useCallback(() => {
    navigate(-1); // Use -1 to go back to the previous page
  }, [navigate]);

  if (!menuDetailData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mobile}>
      <div className={styles.gnbMobileParent}>
        <div className={styles.gnbMobile}>
          <button className={styles.icon} onClick={onArrowIconClick}>
            <img className={styles.arrowLeftIcon} alt="" src={arrowIcon} />
          </button>
          <div className={styles.icon1}>
            <img className={styles.arrowLeftIcon} alt="" src={cartIcon} />
          </div>
        </div>
        <div className={styles.bodylayout}>
          <div className={styles.menuinfo}>
            <img
              className={styles.menuimageIcon}
              alt={menuDetailData.name}
              src={menuDetailData.image_url}
            />
            <div className={styles.menuinfo1}>
              <b className={styles.label}>{menuDetailData.name}</b>
              <div className={styles.description}>
                {menuDetailData.description}
              </div>
              <div className={styles.price}>
                <b className={styles.label1}>가격</b>
                <b className={styles.value}>
                  {menuDetailData.price.toLocaleString()}원
                </b>
              </div>
            </div>
          </div>

          {menuDetailData.option_categories.map((category, index) => (
            <div key={index} className={styles.divOption}>
              <b className={styles.label2}>{category.option_category_name}</b>
              <div className={styles.optionlist}>
                {category.option_menus.map((option, optionIndex) => (
                  <div key={optionIndex} className={styles.radiooptions}>
                    <div className={styles.radiooptions1}>
                      <input className={styles.unchecked2} type="checkbox" />
                      <div className={styles.optionlabel}>{option.name}</div>
                    </div>
                    <div className={styles.optionlabel}>
                      +{option.price.toLocaleString()}원
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.div}>
            <b className={styles.optionlabel}>수량</b>
            <div className={styles.nuberinput}>
              <button className={styles.button}>
                <div className={styles.buttonChild} />
                <img className={styles.minusIcon} alt="" src={minusIcon} />
              </button>
              <div className={styles.counter}>
                <div className={styles.div1}>1</div>
              </div>
              <button className={styles.button}>
                <div className={styles.buttonItem} />
                <img className={styles.minusIcon} alt="" src={plusIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <b className={styles.label1}>총 20,000원</b>
        <button className={styles.button2} onClick={onButton2Click}>
          <b className={styles.label5}>장바구니에 추가</b>
        </button>
      </div>
    </div>
  );
};

export default MenuDetailPage;
