import { GentlemanType } from "../model/type"
import { useState } from 'react';


type Props = {
  gentleman: GentlemanType[];
};
export function Gentleman({gentleman}: Props) {
  const [gentlemansList, setGentlemansList] = useState(gentleman);

  const handleClickDelete = (id: number) => {
    const updatedList = gentlemansList.filter(
      (gentleman: GentlemanType) => gentleman.id !== id);
    setGentlemansList(updatedList);
  };
  return (
      <main className="main">
        <ul className="gentlemen">
          {gentlemansList.map((item: GentlemanType) => (
            <li className="gentleman">
              <div className="gentlemanavatar-container">
                <img
                  className="gentlemanavatar"
                  src={item.picture}
                  alt={item.alternativeText}
                />
                <span className="gentlemaninitial">F</span>
              </div>
              <div className="gentlemandata-container">
                <h2 className="gentlemanname">{item.name}</h2>
                <ul className="gentlemandata-list">
                  <li className="gentlemandata">
                    <span className="gentlemandata-label">Profession:</span>
                    {item.profession}
                  </li>
                  <li className="gentlemandata">
                    <span className="gentlemandata-label">Status:</span>{' '}
                    {item.status}
                  </li>
                  <li className="gentlemandata">
                    <span className="gentlemandata-label">Twitter:</span>{' '}
                    {item.twitter}
                  </li>
                </ul>
              </div>
              <i className="icon gentleman__icon fas fa-check"></i>
            <i
              role="button"
              className="icon gentlemanicon gentlemanicon--delete fas fa-times"
              onClick={() => handleClickDelete(item.id)}
            ></i>
            ;
          </li>
        ))}
      </ul>
    </main>
  );

}

