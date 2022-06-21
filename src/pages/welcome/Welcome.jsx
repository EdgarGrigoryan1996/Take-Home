import Button from "../../global/button/Button"
import { Link } from "react-router-dom"
import "./Welcome.css"
export default function Welcome() {
	return (

		<div className="welcome-wrapper">
			<div className="welcome-title">
				<h2>Say Hello to MoneyLion</h2>
			</div>
			<div className="welcome-content">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nobis placeat, saepe voluptatibus, distinctio soluta magni optio illo beatae, voluptates nihil aperiam amet quasi aliquam. Eaque, asperiores blanditiis? Dolore, veniam.</p>
			</div>
			<Link to="/perconal">
				<Button title="apply now" />
			</Link>

		</div>


	)
}
