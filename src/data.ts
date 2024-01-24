import { faker } from "@faker-js/faker";

function fakeData() {
	const userName = faker.person.fullName();
	const userRole = faker.person.jobType();
	const about = faker.lorem.paragraphs();
	const avatar = faker.image.avatarLegacy();
	const posts = [
		{
			avatar: faker.image.avatarLegacy(),
			comments: faker.number.int({ min: 10, max: 100 }),
			likes: faker.number.int({ min: 10, max: 100 }),
            post: faker.lorem.paragraphs(),
			image: faker.image.urlLoremFlickr({
				width: 480,
				height: 640,
				category: "nature",
			}),
		},
		{
			avatar: faker.image.avatarLegacy(),
			comments: faker.number.int({ min: 10, max: 100 }),
			likes: faker.number.int({ min: 10, max: 100 }),
			image: faker.image.urlLoremFlickr({
				width: 480,
				height: 640,
				category: "paris",
			}),
			post: faker.lorem.paragraphs(),
		},
		{
			avatar: faker.image.avatarLegacy(),
			comments: faker.number.int({ min: 10, max: 100 }),
			likes: faker.number.int({ min: 10, max: 100 }),
			image: faker.image.urlLoremFlickr({
				width: 480,
				height: 640,
				category: "abstract",
			}),
			post: faker.lorem.paragraphs(),
		},
        {
			avatar: faker.image.avatarLegacy(),
			comments: faker.number.int({ min: 10, max: 100 }),
			likes: faker.number.int({ min: 10, max: 100 }),
			image: faker.image.urlLoremFlickr({
				width: 480,
				height: 640,
				category: "paris",
			}),
			post: faker.lorem.paragraphs(),
		},
		{
			avatar: faker.image.avatarLegacy(),
			comments: faker.number.int({ min: 10, max: 100 }),
			likes: faker.number.int({ min: 10, max: 100 }),
			image: faker.image.urlLoremFlickr({
				width: 480,
				height: 640,
				category: "abstract",
			}),
			post: faker.lorem.paragraphs(),
		},
	];

	return { userName, userRole, about, avatar, posts };
}


export { fakeData };
