import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: "Elon Musk",
			url: "https://th.bing.com/th/id/OIP.Ytwna6exeC9b8oF9VndlGgHaE7?pid=Api&rs=1"
		},
		{
			name: "Jeff Bezos",
			url: "https://th.bing.com/th/id/OIP.-FKx5bwn2t-rMwQN4pa9kgHaD2?pid=Api&rs=1"
		},
		{
			name: "Ellen Degeneres",
			url: "https://th.bing.com/th/id/OIP.3N4ytqXMrnNunFBTdPvDZwHaEK?pid=Api&rs=1"
		},
	]);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		// setLastDirection(direction);
	}

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	}

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{ people.map((person) => ( 
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				)) }
			</div>

		</div>
	)
}

export default TinderCards