import "../style/style.css"
export const Checkbox = (props) => {
  const { value, id } = props;
  return (
    <>
      <input type="button" value={value} {...props} className='cursor-pointer w-24 h-6 bg-zinc-400 rounded-md'></input>
    </>
  )
}
