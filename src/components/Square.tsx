export const Square = ({
  children,
  updateBoard,
  index
}: {
  children: string,
  updateBoard: (index: number) => void,
  index: number
}) => {
  return (
    <button className='square' onClick={() => updateBoard(index)}>
      {children}
    </button>
  )
}