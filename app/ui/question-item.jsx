'use client';

import Image from 'next/image';

const QuestionItem = ({ question, answer, toggleQuestion, isOpened }) => {
	return (
		<li className="mb-4 space-y-6">
			<div
				onClick={toggleQuestion}
				className="cursor-pointer flex justify-between space-x-4"
			>
				<h3 className="font-bold">{question}</h3>
				<Image
					src={isOpened ? '/images/icon-minus.svg' : '/images/icon-plus.svg'}
					alt="icon plus"
					width={30}
					height={31}
				/>
			</div>
			<p className={isOpened ? 'block' : 'hidden'}>{answer}</p>
		</li>
	);
};

export default QuestionItem;
