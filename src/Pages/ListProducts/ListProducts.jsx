import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatCurrencyVND } from "../../Components/finance";

const ListProduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("type");
  const [filterType, setFilterType] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [visibleCount, setVisibleCount] = useState(6);
  const [cart, setCart] = useState([]);
  // const cartRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getProduct");
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Lấy giỏ hàng từ localStorage khi component được tải lần đầu tiên
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    // Cập nhật localStorage khi giỏ hàng thay đổi
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);

  const filteredData = data.filter((item) => {
    if (selectedFilter === "type_name") {
      return item.type_name.toLowerCase().includes(filterType.toLowerCase());
    } else if (selectedFilter === "tensp") {
      return item.tensp.toLowerCase().includes(filterTitle.toLowerCase());
    } else if (selectedFilter === "giaban") {
      return item.giaban >= minPrice && item.giaban <= maxPrice;
    }
    return true;
  });

  const onClickDetail = (product) => {
    navigate("/list-products/detail", { state: { product } });
  };

  const onBuynow = (product) => {
    const existingProduct = cart.find((item) => item.tensp === product.tensp);

    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng
      if (existingProduct.quantity >= product.soluong) {
        alert("Bạn không thể mua quá số lượng của cửa hàng");
        return;
      }

      const updatedCart = cart.map((item) =>
        item.tensp === product.tensp
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng
      setCart([
        ...cart,
        {
          idsp: product.idsp,
          hinhanh: product.hinhanh,
          tensp: product.tensp,
          giaban: product.giaban,
          quantity: 1,
        },
      ]);
    }
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  localStorage.setItem("totalQuantity", totalQuantity);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const moreInfo = () =>
    setVisibleCount((prevVisibleCount) => prevVisibleCount + 3);
  const lessInfo = () => setVisibleCount(6);
  return (
    <div className="list-product py-11">
      <div className="news-wrapper px-[15px] max-w-[1200px] mx-auto">
        <div className="w-full">
          <div className="box w-full">
            <div className="mid-title mb-5 w-auto relative">
              <h1 className="text-[45px] leading-[55px] font-bold text-left text-[#53382c]">
                SẢN PHẨM
              </h1>
            </div>
            {/* <div className="filter mb-6 flex items-center gap-4">
              <div className="mb-4 flex-2">
                <label>
                  <input
                    type="radio"
                    value="type"
                    checked={selectedFilter === "type"}
                    onChange={handleFilterChange}
                  />
                  Type
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    value="title"
                    checked={selectedFilter === "title"}
                    onChange={handleFilterChange}
                  />
                  Title
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    value="price"
                    checked={selectedFilter === "price"}
                    onChange={handleFilterChange}
                  />
                  Price
                </label>
              </div>
              <div className="flex-1">
                {selectedFilter === "type" && (
                  <input
                    type="text"
                    placeholder="Filter by type"
                    value={filterType}
                    onChange={handleFilterTypeChange}
                    className="p-2 border rounded mb-4 w-full border-[#cc9554]"
                  />
                )}
                {selectedFilter === "title" && (
                  <input
                    type="text"
                    placeholder="Filter by title"
                    value={filterTitle}
                    onChange={handleFilterTitleChange}
                    className="p-2 border rounded mb-4 w-full border-[#cc9554]"
                  />
                )}
                {selectedFilter === "price" && (
                  <div className="mb-4">
                    <label>Min Price: </label>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      className="p-2 border rounded mb-4 w-full border-[#cc9554]"
                    />
                    <label>Max Price: </label>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                      className="p-2 border rounded mb-4 w-full border-[#cc9554]"
                    />
                  </div>
                )}
              </div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {currentItems.map((product, index) => (
                <div
                  key={index}
                  className="product-item border rounded shadow-sm"
                >
                  <div className="img-news pt-[66.666666%] relative overflow-hidden mb-2.5">
                    <a href="" className="transition">
                      <img
                        src={`http://localhost:3000/assets/${product.hinhanh}`}
                        alt={product.tensp}
                        className="absolute top-0 left-0 w-full h-full object-cover transition "
                      />
                    </a>
                  </div>
                  <div className="tent mb-[5px] px-3">
                    <h3 className="font-bold">
                      <a
                        href=" "
                        className="block text-sm h-44px overflow-hidden"
                      >
                        {product.tensp}
                      </a>
                    </h3>
                  </div>
                  <div className="price text-base text-[#b22830] px-3 font-bold mb-2">
                    <span>{formatCurrencyVND(product.giaban)}</span>
                  </div>
                  <div className="action flex items-center gap-2 px-3 w-full pb-4">
                    <button
                      onClick={() => onClickDetail(product)}
                      className="whitespace-nowrap flex-1 hover:text-white hover:border-[#b22830] hover:bg-[#b22830] inline-block text-[12px] leading-5 border-[1px] border-solid border-[#cc9554] py-2 px-3 rounded-[5px] text-[#cc9554] uppercase transition"
                    >
                      Chi tiết
                    </button>
                    <button
                      onClick={() => onBuynow(product)}
                      className="whitespace-nowrap flex-1 hover:text-white hover:border-[#b22830] hover:bg-[#b22830] inline-block text-[12px] leading-5 border-[1px] border-solid border-[#cc9554] py-2 px-3 rounded-[5px] text-[#cc9554] uppercase transition"
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div>
                <h2>Tổng số lượng trong giỏ hàng: {}</h2>
                <h3>Chi tiết giỏ hàng:</h3>
                {cart.length > 0 ? (
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id} className="flex">
                        <img
                          src={`http://localhost:3000/assets/${item.hinhanh}`}
                          alt={item.tensp}
                          width="50"
                          height="50"
                        />
                        <p>Tên sản phẩm: {item.tensp}</p>
                        <p>Giá: {formatCurrencyVND(item.giaban)}</p>
                        <p>Số lượng: {item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Giỏ hàng trống</p>
                )}
              </div>
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`page-link py-2 px-4 border rounded ${
                currentPage === number ? "bg-gray-300" : "bg-white"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListProduct;
