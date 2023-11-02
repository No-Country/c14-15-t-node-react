import { Fragment } from "react";
import CartProduct from "../components/CartProduct";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import "../styles/Cart.css";
import { useSelector } from "react-redux";

const Cart = ({ open, setOpen }) => {


  const { cart } = useSelector((state) => state.cart);
console.log("carri",cart)
const GetTotal = () =>{
  let total = 0;
  cart.map((item) => {
     total += item.quantity * item.price;
  }, 0);
  return total;
} 



  
  return (
    <Transition.Root show={open} as={Fragment} className="cart">
      <Dialog as="div" className="relative z-10 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="closeBtn absolute right-0 top-0 -ml-8 flex mr-4 pr-2 pt-4 ">
                      <button
                        type="button"
                        className="relative border-0 text-gray-300 hover:text-white "
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <AiOutlineClose
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll cart py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-white">
                        Carrito de compras
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 cart-details">
                    
                      <div className="cart-subtitle flex place-content-between pt-2">
                        <p>Producto</p>
                        <p>Subtotal</p>
                      </div>
                      {
                        cart.length === 0 ? <h2 className="empty-cart text-white normal-case text-sm font-medium text-center">El carrito se encuentra vacio</h2> : <CartProduct />
                        }
                      
                     

                      <ul className="cart-total inline-flex place-content-between ">
                        <li>Total</li>
                        <li>${Number(GetTotal())}</li>
                      </ul>
                      <Link to="/checkout">
                        <button className="shopBtn">Finalizar Compra</button>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;