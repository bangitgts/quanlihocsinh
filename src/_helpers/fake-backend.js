import { userStd } from "../_reducers/usersStd.reducer";

export function configureFakeBackend() {
  let users = [
    {
      id: 1,
      username: "nguyenvana",
      password: "abc",
      hocvan: "giaovien",
      fullName: "Nguyễn Văn A",
      dateBirth: "12/2/1993",
      phoneNumber: "031288121",
      addRess: "Tô Ký, phường Tân Chánh Hiệp, quận 12, tp Hồ Chí Minh",
    },
    {
      id: 2,
      username: "test",
      password: "test",
      hocvan: "hocsinh",
      fullName: "Nguyễn Văn A",
      dateBirth: "12/2/1993",
      phoneNumber: "031288121",
      addRess: "Tô Ký, phường Tân Chánh Hiệp, quận 12, tp Hồ Chí Minh",
    },
  ];
  //console.log("dday la userSTD" + typeof userStd);
  users.push(userStd);
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          let filteredUsers = users.filter((user) => {
            return (
              user.username === params.username &&
              user.password === params.password
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
