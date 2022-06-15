import Button from "../../global/button/Button"
import "./Agreement.css"

export default function Agreement() {
	return (
		<div className="agreement-wrapper">
			<div className="agreement-title">
				<h2>One last step!</h2>
			</div>
			<div className="agreement-form">
				<form action="">
					<div className="agreement-flex">
						<div className="agreement">
							<div className="agree-title">Agreement</div>
							<div className="agreement-block">
								<div className="checkbox">
									<input type="checkbox" id="agree" />
								</div>
								<div className="checkbox-content">
									<label htmlFor="agree">I agree to the</label>
									<p className="privacy">Electronic Transaction Esign Consent</p>
								</div>
							</div>

							<div className="agreement-block">
								<div className="checkbox">
									<input type="checkbox" id="agree-agreements" />
								</div>
								<div className="checkbox-content">
									<label htmlFor="agree-agreements">I agree to the folowing agreements:</label>
									<p className="privacy">Privacy Notice</p>
									<p className="privacy">Terms and Conditions</p>
									<p className="privacy">Membership Agreement</p>
								</div>
							</div>
						</div>
					</div>





					<div className="button">
						<Button title="agree & create account" />
					</div>
				</form>
			</div>
		</div>
	)
}
