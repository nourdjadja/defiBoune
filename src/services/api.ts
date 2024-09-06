export const fetchBooks = async (page: number) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=children&startIndex=${page * 10}`
    );
    const data = await response.json();
    return data.items;
};
