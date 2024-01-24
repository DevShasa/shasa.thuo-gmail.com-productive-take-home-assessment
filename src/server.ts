import { createServer } from "miragejs";
import { fakeData } from "./data";

const APIKEY = "c0082183-35d6-4d39-ac7b-819c546c3b73"
const SECRETKEY = "ecf3ff4a-78d8-4362-9824-3fd272bb3499"

export const startMirageServer = () => {
	createServer({

		routes() {
			this.post("/login", (schema, request) => {
				const { email, password } = JSON.parse(request.requestBody);

                if(email && password){
                    return {
                        api_key: APIKEY,
                        secret_key: SECRETKEY,
                        email,
                    };
                }else{
                    return {error: "Invalid credentials"}
                }

			});
            this.get("/homepagedata", (schema, request)=>{
                const headers = request.requestHeaders
                const {api_key, secret_key} = headers
                if(api_key === APIKEY && secret_key === SECRETKEY){
                    return {...fakeData()}

                }else{
                    return {error:"Not Authorised"}
                }

            })
		},
	});
};