import Image from 'next/image';

import QuestionList from './ui/question-list';

const Page = () => {
	return (
		<div className="bg-LightPink min-h-screen overflow-y-s	scroll relative flex justify-center items-center">
			<Image
				className="absolute top-0 xs:hidden"
				src="/images/background-pattern-mobile.svg"
				alt="background"
				width={375}
				height={232}
			/>
			<Image
				className="absolute top-0 hidden xs:block"
				src="/images/background-pattern-desktop.svg"
				alt="background"
				width={1440}
				height={320}
			/>
			<div className="bg-white m-6 rounded-lg p-8 space-y-6 z-10">
				<div className="flex space-x-8">
					<Image
						src="/images/icon-star.svg"
						alt="icon star"
						width={40}
						height={41}
					/>
					<h1 className="text-3xl font-bold">FAQs</h1>
				</div>
				<QuestionList />
			</div>
		</div>
	);
};

export default Page;
