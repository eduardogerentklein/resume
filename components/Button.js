const Button = ({ children, onClick }) => {
  return (
    <button className="text-gray-600 dark:text-gray-300" onClick={onClick}>
      { children }
    </button>
  )
}

export default Button
      