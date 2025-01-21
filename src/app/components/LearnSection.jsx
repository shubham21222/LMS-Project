import Image from "next/image";

export default function LearnSection() {
  return (
    <section className="bg-white container mx-auto px-4 max-w-[1180px] py-16 px-8 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side */}
      <div className="img-shadow relative flex-shrink-0">
        <Image
          src="https://demo.creativeitem.com/academy-laravel/public/assets/frontend/default/image/skill-image.png"
          alt="Skill Image"
          width={400}
          height={400}
          className="rounded-lg"
        />
        {/* Badge */}
        <div className="absolute top-[120px] left-[-10px] bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
            📘
          </div>
          <div>
            <p className="text-lg font-bold">150k+</p>
            <p className="text-gray-500 text-sm">Top rated Courses</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-6">
        <p className="text-blue-500 font-semibold uppercase">Know About Us</p>
        <h2 className="text-[40px] font-bold leading-tight">
          Learn & Grow Your Skills From{" "}
          <span className="text-purple-600">Educate</span>
        </h2>
        <p className="text-gray-600">
          It offers courses designed to enhance knowledge and develop practical
          skills for personal and professional growth.
        </p>
        {/* Features */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
              ⏳
            </div>
            <div>
              <h4 className="text-lg font-bold">Lifetime Access</h4>
              <p className="text-gray-500 w-[70%]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              🌍
            </div>
            <div>
              <h4 className="text-lg font-bold">Learn from Anywhere</h4>
              <p className="text-gray-500 w-[70%]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        {/* Button */}
        <button className="bg-blue-600 w-[30%] btn-home  text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          More about us →
        </button>
      </div>
    </section>
  );
}
