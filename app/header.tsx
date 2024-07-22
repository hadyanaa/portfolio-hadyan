export default function Header(){
  return(
    <div className="border border-solid flex justify-between items-center bg-primary px-24 py-2">
      <h1>Hadyan Abdul Aziz</h1>
      <div className="flex flex-row items-center gap-x-4">
        <h3>About</h3>
        <h3>Skills</h3>
        <h3>Experience</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
        <button className="px-2 border border-solid rounded">Resume</button>
      </div>
    </div>
  );
}