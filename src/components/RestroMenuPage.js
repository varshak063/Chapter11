import { Shimmer } from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useRestroMenuHook } from "../utils/useRestroMenuHook";

export const RestroMenuPage = () => {
  //Extracting Restro ID using useParam HOOK
  const { restroId } = useParams();
  const restromenuName = useRestroMenuHook(restroId);

  if (restromenuName === null) return <Shimmer />;

  const { name, cloudinaryImageId, city, cuisines } =
    restromenuName?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restromenuName?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <>
      <div className="p-5">
        <h1 className="font-bold p-2">{name}</h1>
        <img
          className="w-[200]"
          alt="logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h5>{city}</h5>
        <h4>{cuisines.join(" , ")}</h4>
        <h2>Menu</h2>
        <ul className="flex flex-wrap">
          {itemCards?.map((item) => (
            <li className=" h-80 bg-pink-50 m-4 p-4 w-[200]" key={item?.card?.info?.id}>
              <div className="p-2">
                <p className="truncate">{item?.card?.info?.name}</p>
                <p className="menuPrice">Rs-{item?.card?.info?.defaultPrice / 100}</p>
              </div>

              <div>
                <img className="" src={MENU_URL + item?.card?.info?.imageId} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
