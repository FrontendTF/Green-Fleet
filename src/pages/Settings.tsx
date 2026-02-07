import driverPlaceholder from "../assets/profile-picture-placeholder.svg";

export default function Settings() {
  return (
    <>
      <h1>Settings</h1>
      <h2>Account</h2>
      <div className="flex flex-col gap-5 justify-center items-center pt-5">
        <img className="w-20 h-20" src={driverPlaceholder} />
        <p className="text-2xl">
          Olaf
          <br />
          Schütter
        </p>
      </div>
    </>
  );
}
