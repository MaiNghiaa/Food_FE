import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatCurrencyVND } from "../../Components/finance";
const ProductDetail = () => {
  const [DetailProduct, setDetail] = useState();
  const [Error, setError] = useState();
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();
  const [cart, setCart] = useState([]);

  const { product } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getDetailProduct?idsp=${product.idsp}`
        );
        setDetail(response.data[0]);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();

    return () => {};
  }, []);
  // tang giảm số lượng

  // console.log(product, DetailProduct);

  //
  const newdata = { ...product, ...DetailProduct };

  // console.log(newdata);
  const increment = () => {
    if (quantity < newdata.soluong)
      setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  useEffect(() => {
    // Lấy danh sách sản phẩm từ localStorage khi component được tải lần đầu tiên
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    // Cập nhật localStorage khi giỏ hàng thay đổi
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // In ra cart chỉ một lần khi component được tải lần đầu tiên
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(savedCart);
  }, []);
  console.log(cart);
  const addToCart = (quantity) => {
    console.log(quantity);
    if (quantity === 0) return;
    const existingProduct = cart.find((item) => item.tensp === product.tensp);
    if (existingProduct) {
      //   // Nếu sản phẩm đã tồn tại trong giỏ hàng
      if (existingProduct.quantity + quantity > product.soluong) {
        alert("Bạn không thể mua quá số lượng của cửa hàng");
        return;
      }
      const updatedCart = cart.map((item) =>
        item.idsp === product.idsp
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      //   // Nếu sản phẩm chưa tồn tại trong giỏ hàng
      setCart([
        ...cart,
        {
          idsp: product.idsp,
          hinhanh: product.hinhanh,
          tensp: product.tensp,
          giaban: product.giaban,
          quantity: quantity,
        },
      ]);
    }
    setQuantity(1);
  };

  return (
    <div className="list-product py-11">
      <div className="news-wrapper px-[15px] max-w-[1200px] mx-auto">
        <div className="w-full">
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className=" mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={`http://localhost:3000/assets/${newdata.hinhanh}`}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {newdata.thuonghieu}
                  </h2>

                  <div className="flex mb-4">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {newdata.tensp}
                    </h1>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    {/* {newdata.motasanpham} */}
                    Đồ ăn là hành trình khám phá vị giác và nghệ thuật ẩm thực.
                    Hình ảnh món trứng chiên vàng ươm, vị béo ngậy của lòng đỏ
                    và vỏ trắng, hòa quyện với mùi thơm của bánh mì nướng tỏi
                    phức hợp. Nồng nàn hương vị Phở bò Việt Nam, nước dùng từ
                    xương nấu chín kỹ cùng thơm lừng gia vị. Bánh cuốn mỏng dai
                    với nhân thịt heo và hành phi giòn rụm. Và bánh tráng trộn
                    Sài Gòn, hòa quyện vị cay, ngọt, chua, tái hiện hương vị đậm
                    đà của văn hóa ẩm thực Việt Nam. Những món ăn là sự hài hòa
                    giữa đơn giản và tinh tế, mở ra thế giới đa dạng của ẩm thực
                    với mỗi người.
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Số lượng</span>
                      <div className="relative px-4">
                        <div className="quantity-control flex items-center">
                          <button
                            className="quantity-button rounded-l-md bg-gray-200 hover:bg-gray-300 px-3 py-1"
                            onClick={decrement}
                          >
                            -
                          </button>
                          <span className="quantity-value px-3">
                            {quantity}
                          </span>
                          <button
                            className="quantity-button rounded-r-md bg-gray-200 hover:bg-gray-300 px-3 py-1"
                            onClick={increment}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <span className="">
                        {newdata.soluong} sản phẩm có sẵn
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      {formatCurrencyVND(newdata.giaban)}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(quantity)}
                        className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded"
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                    {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
