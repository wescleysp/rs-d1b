import { useContext } from 'react';

import '../styles/SideBar.scss';

import MovieContext from '../context/moviesContext'
import { Button } from '../components/Button';

export function SideBar() {

  const { genres, selectedGenreId, handleClickButton } = useContext(MovieContext);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}