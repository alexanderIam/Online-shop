import React, { useRef, useEffect, useState } from 'react'
import propTypes from './props';
import style from './style.module.css';

MinMax.propTypes = propTypes;

function MinMax({ min = 1, max=10, onClick}){
	let [current, setCurrent] = useState(1);
    let inp = useRef();

    let applyCurrent = (num) => {
        const validNum = Math.max(min, Math.min(max, num));
        inp.current.value = validNum;
        setCurrent(validNum);
		onClick(validNum);
    }

	function onKeyPress(e){
		if(e.key === 'Enter'){
			parseCurrentStr(e);
		}
	}

	function parseCurrentStr(){
		let num = parseInt(inp.current.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);
	
	useEffect(() => {
		inp.current.value = current;
	}, [ current ]);

	return <div>
		<button className="btn selected" type="button" onClick={ dec }>-</button>
		<input 
			ref={inp}
			type="text" 
			className={style.inp}
			defaultValue={current} 
			onBlur={parseCurrentStr} 
			onKeyDown={onKeyPress}
		/>
		<button className="btn selected" type="button" onClick={ inc }>+</button>
	</div>
}

export default MinMax;
