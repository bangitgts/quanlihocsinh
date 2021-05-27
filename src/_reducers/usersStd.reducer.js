const userStd = {
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
};
var test;


console.log(typeof userStd)

var axios = require('axios');
var config = {
  method: 'get',
  url: 'http://localhost:3000/data/',
  headers: { }
};

axios(config)
.then(function (response) {
  test == response.data;
  console.log(userStd)
})
.catch(function (error) {
  console.log(error);
});
