import InputCard from "@/components/InputCard";
import Previewer from "@/components/Previewer";
import Topbar from "@/components/Topbar";

const Page = () => {
  return (
    <>
      <Topbar />
      <div className="w-full h-screen flex gap-3 bg-red500 p-2 pt-22">
        <InputCard />
        <Previewer />
      </div>
    </>
  );
};

export default Page;
