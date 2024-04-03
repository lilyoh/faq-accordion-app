import { promises as fs } from 'fs';

import QuestionWrapper from './question-wrapper';

const QuestionList = async () => {
	const file = await fs.readFile(process.cwd() + '/public/data/data.json', 'utf-8');
	const questions = JSON.parse(file).data;

	return (
		<ul>
			<QuestionWrapper questions={questions} />
		</ul>
	);
};

export default QuestionList;
