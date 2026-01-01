import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  username: string;
  title: string;
  userRole: string;
};
const ReviewCard = ({ image, username, title, userRole }: Props) => {
  return (
    <div className="w-full lg:w-[60%] mx-auto">
      <Image
        src={image}
        alt="Review Iamage"
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="mt-4 text-xl font-bold text-blue-700 dark:text-white text-center">
        {title}
      </h1>
      <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        ipsam corrupti temporibus sint? Saepe neque tempora quos ea iusto ipsam
        impedit quibusdam hic adipisci minus! Maxime minima voluptas repudiandae
        deserunt.
      </p>

      <div className="mt-8 text-center">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {username}
        </h1>
        <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
          {userRole}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
