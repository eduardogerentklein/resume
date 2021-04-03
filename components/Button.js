const Button = ({ children, onClick }) => {
  return (
    <button className="text-gray-600" onClick={onClick}>
      { children }
    </button>
  )
}

export default Button
      