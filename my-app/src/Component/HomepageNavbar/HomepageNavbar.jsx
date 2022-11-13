import { Option } from "./Option"
import { Logo } from "./Logo"
import { Login } from "./Login"

const HomepageNavbar = () => {
  return <div className="homepage-navbar">
    <Logo/>
    <Option/>
    <Login/>
  </div>
}

export {HomepageNavbar}