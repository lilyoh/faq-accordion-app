'use client';

import { useState } from 'react';

import clsx from 'clsx';

import Image from 'next/image';

const QuestionItem = () => {
	const [showAnswer, setShowAnswer] = useState(false);

	function handleShowAnswer() {
		setShowAnswer(!showAnswer);
	}

	return (
		<li>
			<div>
				<h3 onClick={handleShowAnswer}>QUESTION</h3>
				<button>
					<Image
						src={showAnswer ? '/images/icon-minus.svg' : '/images/icon-plus.svg'}
						alt="icon plus"
						width={30}
						height={31}
					/>
				</button>
			</div>
			<p className={clsx({ block: showAnswer === true, hidden: showAnswer === false })}>ANSWER</p>
		</li>
	);
};

export default QuestionItem;
