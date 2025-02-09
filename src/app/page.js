import Introduction from "./component/introduction";
import Services from "./component/services";

export default async function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center space-y-12">
        {/* Introdução */}
        <Introduction />
        {/* Serviços */}
        <Services />
      </div>
    </>
  );
}
