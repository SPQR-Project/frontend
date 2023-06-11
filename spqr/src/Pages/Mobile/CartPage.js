import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CartPage.module.css";
import arrowIcon from "../../Assets/Images/arrow-back.svg";
import deleteIcon from "../../Assets/Images/delete.svg";
import pendingIcon from "../../Assets/Images/pending.svg";
import acceptedIcon from "../../Assets/Images/accepted.svg";
import rejectedIcon from "../../Assets/Images/rejected.svg";

const CartPage = () => {
  const navigate = useNavigate();
  const [pastOrdersData, setPastOrdersData] = useState(null);
  const [pastOrdersTotalPrice, setPastOrdersTotalPrice] = useState(0);

  const {
    restaurant_id: restaurantId,
    branch_id: branchId,
    table_number: tableNumber,
  } = useParams();

  const onArrowIconClick = useCallback(() => {
    navigate(-1); // Use -1 to go back to the previous page
  }, [navigate]);

  useEffect(() => {
    const fetchPastOrdersData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/cart_m/${restaurantId}/${branchId}/${tableNumber}`
        );
        const jsonData = await response.json();
        const flattenedPastOrders = jsonData.data["past_orders"].flatMap(
          (subOrderArray) =>
            subOrderArray.map((subOrder) => {
              // map each main_menu to include order_status from its parent sub_order
              subOrder.main_menus = subOrder.main_menus.map((menu) => {
                return { ...menu, order_status: subOrder.order_status };
              });
              return subOrder;
            })
        );
        setPastOrdersData(flattenedPastOrders);

        // Calculate the total price after fetching the data
        const totalPrice = flattenedPastOrders.reduce((acc, order) => {
          return (
            acc +
            order.main_menus.reduce((menuAcc, menu) => {
              return (
                menuAcc +
                menu.price +
                (menu.option_menus
                  ? menu.option_menus.reduce(
                      (optionAcc, option) => optionAcc + option.price,
                      0
                    )
                  : 0)
              );
            }, 0)
          );
        }, 0);

        // Update the total price state
        setPastOrdersTotalPrice(totalPrice);
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };

    fetchPastOrdersData();
  }, [restaurantId, branchId, tableNumber]);

  if (!pastOrdersData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mobile}>
      <div className={styles.gnbMobileParent}>
        <div className={styles.gnbMobile}>
          <div className={styles.icon}>
            <img
              className={styles.arrowLeftIcon}
              alt=""
              src={arrowIcon}
              onClick={onArrowIconClick}
            />
          </div>
          <b className={styles.b}>장바구니</b>
          <div />
        </div>
        <div className={styles.layout}>
          <div className={styles.div}>
            <div className={styles.titlearea}>
              <div className={styles.titlearea1}>
                <b className={styles.title}>현재 주문서</b>
                <b className={styles.price}>총 10,000원</b>
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.div1}>
              <div className={styles.order}>
                <div className={styles.div2}>
                  <b className={styles.name}>메뉴 이름</b>
                  <img
                    className={styles.arrowLeftIcon}
                    alt=""
                    src={deleteIcon}
                  />
                </div>
                <div className={styles.div3}>
                  <img
                    className={styles.menuimageIcon}
                    alt=""
                    src="/menuimage10.svg"
                  />
                  <div className={styles.price1}>
                    <div className={styles.div4}>
                      <div className={styles.price2}>
                        <div className={styles.priceChild} />
                        <div className={styles.label}>가격 : 11,000원</div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.priceChild} />
                        <div
                          className={styles.label}
                        >{`{옵션 이름} : 1,000원`}</div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.priceChild} />
                        <div
                          className={styles.label}
                        >{`{옵션 이름} : 1,000원`}</div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.priceChild} />
                        <div
                          className={styles.label}
                        >{`{옵션 이름} : 1,000원`}</div>
                      </div>
                    </div>
                    <b className={styles.totalprice}>12,000원</b>
                  </div>
                </div>
                <div className={styles.div5}>
                  <div className={styles.button}>
                    <b className={styles.label4}>옵션변경</b>
                  </div>
                  <div className={styles.nuberinput}>
                    <div className={styles.buttonIcon}>
                      <div className={styles.buttonChild} />
                      <img
                        className={styles.minusIcon}
                        alt=""
                        src="/minus2.svg"
                      />
                    </div>
                    <div className={styles.counter}>
                      <div className={styles.label4}>1</div>
                    </div>
                    <img
                      className={styles.buttonIcon}
                      alt=""
                      src="/button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divider1} />
              <div className={styles.order}>
                <div className={styles.div2}>
                  <b className={styles.name}>메뉴 이름</b>
                  <img className={styles.arrowLeftIcon} alt="" src="/x-s.svg" />
                </div>
                <div className={styles.div3}>
                  <img
                    className={styles.menuimageIcon}
                    alt=""
                    src="/menuimage10.svg"
                  />
                  <div className={styles.price1}>
                    <div className={styles.div4}>
                      <div className={styles.price2}>
                        <div className={styles.priceChild} />
                        <div className={styles.label}>가격 : 11,000원</div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.priceChild} />
                        <div
                          className={styles.label}
                        >{`{옵션 이름} : 1,000원`}</div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.priceChild} />
                        <div
                          className={styles.label}
                        >{`{옵션 이름} : 1,000원`}</div>
                      </div>
                      <div className={styles.price3}>
                        <div className={styles.priceChild} />
                        <div
                          className={styles.label}
                        >{`{옵션 이름} : 1,000원`}</div>
                      </div>
                    </div>
                    <b className={styles.totalprice}>12,000원</b>
                  </div>
                </div>
                <div className={styles.div5}>
                  <div className={styles.button}>
                    <b className={styles.label4}>옵션변경</b>
                  </div>
                  <div className={styles.nuberinput}>
                    <div className={styles.buttonIcon}>
                      <div className={styles.buttonChild} />
                      <img
                        className={styles.minusIcon}
                        alt=""
                        src="/minus2.svg"
                      />
                    </div>
                    <div className={styles.counter}>
                      <div className={styles.label4}>1</div>
                    </div>
                    <img
                      className={styles.buttonIcon}
                      alt=""
                      src="/button.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div12}>
            <div className={styles.titlearea}>
              <div className={styles.titlearea1}>
                <b className={styles.title}>지난 주문서</b>
                <b className={styles.price11}>
                  총 {pastOrdersTotalPrice.toLocaleString()}원
                </b>
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.div13}>
              {pastOrdersData.map((order) =>
                order.main_menus.map((menu, index) => (
                  <div
                    key={`${order.sub_order_id}-${index}`}
                    className={styles.order}
                  >
                    <div className={styles.div14}>
                      <b className={styles.name2}>{menu.name}</b>
                      <div
                        className={
                          order.order_status === "Pending"
                            ? styles.label16
                            : order.order_status === "Accepted"
                            ? styles.label10
                            : order.order_status === "Rejected"
                            ? styles.label13
                            : ""
                        }
                      >
                        {order.order_status === "Accepted" && (
                          <img
                            className={styles.checkCircleIcon}
                            alt=""
                            src={acceptedIcon}
                          />
                        )}
                        {order.order_status === "Rejected" && (
                          <img
                            className={styles.alertTriangleIcon}
                            alt=""
                            src={rejectedIcon}
                          />
                        )}
                        {order.order_status === "Pending" && (
                          <img
                            className={styles.alertTriangleIcon}
                            alt=""
                            src={pendingIcon}
                          />
                        )}
                        <b className={styles.state}>
                          {order.order_status === "Pending"
                            ? "확인 중"
                            : order.order_status === "Accepted"
                            ? "확인 완료"
                            : order.order_status === "Rejected"
                            ? "거절 됨"
                            : ""}
                        </b>
                      </div>
                    </div>
                    <div className={styles.price12}>
                      <div className={styles.div4}>
                        <div key={menu.name} className={styles.price3}>
                          <div className={styles.priceChild5} />
                          <div className={styles.label}>
                            가격 : {menu.price.toLocaleString()}원
                          </div>
                        </div>
                        {menu.option_menus.map((option) => (
                          <div key={option.name} className={styles.price3}>
                            <div className={styles.priceChild5} />
                            <div className={styles.label}>{`${
                              option.name
                            } : ${option.price.toLocaleString()}원`}</div>
                          </div>
                        ))}
                      </div>
                      <b className={styles.totalprice2}>
                        {(
                          menu.price +
                          menu.option_menus.reduce(
                            (total, option) => total + option.price,
                            0
                          )
                        ).toLocaleString()}
                        원
                      </b>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div20}>
        <div className={styles.price21}>
          <div className={styles.label}>
            <span>현재 주문 금액 : </span>
            <b>20,000원</b>
          </div>
          <div className={styles.label20}>
            <span>총 주문 금액 : </span>
            <b>120,000원</b>
          </div>
        </div>
        <div className={styles.button4}>
          <b className={styles.label4}>주문하기</b>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
