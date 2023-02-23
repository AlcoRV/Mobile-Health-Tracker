import React from "react";
import BackButton from "../components/BackButton";
import MainTemplateBkg from "../components/MainTemplateBkg";
import ProfileForm from "../components/Profile/ProfileForm";


const ProfileScreen = () => {
    return(
        <MainTemplateBkg>
            <BackButton/>
            <ProfileForm />
        </MainTemplateBkg>
    );
};

export default ProfileScreen;
