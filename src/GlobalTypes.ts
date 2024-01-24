export interface IuserLogin {
	email: string;
	password: string;
}

export interface Iposts {
	avatar: string;
	comments: number;
	likes: number;
	post: string;
	image: string;
}

export interface Idata {
	userName: string;
	userRole: string;
	about: string;
	avatar: string;
	posts: Iposts[];
}
