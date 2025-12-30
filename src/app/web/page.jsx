export default function WebCoursesPage() {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Web Development Learning Path
          </h1>
          <p className="text-gray-600 mt-3">
            Start from basics and grow into a professional web developer 🚀
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* HTML */}
          <CourseCard
            title="HTML Fundamentals"
            desc="Learn structure of web pages and semantic HTML."
            link="https://www.youtube.com/watch?v=qz0aGYrrlhU"
          />

          {/* CSS */}
          <CourseCard
            title="CSS & Responsive Design"
            desc="Design beautiful, responsive layouts using modern CSS."
            link="https://www.youtube.com/watch?v=OXGznpKZ_sA"
          />

          {/* Tailwind */}
          <CourseCard
            title="Tailwind CSS"
            desc="Utility-first CSS framework for fast UI development."
            link="https://www.youtube.com/watch?v=UBOj6rqRUME"
          />

          {/* JavaScript */}
          <CourseCard
            title="JavaScript Basics"
            desc="Learn logic, DOM manipulation and events."
            link="https://www.youtube.com/watch?v=PkZNo7MFNFg"
          />

          {/* React */}
          <CourseCard
            title="React.js"
            desc="Build component-based dynamic user interfaces."
            link="https://www.youtube.com/watch?v=bMknfKXIFA8"
          />

          {/* Next.js */}
          <CourseCard
            title="Next.js"
            desc="Full-stack React framework for production apps."
            link="https://www.youtube.com/watch?v=ZVnjOPwW4ZA"
          />

        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-600">
          <p>📌 Complete all modules to become job-ready</p>
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
        className="mt-4 inline-block text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Watch on YouTube
      </a>
    </div>
  );
}

