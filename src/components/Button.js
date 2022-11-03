
export const Button = (props) => {
    const {children} = props;
  return (
    <button type="button" {...props} className='w-24 h-6 bg-zinc-400 rounded-md '>{children}</button>
  )
}
