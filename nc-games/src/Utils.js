import axios from "axios";

const api = axios.create({
  baseURL: "https://blessing-games.onrender.com/api",
});

export async function getReviews() {
  const { data } = await api.get("/reviews");
  const reviews = [...data.reviews];
  console.log(reviews)
  return reviews;
};

export async function getReviewById({reviewId}) {
  const { data } = await api.get(`/reviews/${reviewId}`);
  const review = [...data.review];
  console.log(review)
  return review;
};

export async function postItem(username, id) {
  try {
    const res = await api.post(`/users/${username}/orders`, {
      item_id: id
    });
    if (!res.data.items.length) {
      alert('Someone in the cohort has deleted all the bloomin\' items!!!');
    }
    alert(res.data.item.item_name + ' added to basket!');
  } catch (err) {
    alert(err.response.status);
  }
};

export async function getUserItems(username) {
  try {
    const { data } = await api.get(`/users/${username}/orders`);
    return data.items;
  } catch (err) {
    alert(err.response.status);
  }
}


