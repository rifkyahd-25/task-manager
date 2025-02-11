

export default function Button({children, ...props}) {
  return (
    <button className='px-4 py-2 text-xs md:text-base rounded-md bg-primary-100 text-white hover:bg-primary-600 hover:text-stone-100' {...props}>
    {children}
    </button>
  )
}
