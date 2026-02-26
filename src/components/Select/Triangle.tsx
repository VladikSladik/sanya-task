export const Triangle = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        transform: `rotate(${!isOpen ? '0deg' : '180deg'})`,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        transition: '0.3s',
        borderTop: '5px solid black'
      }}
    />
  );
};
