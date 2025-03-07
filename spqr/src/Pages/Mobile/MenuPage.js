import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./MenuPage.module.css";
import cartIcon from "../../Assets/Images/cart-white.svg";
import { encryptUrlParams, decryptUrlParams } from "../../utils/encryption";

const MenuPage = () => {
  // Navigation utility from React Router
  const navigate = useNavigate();

  //Server address variable assignment
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

  // Initializing states
  const [menuData, setMenuData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isAutomaticScroll, setIsAutomaticScroll] = useState(false);

  // Setting cart count
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartCount = (cart && cart.length) || 0;

  // Setting default to enable horizontal scroll
  const menuCategoryRefs = useRef([]);
  const categoryPillRefs = useRef([]);

  // Extracting params from URL
  const {
    restaurant_id: encodedRestaurantId,
    branch_id: encodedBranchId,
    table_number: encodedTableNumber,
  } = useParams();

  // Decoding params
  const restaurantId = decryptUrlParams(encodedRestaurantId);
  const branchId = decryptUrlParams(encodedBranchId);
  const tableNumber = decryptUrlParams(encodedTableNumber);

  // Path for restaruant logo image
  const restaurantLogoImage = `https://spqr-menu.s3.ap-northeast-2.amazonaws.com/${restaurantId}/logo.jpg`;

  /** Event Handlers */

  // Function to handle click on menu item
  const onMenuClick = useCallback(
    (id) => {
      navigate(
        `/menu_m/${encryptUrlParams(restaurantId)}/${encryptUrlParams(
          branchId
        )}/${encryptUrlParams(tableNumber)}/${encryptUrlParams(id)}`
      );
    },
    [navigate, restaurantId, branchId, tableNumber]
  );

  // Function to handle click on cart icon
  const onCartIconClick = useCallback(() => {
    navigate(
      `/cart_m/${encryptUrlParams(restaurantId)}/${encryptUrlParams(
        branchId
      )}/${encryptUrlParams(tableNumber)}`
    );
  }, [navigate, restaurantId, branchId, tableNumber]);

  // Function to create a Promise that resolves when automatic scrolling ends
  const smoothScrollTo = (y) =>
    new Promise((resolve) => {
      const onScroll = () => {
        if (window.pageYOffset === y) {
          window.removeEventListener("scroll", onScroll);
          resolve();
        }
      };
      window.addEventListener("scroll", onScroll);
      window.scrollTo({ top: y, behavior: "smooth" });
    });

  // Function to handle clicks on category pills
  const onCategoryClick = async (index) => {
    setIsAutomaticScroll(true); // Set manual scroll to false
    const y = menuCategoryRefs.current[index].offsetTop - 158;
    await smoothScrollTo(y);
    setIsAutomaticScroll(false);
    setSelectedCategory(index);
    let temp_index = index;
    if (index >= 1) {
      temp_index = index - 1;
    }
    categoryPillRefs.current[temp_index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  /** Effect Hooks */

  // Effect to fetch menu data once the component mounts
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          `${serverAddress}/menu/${restaurantId}/${branchId}/${tableNumber}`
        );
        const jsonData = await response.json();
        let updatedData = jsonData.data.menu.map((category) => ({
          ...category,
          main_menus: category.main_menus.filter(
            (menu) => menu.menu_status === true
          ),
        }));
        const finalData = updatedData.filter(
          (category) => category.main_menus.length > 0
        );
        setMenuData(finalData);
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, [serverAddress, restaurantId, branchId, tableNumber]);

  // Effect to enable highlight change while user scrolls
  useEffect(() => {
    if (isAutomaticScroll) return;
    const handleScroll = () => {
      const { current } = menuCategoryRefs;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const index = current.findIndex(
        (categoryRef) =>
          scrollTop >= categoryRef.offsetTop - 158 &&
          scrollTop < categoryRef.offsetTop - 158 + categoryRef.offsetHeight
      );

      if (index !== -1) {
        setSelectedCategory(index);
        let temp_index = index;
        if (index >= 1) {
          temp_index = index - 1;
        }
        categoryPillRefs.current[temp_index].scrollIntoView({
          behavior: "instant",
          inline: "center",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAutomaticScroll]);

  // Return null while data is loading
  if (!menuData) {
    return <div></div>;
  }

  // Render the component
  return (
    <div className={styles.mobile}>
      <div className={styles.headerFixed}>
        <div className={styles.header}>
          <div className={styles.restaurantLogo}>
            <img
              className={styles.restaurantLogoChild}
              alt=""
              src={restaurantLogoImage}
            />
          </div>
          <div className={styles.tableNumberWrapper}>
            <b className={styles.tableNumberLabel}>테이블 번호</b>
            <b className={styles.tableNumber}>{tableNumber}</b>
          </div>
          <div className={styles.icon} onClick={() => onCartIconClick()}>
            <img className={styles.iconChild} alt="" src={cartIcon} />
            {cartCount > 0 && (
              <div className={styles.cartCount}> {cartCount} </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.categoryScrollBarWrapperFixed}>
        <div className={styles.categoryScrollBarWrapper}>
          <div className={styles.categoryScrollBar}>
            {menuData.map((menuCategory, index) => (
              <div
                key={menuCategory.category_name}
                onClick={() => onCategoryClick(index)}
                className={
                  selectedCategory === index
                    ? styles.categoryPillSelected
                    : styles.categoryPill
                }
                ref={(el) => (categoryPillRefs.current[index] = el)}
              >
                <div className={styles.menuCategoryLabel}>
                  {menuCategory.category_name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.layout}>
        {menuData.map((menuCategory, index) => (
          <div
            key={menuCategory.category_name}
            className={styles.menuCategoryWrapper}
            ref={(el) => (menuCategoryRefs.current[index] = el)}
          >
            <div className={styles.categoryTitleWrapper}>
              <b className={styles.categoryTitle}>
                {menuCategory.category_name}
              </b>
            </div>
            {menuCategory.main_menus.map((menu) => (
              <div
                key={menu.id}
                className={styles.menuItemWrapper}
                onClick={() => onMenuClick(menu.id)}
              >
                {menu.image_url && (
                  <img
                    className={styles.menuImage}
                    alt={menu.name}
                    loading="lazy"
                    src={menu.image_url}
                  />
                )}
                <div className={styles.menuContent}>
                  <b className={styles.menuName}>{menu.name}</b>
                  {menu.description && (
                    <div className={styles.menuDescription}>
                      {menu.description}
                    </div>
                  )}
                  <b className={styles.menuPrice}>
                    {menu.price.toLocaleString()}원
                  </b>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
