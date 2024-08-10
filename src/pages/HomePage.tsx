import LandingImage from "../assets/landing.jpg";
import AppImages from '../assets/appDownload.png';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-green rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Crave It? Get It Delivered!
        </h1>
        <span className="text-xl">Your Next Meal is One Click Away!</span>
      </div>
      <div className="grid md:grid-cols-2 ml-auto gap-5">
        <img src={LandingImage} />
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Speedy Takeaway Orders at Your Fingertips!
          </span>
          <span>
          "Order Faster and Smarter with the FlavorFleet App!
          </span>
          <img src={AppImages} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
