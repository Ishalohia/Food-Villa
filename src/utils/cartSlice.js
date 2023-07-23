import { createSlice} from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css"

const initialState = {
  cartItems: [], // Initialize with an empty array since the values will be fetched from localStorage
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
initialState.cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  // Calculate initial cartTotalQuantity based on the cartItems in the local storage
initialState.cartTotalQuantity = initialState.cartItems.reduce(
  (total, cartItem) => total + cartItem.cartQuantity,
  0
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "top-right",
          className: "custom-toast-info"
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "top-right",
          className: "custom-toast-success"
        });
      }
      // updating after very click of add button from menu
      state.cartTotalQuantity = state.cartItems.reduce(
      (total, cartItem) => total + cartItem.cartQuantity,
      0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "top-right",
          className: "custom-toast-info"
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "top-right",
          className: "custom-toast-error"
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "top-right",
            className: "custom-toast-error",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    
    updateCartQuantity(state, action) {
      const { cartQuantity } = action.payload;
      state.cartTotalQuantity = cartQuantity;
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "top-right" , className: "custom-toast-error"});
    },
  },
});

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

 
// to export action as named import because there  are bunch of actions 
export const {addToCart, decreaseCart, removeFromCart, getTotals, updateCartQuantity, clearCart}= cartSlice.actions;
//this is how we'll export in redux-toolkit ->> it will combine all reducers and create one reducer to export it 
export default cartSlice.reducer;