const Label = ({ data, colorPalette }) => {
  return (
    <ul className={'flex w-1/2 flex-col gap-1.5 font-bold uppercase italic tracking-wider text-white text-lg'}>
      {data.map((item, index) => {
        return (
          <li
            key={index}
            style={{ backgroundColor: colorPalette[index] }}
            className={'relative py-1 pl-12 pr-1.5'}
          >
            {item.label}:{' '}{item.value}
          </li>
        )
      })}
    </ul>
  )
}

export default Label;