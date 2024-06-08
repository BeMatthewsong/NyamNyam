import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>logo</div>
      <div>
        <Link href="">맛집 목록</Link>
        <Link href="">맛집 등록</Link>
        <Link href="">찜한 가게</Link>
        <Link href="">로그인</Link>
      </div>
      <div role="presentation" onClick={(val) => setIsOpen(!val)}>
        {isOpen}
      </div>
    </div>
  );
};

export default Header;
