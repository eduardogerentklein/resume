export const illustrationTypes = {
  'programming': {
    src: '../images/programming.svg',
    alt: 'Programming image'
  }
} 

export const Illustration = ({ name, height = '264px' }) => {
  const illustration = illustrationTypes[name]
  return (
    <>
      <div className="hidden md:flex md:justify-end illustration-box">
        <img src={illustration.src} alt={illustration.alt} />
      </div>
      <style jsx>
        {
          `
          .illustration-box {
            height: ${height};
          }
          `
        }
      </style>
    </>
  )
}