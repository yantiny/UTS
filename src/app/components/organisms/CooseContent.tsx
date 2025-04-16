'use client';

import ChooseCard from '../molecules/ChooseCard';

export default function ChooseContent() {
  const chooseItems = [
    {
      title: 'Luxury facilities',
      description:
        'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    },
    {
      title: 'Affordable Price',
      description:
        'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.',
    },
    {
      title: 'Many Choices',
      description:
        'We provide many unique workspace choices so that you can choose the workspace to your liking.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
      {chooseItems.map((item, index) => (
        <ChooseCard key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}
