import type { Route } from "./+types/home";
import NavBar from "~/Components/NavBar";
import {resumes} from "../../constants";
import ResumeCard from "../Components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Scan your Resume for free!!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <NavBar/>
      <section className="main-section">
          <div className="page-heading">
            <h1>Track your Application & Resume Ratings</h1>
              <h2>Review your submission and check AI-powered feedback.</h2>
          </div>
          {resumes.length > 0 && (
              <div className="resume-section">
                  {resumes.map((resume)=>(
                      <ResumeCard key={resume.id} resume={resume}/>
                  ))}

              </div>
          )}

      </section>


  </main>
}
