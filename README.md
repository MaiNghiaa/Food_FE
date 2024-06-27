https://www.material-tailwind.com/docs/react/carousel //SlideShow

Db:

table Tin tức(
idTintuc,
name,
hinhanh,
day,
hour,
)

table User(
idnguoidung,
email,
password,
ten,
tuoi,
gioitinh,
ngaysinh,
sdt,
)

table sanpham(
idsp,
tensp,
hinhanh,
giaban,
soluong,
)

sanphamchitiet(
idspct,
idsp khoa ngoai sanpham(idsp),
motasanpham,
thuonghieu,
)

donhang(
iddonhang,
soluongsanpham,
tongtien,
trangthai,
)

donhangchitiet(
iddonhangchitiet,
iddonhang khoa ngoai donhang(iddonhang),
sanpham(luu theo dang mot mang json ngan cach nhau boi dau phay bao gom hinhanh,tensp,soluong)
trangthai,
)
