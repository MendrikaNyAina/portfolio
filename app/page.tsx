/* eslint-disable react/react-in-jsx-scope */
import Main from "./_components/main/Main";


export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return (
    <Main></Main>
  );
}
