import ProfileData from "@/data/profileData"

export default function Intro() {
    return (
        <div>
            <p>
                Hello World my name is {ProfileData.name}. I'm currently a {ProfileData.experience.title}, working on becoming a {ProfileData.title}. I learned programminng skills such as {ProfileData.bootCampSkills} from Nucamp's FullStack coding Bootcamp. Outside of that i have skills in {ProfileData.learnedSkills} I'm pleased you found my page, and hope you enjoy the site! 
            </p>
        </div>
    )
}