export const Square = ({
  children,
  updateBoard,
  index,
  disabled
}: {
  children: string,
  updateBoard: (index: number) => void,
  index: number
  disabled: boolean
}) => {
  return (
    <button
      className='square'
      onClick={() => updateBoard(index)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}