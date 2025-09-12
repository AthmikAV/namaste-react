const About = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="text-center p-10 rounded-2xl shadow-xl bg-white/70 backdrop-blur-md max-w-lg">
        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm mb-4">
          Welcome to About Section
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          This is the about section of our site where you’ll get to know more 
          about what we do and why we do it.
        </p>
      </div>
    </section>
  );
};

export default About;
