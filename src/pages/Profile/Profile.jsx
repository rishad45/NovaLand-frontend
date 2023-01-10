// import "../../style.scss";
import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i.pinimg.com/564x/f5/df/a2/f5dfa284214a9ea20be893633fea69c5.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pinimg.com/236x/e8/ad/22/e8ad22eda65d89d0c8189da192d7ead8.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <div className="enterContent">
              <span>Jane Doe</span>
              <button>follow</button>
            </div>
          </div>
          <div className="right">
            <MoreVertIcon />
          </div>
        </div>
        {/* <Posts /> */} 
      </div>
    </div>
  );
};

export default Profile;