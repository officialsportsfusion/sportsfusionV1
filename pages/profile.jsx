import Image from "next/image";
import Img from "/images/football.png";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import Head from "next/head";
import { useState } from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Page({userData}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const{email, username, id, avatar} = userData
  console.log(id)
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin');
    }
  })

  const uploadPhoto = async () => {
    if (!selectedFile) {
      return; // No file selected, handle accordingly
    }
  
    const formData = new FormData();
    formData.append('profilePicture', selectedFile);
  
    try {
      const response = await fetch(`https://teal-worried-adder.cyclic.app/v1/upload/avatar/${id}`, {
        method: 'POST',
        body: formData,
      });
      const data = response.json()
      console.log(data)

      if (response.ok) {
        // Picture uploaded successfully, handle accordingly
      } else {
        
        // Picture upload failed, handle accordingly
      }
    } catch (error) {
      console.error('Error occurred during picture upload:', error);
    }
  };
  
  const handleUpload = (event) => {
    event.preventDefault();
    uploadPhoto();
  };


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
    <>
      <Head>
        <title>My Profile | SportsFusion</title>
      </Head>
      {
        status === 'authenticated' ?
          <>
            <div className="bg-[#00070d]">
              <div className="app-container max-w-2xl relative pt-4 pb-14 md:pb-6">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <h1 className="font-extrabold text-3xl text-center w-full sm:w-auto">My Account</h1>
                  <button className="absolute bg-gradient-to-tr from-app-sky  to-app-orange py-2 px-6 rounded-lg right-0 bottom-0 sm:relative">BECOME A TIPSTER</button>
                </div>
                <div className="flex justify-center item-center mt-8 m-auto rounded-full overflow-hidden h-52 aspect-square">
                  <Image
                    src={Img}
                    alt="my-profile-pic"
                    className="h-full w-full object-cover"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
              <form onSubmit={handleUpload}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setSelectedFile(event.target.files[0])
                  }
                />
                <button type="submit">Upload</button>
              </form>

              <div className="app-container flex justify-center items-center gap-8 pt-8 pb-4 max-w-2xl">
                <p>Followers: 25</p>
                <p>Following: 205</p>
              </div>

              <div className="app-container max-w-xl flex justify-between pt-6">
                <Analytic name="Profits" value="$ 0.00" />
                <Analytic name="Rank" value="User" />
                <Analytic
                  name="Fund"
                  value="Fund/Withdraw"
                  href="/profile/fund"
                  clickable
                />
              </div>

              <div className="bg-app-orange mt-8 py-2 px-4 max-w-2xl mx-auto">
                <p>Todays bet</p>
              </div>

              <Table data={data} />

              <div className=" border-solid border-b-[#4E443D] border-b-[2px] py-6 max-w-2xl mx-auto">
                <ul className="max-w-2xl app-container">
                  <li> Username:{username}</li>
                  
                  <li className="mt-4"> Email : {email}</li>
                </ul>
              </div>

              <div className="border-b-[#4E443D] border-b-[2px] py-4 max-w-2xl mx-auto">
                <div className="app-container">
                  <h2 className="text-app-orange-light text-2xl font-bold">Edit</h2>
                  <ul>
                    <li className="pt-3"> Change Username</li>
                    <li className="pt-2"> Change Password</li>
                  </ul>
                </div>
              </div>

              <div className="border-b-[#4E443D] border-b-[2px] py-4 max-w-2xl mx-auto">
                <div className="app-container">
                  <button className="text-app-orange-light text-xl font-bold w-full text-left inline-flex items-center">
                    History <FaAngleDown className="ml-4 pt-1" fontSize={28} />
                  </button>
                  <div>
                    <History />
                  </div>
                </div>
              </div>

              <div className="max-w-2xl py-4 mx-auto">
                <div className="app-container">
                  <button className="text-2xl" onClick={()=> signOut()}>Log Out</button>
                </div>
              </div>
            </div>
          </> :
          <div>
            <p>Loading...</p>
          </div>
      }
    </>
  )
}

const Table = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto border-b-[#4E443D] border-b-solid border-b-[2px] pb-8">
      <table className="w-full text-xs border-collapse min-[540px]:text-sm sm:text-base ">
        <thead>
          <tr className="text-app-orange  w-full border-b-solid border-b-[#4E443D] border-b-[2px]">
            <th className="">Date</th>
            <th className="py-2 pl-1">Event</th>
            <th className=" md:py-2  pl-1">Status</th>
            <th className=" md:py-2  pl-1">Odds</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>

        <tbody>
          {data && data.length !== 0
            ? data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-1 px-[2px] text-center">
                    <p className="inline-flex flex-col min-[420px]:text-md">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </p>
                  </td>

                  <td className="p-1 text-center max-w-[12rem]">
                    <p className="inline-flex flex-col ml-1 min-[420px]:text-md">
                      {item.event.match}
                    </p>
                  </td>

                  <td className="p-1 text-center max-w-[12rem]">
                    <p className="inline-flex flex-col ml-1 min-[420px]:text-md">
                      {item.bettingType.odd}
                    </p>
                  </td>

                  <td className="pl-2 text-center">
                    <p className="inline-flex flex-col  min-[420px]:text-sm">
                      <span>{item.bettingType.odd}</span>
                      <span>{item.bettingType.duration}</span>
                    </p>
                  </td>

                  <td className="text-center">
                    <Pill>{item.price}</Pill>
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

const Pill = ({ children }) => {
  return (
    <button className="bg-app-orange rounded-full py-1 px-4 sm:px-5 md:px-6">
      ${children}
    </button>
  );
};

const Analytic = ({ name, value, clickable, href }) => {
  return (
    <div className="text-center w-full px-1 sm:px-2 md:px-4">
      <p className="text-app-orange-thick">{name}</p>
      {clickable ? (
        <Link
          href={href}
          className="bg-app-orange-light py-2 px-3 rounded-3xl text-app-black inline-block w-full text-sm sm:text-md"
        >
          {value}
        </Link>
      ) : (
        <button className="bg-app-orange-light py-2 px-3 rounded-3xl text-app-black w-full text-sm sm:text-md">
          {value}
        </button>
      )}
    </div>
  );
};

const History = () => {

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type='date' />
        <button>filter by day</button>
      </form>
    </div>
  )
}




export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login', 
        permanent: false,
      },
    };
  }
  console.log(session)
  const userData = {
    username : session.username,
    // avatar : session.avatar,
    email : session.user.email,
    id:session.id

  }

  return {
    props: {
      userData,
    },
  };
}