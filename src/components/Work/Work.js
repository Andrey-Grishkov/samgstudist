import { replaceSpace } from '../../utils/functions'

export const Work = ({ work, setWorkLink, setMaterialId }) => {
  return (
    <div
      onClick={() => {
        setMaterialId(work.id);
        setWorkLink(replaceSpace(work.material_title));
      }}
    >
      {work.material_title}
    </div>
  );
};
