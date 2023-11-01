import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    // JSON 형식으로 보낼 데이터 변수
    const login = {
      id: id,
      pwd: pw,
    };
    // axios는 자동으로 JSON 형식으로 변환해서 보내줌
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },
};
export default AxiosApi;
