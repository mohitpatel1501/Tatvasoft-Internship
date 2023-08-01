import BookCard from "../Components/global/Book/BookCard";
import Stack from "@mui/material/Stack";

const data = [
  {
    title: "Mahabharata",
    price: 2500,
    author: "Vyasa",
    img: "https://m.media-amazon.com/images/I/91uIIc5KsOS._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "History of India",
    price: 250,
    author: "Dr. A.K. Mittal",
    img: "https://sahityabhawanpublications.com/wp-content/uploads/2017/10/1360-HIstory-of-India.jpg",
  },
  {
    title: "Beloved",
    price: 296,
    author: "Toni Morrison",
    img: "https://m.media-amazon.com/images/I/81eerT6DQFL._AC_UF1000,1000_QL80_.jpg",
  },
];

const Book = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {data.map((ele) => {
          return (
            <BookCard
              title={ele.title}
              price={ele.price}
              author={ele.author}
              img={ele.img}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default Book;