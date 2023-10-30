import { Info } from '../../components/info';
import '../../css/style.css'
import { Gentleman } from '../gentleman';
import { gentleman } from '../../data/repo';

export function App() {
  const title = 'The pointing gentlemen';
  const subtitle = 'gentlemen pointing at you';
  return (
    <div>
      <Info title={title} subtitle={subtitle}></Info>
      <Gentleman gentleman={gentleman}></Gentleman>
    </div>

  )
}
