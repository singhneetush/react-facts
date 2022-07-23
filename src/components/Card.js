import React from 'react';
import './App.css';
const Card = () => {
	const data = [
		{
			id: 1,
			heading: 'Declarative',
			desc: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.',
		},
		{
			id: 2,
			heading: 'Component-Based',
			desc: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
		},
		{
			id: 3,
			heading: 'Learn Once, Write Anywhere',
			desc: 'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native.',
		},
	];

	const cardItems = data.map((e) => {
		return (
			<div className='Card' key={e.id}>
				<p style={{ fontSize: '2em' }}>{e.heading}</p>
				<p style={{ letterSpacing: '2px', lineHeight: '3em' }}>{e.desc}</p>
			</div>
		);
	});

	return <div className='new'>{cardItems}</div>;
};

export default Card;
