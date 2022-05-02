import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App =()=> {
  return (
    <>
      <SectionWrapper 
        title="Your personal store of NFTs. Start to Grow."
        description="Buy, Store, Collect NFTs, Exchange &amp; Earn Crypto. Explore with 10+ million friends using NFT Mall"
        showBtn
        mockupImg = {assets.homeHero}  
        banner="banner"
      />
      <SectionWrapper 
        title="Minimal User Interface Marketplace"
        description="Experience smooth buttery UI of NFT Mall. Smooth constant colors of a fluent UI design."
        mockupImg = {assets.homeCards}  
        reverse
      />
      <Features
        banner ="banner03"
      />
      <SectionWrapper 
        title="Deployment"
        description="NFT Mall is built using Expo which runs natively for all devices."
        mockupImg = {assets.feature}  
        reverse
      />
      <SectionWrapper 
        title="Getting creative to showcase store"
        description="The app contains two screens. The first one lists all NFTs and the second one have the details about specific NFT."
        mockupImg = {assets.mockup}  
        banner = "banner02"
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}> Made with ❤️ by {" "}
          <span className="bold"> Engineers </span>
        </p>
      </div>
    </>
  );
}

export default App;
