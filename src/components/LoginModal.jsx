import { ReactComponent as MainLogo } from '../img/MainLogo.svg';
import '../styles/LoginModal.css';
import { AiOutlineClose } from "react-icons/ai";
import GoogleLogin from "./GoogleLogin";
import KakaoLogin from "./KakaoLogin";
import AppleLogin from "./AppleLogin";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (responseData) => {
    // 받은 데이터를 로컬 스토리지에 저장합니다.
    localStorage.setItem('accessToken', responseData.data.accessToken);
    localStorage.setItem('refreshToken', responseData.data.refreshToken);
    localStorage.setItem('isGuest', responseData.data.isGuest);

    // 이제 사용자가 게스트인지 확인하여 다음 페이지로 라우팅하면 됩니다.
    if (responseData.data.isGuest) {
      // 게스트라면 terms 페이지로 이동
      navigate('/terms');
    } else {
      // 게스트가 아니라면 홈 페이지로 이동
      navigate('/');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modalWrapper">
          <div className="modal">
            <div className="modalContent">
              <div className="closeButton">
                <AiOutlineClose onClick={onClose} style={{ color: '#9c9c9c', width: '36px', height: '36px' }} />
              </div>
              <MainLogo width="102" height="105.3" style={{ marginLeft: '40%', marginTop: '10%' }} />
              <div style={{ color: 'black', textAlign: 'center', fontSize: '44px', fontWeight: '600', marginTop: '32px' }}>TTOON 시작하기</div>
              <div style={{ color: '#949494', textAlign: 'center', fontSize: '20px', fontWeight: '500' }}>평범한 하루를 특별한 만화로 기록해보아요</div>
              <div className="SocialLogin">
                <AppleLogin onSuccess={handleLoginSuccess} />
                <KakaoLogin onSuccess={handleLoginSuccess} />
                <GoogleLogin onSuccess={handleLoginSuccess} />
              </div>
              <div className="Policy">
                이용약관   &nbsp; |  &nbsp; 개인정보처리방침
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
