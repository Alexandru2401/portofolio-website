import HeroSection from "../components/HeroSection"
import MySkill from "../components/MySkills"
import AboutMe from "../components/AboutMe"
import MyPortofolio from "../components/projects-components/MyPortofolio"
import FirstProjects from "../components/projects-components/FirstProjects"
import ContactMe from "../pages/ContactMe"
import Future from "../components/Future"
export default function Home (){
    return (
        <>
            <HeroSection />
            <MySkill/>
            <AboutMe/>
            <Future/>
            <MyPortofolio/>
            <ContactMe/>
        </>
    )
}