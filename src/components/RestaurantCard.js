import { CDN_URL } from "../utils/constants";

// Write CSS using JS obje
export const RestaurantCard = (props) => {
  const { restoData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restoData;
  return (
    <>
      <div className="h-80 bg-pink-50 m-4 p-4 rounded-lg w-[200px] break-words">
        <img
          className=""
          alt="logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold text-red-500 py-2">{name}</h3>
        <h6 className="text-sm py-2">{cuisines.join(",")}</h6>
        <h5 className="font-bold">{avgRating} Stars</h5>
        <h5 className="text-red-400">{sla?.deliveryTime}mins</h5>
      </div>
    </>
  );
};
