import Logo from '@/assets/logo.png';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
const items = [
  {
    label: 'Trang chủ',
    key: '/',
  },
  {
    label: 'Dịch vụ',
    key: '/service',
  },
  {
    label: 'Dự án',
    key: '/project',
  },
  {
    label: 'Liên hệ tư vấn',
    key:'/contact'
  }
];

const Header = () => {
const navigate = useNavigate();
const location = useLocation();
const current = location.pathname;
return ( 
    <>
  <header className="max-w-screen-2xl">
  <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center py-4 ">
    <div className="flex-shrink-0">
      <img src={Logo} alt="logo" className="h-10" />
    </div>
    <div className="flex-1 flex justify-end">
      <div className="w-full max-w-xl">
        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          items={items}
   onClick={(e) => {
  navigate(e.key);
  window.scrollTo({ top: 0, behavior: "smooth" });
}}
          style={{ display: 'flex', justifyContent: 'space-between', border:'none'    
          }}
        />
      </div>
    </div>
  </div>
</header>
  </>
);

};

export default Header;
