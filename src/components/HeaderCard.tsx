import { MdAnalytics } from "react-icons/md";

type Props ={
    about:string,
    userRole: string
    avatar: string
    userName: string
}

const HeaderCard = (props:Props) => {
	const { about, userRole, avatar, userName } = props;
	return (
		<div className="header_container">
			<div className="header_contents">
				<div className="header_content_avatarCard">
					<img src={avatar} width={"80px"} height={"80px"} />
					<div className="header_content_bio">
						<span className="header_content_bio_span1">{userName}</span>
						<span className="header_content_bio_span2"><MdAnalytics />{userRole}</span>
					</div>
				</div>
                <p>Welcome</p>
				<p>{about}</p>
			</div>
		</div>
	);
};

export default HeaderCard;
