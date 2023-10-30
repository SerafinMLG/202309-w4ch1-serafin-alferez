import { GentlemanType } from "../model/type"

type Props = {
  gentleman: GentlemanType[];
};
export function Gentleman({gentleman}: Props) {
  return (
      <main className="main">
        <ul className="gentlemen">
          {gentleman.map((item: GentlemanType) => (
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
              <i className="icon gentlemanicon fas fa-check"></i>
              <i className="icon gentlemanicon gentleman__icon--delete fas fa-times"></i>
            </li>
          ))}
        </ul>
      </main>
  
  );
}
