import userStd from "../_reducers/usersStd.reducer";

export function configureFakeBackend() {
  var users = [
    {
      id: 1,
      username: "nguyenvana",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/User-info.svg/1024px-User-info.svg.png",
      password: "abc",
      hocvan: "giaovien",
      fullName: "Nguyễn Văn A",
      dateBirth: "12/2/1990",
      phoneNumber: "031288121",
      email: "test@gmail.com",
      soCmnd: "21229219",
      ngayCap: "25/01/2008",
      danToc: "Kinh",
      tonGiao: "Không",
      addRess: "Tô Ký, phường Tân Chánh Hiệp, quận 12, tp Hồ Chí Minh",
    },
    {
      nameStudent: "Test1",
      maHs: "1929",
      ngaySinh: "0199-02-02",
      soDienThoai: "1929129",
      diemToan: "10",
      hocvan: "hocsinh",
      diemLy: "9",
      diemVan: "8",
      diemHoa: "8",
      diemSinh: "2",
      diemTin: "3",
      diemLichSu: "8",
      diemDiaLy: "3",
      diemGDCD: "7",
      id: 2
    }
  ];
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
 // var abc;
  fetch("http://localhost:3000/data", requestOptions)
    .then(response => response.text())
    .then(result => {localStorage.setItem('datapost',JSON.stringify(JSON.parse(result))
      )})
    .catch(error => console.log('error', error));

 
  //users = users.push(JSON.parse(localStorage.getItem('datapost')));
  console.log(users)
  console.log(JSON.parse(localStorage.getItem('datapost')))
  var b = users.concat(JSON.parse(localStorage.getItem('datapost')))
  console.log(b)
  users = b;
  console.log("users sau",b)
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          let filteredUsers = users.filter((user) => {
            return (
              (user.username === params.username &&
                user.password === params.password) ||
              (user.maHs === params.username &&
                user.soDienThoai === params.password)
            );
          });

          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              username: user.username,
              fullName: user.fullName,
              hocVan: user.hocvan,
              dateBirth: user.dateBirth,
              phoneNumber: user.phoneNumber,
              email: user.email,
              soCmnd: user.soCmnd,
              ngayCap: user.ngayCap,
              danToc: user.danToc,
              tonGiao: user.tonGiao,
              addRess: user.addRess,
              nameStudent: user.nameStudent,
              maHs: user.maHs,
              ngaySinh: user.ngaySinh,
              soDienThoai: user.soDienThoai,
              hocvan: user.hocvan,
              diemToan: user.diemToan,
              diemLy: user.diemLy,
              diemVan: user.diemVan,
              diemHoa: user.diemHoa,
              diemSinh: user.diemSinh,
              diemTin: user.diemTin,
              diemLichSu: user.diemLichSu,
              diemDiaLy: user.diemDiaLy,
              diemGDCD: user.diemGDCD,

              token: "fake-jwt-token",
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson)),
            });
          } else {
            reject("Tài khoản hoặc mật khẩu không chính xác");
          }
          return;
        }

        if (url.endsWith("/users") && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users)),
            });
          } else {
            reject("Unauthorised");
          }
          return;
        }
        realFetch(url, opts).then((response) => resolve(response));
      }, 500);
    });
  };
}
