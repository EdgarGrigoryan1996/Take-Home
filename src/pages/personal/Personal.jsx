import Button from "../../global/button/Button"
import "./Personal.css"

export default function Personal() {
	return (
		<div className="personal-wrapper">
			<div className="personal-title">
				<h2>Create Your Account</h2>
			</div>
			<div className="personal-form">
				<form action="">

					<div className="input-block">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" />
					</div>

					<div className="input-block">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" />
					</div>

					<div className="input-block">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" />
					</div>
					<div className="button">
						<Button title="continue" />
					</div>
				</form>
			</div>
		</div>
	)
}
