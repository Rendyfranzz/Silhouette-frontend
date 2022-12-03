import "../style/style.css"
export const Checkbox = (props) => {
  const { children } = props;
  return (
    
      <button type="button" {...props} className='cursor-pointer overflow-hidden z-40 w-20 md:w-32 border-solids border-2 mr-4 border-black rounded-sm'>{children}</button> 
  )
}
