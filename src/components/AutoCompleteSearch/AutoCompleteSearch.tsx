import React from 'react';
import { IAutoCompleteProps } from '@types';
import { useOutsideClick } from '@hooks';
import { useNavigate } from 'react-router';

export const AutoCompleteSearch: React.FC<IAutoCompleteProps> = ({
  suggestions,
  focus,
  setSearch,
  search
}) => {
  const { ref, show, setShow } = useOutsideClick({ initialIsVisible: false, setSearch });

  const navigate = useNavigate();

  if (suggestions === undefined) return <div></div>;

  const filter =
    search.length !== 0
      ? suggestions.filter((suggest) =>
          suggest.toLowerCase().trim().includes(search.toLowerCase().trim())
        )
      : [];

  const onHandlesSearch = (name: string): void => {
    navigate(`/pokemon/${name} `);
  };
  const onHandlesSearchEnter = (event: any, name: string): void => {
    if (event.key === 'Enter') {
      navigate(`/pokemon/${name} `);
    }
  };

  return (
    <div className='auto__complete__component' ref={ref}>
      <input
        type='text'
        className='auto__complete__search'
        placeholder='Search...'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onClick={() => setShow(true)}
        onFocus={() => setShow(true)}
        role='search'
        tabIndex={1}
      />

      {search.length !== 0 ? (
        <div className={show && focus ? 'suggestions__list' : 'none'}>
          {filter?.length === 0 ? (
            <li>Nothing not found</li>
          ) : (
            filter?.map((suggest) => {
              return (
                <li
                  onClick={() => onHandlesSearch(suggest)}
                  onKeyPress={(event) => onHandlesSearchEnter(event, suggest)}
                  key={suggest}
                  role='button'
                  tabIndex={1}
                >
                  {suggest}
                </li>
              );
            })
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
