
import logo from "./img/lion.png"
import "./Header.css"
export default function Header() {
	return (
		<header>
			<div className="header-wrapper">
				<div className="logo-block">
					<img src={logo} alt="Lion" />
				</div>
				<div className="title-block">
					<h1>MoneyLion</h1>
				</div>
			</div>
		</header>

	)
}
