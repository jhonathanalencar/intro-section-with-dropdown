import heroMobileImg from './assets/image-hero-mobile.png';
import heroDesktopImg from './assets/image-hero-desktop.png';
import databizLogo from './assets/client-databiz.svg';
import audiophileLogo from './assets/client-audiophile.svg';
import meetLogo from './assets/client-meet.svg';
import makerLogo from './assets/client-maker.svg';
import { Header } from './components/Header';

import { 
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroInfo,
  Sponsors,
} from './App.styles';
import { useGlobalContext } from './hooks/useGlobalContext';

export function App(){
  const { isSidebarOpen } = useGlobalContext();

  return(
    <HeroContainer isSidebarOpen={isSidebarOpen}>
      <Header />
      <HeroContent>
        <HeroImage>
          <img src={heroMobileImg} alt="image hero" />
        </HeroImage>

        <HeroInfo>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button type="button">Learn more</button>
          <Sponsors>
            <img src={databizLogo} alt="databiz logo" />
            <img src={audiophileLogo} alt="audiophile logo" />
            <img src={meetLogo} alt="meet logo" />
            <img src={makerLogo} alt="maker logo" />
          </Sponsors>
        </HeroInfo>
      </HeroContent>
    </HeroContainer>
  )
}