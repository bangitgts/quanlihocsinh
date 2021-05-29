var userStd = [
  {
    id: 1,
    username: "testadmin",
    password: "testadmin",
    hocvan: "giaovien",
    fullName: "Nguyễn Văn A",
    dateBirth: "12/2/1993",
    phoneNumber: "031288121",
    diemToan: 8.7,
    diemLy: 8.5,
    diemHoa: 8.0,
    diemVan: 2.3,
    addRess: "Tô Ký, phường Tân Chánh Hiệp, quận 12, tp Hồ Chí Minh",
  },
  {
    nameStudent: "Nguyen Van B",
    maHs: "18511",
    ngaySinh: "2000-02-01",
    soDienThoai: "03844332",
    hocvan: "hocsinh",
    diemToan: "8",
    diemLy: "8",
    diemVan: "1",
    diemHoa: "9",
    diemSinh: "8",
    diemTin: "2",
    diemLichSu: "8",
    diemDiaLy: "3",
    diemGDCD: "7",
    id: 2,
  },
];
var test;

var axios = require("axios");
var config = {
  method: "get",
  url: "http://localhost:3000/data/",
  headers: {},
};

axios(config)
  .then(function (response) {
    //userStd.push(JSON.parse(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

export default userStd;
