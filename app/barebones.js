import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black to-black scroll-smooth">
      
        <img className="fixed object-cover h-1/3 sm:h-1/3 lg:h-1/2 w-full hero-default z-1 bg-gradient-to-b from-transparent to-black"
          id="hero-bg" alt='Grey Stone Background Image' src="/assets/concrete-dark-midq.jpg" />
     
      <div className="text-white container mx-auto p-1 md:rounded-lg md:p-10 lg:p-12 bg-none z-20">

        <div className="h-24 sm:h-24"></div>
        <div className="flex flex-col overflow-visible w-full text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-monreg relative">
          <h1>
            Rober<span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-white to-gray-300">t</span>
          </h1>
          <h1 className="min-[200px]:self-start lg:self-start font-thin text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-white via-white to-gray-300">S</span>heldrick
          </h1>
        </div>
        <div className="sm:h-16 lg:h-40"></div>
        <div className="h-16 md:h-0"></div>
        <p className="max-w-2xl font-inter text-xl sm:text-2xl tracking-wide w-full relative">
          Hello, I&apos;m Rob. <span className="text-transparent bg-clip-text bg-gradient-to-tr from-edgyyellow via-white to-edgyyellow">Full-Stack Developer</span> based in <span className="text-transparent bg-clip-text bg-gradient-to-tr from-edgyyellow via-white to-edgyyellow">Gloucestershire, UK.</span> Graduating from the <a target="_blank" className="underline" href="https://io-academy.uk/io-academy-ranked-in-the-top-10-best-coding-bootcamps-in-the-world/">6th ranked</a> software <span className="filter blur-sm hover:blur-0 cursor-none">bootcamp</span> in the world and Harvard&apos;s <a target="_blank" href="https://pll.harvard.edu/course/cs50-introduction-computer-science" className="underline">CS50x</a>, I&apos;m now looking for the right place to grow.
        </p>
        <div className="h-16 sm:h-32 md:h-40"></div>
        <div className="grid gap-8 md:grid-cols-2 text-xl">
          <div className="flex flex-col justify-center">
            <h2 className="py-1 inline font-monreg text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-200 tracking-tighter">
              Skills and Languages
            </h2>
            <div className="h-6"></div>
            <p className="text-inter"><span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 text-2xl text-inter">Front End:</span> HTML, CSS, JS, React, <span className="text-sm">(learning tailwind)</span></p>
            <p className="h-2"></p>
            <p><span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 text-2xl">Back End:</span> PHP, Laravel, <span className="text-sm">(learning go)</span></p>
            <p className="h-2"></p>
            <p className="h-2"></p>
            <p><span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 text-2xl ">Familiar with:</span> Postman, Docker, C, Python, SQL, Node</p>
            <div className="h-8"></div>
            <div className="h-2 pt-8 border-t border-edgyyellow"></div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <div className="grid">
                  <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 text-2xl">
                    Codewars Profile
                  </p>
                </div>
                <div className="h-4"></div>
                <div className="flex flex-row gap-4">
                  <a target="_blank" href="https://www.codewars.com/users/shellycs50" className="min-w-full min-h-full">
                    <img src="https://www.codewars.com/users/shellycs50/badges/large" className="w-full h-full"
                      min-width="250px" min-height="400px" alt="Codewars Rank Badge" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="grid">
                  <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 text-2xl">
                    Solutions Repo
                  </p>
                </div>
                <div className="h-4"></div>
                <div className="flex flex-row gap-4">
                  <a className="border-gray-800" target="_blank"
                    href="https://github.com/shellycs50/challenges/tree/main/codewars">
                    <img width="90px" src="assets/GitHub_Logo_White.png" alt="Github Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-300 to-black h-96 opacity-10 lg:relative lg:top-12">
            </div>
          </div>
        </div>
        <div className="h-32 md:h-40"></div>
        <p className=" text-4xl">
          <span className="text-gray-100"></span>
          <span className="text-gray-500"></span>
        </p>
        <div className="h-32 md:h-40"></div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-monreg text-transparent self-start font-thin text-white">
          Work
        </h1>
        <div className="h-10"></div>
        <div className="grid gap-4 lg:grid-cols-3 text-black">
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-white via-gray-500 to-gray">
            <p className="flex items-center justify-center text-4xl font-semibold text-black">
              Full Stack FAQ
            </p>
            <div className="h-6"></div>
            <p className="text-2xl">A gated forum to help trainers not repeat themselves.</p>
            <div className="h-6"></div>
            <p className="font-medium text-2xl">User Motivations</p>
            <div className="h-3"></div>
            <ul className="text-lg">
              <li><span className="font-semibold">Student:</span> I want to find the answer to my question quickly, else post my
                question.</li>
              <li><span className="font-semibold">Trainer:</span> I want to quickly answer questions.</li>
            </ul>
            <div className="h-6"></div>
            <div className="h-6"></div>
            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col">
                <a className="flex flex-row text-white text-xl hover:animate-pulse" href="https://github.com/shellycs50/faq-fe"
                  target="_blank">Frontend Code
                  <svg className="relative top-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </a>
                <div className="h-3"></div>
                <a className="flex flex-row text-white text-xl hover:animate-pulse cursor-pointer" href="https://github.com/shellycs50/faq-api"
                  target="_blank">Backend Code<svg className="relative top-1" xmlns="http://www.w3.org/2000/svg"
                    width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col">
                <a className="flex flex-row text-white text-2xl justify-center rounded-full bg-black bg-opacity-50 p-4 hover:animate-pulse"
                  href="https://faq-demo.robsheldrick.dev.io-academy.uk" target="_blank">Demo<svg
                    className="relative top-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </a>
              </div >
            </div >
            <div className="h-6"></div>
            <div className="h-6"></div>
            <div className="flex flex-row justify-evenly">
              <i className="devicon-react-original-wordmark text-6xl text-edgyyellow"></i>
              {/* <img src="assets/react-original-wordmark.svg" alt="React Logo" /> */}
              <span className="text-6xl text-edgyyellow"><img src="assets/react-original-wordmark.svg" alt="React Logo" /></span>

              {/* <ReactLogo className="text-6xl text-edgyyellow" /> */}
              {/* <LaravelLogo className="text-6xl text-edgyyellow" /> */}
              <i className="devicon-laravel-original text-6xl text-edgyyellow"></i>
            </div>


          </div >
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-white via-gray-500 to-gray">
            <p className="flex items-center justify-center text-4xl font-semibold text-black">
              Bookswap
            </p>
            <div className="h-6"></div>
            <p className="text-2xl">
              A virtual bookshelf & borrowing platform.
            </p>

            <div className="h-6"></div>
            <p className="text-lg">Built in a scrum team of students at iO Academy, via Github.</p>

            <div className="h-6"></div>
            <div className="h-6"></div>
            <div className="h-7"></div>
            <div className="h-6"></div>
            <div className="h-6"></div>

            <div className="flex flex-row justify-between items-end justify-self-end gap-4 grow">
              <div className="flex flex-col">
                <a className="flex flex-row text-white text-xl hover:animate-pulse"
                  href="https://github.com/iO-Academy/23-sept-sarcasticfringeheads-bookswap-fe" target="_blank">Frontend
                  Code
                  <svg className="relative top-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </a>
                <div className="h-3"></div>
                <a className="flex flex-row text-white text-xl hover:animate-pulse"
                  href="https://github.com/iO-Academy/23-sept-sarcasticfringeheads-bookswap-api" target="_blank"
                >Backend Code<svg className="relative top-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                  height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col">

                <a className="text-white flex flex-row text-2xl justify-center rounded-full bg-black bg-opacity-50 p-4 hover:animate-pulse"
                  href="https://bookswap.robsheldrick.dev.io-academy.uk/" target="_blank">Demo
                  <svg className="relative top-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </a>
              </div >
            </div >
            <div className="h-6"></div>
            <div className="h-6"></div>
            <div className="flex flex-row justify-evenly">
              <i className="devicon-react-original-wordmark text-6xl text-edgyyellow"></i>
              <i className="devicon-laravel-original text-6xl text-edgyyellow"></i>
            </div>
          </div >
          <div className="flex-col py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-white via-gray-500 to-gray">
            <p className="flex items-center justify-center text-4xl font-semibold text-black">
              Tideman Election Sim
            </p>
            <div className="h-6"></div>
            <p className="text-2xl">Computer Science Assignment implementing DFS.</p>
            <div className="h-6"></div>
            <p className="text-lg">We compare every pair of candidates. The candidate who wins the most matchups is the winner of the election. The challenge was dealing with complexities like handling ties and cycles.</p>
            <div className="flex flex-col"></div>
            <div className="h-3"></div>
            <div className="h-3"></div>
            <div className="h-4"></div>
            <div className="flex flex-row justify-end gap-4">
              <a className="text-white flex flex-row text-2xl text-center justify-center rounded-full bg-black bg-opacity-50 p-4 hover:animate-pulse" href="https://github.com/shellycs50/tideman" target="_blank">
                Code
                <span className="relative top-1 text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </span>
              </a>
            </div>



            <div className="h-6"></div>
            <div className="h-6"></div>
            <div className="h-1"></div>

            <div className="flex flex-row justify-evenly">
              <i className="devicon-c-plain text-6xl text-edgyyellow"></i>
            </div>
    <div className="hidden"></div>

          </div>
        </div >
        <div className="h-40"></div>
        <div className="grid gap-8 md:grid">
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-edgyyellow to-gray-200">
              Get in touch
            </p>
            <h2 className="text-4xl font-bold">Socials</h2>
            <div className="h-6"></div>
            <div className="flex flex-row justify-start items-center gap-10 w-full">
              <a href="https://www.linkedin.com/in/robertsheldrick" target="_blank"><i
                className="fa-brands fa-linkedin p-2 rounded-lg text-4xl bg-gradient-to-r from-black to-black hover:from-edgyyellow hover:to-edgyyellow hover:text-black"></i></a>
              <a href="https://github.com/shellycs50" target="_blank"><i
                className="fa-brands fa-github  p-2 rounded-lg text-4xl  bg-gradient-to-r from-black to-black hover:from-edgyyellow hover:to-edgyyellow hover:text-black"></i></a>
              <a href="mailto:rsgsheldrick@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-regular fa-envelope  p-2 rounded-lg text-4xl bg-gradient-to-r from-black to-black hover:from-edgyyellow hover:to-edgyyellow hover:text-black" />
              </a>
              <a href="https://github.com/shellycs50/honourable-mentions" target="_blank" className="justify-self-end cursor-pointer">
                <p className="max-w-2xl font-inter text-xl sm:text-2xl tracking-wide w-full flex flex-row justify-center bg-gradient-to-r from-black to-black hover:from-edgyyellow hover:to-edgyyellow hover:text-black p-2 rounded-lg font-semibold">
                  Other work
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
                  </svg>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}