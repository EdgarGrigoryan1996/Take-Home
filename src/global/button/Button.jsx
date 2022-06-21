import "./Button.css"

export default function Button({ title, action }) {
	return (
		<button className="btn" onClick={action}>{title}</button>
	)
}
