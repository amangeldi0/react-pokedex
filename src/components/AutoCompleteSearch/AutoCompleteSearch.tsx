import React, { useState } from "react";
import { IAutoCompleteProps } from '@types';
import { useOutsideClick } from "@hooks";

export const AutoCompleteSearch: React.FC<IAutoCompleteProps> = ({suggestions}) => {
    const [search, setSearch] = useState<string>('');


    const {ref, show, setShow} = useOutsideClick({initialIsVisible: false, setSearch});

    if (suggestions?.length === 1){
        throw new Error('Some problems with fetching name');
    }

    const filter = search.length !== 0 ? suggestions?.filter(suggest =>
        suggest.toLowerCase().trim()
            .includes(search.toLowerCase().trim())) : [];

    return(
        <div className='auto__complete__component' ref={ref}>
            <input
                type="text"
                className="auto__complete__search"
                placeholder='Search...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onClick={() => setShow(true)}
            />


            {
                search.length !== 0 ?
                    <div className={show ? 'suggestions__list' : 'none'} >
                        {
                            filter?.length === 0 ?
                                <li>Nothing not found</li>
                                :
                            filter?.map((suggest) => {
                                return <li key={suggest}>{suggest}</li>;
                            })
                        }
                    </div>
                    : ''

            }
        </div>
    );



};