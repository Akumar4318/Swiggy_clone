import Card from "./Card";

const RestINcity = ({ data }) => {
  return (
    <div className="mt-3">
      <h2 className="font-giloryExtraBold text-[24px] mb-5">
        Restaurants with online food delivery in Delhi
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((item) => (
            <Card
              key={item.info.id}
              name={item.info.name}
              rating={item.info.avgRating}
              img={item.info.cloudinaryImageId}
              cuisines={item.info.cuisines}
              area={item.info.areaName}
              time={item.info.sla.slaString}
            />
          ))}
      </div>
    </div>
  );
};

export default RestINcity;
