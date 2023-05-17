import { Card, Rate, Typography } from "antd";

type props = {
  image: string;
  breed: string;
  playfulness: number;
  grooming: number;
};
const CatCard = ({ image, breed, playfulness, grooming }: props) => {
  return (
    <Card
      hoverable
      className="flex flex-col justify-between sm:w-full md:w-1/3 lg:w-1/4 flex-1 min-w-[300px]"
      //   style={{
      //     width: "20%",
      //     maxHeight: "10%",
      //     display: "flex",
      //     flexDirection: "column",
      //     justifyContent: "space-between",
      //   }}
    >
      <img
        style={{ height: "300px", width: "100%", objectFit: "cover" }}
        src={image}
      />
      <div className="flex flex-col gap-2 items-end">
        <Typography className="font-bold text-lg">{breed}</Typography>
        <div className="flex flex-row gap-4 items-center">
          <Rate disabled defaultValue={playfulness} />
          <Typography>PLAYFULNESS</Typography>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <Rate disabled defaultValue={grooming} />
          <Typography>GROOMING TIME</Typography>
        </div>
      </div>
    </Card>
  );
};

export default CatCard;
