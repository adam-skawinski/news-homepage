import React from 'react';
import newContent from '../../data/newContent';

import './newConteiner.scss';

const NewConteiner = () => {
    return (
        <div className='new-conteiner' >
            <div className="header-conteiner">
                New
            </div>
            <div className="content">

            {newContent.map((item) => (
                <div key={item.id} className="item-new">
                    <div className="header">{item.header}</div>
                    <div className="note">{item.note}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default NewConteiner
