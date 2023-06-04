import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./MenuPage.module.css";
import cart_icon from '../../Assets/Images/cart-white.svg';

// Here is the JSON data
const jsonData = {
  "status": 200,
  "success": true,
  "message": "Get mobile Menu Success",
  "data": {
    "menu": [
      // ... rest of the data
    ]
  }
};

const Mobile = () => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    setMenuData(jsonData.data.menu);
  }, []);

  const onMenuClick = useCallback((id) => {
    navigate(`/menu_m/${id}`);
  }, [navigate]);

  if (!menuData) {
    return <div>Loading...</div>;
  }
  
  //Gets currentPath to update logo and table number
  const currentPath = window.location.pathname;
  const pathList = currentPath.split("/");
  const restaurantLogoImage = `https://spqr-menu.s3.ap-northeast-2.amazonaws.com/${pathList[2]}/logo.jpg`;
  const tableNumber = pathList[4];

  return (
    <div className={styles.mobile}>
      <div className={styles.gnbMobile}>
        <div className={styles.icon}>
          <img className={styles.cartWhiteIcon} alt="" src={cart_icon} />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src={restaurantLogoImage} />
        </div>
        <div className={styles.tablenumber}>
          <b className={styles.label}>테이블 번호</b>
          <b className={styles.number}>{tableNumber}</b>
        </div>
      </div>
      <div className={styles.layout}>
        {menuData.map((menuCategory) => (
          <div key={menuCategory.category_name} className={styles.menuCard}>
            <div className={styles.titlearea}>
              <b className={styles.title}>{menuCategory.category_name}</b>
            </div>
            {menuCategory.main_menus.map((menu) => (
              <button key={menu.id} className={styles.divMenu} onClick={() => onMenuClick(menu.id)}>
                <img
                  className={styles.menuimageIcon}
                  alt={menu.name}
                  loading="lazy"
                  src={menu.image_url}
                />
                <div className={styles.menuinfo}>
                  <b className={styles.name}>{menu.name}</b>
                  <div className={styles.description}>{menu.description}</div>
                  <b className={styles.price}>{menu.price}원</b>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;