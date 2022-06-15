import Button from "../../global/button/Button"
import "./Birthday.css"
import "../personal/Personal.css"

export default function Birthday() {
	return (
		<div className="birthday-wrapper">
			<div className="birthday-title">
				<h2>What’s your date of birth?</h2>
			</div>
			<div className="personal-form">
				<form action="">

					<div className="input-block">
						<label htmlFor="birthday">Your Birthday</label>
						<input type="date" id="birthday" />
						<div className="birth-example">MM/DD/YYYY</div>
					</div>


					<div className="button">
						<Button title="continue" />
					</div>
				</form>
			</div>
		</div>
	)
}
