export const Disciplin = ({ disciplin, setMainContent }) => {
  return (
    <tr
      onClick={() => {
        setMainContent(disciplin);
      }}
    >
      {disciplin}
    </tr>
  );
};
