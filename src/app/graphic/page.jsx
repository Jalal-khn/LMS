export default function GraphicDesigningPage() {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Graphic Designing Learning Path
          </h1>
          <p className="text-gray-600 mt-3">
            Learn visual design, branding, and professional tools 🎨
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <CourseCard
            title="Design Fundamentals"
            desc="Learn color theory, typography, spacing, and layout."
            link="https://www.youtube.com/watch?v=YqQx75OPRa0"
          />

          <CourseCard
            title="Adobe Photoshop"
            desc="Photo editing, social media posts, and mockups."
            link="https://www.youtube.com/watch?v=IyR_uYsRdPs"
          />

          <CourseCard
            title="Adobe Illustrator"
            desc="Logo design, icons, vectors, and branding."
            link="https://www.youtube.com/watch?v=Ib8UBwu3yGA"
          />

          <CourseCard
            title="Canva for Designers"
            desc="Quick designs for marketing and social media."
            link="https://www.youtube.com/watch?v=KcN1mG8T3dU"
          />

          <CourseCard
            title="Brand Identity Design"
            desc="Create logos, brand colors, and style guides."
            link="https://www.youtube.com/watch?v=9z7J6vGJpLQ"
          />

          <CourseCard
            title="Portfolio Building"
            desc="Create a strong portfolio to attract clients."
            link="https://www.youtube.com/watch?v=6rY2xM8Y4JU"
          />

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p>🎓 Complete this path to start freelance or agency work</p>
        </div>

      </div>
    </section>
  );
}

/* Reusable Course Card */
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
        className="mt-4 inline-block text-center bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition"
      >
        Watch on YouTube
      </a>
    </div>
  );
}
