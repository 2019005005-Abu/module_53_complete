
const Link = ({link}) => {
    const {name,path}=link
  return (
    <li className='p-1 mr-12 hover:bg-red-600'>
      <a href={path}>{name}</a>
    </li>
  )
}

export default Link
