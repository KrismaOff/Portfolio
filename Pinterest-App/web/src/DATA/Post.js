import { News } from '../db'

const Post = {
  num0: {
    tags: "бюст, череп, золото",
    title: "Бюст",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YpZ2T",
    link: "https://clck.ru/YpZ2T",
    id: "GHq1"
  },
  num1: {
    tags: "череп, рога, фотография",
    title: "фотография черепа",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yj6tw",
    link: "https://clck.ru/Yj6tw",
    id: "FpPL"
  },
  num2: {
    tags: "статуя, череп, золото",
    title: "статуя с черепом",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yj6w6",
    link: "https://clck.ru/Yj6w6",
    id: "DllD"
  },
  num3: {
    tags: "статуя, человек, золото",
    title: "статуя с нимбом",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yj7Ak",
    link: "https://clck.ru/Yj7Ak",
    id: "DoPP"
  },
  num4: {
    tags: "статуя, человек, бой",
    title: "статуя и золотое сечение",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yj7DZ",
    link: "https://clck.ru/Yj7DZ",
    id: "PTuY"
  },
  num5: {
    tags: "существо, божество, крылья",
    title: "божество (для кого-то)",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yj7Fm",
    link: "https://clck.ru/Yj7Fm",
    id: "FkLL"
  },
  num6: {
    tags: "змея, корона, золото",
    title: "змея в короне",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yj7Se",
    link: "https://clck.ru/Yj7Se",
    id: "Ddde"
  },
  num7: {
    tags: "бюст, череп, золото",
    title: "бюст с золотым черепом",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YjkTk",
    link: "https://clck.ru/YjkTk",
    id: "qUYT"
  },

  num8: {
    tags: "бюст, руины, голова",
    title: "бюст и руины",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YjkYd",
    link: "https://clck.ru/YjkYd",
    id: "SDjU"
  },
  num9: {
    tags: "человек, робот, кибер",
    title: "роботизировання проповедник",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yqwra",
    link: "https://clck.ru/Yqwra",
    id: "PotL"
  },
  num10: {
    tags: "робот, кибер, технологии",
    title: "робот",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yjkfe",
    link: "https://clck.ru/Yjkfe",
    id: "tWTH"
  },
  num11: {
    tags: "крокодил, животное, клыки",
    title: "крокодил",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yjkk5",
    link: "https://clck.ru/Yjkk5",
    id: "FnIJ"
  },
  num12: {
    tags: "монстр, существо, клыки",
    title: "монстр",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yjkpq",
    link: "https://clck.ru/Yjkpq",
    id: "CbDM"
  },
  num13: {
    tags: "человек, кибер, технологии",
    title: "кибер панк + город",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YjktR",
    link: "https://clck.ru/YjktR",
    id: "DcSQ"
  },
  num14: {
    tags: "робот, кибер, сектант",
    title: "роботизировання сектантка",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yqwxg",
    link: "https://clck.ru/Yqwxg",
    id: "ZxBV"
  },
  num15: {
    tags: "бюст, кибер, технологии",
    title: "бюст из будущего",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YurNB",
    link: "https://clck.ru/YurNB",
    id: "ZRTO"
  },
  num16: {
    tags: "робот, кибер, технологии",
    title: "робот в vr очках (шутка)",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YurPW",
    link: "https://clck.ru/YurPW",
    id: "ZcpO"
  },
  num17: {
    tags: "статуя, золото, голова",
    title: "бюст геракла (миф)",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/YurSV",
    link: "https://clck.ru/YurSV",
    id: "PlOO"
  },
  num18: {
    tags: "змея, золото, статуя",
    title: "змея - предвестник смерти",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yv5mA",
    link: "https://clck.ru/Yv5mA",
    id: "ZQHH"
  },
  num19: {
    tags: "крылья, золото, птица",
    title: "крыло",
    author: "Krisma_OFF",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas aperiam repellat nemo autem quisquam eos! Quo, libero corrupti!",
    img: "https://clck.ru/Yv5ts",
    link: "https://clck.ru/Yv5ts",
    id: "ZLkO"
  },

  
}
News(Post, "get")

export default Post

