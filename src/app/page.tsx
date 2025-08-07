import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <Something title="React" />
    </div>
  );
}

function Something({ title }: { title: string }) {
  console.log(title);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
