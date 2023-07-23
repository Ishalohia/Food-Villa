import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../utils/cartSlice";
import { ITEM_IMG_CDN_URL } from "../config";
import emptyCart from "../assets/emptyCart.svg"

const Cart = () => {
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {

  setCheckoutCompleted(true);
  toast.success("Cart has been placed!");
  // Clear the cart after successful checkout
  dispatch(clearCart());
};

  return (
    <div className="container mx-auto px-4 md:px-10">
      <div className="py-6 text-2xl items-center mx-auto uppercase text-red-500 font-bold text-center ">
        Shopping Cart
      </div>

      {/* When cart is empty */}
      {cart.cartItems.length === 0 ? (
        <div className="flex justify-center h-screen -mb-60">
      <div className="text-center md:text-left mx-auto">
        <img src={emptyCart} alt="empty-cart" width={400} height={400} />
        <p className="text-2xl font-semibold mx-auto md:ml-20">Your cart is currently empty</p>
        <div className="mt-2 md:ml-28">
          <Link to="/menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left inline-block mr-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>See Restaurant near You</span>
          </Link>
        </div>
      </div>
    </div>
      ) : (
        <div className="mt-2 pt-2 mx-auto">
        <div className="flex ">
          <button className="mx-auto mb-4 md:mb-0 md:mx-0 font-sm text-white rounded-lg drop-shadow-xl text-sm px-4 py-2 text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
                    onClick={() => handleClearCart()}>
                    Clear Cart
          </button>
      </div>
          {/* Product added */}
          <div className="flex flex-col md:flex-row md:justify-between w-full ">
            <div className="flex flex-col w-full md:w-8/12 md:pr-4">
              {/* Header */}
              <div class="flex flex-row pb-4 text-lg uppercase text-gray-600 font-semibold mt-2">
                <h3 class="w-full md:w-5/12">Product</h3>
                <h3 class="w-1/3 md:w-2/12 mt-2 md:mt-0">Quantity</h3>
                <h3 class="w-1/3 md:w-2/12 mt-2 md:mt-0">Price</h3>
                <h3 class="w-1/3 md:w-2/12 mt-2 md:mt-0">Total</h3>
              </div>
              {cart.cartItems.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="border border-black bg-white shadow-xl mb-4 w-full rounded-lg drop-shadow-md hover:drop-shadow-2xl"
                  style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}
                >
                  <div className="flex justify-evenly text-md items-center">
                    {/* name */}
                    <div className="flex flex-col w-5/12">
                      <div className="flex">
                        {cartItem?.imageId && (
                          <img
                            className="h-16 w-16 objecy-fit p-2 md:h-24 md:w-24 rounded-lg object-cover"
                            src={ITEM_IMG_CDN_URL + cartItem?.imageId}
                            alt={cartItem?.name}
                          />
                        )}
                        <div className="flex">
                          <span className="self-center ml-4">{cartItem.name}</span>
                          <span>{cartItem.desc}</span>
                        </div>
                      </div>
                    </div>
                    {/* Increase / Decrease Button */}
                    <div className="flex items-center w-2/12 gap-2 text-md">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        {/* Minus Icon SVG */}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Minus"
                        viewBox="0 0 29 29"
                        height={20}
                        width={20}
                      >
                        <path
                          d="M14.5 2C7.596 2 2 7.596 2 14.5S7.596 27 14.5 27 27 21.404 27
                                14.5 21.404 2 14.5 2zM21 15.5H8a1 1 0 1 1 0-2h13a1 1 0 1 1 0 2z"
                          fill="#B31312"
                          class="color000000 svgShape"
                        ></path>
                      </svg>
                      </button>
                      <p>{cartItem.cartQuantity}</p>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        {/* Plus Icon SVG */}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        id="AddButton"
                        height={20}
                        width={20}
                      >
                        <path
                          fill="#B31312"
                          fill-rule="evenodd"
                          d="M11.2426 2.75736C13.5858 5.1005 13.5858 8.89949 11.2426
                                    11.2426C8.89949 13.5858 5.1005 13.5858 2.75736 11.2426C0.414214 8.89949 0.414214
                                    5.10051 2.75736 2.75736C5.1005 0.414214 8.89949 0.414213 11.2426 2.75736ZM7.00001
                                    3.8C7.3866 3.8 7.70001 4.1134 7.70001 4.5V6.29999H9.5C9.8866 6.29999 10.2 6.61339
                                    10.2 6.99999C10.2 7.38659 9.8866 7.69999 9.5 7.69999H7.70001V9.5C7.70001 9.8866
                                    7.3866 10.2 7.00001 10.2C6.61341 10.2 6.30001 9.8866 6.30001 9.5V7.69999H4.5C4.1134
                                    7.69999 3.8 7.38659 3.8 6.99999C3.8 6.61339 4.1134 6.29999 4.5 6.29999H6.30001V4.5C6.30001
                                    4.1134 6.61341 3.8 7.00001 3.8Z"
                          clip-rule="evenodd"
                          class="color000000 svgShape"
                        ></path>
                      </svg>
                      </button>
                    </div>
                    {/* per item price */}
                    <div className="flex items-center w-2/12">
                      <p>
                        {cartItem?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(cartItem?.price / 100)
                          : " "}
                      </p>
                    </div>
                    {/* total price */}
                    <div className="flex items-center w-2/12">
                      <p>
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(
                          (cartItem.price * cartItem.cartQuantity) / 100
                        )}
                      </p>
                    </div>
                    {/* remove button */}
                    <button className="w-1/12" onClick={() => handleRemoveFromCart(cartItem)}>
                      {/* Delete Icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 48 48" id="Delete" width={38} height={38}>
                        <path d="M34.07 12h-6.92a3.15 3.15 0 0 0-6.3 0h-6.92a1.89 1.89 0 0 0 0 3.78L15 36.13a3.15 3.15 0 0 0 3.14 
                              3h11.69a3.15 3.15 0 0 0 3.14-3l1.1-20.31a1.89 1.89 0 0 0 0-3.78Zm-12 20.77a1.26 1.26 0 1 1-2.52 
                              0V20.22a1.26 1.26 0 0 1 2.52 0Zm6.29 0a1.26 1.26 0 1 1-2.51 0V20.22a1.26 1.26 0 0 1 2.51 0Z" 
                              fill=" #B31312" class="color000000 svgShape"></path></svg>

                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout */}
            <div className="flex h-1/2 flex-col m-2 p-4 rounded-lg mt-14 " 
            style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
              <div className="">
                <div className=" px-4 py-6 sm:px-6">
                  <div className="flex justify-between font-semibold text-lg text-gray-900">
                    <p >Subtotal:</p>
                    <p>
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(cart.cartTotalAmount / 100)}
                    </p>
                  </div>
                  <div className="text-md text-gray-600 md:ml-4 md:mt-0">
                    <p className="mt-0.5 text-md text-gray-600">Taxes and shipping calculated at checkout</p>
                    <div className="mt-6">
                    <button className=" w-3/4 flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                    onClick={handleCheckout}>
                      Check out
                    </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center text-center text-sm text-gray-500">
                  <Link to="/menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left inline-block mr-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span className="font-medium text-gray-600 hover:text-gray-700 hover:drop-shadow-lg">
                      Continue Shopping
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Cart;
