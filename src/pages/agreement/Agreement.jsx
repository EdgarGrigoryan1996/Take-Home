import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../global/button/Button"
import "./Agreement.css"

export default function Agreement() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [check, setCheck] = useState({
		check1: false,
		check2: false
	})
	function addToStore(e) {
		e.preventDefault()
		console.log(check)
		dispatch({
			type: "AGREEMENTS",
			payload: {
				agreement1: check.check1,
				agreement2: check.check2
			}
		})
		navigate("/user")
	}
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
									<input className="checkbox" type="checkbox" id="agree" onChange={(e) => {
										setCheck({
											check1: e.target.checked,
											check2: check.check2
										})
									}} />
								</div>
								<div className="checkbox-content">
									<label htmlFor="agree">I agree to the</label>
									<p className="privacy">Electronic Transaction Esign Consent</p>
								</div>
							</div>

							<div className="agreement-block">
								<div className="checkbox">
									<input className="checkbox" type="checkbox" id="agree-agreements" onChange={(e) => {
										setCheck({
											check1: check.check1,
											check2: e.target.checked,
										})
									}} />
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
						<Button title="agree & create account" action={addToStore} />
					</div>
				</form>
			</div>
		</div>
	)
}
