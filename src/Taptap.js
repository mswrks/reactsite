import {ReactComponent as TapSVG} from './media/tap.svg'
import { useState } from 'react';



function Taptap() {
        const [count, setCount] = useState(0);

        function handleClick() {
        setCount(a => a + 1);

        }

    return (
        <>
        <div className='box-tap-svg'>
            <TapSVG className='tap-svg' onClick={handleClick}/>
            <div className='counter'>{count}</div>
        </div>
        </>
    );
}

export default Taptap;
