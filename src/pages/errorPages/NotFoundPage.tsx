import { NavLink } from "react-router";

export const NotFoundPage = () => {
  return (
    <main className=" h-screen bg-errorPage font-errorPageFont text-errorPageColor flex items-center justify-center">
      <div className="text-center p-[2rem]">
        <h1 className="text-[6rem] text-[#3498db]">404</h1>
        <h2 className="text-[2rem] mt-[1rem]">Page Not Found</h2>
        <p className="text-[1rem] mt-[0.5rem] text-[#666] ">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <NavLink
          className={
            "block mt-[2rem] p-[0.75rem 1.5rem] bg-[#3498db] text-[#fff] decoration-[none] rounded-[5px] transition-colors duration-300 ease-in hover:bg-[#2980b9] "
          }
          to="/"
        >
          Go Back Home
        </NavLink>
      </div>
    </main>
  );
};
