'use client';

import { useState } from 'react';
import QuestionItem from './question-item';

export default function QuestionWrapper({ questions }) {
	const [openedQuestion, setOpenedQuestion] = useState(null);

	function toggleQuestion(question) {
		const isOpenedNow = question === openedQuestion;

		if (isOpenedNow) {
			setOpenedQuestion(null);
		} else {
			setOpenedQuestion(question);
		}
	}

	return (
		<>
			{questions.map((question) => (
				<QuestionItem
					key={question.question}
					question={question.question}
					answer={question.answer}
					toggleQuestion={() => toggleQuestion(question.question)}
					isOpened={openedQuestion === question.question}
				/>
			))}
		</>
	);
}
