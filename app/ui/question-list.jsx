import { promises as fs } from 'fs';

import QuestionItem from './question-item';

const QuestionList = async () => {
	const file = await fs.readFile(process.cwd() + '/public/data/data.json', 'utf-8');
	const data = JSON.parse(file).data;

	return (
		<ul>
			{data.map((question) => (
				<QuestionItem
					key={question.question}
					question={question.question}
					answer={question.answer}
				/>
			))}
		</ul>
	);
};

export default QuestionList;
