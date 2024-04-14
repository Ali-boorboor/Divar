import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authorization, formLoading, userInfos } from "../../utils/recoilStateManager";
import { authorizationPostApi } from "../../utils/apiFunctions";

export default function PrivateRoute({ children }: any): any {
  const [auth, setAuth] = useRecoilState(authorization);
  const [loading, setLoading] = useRecoilState(formLoading);
  const [, setUserInfo] = useRecoilState(userInfos);
  const navigate = useNavigate();

  useEffect(() => {
    authorizationPostApi(setUserInfo, setAuth, navigate, setLoading);
  }, []);

  return loading ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src="/img/svg/loading.svg" alt="loading-icon" className="w-16 h-16" />
    </div>
  ) : auth ? (
    children
  ) : (
    navigate("/login")
  );
}
