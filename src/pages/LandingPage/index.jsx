import { DefaultTemplate } from '../../components/DefaultTemplate'
import { BannerSection } from '../../components/sections/BannerSection'
import { AboutMe } from '../../components/sections/AboutMe'
import { Tecnologies } from '../../components/sections/Tecnologies'
import { Projects } from '../../components/sections/Projects'

//header e footer ja estao declarados no DeufaltTemplate

export const LandingPage = () => {
    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <AboutMe />
                <Tecnologies />
                <Projects />
            </DefaultTemplate>
        </>   
    )
} 