import { getData } from "../utils/helper";

export const Home = () => {
  return (
    <main>
      <h2>Dis ma Main space rite'ere</h2>
      <button
        onClick={() => {
          getData("https://randomuser.me/api/");
        }}
      >
        Get a User
      </button>
    </main>
  );
};
