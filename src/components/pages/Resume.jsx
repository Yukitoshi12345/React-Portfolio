import ResumePDF from '/src/assets/Yukitoshi_Resume.pdf';

const Resume = () => {
  return (
    <div
      className="font-roboto mx-auto my-10 max-w-4xl p-8 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center"
      style={{ fontFamily: 'math' }}
    >
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Resume
      </h1>

      <a
        href={ResumePDF}
        download
        className="mt-6 flex justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 transition-colors duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
