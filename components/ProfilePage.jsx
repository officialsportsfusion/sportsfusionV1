import Image from "next/image";
import Img from "/assets/image.png";

export function Profile() {
  const data = [
    {
      date: "28-06-23",
      time: "03:45",
      event: {
        match: "Pafos FC - Apollon Limassol",
        league: "Cyprus 1-1, Division Championship Playoff",
      },
      bettingType: { odd: "Fixed Odd", duration: "Full Time" },
      tipster: { name: "Jaxub Dabrowski", rank: "Premium Tipster" },
      price: "980",
    },
    {
      date: "29-06-23",
      time: "11:45",
      event: { match: "Auda -FS Metta/LU", league: "Latvia 1-Virisliga" },
      bettingType: { odd: "Asian Handicap", duration: "Full Time" },
      tipster: { name: "Jaxub Dabrowski", rank: "Premium Tipster" },
      price: "560",
    },
    {
      date: "01-07-23",
      time: "05:15",
      event: { match: "Tombense FC - Guarani", league: "Brasil 2 - Serie B" },
      bettingType: { odd: "Fixed Odd", duration: "Full Time" },
      tipster: { name: "Zahar Alekseeva", rank: "Premium Tipster" },
      price: "980",
    },
    {
      date: "05-07-23",
      time: "03:30",
      event: {
        match: "Gudus FC - Enyimba FC",
        league: "Dudely Division, Championship Playoff",
      },
      bettingType: { odd: "Fixed Odd", duration: "Full Time" },
      tipster: { name: "Dudely Codez", rank: "Premium Tipster" },
      price: "325",
    },
  ];

  return (
    <div className="app-container flex justify-center">
      <div className="w-full lg:w-10/12">
        <div className="flex justify-between">
          <h2 className=" hidden text-white text-center text-4xl font-bold lg:contents">
            My Account
          </h2>
          <div className="hidden lg:contents">
            <button className="bg-gradient-to-r from-app-sky  to-app-orange p-2 rounded-lg cursor-pointer ">
              BECOME A TIPSTER
            </button>
          </div>
        </div>
        <h2 className="text-white text-center text-4xl font-bold lg:hidden">
          My Account
        </h2>
        <div className="flex justify-center item-center mt-8">
          <Image src={Img} alt="my-profile-pic" className="rounded-full" />
        </div>
        <div className=" flex justify-end items-right mt-4">
          {" "}
          <button className=" bg-gradient-to-r from-app-sky  to-app-orange p-2 rounded-lg cursor-pointer lg:hidden">
            BECOME A TIPSTER
          </button>
        </div>

        <div className="flex justify-center item-center mb-4">
          <div className="flex justify-between mt-8 w-8/12 md:w-4/12">
            <p>Followers: 25</p>
            <p>Following: 205</p>
          </div>
        </div>

        <div className="lg:flex justify-center">
          <div className="flex justify-between mt-10 lg:w-9/12">
            <div className="text-center">
              <p className="text-app-orange-thick">Profits</p>
              <button className="bg-app-orange-light p-2 rounded-3xl text-app-black font-medium">
                {" "}
                $ 0.00
              </button>
            </div>
            <div className="text-center">
              <p className="text-app-orange-thick">Rank</p>
              <button className="bg-app-orange-light p-2 w-20 rounded-3xl text-app-black font-medium">
                {" "}
                User
              </button>
            </div>
            <div className="text-center">
              <p className="text-app-orange-thick"> Fund</p>
              <button className="bg-app-orange-light p-2 rounded-3xl text-app-black font-medium">
                Fund/Withdraw
              </button>
            </div>
          </div>
        </div>

        <div className="bg-app-orange mt-8 py-2 px-4">
          <p>Todays bet</p>
        </div>
        <Table data={data} />

        <div className="mt-8 border-b-[#4E443D] border-b-[2px] py-4">
          <ul>
            <li> Username : JesseJay</li>
            <li className="mt-4"> Email : JesseJay@gmail.com</li>
          </ul>
        </div>

        <div className=" border-b-[#4E443D] border-b-[2px] py-2">
          <p className="text-app-orange-light text-2xl font-bold">Edit</p>
          <ul>
            <li className="mt-2"> Change Username</li>
            <li className="mt-4"> Change Password</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 py-4  border-b-[#4E443D] border-b-[2px]">
            History
          </p>
          <p className="text-2xl">Log Out</p>
        </div>
      </div>
    </div>
  );
}

const Table = ({ data }) => {
  return (
    <div className="">
      <table className="w-full bg-[#1E2124] text-xs border-collapse min-[540px]:text-sm sm:text-base ">
        <thead>
          <tr className="text-app-orange  w-full border-b-solid border-b-[#4E443D] border-b-[1px]">
            <th className="">Date</th>
            <th className="py-2 pl-1">Event</th>
            <th className=" md:py-2  pl-1">Status</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>

        <tbody>
          {data && data.length !== 0
            ? data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="border-b-solid border-b-[#4E443D] border-b-[1px] last-of-type:border-none"
                >
                  <td className="py-1 px-[2px] text-center border border-[#4E443D]">
                    <p className="inline-flex flex-col min-[420px]:text-md">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </p>
                  </td>

                  <td className="p-1 text-center border border-[#4E443D] max-w-[12rem]">
                    <p className="inline-flex flex-col ml-1 min-[420px]:text-md">
                      <span className="text-[#AAAAAA]">
                        {item.event.match}
                      </span>
                    </p>
                  </td>

                  <td className="pl-2 text-center  border border-[#4E443D] ">
                    <p className="inline-flex flex-col  min-[420px]:text-sm">
                      <span>{item.bettingType.odd}</span>
                      <span>{item.bettingType.duration}</span>
                    </p>
                  </td>

                  <td className="text-center border border-[#4E443D]">
                    <Button>{item.price}</Button>
                  </td>
                </tr>
              );
            })
            : null}
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ children }) => {
  return (
    <button className="bg-app-orange rounded-full py-1 px-4 sm:px-5 md:px-6">
      ${children}
    </button>
  );
};
