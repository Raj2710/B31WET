import './App.css';
import PriceCard from './components/PriceCard';
function App() {
  let data = [
    {
      product:"FREE",
      price:"0",
      user:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subdomain:"Free Subdomain",
      subdomainEnabler:false,
      statusReport:"Monthly Status Reports",
      statusReportEnabler:false
    },
    {
      product:"PLUS",
      price:"9",
      user:"5 User",
      userBold:true,
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subdomain:"Free Subdomain",
      subdomainEnabler:true,
      statusReport:"Monthly Status Reports",
      statusReportEnabler:false
    },
    {
      product:"PRO",
      price:"49",
      user:"Unlimited User",
      userBold:true,
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subdomain:"Unlimited Free Subdomains",
      subdomainEnabler:true,
      subdomainBold:true,
      statusReport:"Monthly Status Reports",
      statusReportEnabler:true
    }
  ]
  
  return <>
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
        {
          data.map((e)=>{
            return <PriceCard data={e}/>
          })
        }
    </div>
  </div>
</section>

  </>
}

export default App;
