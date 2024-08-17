import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";

import RecipeCard from "../components/RecipeCard";

import { useAppSelector } from "../store/hooks";

const Home = () => {
  const trending = useAppSelector((state) => state.recipes.trending);
  const featured = useAppSelector((state) => state.recipes.featured);
  const top = useAppSelector((state) => state.recipes.top);
  const seasonal = useAppSelector((state) => state.recipes.seasonal);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    centerPadding: "16px",
  };

  return (
    <>
      {/* Trending Slider */}
      <Slider {...settings}>
        {trending?.items?.map((item, i) => (
          <RecipeCard key={i} type="carousel" recipe={item} tag={trending.category} />
        ))}
      </Slider>
      <div className="row">
        {/* Featured */}
        <div className="col-md-4">
          <h2>Featured</h2>
          {featured && featured.item && <RecipeCard type="featured" recipe={featured.item} />}
        </div>
        {/* Popular this week */}
        <div className="col-md-4">
          <h2>
            Popular This Week <FaArrowRightLong />
          </h2>
          {top?.items?.slice(0, 5).map((item, i) => (
            <RecipeCard key={i} type="list" recipe={item} />
          ))}
        </div>
        {/* Popular this week */}
        <div className="col-md-4">
          <h2>
            {seasonal?.name} <FaArrowRightLong />
          </h2>
          {seasonal?.items?.slice(0, 5).map((item, i) => (
            <RecipeCard key={i} type="list" recipe={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
