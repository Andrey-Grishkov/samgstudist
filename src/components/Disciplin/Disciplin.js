import { useNavigate } from "react-router-dom";

export const Disciplin = ({ disciplin }) => {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate("/works-list");
      }}
    >
      {disciplin}
    </tr>
  );
};
