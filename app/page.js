import Image from 'next/image';

import QuestionList from './ui/question-list';

const Page = () => {
	return (
		<div>
			<Image
				src="/images/background-pattern-mobile.svg"
				alt="background"
				width={375}
				height={232}
			/>
			<div>
				<div>
					<Image
						src="/images/icon-star.svg"
						alt="icon star"
						width={40}
						height={41}
					/>
					<h1>FAQs</h1>
				</div>
				<div>
					<QuestionList />
				</div>
			</div>
		</div>
	);
};

export default Page;
