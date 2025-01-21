import Image from "next/image";
import HeaderComponent from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedCourses from "./components/FeaturedCourses";
import LearnSection from "./components/LearnSection";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <FeaturedCourses />
      <LearnSection /> 
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </>
  );
}
