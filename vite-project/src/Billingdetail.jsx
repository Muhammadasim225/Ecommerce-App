import Header from "./components/header/Header";
import Breadcrumbs from "./components/header/404/Breadcrumbs";
import Footer from "./components/Footer";
import gpu1 from './assets/images/gpu1.png';
import gpu2 from './assets/images/gpu2.png';
import bkash from './assets/images/bkash.png';
import visa from './assets/images/visa.png';
import nagori from './assets/images/nagori.png';
import mastercard from './assets/images/mastercard.png';
const BillingDetail = () => {
    return ( 
        <div className="font-custom">
            <Header cust={true}/>
            <div className="breadcrumb pt-10 ml-20">
                <Breadcrumbs />
            </div>
            <div className="container mx-auto px-5 mt-24 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Billing Details Form */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold mb-5">Billing Details</h2>
                        <form>
                            <div className="grid grid-cols-1 gap-4">
                                <input type="text" placeholder="First Name*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <input type="text" placeholder="Company Name" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <input type="text" placeholder="Street Address*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <input type="text" placeholder="Apartment, floor, etc. (optional)" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <input type="text" placeholder="Town/City*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <input type="text" placeholder="Phone Number*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <input type="email" placeholder="Email Address*" className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <div className="flex items-center mt-4">
                                    <input type="checkbox" id="save-info" className="mr-2"/>
                                    <label htmlFor="save-info" className="text-gray-700">Save this information for faster check-out next time</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <div className="flex flex-col space-y-4">
                            {/* Product Items */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img src={gpu1} alt="LCD Monitor" className="w-12 h-10"/>
                                    <span>LCD Monitor</span>
                                </div>
                                <span>$650</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img src={gpu2} alt="Gamepad" className="w-15 h-10"/>
                                    <span>HI Gamepad</span>
                                </div>
                                <span>$1100</span>
                            </div>
                            <hr/>

                            {/* Subtotal, Shipping, Total */}
                            <div className="flex justify-between items-center">
                                <span>Subtotal:</span>
                                <span>$1750</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between items-center font-bold">
                                <span>Total:</span>
                                <span>$1750</span>
                            </div>
                            <hr/>

                            {/* Payment Method */}
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <input type="radio" name="payment" id="bank" className="mr-2"/>
                                    <span>Bank</span>
                                    <label htmlFor="bank" className="flex items-center ml-44 space-x-3">
                                        <img src={visa} alt="Visa" className="w-10 cursor-pointer"/>
                                        <img src={bkash} alt="bkash" className="w-10 cursor-pointer"/>
                                        <img src={mastercard} alt="MasterCard" className="w-10 cursor-pointer"/>
                                        <img src={nagori} alt="nagori" className="w-10 cursor-pointer"/>
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="payment" id="cod" className="mr-2"/>
                                    <label htmlFor="cod">Cash on delivery</label>
                                </div>
                            </div>
                            <hr/>

                            {/* Coupon and Place Order Button */}
                            <div className="flex items-center space-x-4">
                                <input type="text" placeholder="Coupon Code" className="p-3 border rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                                <button className="bg-red-500 text-white py-3 px-6 rounded-sm hover:bg-red-600 transition-colors">Apply Coupon</button>
                            </div>
                            <button className="mt-4 bg-red-500 text-white py-3 px-5 rounded-sm hover:bg-red-600 transition-colors w-[150px]">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default BillingDetail;
