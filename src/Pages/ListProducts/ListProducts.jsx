import React, { useState } from "react";

const ListProduct = () => {
  const [data, setData] = useState([
    {
      type: "food",
      img: "./tintuc/tintuc1.jpg",
      title: "1 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 2000000,
    },
    {
      type: "food",
      img: "./tintuc/tintuc1.jpg",
      title: "2 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 50000,
    },
    {
      type: "food",
      img: "./tintuc/tintuc1.jpg",
      title: "3 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
    {
      type: "food",
      img: "./tintuc/tintuc1.jpg",
      title: "4 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
    {
      type: "drink",
      img: "./tintuc/tintuc1.jpg",
      title: "5 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
    {
      type: "drink",
      img: "./tintuc/tintuc1.jpg",
      title: "6 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
    {
      type: "drink",
      img: "./tintuc/tintuc1.jpg",
      title: "7 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
    {
      type: "drink",
      img: "./tintuc/tintuc1.jpg",
      title: "8 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
    {
      type: "drink",
      img: "./tintuc/tintuc1.jpg",
      title: "9 TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      price: 100000,
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("type");
  const [filterType, setFilterType] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);

  const handleFilterChange = (e) => setSelectedFilter(e.target.value);
  const handleFilterTypeChange = (e) => setFilterType(e.target.value);
  const handleFilterTitleChange = (e) => setFilterTitle(e.target.value);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  const filteredData = data.filter((item) => {
    if (selectedFilter === "type") {
      return item.type.toLowerCase().includes(filterType.toLowerCase());
    } else if (selectedFilter === "title") {
      return item.title.toLowerCase().includes(filterTitle.toLowerCase());
    } else if (selectedFilter === "price") {
      return item.price >= minPrice && item.price <= maxPrice;
    }
    return true;
  });
  const [visibleCount, setVisibleCount] = useState(6);

  const moreInfo = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + 3);
  };
  const lessInfo = () => {
    setVisibleCount(6);
  };

  const onClickDetail = (product) => {
    console.log(product);
  };
  const onBuynow = (product) => {
    console.log(product);
  };
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
            <div className="filter mb-6 flex items-center gap-4">
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
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredData.slice(0, visibleCount).map((product, index) => (
                <div
                  key={index}
                  className="product-item border rounded shadow-sm"
                >
                  <div className="img-news pt-[66.666666%] relative overflow-hidden mb-2.5">
                    <a href="" className="transition">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="absolute top-0 left-0 w-full h-full object-cover transition "
                      />
                    </a>
                  </div>
                  <div className="tent mb-[5px] px-3">
                    <h3 className="font-bold">
                      <a
                        href=""
                        className="block text-sm h-44px overflow-hidden"
                      >
                        {product.title}
                      </a>
                    </h3>
                  </div>
                  <div className="price text-base text-[#b22830] px-3 font-bold mb-2">
                    <span>{product.price.toLocaleString()} VND</span>
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

            {visibleCount < data.length && (
              <div
                className="mt-[22px] flex items-center justify-center hover:text-white hover:border-[#b22830] hover:bg-[#b22830]  text-[12px] leading-5 border-[1px] border-solid border-[#cc9554] py-[7px] px-[70px] rounded-[5px] text-[#cc9554] uppercase transition"
                onClick={moreInfo}
              >
                <p className="text-base font-normal  text-more">Xem thêm</p>
              </div>
            )}

            {visibleCount >= data.length && (
              <div
                className="mt-[22px] flex items-center justify-center hover:text-white hover:border-[#b22830] hover:bg-[#b22830]  text-[12px] leading-5 border-[1px] border-solid border-[#cc9554] py-[7px] px-[70px] rounded-[5px] text-[#cc9554] uppercase transition"
                onClick={lessInfo}
              >
                <p className="text-base font-normal  text-more">Thu gọn</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
