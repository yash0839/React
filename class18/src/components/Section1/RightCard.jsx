import React from 'react';
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent';
import '../../index.css'

const RightCard = (props) => {
    return (
        <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
            <img className='h-full object-cover' src={props.img} alt="" />

            <RightCardContent tag={props.tag} id={props.id} />
        </div>
    );
}

export default RightCard;
