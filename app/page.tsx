import Navbar from "@components/Navbar";
import ProjectSlider from "@components/ProjectSlider";
import  SubNavbar  from "@components/SubNavbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <ProjectSlider />
    </div>
  );
}