import HeaderCard from "../components/HeaderCard";
import { useAppSelector } from "../utils/reduxHooks";
import PostCard from "../components/PostCard";

const Homepage = () => {
	const { about, userRole, avatar, userName, posts } = useAppSelector( (state) => state.homepage );

	return (
		<>
			<HeaderCard {...{ about, userRole, avatar, userName }} />
			<div className="homepage_posts_cotnainer">
				<div>
					{posts.map((item, index) => {
						return (
							<PostCard
								avatar={item.avatar}
								comments={item.comments}
								likes={item.likes}
								image={item.image}
								post={item.post}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Homepage;
