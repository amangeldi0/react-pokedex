import React, {useState} from "react";
import { IAutoCompleteProps } from '@types';
export const AutoCompleteSearch: React.FC<IAutoCompleteProps> = ({suggestions}) => {
    const [search, setSearch] = useState<string>('');
    const [completeShow, setCompleteShow] = useState<boolean>(false)

    const filter = search.length !== 0 ? suggestions?.filter(suggest => suggest.toLowerCase().trim().includes(search.toLowerCase().trim())) : [];


    return(
        <div className='auto__complete__component'>
            <input
                type="text"
                className="auto__complete__search"
                placeholder='Search...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onClick={() => setCompleteShow(true)}
            />




            {
                search.length !== 0 ?
                    <div  className={completeShow ? `suggestions__list` : `suggestions__list none`}>
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