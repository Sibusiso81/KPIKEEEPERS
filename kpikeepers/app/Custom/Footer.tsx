import React from "react";

function Footer() {
  return (
    <section className="w-screen h-[90vh]  md:h-[50vh] bg-neutral-950 p-10 lg:p-20 flex flex-col space-y-14 md:space-y-0 md:flex-row  text-neutral-400 justify-around  mx-auto">
      <div className="flex flex-col  md:justify-between space-y-3 md:space-y-0">
        <div>
          {" "}
          <h2 className="text-white text-4xl font-display font-bold">
            {" "}
            KPI KEEPERS
          </h2>
        </div>
        <div className="md:place-self-end">
          <p>@2025 KPI KEEPERS</p>
          <p className="text-neutral-700">
            Made with <span className="text-white">Care</span> and plenty{" "}
            <span className="text-white">Coffee</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-28 text-sm self-end">
        <div className=" flex flex-col space-y-3 md:space-y-8 ">
          <div>
            <p className="text-white">ADDRESS</p>
            <p className="w-32">121,Kingsway Ave Auckland Park,3000,Johannesburg</p>
          </div>
          <div>
            <p className="text-white">EMAIL</p>
            <p>hello@kpikeepers.com</p>
          </div>
          <div>
            <p className="text-white">CONTACT US </p> <p>+27 000 0000</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <h2>MENU</h2>
          <ul className="text-white space-y-3 md:space-y-8">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h2>SUPPORT</h2>
          <ul className="text-white space-y-3 md:space-y-8">
            <li>Terms & Conditions</li>
            <li>Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <h2>SOCIAL</h2>
          <ul className="text-white space-y-3 md:space-y-8">
            <li>@instagram</li>
            <li>@twitter</li>
            <li>@facecbook</li>
            <li>@Linkedin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
