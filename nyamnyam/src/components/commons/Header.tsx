import Link from "next/link";

const Header = () => {
  return (
    <div className="z-50 flex justify-around items-center fixed w-full h-[52px] top-0 shadow-sm bg-white">
      <div className="italic text-blue-800 text-lg font-semibold cursor-pointer px-[18px] py-0">
        NyamNyam
      </div>
      <div className="flex gap-10 items-center px-[18px] py-0">
        <Link className="hover:text-gray-500" href="">
          맛집 목록
        </Link>
        <Link className="hover:text-gray-500" href="">
          맛집 등록
        </Link>
        <Link className="hover:text-gray-500" href="">
          찜한 가게
        </Link>
        <Link className="hover:text-gray-500" href="">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Header;
