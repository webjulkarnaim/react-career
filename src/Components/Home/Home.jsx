import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import './Home.css'
const Home = () => {
    return (
        <div>
            <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <img 
      src={'/src/assets/images/user.png'}
      className="max-w-sm rounded-lg shadow-2xl" />
      
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
      
    </div>
  </div>
</div>
            </div>
            <Banner></Banner>
            <CategoryList></CategoryList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;