import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../utils/reduxHooks";
import { fetchHomepageData } from "../redux/HomepageSlice";
import { useEffect } from "react";
import { MdFace } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchHomepageData())
    },[])

    const navigate = useNavigate()
	return (
			<div className="layout">
				<div className="layout_sidebar">
                    <div className="layout_sidebar_container">
                        <button onClick={()=> navigate("/homepage")}>
                            <MdFace />
                            Home
                        </button>
                        <button  onClick={()=> navigate("/profile")}>
                            <IoHome />
                            Profile
                        </button>
                    </div>
                </div>
				<div className="layout_main">
					<Outlet />
				</div>
			</div>
	);
};

export default MainLayout;
