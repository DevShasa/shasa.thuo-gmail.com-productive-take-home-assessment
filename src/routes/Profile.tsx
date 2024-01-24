
import HeaderCard from "../components/HeaderCard";
import { useAppSelector } from "../utils/reduxHooks";
function Profile() {
    const { about, userRole, avatar, userName } = useAppSelector( (state) => state.homepage );

  return (
    <HeaderCard {...{ about, userRole, avatar, userName }} />

  )
}

export default Profile