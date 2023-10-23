import TodoImg from '../assets/img/Todo.png'
import QuizImg from '../assets/img/Quize.png'

function Projects() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <h1 className="bg-gray-900 text-white-500 p-8 ml-5 mr-5 text-center text-5xl rounded-lg font-bold">
        Projects
      </h1>
      <div className="flex flex-col items-center text-center justify-center">
        <div className="w-44 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-1-mb-10  text-center">
          <div className="sm:w-1/2 mb-10 px-4 bg-gray-800 p-5  rounded-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={TodoImg}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Todo App
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <div className="flex ">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Live Link
              </button>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Source Code
              </button>
            </div>
          </div>
          <div className="sm:w-1/2 mb-10 px-4 bg-gray-800 p-5 rounded-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={QuizImg}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Quiz App
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <div className="flex ">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Live Link
              </button>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 -my-12 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4 bg-gray-800 p-5 rounded-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://user-images.githubusercontent.com/114976458/208484822-7716c5a5-0408-497b-bbca-a38bc2f46e48.png"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Code-X Online Platform
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <div className="flex ">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Live Link
              </button>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Source Code
              </button>
            </div>
          </div>
          <div className="sm:w-1/2 mb-10 px-4 bg-gray-800 p-5 rounded-lg">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://user-images.githubusercontent.com/79099734/189593798-94357cb9-40ec-45e1-a9ae-78c364a0780f.png"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              TextUtils React App
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <div className="flex ">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Live Link
              </button>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects