import Button from "../../global/button/Button"
import "./Birthday.css"
import "../personal/Personal.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Birthday() {
	const navigate = useNavigate()
	const [birthDay, setBirthDay] = useState("")
	const [birthDayMsg, setBirthDayMsg] = useState(false)
	const dispatch = useDispatch()
	function addToStore(e) {
		e.preventDefault()
		if (birthDay === "") {
			setBirthDayMsg(true)
		}
		else {
			setBirthDayMsg(false)
			dispatch({
				type: "BIRTHDAY_DATA",
				payload: {
					dob: birthDay
				}
			})
			navigate("/agreement")
		}

	}
	return (
		<div className="birthday-wrapper">
			<div className="birthday-title">
				<h2>What’s your date of birth?</h2>
			</div>
			<div className="personal-form">
				<form action="">

					<div className="input-block">
						<label htmlFor="birthday">Your Birthday</label>
						<input type="date" id="birthday" min="1915-01-01" max="2022-06-20" onChange={(e) => {
							setBirthDay(e.target.value)
						}} />
						<span className="error-msg">{birthDayMsg ? "Enter birthday data" : ""}</span>
						<div className="birth-example">MM/DD/YYYY</div>
					</div>


					<div className="button">
						<Button title="continue" action={addToStore} />
					</div>
				</form>
			</div>
		</div>
	)
}
