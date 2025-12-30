export default function BasicITPage() {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Basic IT Learning Path
          </h1>
          <p className="text-gray-600 mt-3">
            Build strong computer fundamentals for jobs and daily use 💻
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <CourseCard
            title="Introduction to Computers"
            desc="Understand hardware, software, and system basics."
            link="https://www.youtube.com/watch?v=G6Yd8Q0bZVg"
          />

          <CourseCard
            title="Windows & File Management"
            desc="Learn folders, files, settings, and shortcuts."
            link="https://www.youtube.com/watch?v=VnPZp1ZJZJk"
          />

          <CourseCard
            title="MS Word"
            desc="Create documents, letters, and professional files."
            link="https://www.youtube.com/watch?v=1hZyJ3n1E5o"
          />

          <CourseCard
            title="MS Excel Basics"
            desc="Sheets, formulas, tables, and basic calculations."
            link="https://www.youtube.com/watch?v=Vl0H-qTclOg"
          />

          <CourseCard
            title="PowerPoint"
            desc="Design presentations for meetings and classes."
            link="https://www.youtube.com/watch?v=XBv2JXj3TzQ"
          />

          <CourseCard
            title="Internet & Email Skills"
            desc="Safe browsing, Gmail usage, and online tools."
            link="https://www.youtube.com/watch?v=7_LPdttKXPc"
          />

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p>📘 Ideal for beginners, students, and office jobs</p>
        </div>

      </div>
    </section>
  );
}

/* Course Card Component */
function CourseCard({ title, desc, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 flex-grow">
        {desc}
      </p>

      <a
        href={link}
        target="_blank"
        className="mt-4 inline-block text-center bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
      >
        Watch on YouTube
      </a>
    </div>
  );
}
