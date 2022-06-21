import { useState } from "react"
import Button from "../../global/button/Button"
import { useDispatch } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import "./Personal.css"

export default function Personal() {
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const [firstName, setName] = useState("")
	const [lastName, setSurName] = useState("")
	const [email, setEmail] = useState("")

	const [nameMsg, setNameMsg] = useState(false)
	const [surnameMsg, setSurnameMsg] = useState(false)
	const [emailMsg, setEmailMsg] = useState(false)

	function validate() {
		let status = true
		if (firstName.length < 3 || firstName.length > 50) {
			status = false
			setNameMsg(true)
		}
		else {
			setNameMsg(false)
		}
		if (lastName.length < 3 || lastName.length > 50) {
			status = false
			setSurnameMsg(true)
		}
		else {
			setSurnameMsg(false)
		}

		if (!validateEmail(email)) {
			status = false
			setEmailMsg(true)
		}
		else {
			setEmailMsg(false)
		}



		if (status) {
			return true
		}
		else {
			return false
		}
	}

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	function addToStore(e) {
		e.preventDefault()
		const status = validate()
		if (status) {
			dispatch({
				type: "PERSONAL_DATA",
				payload: {
					firstName,
					lastName,
					email
				}
			})
			navigate("/dob")
		}
		else {
			alert("error")
		}



	}

	return (
		<div className="personal-wrapper">
			<div className="personal-title">
				<h2>Create Your Account</h2>
			</div>
			<div className="personal-form">

				<form action="">
					<div className="input-block">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={(e) => {
							setName(e.target.value)
						}} />
						<span className="error-msg">{nameMsg ? "Enter valid name" : ""}</span>
					</div>

					<div className="input-block">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={(e) => {
							setSurName(e.target.value)
						}} />
						<span className="error-msg">{surnameMsg ? "Enter valid surname" : ""}</span>
					</div>

					<div className="input-block">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" onChange={(e) => {
							setEmail(e.target.value)
						}} />
						<span className="error-msg">{emailMsg ? "Enter valid email" : ""}</span>
					</div>
					<div className="button">
						<Button title="continue" action={addToStore} />
					</div>
				</form>

			</div>
		</div>
	)
}
