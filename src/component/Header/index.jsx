import HeaderNav from "./HeaderNav"
import HeaderTop from "./HeaderTop"
const Header = () => {
  return (
    <div className="border-b-2 border-gray-300">
        <HeaderTop/>
        <HeaderNav/>
    </div>
  )
}

export default Header